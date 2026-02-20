import { apiConfig } from './api-config'

export async function sendBookingSMS(phoneNumber: string, message: string) {
  try {
    const response = await fetch('https://api.africastalking.com/version1/messaging', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'apiKey': apiConfig.sms.apiKey || '',
      },
      body: new URLSearchParams({
        username: 'sandbox',
        to: phoneNumber,
        message: message,
        from: apiConfig.sms.senderId || 'LUXURYBNB',
      }),
    })

    const data = await response.json()
    return { success: true, data }
  } catch (error) {
    console.error('SMS sending failed:', error)
    return { success: false, error }
  }
}
