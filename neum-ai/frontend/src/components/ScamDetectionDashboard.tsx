'use client'

import React, { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@v0/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@v0/components/ui/tabs'
import { Alert, AlertDescription, AlertTitle } from '@v0/components/ui/alert'
import ScamDetectionForm from './ScamDetectionForm'
import ScamDetectionResults from './ScamDetectionResults'
import PipelineDiagram from './PipelineDiagram'

export default function ScamDetectionDashboard() {
  const [detectionResult, setDetectionResult] = useState(null)
  const [apiStatus, setApiStatus] = useState<'loading' | 'connected' | 'error'>('loading')
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const handleDetectionResult = (result) => {
    setDetectionResult(result)
  }

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight text-[#FFD700]">Dashboard</h2>
      </div>
      {apiStatus === 'error' && (
        <Alert variant="destructive">
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>
            Unable to connect to the API. Please check your backend server and try again.
            {errorMessage && <div>Error details: {errorMessage}</div>}
          </AlertDescription>
        </Alert>
      )}
      {apiStatus === 'connected' && (
        <Alert>
          <AlertTitle>Connected</AlertTitle>
          <AlertDescription>Successfully connected to the API.</AlertDescription>
        </Alert>
      )}
      <Tabs defaultValue="detect" className="space-y-4">
        <TabsList className="bg-black border border-[#FFD700]/20">
          <TabsTrigger 
            value="detect" 
            className="text-[#FFD700] data-[state=active]:bg-[#6B46C1] data-[state=active]:text-white hover:bg-[#FFD700]/5"
          >
            Detect
          </TabsTrigger>
          <TabsTrigger 
            value="results" 
            className="text-[#FFD700] data-[state=active]:bg-[#6B46C1] data-[state=active]:text-white hover:bg-[#FFD700]/5"
          >
            Results
          </TabsTrigger>
          <TabsTrigger 
            value="pipeline" 
            className="text-[#FFD700] data-[state=active]:bg-[#6B46C1] data-[state=active]:text-white hover:bg-[#FFD700]/5"
          >
            Pipeline
          </TabsTrigger>
        </TabsList>
        <TabsContent value="detect" className="space-y-4">
          <Card className="bg-black border-[#FFD700]/20">
            <CardHeader>
              <CardTitle className="text-[#FFD700]">Scam Detection</CardTitle>
            </CardHeader>
            <CardContent>
              <ScamDetectionForm onDetectionResult={handleDetectionResult} />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="results" className="space-y-4">
          <Card className="bg-black border-[#FFD700]/20">
            <CardHeader>
              <CardTitle className="text-[#FFD700]">Detection Results</CardTitle>
            </CardHeader>
            <CardContent>
              <ScamDetectionResults result={detectionResult} />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="pipeline" className="space-y-4">
          <Card className="bg-black border-[#FFD700]/20">
            <CardHeader>
              <CardTitle className="text-[#FFD700]">Pipeline Diagram</CardTitle>
            </CardHeader>
            <CardContent>
              <PipelineDiagram />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

