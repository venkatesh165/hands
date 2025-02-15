import { supabase } from './supabase'

type EventName = 'page_view' | 'app_download_clicked' | 'sign_in_clicked' | 'sign_out_clicked' | 'error_occurred' | 'web_vital'

type AnalyticsEvent = {
  name: EventName
  properties?: Record<string, any>
  userId?: string
}

export class Analytics {
  public async track(event: AnalyticsEvent) {
    try {
      const { error } = await supabase.from('analytics').insert([
        {
          event_type: event.name,
          user_id: event.userId,
          metadata: event.properties,
          source: 'website'
        }
      ])

      if (error) throw error
    } catch (error) {
      console.error('Analytics Error:', error)
    }
  }

  pageView(path: string, userId?: string) {
    return this.track({
      name: 'page_view',
      properties: { path },
      userId
    })
  }

  appDownloadClicked(platform: 'ios' | 'android', userId?: string) {
    return this.track({
      name: 'app_download_clicked',
      properties: { platform },
      userId
    })
  }

  error(error: Error, userId?: string) {
    return this.track({
      name: 'error_occurred',
      properties: {
        message: error.message,
        stack: error.stack
      },
      userId
    })
  }
}

export const analytics = new Analytics() 