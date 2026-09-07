export interface BookingPayload {
  experience: string // 'Solo' | 'Couple'
  duration: string // '60 min' | '90 min' | '120 min'
  price: string
  locationType: string // 'Hotel' | 'Home / Residence' | 'Serviced suite / Office'
  locationName: string
  date: string
  time: string
  guestName: string
  notes?: string
}

/**
 * Central place that turns a booking selection into a WhatsApp deep link.
 * Swapping the number, greeting or message shape only needs to happen here.
 */
export function useWhatsapp() {
  const config = useRuntimeConfig()
  const number = config.public.whatsappNumber

  function buildMessage(payload: BookingPayload) {
    const lines = [
      `Hi ${config.public.businessName}, I'd like to book a session.`,
      '',
      `• Experience: ${payload.experience}`,
      `• Duration: ${payload.duration} (${payload.price})`,
      `• Location: ${payload.locationType} — ${payload.locationName || 'TBC'}`,
      `• Date & time: ${payload.date || 'TBC'} at ${payload.time || 'TBC'}`,
      `• Name: ${payload.guestName || 'TBC'}`
    ]
    if (payload.notes) {
      lines.push(`• Notes: ${payload.notes}`)
    }
    return lines.join('\n')
  }

  function buildLink(payload: BookingPayload) {
    const text = encodeURIComponent(buildMessage(payload))
    return `https://wa.me/${number}?text=${text}`
  }

  /** Quick link with no structured booking data, used for header/footer CTAs. */
  function buildQuickLink(greeting = "Hi, I'd like to book a session.") {
    return `https://wa.me/${number}?text=${encodeURIComponent(greeting)}`
  }

  return { buildMessage, buildLink, buildQuickLink }
}
