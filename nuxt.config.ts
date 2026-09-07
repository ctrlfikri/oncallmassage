// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  css: ['~/assets/css/main.css'],

  app: {
    head: {
      title: 'Geli-Geli Odyssey — On-Call Massage, Kuala Lumpur',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'Flagship-hotel-grade massage, delivered to your hotel, home or office across Kuala Lumpur. Reserve in minutes, confirmed over WhatsApp.'
        }
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href:
            'https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,500;9..144,600&family=Inter:wght@400;500;600&display=swap'
        }
      ]
    }
  },

  // Business + WhatsApp settings live here so the client can rebrand
  // this template without touching component code.
  runtimeConfig: {
    public: {
      businessName: 'Geli-Geli Odyssey',
      whatsappNumber: '60145826887', // digits only, country code first, no + or spaces
      operatingHours: 'Every day · 12:00 PM – 1:00 AM',
      serviceCity: 'Kuala Lumpur & Petaling Jaya'
    }
  }
})
