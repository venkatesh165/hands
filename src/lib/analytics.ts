import { supabase } from './supabase'

type EventName = 
  | 'page_view' 
  | 'app_download_clicked' 
  | 'error_occurred' 
  | 'web_vital'
  | 'hero_section_viewed'
  | 'download_section_viewed'

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

  heroSectionViewed(userId?: string) {
    return this.track({
      name: 'hero_section_viewed',
      properties: { timestamp: new Date().toISOString() },
      userId
    })
  }

  downloadSectionViewed(userId?: string) {
    return this.track({
      name: 'download_section_viewed',
      properties: { timestamp: new Date().toISOString() },
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