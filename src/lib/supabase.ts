
import { createClient } from '@supabase/supabase-js';

// These values should be replaced with actual values after connecting to Supabase
// through the native Lovable integration
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseKey);
