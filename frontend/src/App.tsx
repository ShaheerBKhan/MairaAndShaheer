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
const YEARS = Array.from({ length: currentYear - 2025 + 1 }, (_, i) => 2025 + i)

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
					background: 'linear-gradient(135deg, #ffc3f0 0%, #ffafcc 25%, #ff9ec8 50%, #ff85c0 75%, #ff6fb8 100%)',
					position: 'relative',
					'&::before': {
						content: '""',
						position: 'absolute',
						top: 0,
						left: 0,
						right: 0,
						bottom: 0,
						background: 'radial-gradient(circle at 20% 30%, rgba(255, 182, 222, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(255, 151, 203, 0.2) 0%, transparent 50%), radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 70%)',
						pointerEvents: 'none'
					}
				}}>
					<AppBar position="static" sx={{ bgcolor: 'rgba(255, 255, 255, 0.3)', backdropFilter: 'blur(15px)', boxShadow: '0 4px 30px rgba(255, 105, 180, 0.2)' }} elevation={0}>
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
										color: '#d6156f',
										fontSize: { xs: '1rem', md: '1.25rem' },
										fontWeight: 600,
										cursor: 'pointer',
										border: '2px solid rgba(255, 105, 180, 0.4)',
										borderRadius: '12px',
										padding: '6px 16px',
										backgroundColor: 'rgba(255, 255, 255, 0.9)',
										'&:before': { borderBottom: 'none' },
										'&:after': { borderBottom: 'none' },
										'&:hover:not(.Mui-disabled):before': { borderBottom: 'none' },
										'&:hover': {
											backgroundColor: '#fff',
											borderColor: '#ff69b4',
											transform: 'translateY(-2px)',
											boxShadow: '0 6px 20px rgba(255, 105, 180, 0.3)'
										},
										'&:hover .MuiSelect-select': {
											transform: 'scale(1.05)'
										},
										'& .MuiSelect-select': { 
											paddingRight: '0 !important',
											paddingLeft: 0,
											transition: 'all 0.2s ease'
										},
										transition: 'all 0.3s ease'
									}}
								>
									{YEARS.map(year => (
										<MenuItem key={year} value={year}>{year}</MenuItem>
									))}
								</Select>
								<Typography sx={{ color: '#d6156f', fontSize: { xs: '1rem', md: '1.25rem' }, fontWeight: 600 }}>-</Typography>
								<Select
									value={selectedMonth}
									onChange={(e) => setSelectedMonth(e.target.value as number)}
									variant="standard"
									IconComponent={() => null}
									sx={{ 
										color: '#d6156f',
										fontSize: { xs: '1rem', md: '1.25rem' },
										fontWeight: 600,
										cursor: 'pointer',
										border: '2px solid rgba(255, 105, 180, 0.4)',
										borderRadius: '12px',
										padding: '6px 16px',
										backgroundColor: 'rgba(255, 255, 255, 0.9)',
										'&:before': { borderBottom: 'none' },
										'&:after': { borderBottom: 'none' },
										'&:hover:not(.Mui-disabled):before': { borderBottom: 'none' },
										'&:hover': {
											backgroundColor: '#fff',
											borderColor: '#ff69b4',
											transform: 'translateY(-2px)',
											boxShadow: '0 6px 20px rgba(255, 105, 180, 0.3)'
										},
										'&:hover .MuiSelect-select': {
											transform: 'scale(1.05)'
										},
										'& .MuiSelect-select': { 
											paddingRight: '0 !important',
											paddingLeft: 0,
											transition: 'all 0.2s ease'
										},
										transition: 'all 0.3s ease'
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
									fontWeight: 700,
									color: '#d6156f',
									textShadow: '3px 3px 6px rgba(255, 255, 255, 0.7), 0 0 30px rgba(255, 105, 180, 0.5)',
									letterSpacing: '0.02em',
									fontSize: { xs: '2rem', sm: '2.75rem', md: '3.5rem' },
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

					<Container maxWidth="lg" sx={{ flex: 1, py: 4, display: 'flex', flexDirection: 'column', overflow: 'hidden', position: 'relative', zIndex: 1 }}>
						<Gallery selectedYear={selectedYear} selectedMonth={selectedMonth} />
					</Container>

					<Box sx={{ pt: 2, pb: 0, mb: 0 }}>
					</Box>
				</Box>
			</ResponsiveProvider>
		</QueryClientProvider>
	)
}
