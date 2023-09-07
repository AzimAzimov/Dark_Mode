'use-client'
// import { createContext, Dispatch, SetStateAction, useCallback, useState } from "react"
import React, { FC, ReactNode } from 'react'
import { ThemeProvider } from 'next-themes'

interface ProvidersProps {
  children: ReactNode
}

const Providers:FC <ProvidersProps> = ({children}) => {
  return (
    <ThemeProvider attribute='class'>
      {children}
    </ThemeProvider>
  )
}

export default Providers

