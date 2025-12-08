import { AppBar, Box, Container, MenuItem, Select, Toolbar, Typography } from '@mui/material'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useState } from 'react'
import Gallery from './components/Gallery'
import { ResponsiveProvider } from './context/ResponsiveContext'

const queryClient = new QueryClient()

const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
]

const currentYear = new Date().getFullYear()
const YEARS = Array.from({ length: currentYear - 2024 + 1 }, (_, i) => 2024 + i)

export default function App(): JSX.Element {
  const currentDate = new Date()
  const [selectedYear, setSelectedYear] = useState(currentDate.getFullYear())
  const [selectedMonth, setSelectedMonth] = useState(currentDate.getMonth() + 1)

  return (
    <QueryClientProvider client={queryClient}>
      <ResponsiveProvider>
        <Box sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        height: '100vh',
        overflow: 'hidden',
        background: 'linear-gradient(180deg, #000000 0%, #1a0033 100%)'
      }}>
        <AppBar position="static" sx={{ bgcolor: 'rgba(0,0,0,0.3)', backdropFilter: 'blur(10px)' }} elevation={0}>
          <Toolbar sx={{ 
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between', 
            py: 2,
            gap: 2
          }}>
            <Box sx={{ 
              display: 'flex', 
              gap: 1, 
              alignItems: 'center',
              order: { xs: 2, md: 1 }
            }}>
              <Select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value as number)}
                variant="standard"
                IconComponent={() => null}
                sx={{ 
                  color: '#e8b4f0',
                  fontSize: { xs: '1rem', md: '1.25rem' },
                  fontWeight: 500,
                  cursor: 'pointer',
                  border: '1px solid rgba(232, 180, 240, 0.3)',
                  borderRadius: '8px',
                  padding: '4px 12px',
                  backgroundColor: 'rgba(232, 180, 240, 0.05)',
                  '&:before': { borderBottom: 'none' },
                  '&:after': { borderBottom: 'none' },
                  '&:hover:not(.Mui-disabled):before': { borderBottom: 'none' },
                  '&:hover': {
                    backgroundColor: 'rgba(232, 180, 240, 0.1)',
                    borderColor: 'rgba(232, 180, 240, 0.5)'
                  },
                  '&:hover .MuiSelect-select': {
                    textShadow: '0 0 8px rgba(232, 180, 240, 0.6)',
                    transform: 'scale(1.05)'
                  },
                  '& .MuiSelect-select': { 
                    paddingRight: '0 !important',
                    paddingLeft: 0,
                    transition: 'all 0.2s ease'
                  }
                }}
              >
                {YEARS.map(year => (
                  <MenuItem key={year} value={year}>{year}</MenuItem>
                ))}
              </Select>
              <Typography sx={{ color: '#e8b4f0', fontSize: { xs: '1rem', md: '1.25rem' } }}>-</Typography>
              <Select
                value={selectedMonth}
                onChange={(e) => setSelectedMonth(e.target.value as number)}
                variant="standard"
                IconComponent={() => null}
                sx={{ 
                  color: '#e8b4f0',
                  fontSize: { xs: '1rem', md: '1.25rem' },
                  fontWeight: 500,
                  cursor: 'pointer',
                  border: '1px solid rgba(232, 180, 240, 0.3)',
                  borderRadius: '8px',
                  padding: '4px 12px',
                  backgroundColor: 'rgba(232, 180, 240, 0.05)',
                  '&:before': { borderBottom: 'none' },
                  '&:after': { borderBottom: 'none' },
                  '&:hover:not(.Mui-disabled):before': { borderBottom: 'none' },
                  '&:hover': {
                    backgroundColor: 'rgba(232, 180, 240, 0.1)',
                    borderColor: 'rgba(232, 180, 240, 0.5)'
                  },
                  '&:hover .MuiSelect-select': {
                    textShadow: '0 0 8px rgba(232, 180, 240, 0.6)',
                    transform: 'scale(1.05)'
                  },
                  '& .MuiSelect-select': { 
                    paddingRight: '0 !important',
                    paddingLeft: 0,
                    transition: 'all 0.2s ease'
                  }
                }}
              >
                {MONTHS.map((month, index) => (
                  <MenuItem key={month} value={index + 1}>{month}</MenuItem>
                ))}
              </Select>
            </Box>
            <Typography 
              variant="h3" 
              component="h1" 
              sx={{ 
                fontFamily: "'Dancing Script', 'Brush Script MT', cursive",
                fontWeight: 400,
                color: '#e8b4f0',
                textShadow: '0 0 20px rgba(232, 180, 240, 0.3)',
                letterSpacing: '0.02em',
                fontSize: { xs: '1.75rem', sm: '2.5rem', md: '3rem' },
                order: { xs: 1, md: 2 },
                position: { md: 'absolute' },
                left: { md: '50%' },
                transform: { md: 'translateX(-50%)' },
                textAlign: 'center',
                width: { xs: '100%', md: 'auto' }
              }}
            >
              For my Dearest Maira...
            </Typography>
            <Box sx={{ width: { xs: 0, md: 200 }, order: 3 }} />
          </Toolbar>
        </AppBar>

        <Container maxWidth="lg" sx={{ flex: 1, py: 4, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
          <Gallery selectedYear={selectedYear} selectedMonth={selectedMonth} />
        </Container>

        <Box sx={{ pt: 2, pb: 0, mb: 0 }}>
        </Box>
      </Box>
      </ResponsiveProvider>
    </QueryClientProvider>
  )
}
