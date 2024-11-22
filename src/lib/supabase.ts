import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://gtibjcisnbvqxujiujao.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd0aWJqY2lzbmJ2cXh1aml1amFvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzIwMDk4NDIsImV4cCI6MjA0NzU4NTg0Mn0.1fMCnEb1dL_FfW46Q-F0AhkqycW8gHPwpfBWyJUdCjk';

export const supabase = createClient(supabaseUrl, supabaseKey);

export interface ContactFormData {
  full_name: string;
  email: string;
  message: string;
}

export const submitContactForm = async (data: ContactFormData) => {
  if (!data.full_name || !data.email || !data.message) {
    return { 
      success: false, 
      error: new Error('All fields are required') 
    };
  }

  try {
    const { data: result, error } = await supabase
      .from('contact_submissions')
      .insert([{
        full_name: data.full_name,
        email: data.email,
        message: data.message,
        created_at: new Date().toISOString()
      }])
      .select();

    if (error) {
      console.error('Supabase error:', error);
      return { 
        success: false, 
        error: new Error('Unable to submit form. Please try again later.') 
      };
    }

    return { 
      success: true, 
      data: result 
    };
  } catch (error) {
    console.error('Submission error:', error);
    return { 
      success: false, 
      error: new Error('Failed to submit form') 
    };
  }
};