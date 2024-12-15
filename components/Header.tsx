'use client'
import React from 'react'
import Link from "next/link";
import { usePathname } from 'next/navigation';

const linkData = [
    {name: 'Performance', href: '/performance'},
    {name: 'Reliability', href: '/reliability'},    
    {name: 'Scale', href: '/scale'},
]
export default function Header() {
   const path =  usePathname();

  return (
    <div className="absolute w-full z-10">
    <div className="flex justify-between container mx-auto gap-4 p-8 text-white">
      <Link className="text-3xl font-bold" href={'/'}>Home</Link>
      <div className="text-xl font-bold flex gap-4" >
        {linkData.map((link) => (<Link key={link.name} className={path === link.href ? 'text-blue-500' : ''} href={link.href}>{link.name}</Link>))}
      </div>
    </div>
    </div>
  )
}
