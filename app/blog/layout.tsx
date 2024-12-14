"use client"
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function BlogLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    const [count, setCount] = useState(0);
    const path = usePathname();
    // console.log(path);
    return (
     <div  className="border-2 border-dashed border-black p-4 w-1/2">
        <div className="flex gap-4 font-bold text-lg mb-4 text-purple-500" >
            <Link className={path === '/blog/about' ? 'text-green-500' : ''} href={'/blog/about'}>About</Link>
            <Link className={path === '/blog/setting' ? 'text-green-500' : ''} href={'/blog/setting'}>Setting</Link>
        </div>
        <div>
            blog layout {count}
        </div>
            <button className="color-black bg-purple-500 px-2 py-1 rounded" onClick={() => setCount(count + 1)}>+</button>
        {children}
     </div>
    );
  }
  