import React, { useEffect, useState } from 'react'
import { Button } from '@v0/components/ui/button'
import { Alert, AlertDescription, AlertTitle } from '@v0/components/ui/alert'

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8000'

async function generateDiagram() {
  try {
    const response = await fetch(`${API_BASE_URL}/generate-diagram`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`HTTP error! status: ${response.status}, message: ${errorText}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error generating diagram:', error);
    throw error;
  }
}

export default function PipelineDiagram() {
  const [diagramUrl, setDiagramUrl] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null);

  const handleGenerateDiagram = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const result = await generateDiagram();
      if (result && result.diagramUrl) {
        setDiagramUrl(result.diagramUrl);
      } else {
        throw new Error('Invalid response format: diagramUrl not found');
      }
    } catch (error) {
      console.error('Error generating diagram:', error);
      setDiagramUrl('');
      setError(error instanceof Error ? error.message : 'An unknown error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    handleGenerateDiagram()
  }, [])

  return (
    <div className="space-y-4">
      <Button onClick={handleGenerateDiagram} disabled={isLoading}>
        {isLoading ? 'Generating...' : 'Regenerate Diagram'}
      </Button>
      {error && (
        <Alert variant="destructive">
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
      {diagramUrl && (
        <div className="border rounded-lg overflow-hidden">
          <img src={diagramUrl} alt="Scam Detection Pipeline" className="w-full h-auto" />
        </div>
      )}
    </div>
  )
}

