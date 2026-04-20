import Stripe from 'stripe';

const key = import.meta.env.STRIPE_SECRET_KEY || '';
export const stripe = new Stripe(key, {
  apiVersion: '2024-12-18.acacia' as any,
});

export type CartItem = {
  sku: string;
  qty: number;
};
