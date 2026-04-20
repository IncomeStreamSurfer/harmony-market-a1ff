# Harmony Market

Curated ecommerce site: music merch, rock-history ebooks, and a signature fragrance. Built with Astro + Tailwind v4, deployed on Vercel with Stripe checkout, Supabase for catalog/content, and Resend for transactional email.

## Stack

- **Astro 5** (`output: 'server'`) on Vercel serverless adapter
- **Tailwind v4** via `@tailwindcss/vite`
- **Supabase** — products / product_variants / orders / subscribers / contact_messages / content
- **Stripe Checkout** — dynamic `price_data` built from Supabase prices, signed webhook writes orders to DB + fires order email
- **Resend** — order confirmations, welcome emails, contact replies (using `onboarding@resend.dev`)
- **@astrojs/sitemap** — `/sitemap-index.xml` auto-generated
- **SEO** — `SEOHead.astro` on every page: meta, OG, Twitter, canonical, Organization + page-specific JSON-LD

## Pages

- `/` — Hero, collections, featured products, story, testimonials, newsletter
- `/shop` — full catalog
- `/collections/[slug]` — `music-merch`, `rock-books`, `fragrance`
- `/product/[slug]` — variant picker, gallery, FAQ, related products, buy-now / add-to-cart
- `/cart` — client-side cart, Stripe checkout handoff
- `/order/success` — order summary fetched from Stripe session
- `/about`, `/contact`, `/shipping`
- `/blog` + `/blog/[slug]` — dynamic from Supabase `content` table

## API routes

- `POST /api/checkout` — builds Stripe Checkout Session from cart items
- `POST /api/stripe/webhook` — handles `checkout.session.completed` → inserts order row + sends Resend confirmation
- `POST /api/subscribe` — newsletter signup
- `POST /api/contact` — contact form

## Next steps

- Connect a custom domain in Vercel
- Verify a real sending domain in Resend and swap `onboarding@resend.dev` in `src/lib/email.ts`
- Upload real product photography to replace the Unsplash/Shopify placeholders
- Use Harbor's Writer to populate the `content` table — /blog will render posts automatically
