import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://jqpfehknnorxpzenozit.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpxcGZlaGtubm9yeHB6ZW5veml0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI2MTAwOTksImV4cCI6MjA2ODE4NjA5OX0.oV830khbdLP1_4SdxlXIQB9xnVTCb0TRuQOGu9MO7ww";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
