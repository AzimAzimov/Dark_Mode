'use client'
import React, { useEffect, useState } from "react"
import { useTheme } from 'next-themes'

import ModeIcon from "./ModeIcon"
import SunIcon from "./SunIcon"


const ThemeButton = () => {
  const {resolvedTheme, setTheme} = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <button
      aria-label="Toggle Dark Mode"
      type="button"
      className="flex items-center justify-center rounded-lg p-2 hover:bg-gray-400 transition-all duration-300"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      {resolvedTheme === "dark" ? (
        <div className="text-orange-300 h-5 w-5 flex justify-center items-center">
          <SunIcon />
        </div>
      ) : (
        <div className="text-orange-800 h-5 w-5 flex justify-center items-center">
          <ModeIcon />
        </div>
      )}
    </button>
  )
}

export default ThemeButton
