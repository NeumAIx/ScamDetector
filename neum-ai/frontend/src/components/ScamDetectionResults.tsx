import React from 'react'
import { Alert, AlertDescription, AlertTitle } from '@v0/components/ui/alert'
import { Badge } from '@v0/components/ui/badge'

interface ScamDetectionResultsProps {
  result: {
    token_address: string
    scam_likelihood: string
    issues_found: string[]
  } | null
}

export default function ScamDetectionResults({ result }: ScamDetectionResultsProps) {
  if (!result) {
    return <div className="text-[#FFD700]">No detection results available.</div>
  }

  const likelihood = parseFloat(result.scam_likelihood)
  const alertVariant = likelihood > 70 ? 'destructive' : likelihood > 30 ? 'warning' : 'default'

  return (
    <div className="space-y-4">
      <Alert variant={alertVariant} className="border-[#FFD700]/20">
        <AlertTitle className="text-[#FFD700]">Scam Likelihood: {result.scam_likelihood}</AlertTitle>
        <AlertDescription className="text-[#FFD700]/80">
          Token Address: {result.token_address}
        </AlertDescription>
      </Alert>
      <div>
        <h3 className="text-lg font-semibold mb-2 text-[#FFD700]">Issues Found:</h3>
        <div className="flex flex-wrap gap-2">
          {result.issues_found.map((issue, index) => (
            <Badge 
              key={index} 
              variant="outline"
              className="border-[#FFD700]/20 text-[#FFD700] bg-[#FFD700]/10"
            >
              {issue}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  )
}

