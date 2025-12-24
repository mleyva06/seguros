import { createClient } from '@supabase/supabase-js'

let supabaseClient = null

function createSupabaseClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!supabaseUrl || !supabaseAnonKey) {
    // Only throw error in browser (runtime), not during build/SSR
    if (typeof window !== 'undefined') {
      throw new Error('Missing Supabase environment variables')
    }
    // During build/SSR, return null - this should not be used
    return null
  }

  return createClient(supabaseUrl, supabaseAnonKey)
}

// Lazy initialization - only creates client when actually used
export const supabase = new Proxy({}, {
  get(target, prop) {
    // Initialize client only when accessed (lazy loading)
    if (!supabaseClient) {
      supabaseClient = createSupabaseClient()
    }
    
    // If client is null (during build), return a no-op that matches Supabase API
    if (!supabaseClient) {
      if (prop === 'from') {
        return () => new Proxy({}, {
          get: () => () => Promise.resolve({ data: null, error: null })
        })
      }
      // Return a no-op function for other properties
      return () => Promise.resolve({ data: null, error: null })
    }
    
    const value = supabaseClient[prop]
    // Bind methods to maintain 'this' context
    if (typeof value === 'function') {
      return value.bind(supabaseClient)
    }
    return value
  }
})

