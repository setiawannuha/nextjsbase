import React from 'react'
import Link from "next/link"

const Navbar = () => {
  return (
    <div className="flex items-center justify-between h-16 px-8 bg-blue-400">
      <div>
        Logo
      </div>
      <div className="flex space-x-2">
        <Link href="/">Home</Link>
        <Link href="/video">Video</Link>
        <Link href="/login">Login</Link>
      </div>
    </div>
  )
}

export default Navbar