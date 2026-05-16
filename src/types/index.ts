export type ThemeName = 'floral' | 'minimalist' | 'traditional' | 'rustic' | 'royal'

export interface AgendaItem {
  time: string
  label: string
}

export interface WeddingConfig {
  // Couple
  groomName: string
  brideName: string
  groomFullName: string
  brideFullName: string
  hashtag: string

  // Parents
  groomParents: {
    father?: string
    mother?: string
  }
  brideParents: {
    father?: string
    mother?: string
  }

  // Event
  date: string         // ISO: "2026-07-05"
  dateDisplay: string  // "Ahad, 5 Julai 2026"
  timeDisplay: string  // "11 pagi sehingga 3.30 petang"
  venue: string
  address: string
  startTime: string    // "11:00" — used for calendar & countdown
  endTime: string      // "15:30" — used for calendar
  timezone: string     // "Asia/Kuala_Lumpur"

  // Navigation
  mapsUrl: string
  wazeUrl: string

  // Agenda
  agenda: AgendaItem[]

  // Prayer section
  prayerGroomName: string
  prayerBrideName: string

  // Theme
  theme: ThemeName
}
