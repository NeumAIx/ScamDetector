import React from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

const recentScams = [
  { id: 1, type: 'Phishing', url: 'https://scam1.com', date: '2023-06-01' },
  { id: 2, type: 'Malware', url: 'https://scam2.com', date: '2023-05-30' },
  { id: 3, type: 'Fake Shop', url: 'https://scam3.com', date: '2023-05-29' },
]

export default function RecentScams() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Type</TableHead>
          <TableHead>URL</TableHead>
          <TableHead>Date</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {recentScams.map((scam) => (
          <TableRow key={scam.id}>
            <TableCell>{scam.type}</TableCell>
            <TableCell>{scam.url}</TableCell>
            <TableCell>{scam.date}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

