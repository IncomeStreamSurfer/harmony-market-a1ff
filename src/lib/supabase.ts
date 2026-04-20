import { createClient, type SupabaseClient } from '@supabase/supabase-js';

const SUPABASE_URL = import.meta.env.PUBLIC_SUPABASE_URL || 'https://elyximnpskroydgkdndy.supabase.co';
const ANON_KEY =
  import.meta.env.PUBLIC_SUPABASE_ANON_KEY ||
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVseXhpbW5wc2tyb3lkZ2tkbmR5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY2MjA3MzksImV4cCI6MjA5MjE5NjczOX0.l-SMquAPy-1HsTMnAdFWydArtk6RLXzMSbGD9ETTOZs';

export const supabase: SupabaseClient = createClient(SUPABASE_URL, ANON_KEY, {
  auth: { persistSession: false },
});

export function serverClient(): SupabaseClient {
  const key = import.meta.env.SUPABASE_SERVICE_ROLE || ANON_KEY;
  return createClient(SUPABASE_URL, key, { auth: { persistSession: false } });
}
