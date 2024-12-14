"use client"
import Link from "next/link";
import { useState } from "react";

export default function BlogTemplate({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    const [count, setCount] = useState(0);
    return (
     <div  className="border-2 border-dashed border-black p-4 w-1/2">
        <div>
            template layout {count}
        </div>
            <button className="color-black bg-green-500 px-2 py-1 rounded" onClick={() => setCount(count + 1)}>+</button>
        {children}
     </div>
    );
  }
  