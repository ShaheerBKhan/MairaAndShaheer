import { useMediaQuery, useTheme } from '@mui/material'
import { createContext, ReactNode, useContext } from 'react'

interface ResponsiveContextType {
  isMobile: boolean
  isTablet: boolean
}

const ResponsiveContext = createContext<ResponsiveContextType | undefined>(undefined)

export function ResponsiveProvider({ children }: { children: ReactNode }) {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'lg'))

  return (
    <ResponsiveContext.Provider value={{ isMobile, isTablet }}>
      {children}
    </ResponsiveContext.Provider>
  )
}

export function useResponsive() {
  const context = useContext(ResponsiveContext)
  if (context === undefined) {
    throw new Error('useResponsive must be used within a ResponsiveProvider')
  }
  return context
}
