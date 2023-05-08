import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://rhwjnekoafrqcbbwrkso.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJod2puZWtvYWZycWNiYndya3NvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzkxOTUyMjYsImV4cCI6MTk5NDc3MTIyNn0.J4v5V94o70Pg9hiSGC1FFe9LySWsMbASLlxdGyvDbC0";

const supabase = createClient(supabaseUrl, supabaseAnonKey)
export default supabase;