const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8000'

export async function testApiConnection() {
  const response = await fetch(`${API_BASE_URL}/health`)
  if (!response.ok) {
    throw new Error('API is not responding')
  }
  return response.json()
}

export async function detectScam(tokenAddress: string, socialDataUrl: string) {
  const response = await fetch(`${API_BASE_URL}/detect`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ token_address: tokenAddress, social_data_url: socialDataUrl }),
  })

  if (!response.ok) {
    throw new Error('Failed to detect scam')
  }

  return response.json()
}

export async function generateDiagram() {
  const response = await fetch(`${API_BASE_URL}/generate-diagram`)

  if (!response.ok) {
    throw new Error('Failed to generate diagram')
  }

  return response.json()
}

