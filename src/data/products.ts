export type Variant = {
  sku: string;
  option1_name: string;
  option1_value: string;
  option2_name?: string;
  option2_value?: string;
  inventory: number | null;
  barcode?: string;
};

export type Product = {
  slug: string;
  title: string;
  shortTitle: string;
  vendor: string;
  type: string;
  collection: 'music-merch' | 'rock-books' | 'fragrance';
  collectionLabel: string;
  tags: string[];
  description: string;
  longDescription: string;
  seoTitle: string;
  seoDescription: string;
  price_pence: number;
  compare_at_pence: number | null;
  currency: 'GBP';
  image_url: string;
  gallery: string[];
  highlights: string[];
  variants: Variant[];
  badge?: string;
  featured?: boolean;
};

export const products: Product[] = [
  {
    slug: 'the-band-graphic-tee',
    title: '"The Band" Graphic T-Shirt',
    shortTitle: 'The Band Tee',
    vendor: 'Harmony Threads',
    type: 'Graphic shirt',
    collection: 'music-merch',
    collectionLabel: 'Music Merch',
    tags: ['Unisex', 'Casual', 'Vintage', 'Rock', 'Graphic tee'],
    description: 'Heavyweight cotton tribute tee celebrating one of rock music\'s most influential groups.',
    longDescription: "A heavyweight 180gsm tribute tee honouring one of rock's most quietly influential groups — the one everyone else's favourite band was listening to. The graphic is screen-printed in water-based ink so it wears in rather than peels off. Pre-shrunk ring-spun cotton, boxy classic fit with a slightly dropped shoulder, reinforced double-needle hems. Ships in fully recyclable kraft packaging.",
    seoTitle: 'Vintage "The Band" Graphic T-Shirt: Iconic Rock Music Tribute Tee',
    seoDescription: 'Celebrate the legacy of rock icons with our exclusive The Band graphic tee. Heavyweight cotton, screen-printed graphic, unisex fit in 3 colours and 4 sizes.',
    price_pence: 1999,
    compare_at_pence: 2499,
    currency: 'GBP',
    image_url: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1503341504253-dff4815485f1?auto=format&fit=crop&w=1600&q=80',
    ],
    highlights: [
      '180gsm ring-spun cotton, pre-shrunk',
      'Water-based screen print, wears in not off',
      'Classic unisex fit, slightly dropped shoulder',
      'Printed in the UK, ships in recyclable kraft',
    ],
    variants: [
      { sku: 'TheBandTShirt-SG', option1_name: 'Size', option1_value: 'Small', option2_name: 'Color', option2_value: 'Forest Green', inventory: 47, barcode: '5784397765' },
      { sku: 'TheBandTShirt-SA', option1_name: 'Size', option1_value: 'Small', option2_name: 'Color', option2_value: 'Heather Grey', inventory: 42, barcode: '5784397766' },
      { sku: 'TheBandTShirt-SR', option1_name: 'Size', option1_value: 'Small', option2_name: 'Color', option2_value: 'Rust Red', inventory: 51, barcode: '5784397767' },
      { sku: 'TheBandTShirt-MG', option1_name: 'Size', option1_value: 'Medium', option2_name: 'Color', option2_value: 'Forest Green', inventory: 40, barcode: '5784397768' },
      { sku: 'TheBandTShirt-MA', option1_name: 'Size', option1_value: 'Medium', option2_name: 'Color', option2_value: 'Heather Grey', inventory: 39, barcode: '5784397769' },
      { sku: 'TheBandTShirt-MR', option1_name: 'Size', option1_value: 'Medium', option2_name: 'Color', option2_value: 'Rust Red', inventory: 56, barcode: '5784397770' },
      { sku: 'TheBandTShirt-LG', option1_name: 'Size', option1_value: 'Large', option2_name: 'Color', option2_value: 'Forest Green', inventory: 50, barcode: '5784397771' },
      { sku: 'TheBandTShirt-LA', option1_name: 'Size', option1_value: 'Large', option2_name: 'Color', option2_value: 'Heather Grey', inventory: 44, barcode: '5784397772' },
      { sku: 'TheBandTShirt-LR', option1_name: 'Size', option1_value: 'Large', option2_name: 'Color', option2_value: 'Rust Red', inventory: 34, barcode: '5784397773' },
      { sku: 'TheBandTShirt-XG', option1_name: 'Size', option1_value: 'XL', option2_name: 'Color', option2_value: 'Forest Green', inventory: 27, barcode: '5784397774' },
      { sku: 'TheBandTShirt-XA', option1_name: 'Size', option1_value: 'XL', option2_name: 'Color', option2_value: 'Heather Grey', inventory: 43, barcode: '5784397775' },
      { sku: 'TheBandTShirt-XR', option1_name: 'Size', option1_value: 'XL', option2_name: 'Color', option2_value: 'Rust Red', inventory: 40, barcode: '5784397776' },
    ],
    badge: 'Top Seller',
    featured: true,
  },
  {
    slug: 'the-history-of-rock-music',
    title: 'The History of Rock Music',
    shortTitle: 'History of Rock',
    vendor: 'Harmony Publishing',
    type: 'Digital book',
    collection: 'rock-books',
    collectionLabel: 'Rock Books',
    tags: ['Ebook', 'Audiobook', 'Kindle', 'Rock', 'Music history'],
    description: 'A 420-page tour through rock music — from the Mississippi Delta to the last great arena tour. PDF, Audio, or Kindle.',
    longDescription: "Seventy years of rock, told by people who were actually there. Chapters move from the Delta blues into early rock and roll, through the British Invasion, the seventies album era, punk, post-punk, grunge, and the long, strange streaming afterlife. Each chapter closes with a listening list and a primary-source interview — Greil-Marcus-style cultural writing without the stuffiness. 420 pages, 62 photographs (cleared for this edition), and an index built for actual rereading. Delivered instantly as a DRM-free PDF, a 14hr audiobook read by the author, or a .mobi for Kindle.",
    seoTitle: 'The History of Rock Music — PDF, Audiobook & Kindle Ebook',
    seoDescription: 'A definitive 420-page history of rock — from Delta blues to streaming era. DRM-free PDF, 14hr audiobook, or Kindle. Instant download, lifetime access.',
    price_pence: 1499,
    compare_at_pence: 1999,
    currency: 'GBP',
    image_url: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1507838153414-b4b713384a76?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1600&q=80',
    ],
    highlights: [
      '420 pages, 62 cleared photographs',
      'DRM-free — yours forever across devices',
      'Audiobook read by the author (14h 02m)',
      'Instant download after checkout',
    ],
    variants: [
      { sku: 'HRM-EBK-PDF', option1_name: 'Format', option1_value: 'PDF', inventory: null },
      { sku: 'HRM-EBK-AUD', option1_name: 'Format', option1_value: 'Audio', inventory: null },
      { sku: 'HRM-EBK-KND', option1_name: 'Format', option1_value: 'Kindle', inventory: null },
    ],
    featured: true,
  },
  {
    slug: 'example-perfume',
    title: 'Example Perfume',
    shortTitle: 'Example Perfume',
    vendor: 'Acme',
    type: 'Perfume',
    collection: 'fragrance',
    collectionLabel: 'Fragrance',
    tags: ['Unisex', 'Fragrance', 'Signature', 'Eau de parfum'],
    description: 'A signature eau de parfum built around bergamot, oud, and smoke — designed to smell like a record room at midnight.',
    longDescription: "A signature eau de parfum built for people who think of scent the way they think of sound: layered, intentional, memorable. Opens bright with Calabrian bergamot and pink pepper, settles into a heart of dry iris and Turkish rose, closes on oud, vetiver, and a hint of smoke — the room after the needle lifts off the record. 50ml, vegan, not tested on animals, hand-blended in small batches. Ships in a refillable glass bottle with a solid brass collar.",
    seoTitle: 'Example Perfume — Signature Eau de Parfum by Harmony Market',
    seoDescription: 'A 50ml signature eau de parfum built around bergamot, oud, and smoke. Hand-blended, vegan, refillable brass-collared bottle. Ships worldwide.',
    price_pence: 7499,
    compare_at_pence: null,
    currency: 'GBP',
    image_url: 'https://burst.shopifycdn.com/photos/black-glass-perfume-bottle-and-spritzer.jpg?width=1200',
    gallery: [
      'https://burst.shopifycdn.com/photos/black-glass-perfume-bottle-and-spritzer.jpg?width=1600',
      'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=1600&q=80',
    ],
    highlights: [
      '50ml eau de parfum, ~9 hour wear',
      'Top: bergamot, pink pepper — Heart: iris, rose — Base: oud, vetiver, smoke',
      'Hand-blended in small batches, vegan, cruelty-free',
      'Refillable glass bottle with brass collar',
    ],
    variants: [
      { sku: 'EX-PERF-50ML', option1_name: 'Size', option1_value: '50ml — Signature', inventory: 18 },
    ],
    badge: 'New',
    featured: true,
  },
];

export const collections = {
  'music-merch': {
    slug: 'music-merch',
    title: 'Music Merch',
    heroTitle: 'Wearable rock history.',
    description: 'Heavyweight tees, prints, and merch built to outlast the merch-tent cotton you wore the sleeves off in 2008. Screen-printed in the UK, shipped in kraft.',
    seoTitle: 'Music Merch — Vintage-Inspired Rock & Roll Apparel | Harmony Market',
    seoDescription: 'Heavyweight music merch for people who still flip the record over. Screen-printed in the UK, built to wear in — not out.',
  },
  'rock-books': {
    slug: 'rock-books',
    title: 'Rock Books',
    heroTitle: 'Liner notes for the whole genre.',
    description: 'Long-form rock writing by people who were there. Digital-first so you can actually carry them — DRM-free PDF, audiobook, and Kindle editions.',
    seoTitle: 'Rock Music Books & Ebooks — History, Biography, Criticism | Harmony Market',
    seoDescription: 'Rock history, biography, and criticism — DRM-free ebooks and audiobooks you can carry anywhere.',
  },
  fragrance: {
    slug: 'fragrance',
    title: 'Fragrance',
    heroTitle: 'The room after the record lifts.',
    description: 'A small fragrance library built on the idea that a good scent has a first act, a chorus, and a fade-out — just like a good song.',
    seoTitle: 'Signature Fragrance & Eau de Parfum | Harmony Market',
    seoDescription: 'Hand-blended signature fragrance for people who think of scent the way they think of sound. Vegan, refillable, shipped worldwide.',
  },
} as const;

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCollection(collection: keyof typeof collections): Product[] {
  return products.filter((p) => p.collection === collection);
}

export function formatPrice(pence: number, currency: 'GBP' = 'GBP'): string {
  const symbol = currency === 'GBP' ? '£' : '$';
  return `${symbol}${(pence / 100).toFixed(2)}`;
}

export function totalInventory(p: Product): number {
  return p.variants.reduce((s, v) => s + (v.inventory ?? 9999), 0);
}

export function uniqueOptionValues(p: Product, which: 'option1' | 'option2'): string[] {
  const set = new Set<string>();
  for (const v of p.variants) {
    const val = which === 'option1' ? v.option1_value : v.option2_value;
    if (val) set.add(val);
  }
  return Array.from(set);
}
