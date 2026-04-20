const RESEND_API = 'https://api.resend.com/emails';
const FROM = 'Harmony Market <onboarding@resend.dev>';

export async function sendEmail(params: {
  to: string;
  subject: string;
  html: string;
  replyTo?: string;
}): Promise<{ ok: boolean; id?: string; error?: string }> {
  const key = import.meta.env.RESEND_API_KEY;
  if (!key) return { ok: false, error: 'RESEND_API_KEY missing' };
  try {
    const r = await fetch(RESEND_API, {
      method: 'POST',
      headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ from: FROM, to: params.to, subject: params.subject, html: params.html, reply_to: params.replyTo }),
    });
    const j = await r.json().catch(() => ({}));
    if (!r.ok) return { ok: false, error: j?.message || `Resend ${r.status}` };
    return { ok: true, id: j.id };
  } catch (err: any) {
    return { ok: false, error: err?.message || 'Resend error' };
  }
}

export function orderEmailHTML(o: {
  email: string;
  items: { name: string; qty: number; amount_pence: number; currency: string; variant?: string }[];
  total_pence: number;
  currency: string;
  session_id: string;
}): string {
  const rows = o.items.map((i) => `<tr><td style="padding:12px 0;border-bottom:1px solid #eaeaea"><strong>${i.name}</strong>${i.variant?`<br/><span style="color:#666;font-size:12px">${i.variant}</span>`:''}</td><td style="padding:12px 0;border-bottom:1px solid #eaeaea;text-align:center">${i.qty}</td><td style="padding:12px 0;border-bottom:1px solid #eaeaea;text-align:right">£${(i.amount_pence/100).toFixed(2)}</td></tr>`).join('');
  return `<div style="font-family:Inter,Helvetica,Arial,sans-serif;max-width:540px;margin:0 auto;padding:24px;color:#16161d"><div style="text-align:center;margin-bottom:24px"><div style="display:inline-block;width:40px;height:40px;background:#d4a24c;border-radius:999px;line-height:40px;color:#0b0b0f;font-weight:700;font-family:Georgia,serif;font-size:22px">H</div><h1 style="font-family:Georgia,serif;font-size:24px;margin:12px 0 0">Harmony Market</h1></div><h2 style="font-family:Georgia,serif;margin-bottom:4px">Thanks — we got the order.</h2><p style="color:#555;margin:0 0 20px">Reference <code>${o.session_id.slice(0,12)}…</code> — we'll email tracking within 48 hours.</p><table style="width:100%;border-collapse:collapse;font-size:14px"><thead><tr style="text-align:left;color:#777;font-size:12px;text-transform:uppercase;letter-spacing:0.08em"><th style="padding-bottom:8px">Item</th><th style="padding-bottom:8px;text-align:center">Qty</th><th style="padding-bottom:8px;text-align:right">Price</th></tr></thead><tbody>${rows}</tbody><tfoot><tr><td colspan="2" style="padding:16px 0 0;font-weight:600">Total</td><td style="padding:16px 0 0;text-align:right;font-weight:600">£${(o.total_pence/100).toFixed(2)}</td></tr></tfoot></table><hr style="border:none;border-top:1px solid #eaeaea;margin:28px 0"/><p style="color:#555;font-size:13px">Questions? Just reply to this email — a human reads every one.</p></div>`;
}

export function welcomeEmailHTML(_email: string): string {
  return `<div style="font-family:Inter,Helvetica,Arial,sans-serif;max-width:540px;margin:0 auto;padding:24px;color:#16161d"><div style="text-align:center;margin-bottom:24px"><div style="display:inline-block;width:40px;height:40px;background:#d4a24c;border-radius:999px;line-height:40px;color:#0b0b0f;font-weight:700;font-family:Georgia,serif;font-size:22px">H</div><h1 style="font-family:Georgia,serif;font-size:24px;margin:12px 0 0">Welcome to the journal.</h1></div><p>We'll send one monthly email — restocks, records we can't stop playing, the occasional essay. No sales spam, ever.</p><p style="color:#555">If this lands in spam, drag it to your inbox so the next one doesn't.</p><p style="margin-top:28px">— The Harmony Market team</p></div>`;
}
