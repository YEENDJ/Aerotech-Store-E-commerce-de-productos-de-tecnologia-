'use client'
import { useState, useRef, useEffect } from 'react'
import { User } from 'lucide-react'
import Link from 'next/link'

export default function UserMenu() {
  const [open, setOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setOpen(!open)}
        className="p-2 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 text-white hover:opacity-90 transition"
      >
        <User size={24} />
      </button>

      {open && (
        <div className="absolute right-0 mt-3 w-44 bg-white rounded-2xl shadow-lg border border-gray-100 flex flex-col text-center z-50">
          <Link
            href="/login"
            className="py-2 hover:bg-blue-50 text-gray-800 rounded-t-2xl transition"
          >
            Iniciar sesión
          </Link>
          <div className="h-px bg-gray-200" />
          <Link
            href="/register"
            className="py-2 hover:bg-blue-50 text-gray-800 rounded-b-2xl transition"
          >
            Registrarse
          </Link>
        </div>
      )}
    </div>
  )
}
