import { createClient } from "@supabase/supabase-js";

const supabase_URL = "https://meenkuzqztjmzkkuefhs.supabase.co";
const supabase_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1lZW5rdXpxenRqbXpra3VlZmhzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDAzMDgzNDYsImV4cCI6MjA1NTg4NDM0Nn0.FKEtz1-W8Mbv9W7e68TJPJ83gL1rHHeKaWxrKynZ3sY";

export const supabase = createClient(supabase_URL, supabase_KEY);