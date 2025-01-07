import React, { useState } from 'react'
import { Button } from '@v0/components/ui/button'
import { Input } from '@v0/components/ui/input'
import { Label } from '@v0/components/ui/label'
import { Alert, AlertDescription, AlertTitle } from '@v0/components/ui/alert'

interface ScamDetectionFormProps {
  onDetectionResult: (result: any) => void
}

export default function ScamDetectionForm({ onDetectionResult }: ScamDetectionFormProps) {
  const [tokenAddress, setTokenAddress] = useState('')
  const [socialDataUrl, setSocialDataUrl] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setIsLoading(true)
    setError(null)
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      onDetectionResult({
        token_address: tokenAddress,
        scam_likelihood: "85%",
        issues_found: ["Suspicious token distribution", "Unusual trading patterns"]
      })
    } catch (error) {
      console.error('Error detecting scam:', error)
      setError(error instanceof Error ? error.message : 'An unknown error occurred')
      onDetectionResult({ error: 'Failed to detect scam' })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="tokenAddress" className="text-[#FFD700]">Token Address</Label>
        <Input
          id="tokenAddress"
          value={tokenAddress}
          onChange={(e) => setTokenAddress(e.target.value)}
          placeholder="Enter token address"
          required
          className="bg-black border-[#FFD700]/20 text-[#FFD700] placeholder:text-[#FFD700]/50 focus:border-[#6B46C1] focus:ring-[#6B46C1]"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="socialDataUrl" className="text-[#FFD700]">Social Data URL</Label>
        <Input
          id="socialDataUrl"
          value={socialDataUrl}
          onChange={(e) => setSocialDataUrl(e.target.value)}
          placeholder="Enter social data URL"
          required
          className="bg-black border-[#FFD700]/20 text-[#FFD700] placeholder:text-[#FFD700]/50 focus:border-[#6B46C1] focus:ring-[#6B46C1]"
        />
      </div>
      <Button 
        type="submit" 
        disabled={isLoading}
        className="bg-[#6B46C1] hover:bg-[#6B46C1]/90 text-white"
      >
        {isLoading ? 'Detecting...' : 'Detect Scam'}
      </Button>
      {error && (
        <Alert variant="destructive">
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
    </form>
  )
}

