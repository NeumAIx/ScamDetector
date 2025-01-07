import { Metadata } from 'next'
import ScamDetectionDashboard from '@/components/ScamDetectionDashboard'

export const metadata: Metadata = {
  title: 'NeumAI - Scam Detection Dashboard',
  description: 'Advanced AI-powered scam detection platform',
}

export default function Home() {
  return <ScamDetectionDashboard />
}

