import React from 'react'
import Link from 'next/link'
import { Home, BarChart, FileText, Settings } from 'lucide-react'
import Image from 'next/image'

export function Sidebar() {
  return (
    <div className="hidden border-r border-[#FFD700]/20 bg-black lg:block">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-[60px] items-center border-b border-[#FFD700]/20 px-6">
          <Link className="flex items-center gap-2 font-semibold text-[#FFD700]" href="/">
            <Image
              src="/logo.png"
              alt="NeumAI Logo"
              width={24}
              height={24}
              className="h-6 w-auto"
            />
            <span>NeumAI</span>
          </Link>
        </div>
        <div className="flex-1 overflow-auto py-2">
          <nav className="grid items-start px-4 text-sm font-medium">
            <Link
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-[#FFD700] transition-all hover:text-[#FFD700]/80 hover:bg-[#FFD700]/10"
              href="/"
            >
              <Home className="h-4 w-4" />
              Home
            </Link>
            <Link
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-[#FFD700] transition-all hover:text-[#FFD700]/80 hover:bg-[#FFD700]/10"
              href="/analytics"
            >
              <BarChart className="h-4 w-4" />
              Analytics
            </Link>
            <Link
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-[#FFD700] transition-all hover:text-[#FFD700]/80 hover:bg-[#FFD700]/10"
              href="/reports"
            >
              <FileText className="h-4 w-4" />
              Reports
            </Link>
            <Link
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-[#FFD700] transition-all hover:text-[#FFD700]/80 hover:bg-[#FFD700]/10"
              href="/settings"
            >
              <Settings className="h-4 w-4" />
              Settings
            </Link>
          </nav>
        </div>
      </div>
    </div>
  )
}

