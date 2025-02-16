import { supabase } from './supabase'

export async function healthCheck() {
  try {
    // Check database connection
    const { error: dbError } = await supabase
      .from('analytics')
      .select('count', { count: 'exact' })
      .limit(1)

    if (dbError) throw dbError

    // Check authentication service
    const authResponse = await fetch('/api/auth/health')
    if (!authResponse.ok) throw new Error('Auth service unavailable')

    return {
      status: 'healthy',
      timestamp: new Date().toISOString(),
      services: {
        database: 'up',
        auth: 'up',
      },
    }
  } catch (error) {
    return {
      status: 'unhealthy',
      timestamp: new Date().toISOString(),
      error: error instanceof Error ? error.message : 'Unknown error',
    }
  }
} 