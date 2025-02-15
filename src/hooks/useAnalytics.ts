import { supabase } from '@/lib/supabase'

export function useAnalytics() {
  const trackEvent = async (
    eventType: string,
    userId?: string,
    metadata?: Record<string, any>
  ) => {
    try {
      const { error } = await supabase.from('analytics').insert([
        {
          event_type: eventType,
          user_id: userId,
          metadata,
          source: 'website',
        },
      ])

      if (error) throw error
    } catch (error) {
      console.error('Error tracking event:', error)
    }
  }

  return { trackEvent }
} 