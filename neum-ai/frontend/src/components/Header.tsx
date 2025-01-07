import React from 'react'
import { Button } from '@v0/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@v0/components/ui/dropdown-menu'
import { Bell, User } from 'lucide-react'
import Image from 'next/image'

export function Header() {
  return (
    <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b border-[#FFD700]/20 bg-black px-6">
      <div className="flex flex-1 items-center gap-4">
        <Image
          src="/logo.png"
          alt="NeumAI Logo"
          width={32}
          height={32}
          className="h-8 w-auto"
        />
        <h1 className="font-semibold text-lg text-[#FFD700]">Scam Detection Dashboard</h1>
      </div>
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" className="text-[#FFD700] hover:text-[#FFD700]/80 hover:bg-[#FFD700]/10">
          <Bell className="h-4 w-4" />
          <span className="sr-only">Notifications</span>
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="text-[#FFD700] hover:text-[#FFD700]/80 hover:bg-[#FFD700]/10">
              <User className="h-4 w-4" />
              <span className="sr-only">User menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="bg-black border-[#FFD700]/20">
            <DropdownMenuLabel className="text-[#FFD700]">My Account</DropdownMenuLabel>
            <DropdownMenuSeparator className="bg-[#FFD700]/20" />
            <DropdownMenuItem className="text-[#FFD700] hover:text-[#FFD700]/80 hover:bg-[#FFD700]/10">Profile</DropdownMenuItem>
            <DropdownMenuItem className="text-[#FFD700] hover:text-[#FFD700]/80 hover:bg-[#FFD700]/10">Settings</DropdownMenuItem>
            <DropdownMenuItem className="text-[#FFD700] hover:text-[#FFD700]/80 hover:bg-[#FFD700]/10">Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}

