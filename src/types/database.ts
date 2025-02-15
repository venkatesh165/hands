export interface User {
  id: string
  email: string
  created_at: string
  updated_at: string
  last_login: string | null
}

export interface Analytics {
  id: string
  event_type: string
  user_id: string
  timestamp: string
  metadata: Record<string, any>
  source: string
}

export interface Feedback {
  id: string
  user_id: string
  message: string
  created_at: string
  status: 'pending' | 'reviewed' | 'resolved'
} 