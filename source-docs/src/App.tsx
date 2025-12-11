import CloseIcon from '@mui/icons-material/Close'
import { AppBar, Box, Container, Dialog, IconButton, MenuItem, Select, Toolbar, Typography } from '@mui/material'
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
	const [aboutOpen, setAboutOpen] = useState(false)

	return (
		<QueryClientProvider client={queryClient}>
			<ResponsiveProvider>
				<Box sx={{ 
					display: 'flex', 
					flexDirection: 'column', 
					height: '100vh',
					overflow: 'hidden',
					background: 'linear-gradient(to bottom, #ffc3f0 0%, #ffb3d9 20%, #ffa0ca 40%, #c9184a 70%, #a4133c 90%, #800f2f 100%)',
					position: 'relative',
					'&::before': {
						content: '""',
						position: 'absolute',
						top: 0,
						left: 0,
						right: 0,
						bottom: 0,
						background: 'radial-gradient(circle at 20% 30%, rgba(201, 24, 74, 0.2) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(164, 19, 60, 0.15) 0%, transparent 50%), radial-gradient(circle at 50% 50%, rgba(255, 182, 222, 0.1) 0%, transparent 70%)',
						pointerEvents: 'none'
					}
				}}>
					<AppBar position="static" sx={{ bgcolor: 'rgba(255, 255, 255, 0.25)', backdropFilter: 'blur(15px)', boxShadow: '0 4px 30px rgba(164, 19, 60, 0.3), 0 2px 15px rgba(201, 24, 74, 0.2)' }} elevation={0}>
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
										color: '#a4133c',
										fontSize: { xs: '1rem', md: '1.25rem' },
										fontWeight: 600,
										cursor: 'pointer',
										border: '2px solid rgba(201, 24, 74, 0.4)',
										borderRadius: '12px',
										padding: '6px 16px',
										backgroundColor: 'rgba(255, 255, 255, 0.95)',
										'&:before': { borderBottom: 'none' },
										'&:after': { borderBottom: 'none' },
										'&:hover:not(.Mui-disabled):before': { borderBottom: 'none' },
										'&:hover': {
											backgroundColor: '#fff',
											borderColor: '#c9184a',
											transform: 'translateY(-2px)',
											boxShadow: '0 6px 20px rgba(164, 19, 60, 0.4)'
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
								<Typography sx={{ color: '#a4133c', fontSize: { xs: '1rem', md: '1.25rem' }, fontWeight: 600 }}>-</Typography>
								<Select
									value={selectedMonth}
									onChange={(e) => setSelectedMonth(e.target.value as number)}
									variant="standard"
									IconComponent={() => null}
									sx={{ 
										color: '#a4133c',
										fontSize: { xs: '1rem', md: '1.25rem' },
										fontWeight: 600,
										cursor: 'pointer',
										border: '2px solid rgba(201, 24, 74, 0.4)',
										borderRadius: '12px',
										padding: '6px 16px',
										backgroundColor: 'rgba(255, 255, 255, 0.95)',
										'&:before': { borderBottom: 'none' },
										'&:after': { borderBottom: 'none' },
										'&:hover:not(.Mui-disabled):before': { borderBottom: 'none' },
										'&:hover': {
											backgroundColor: '#fff',
											borderColor: '#c9184a',
											transform: 'translateY(-2px)',
											boxShadow: '0 6px 20px rgba(164, 19, 60, 0.4)'
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
									color: '#800f2f',
									textShadow: '3px 3px 6px rgba(255, 182, 222, 0.8), 0 0 30px rgba(201, 24, 74, 0.6), 2px 2px 15px rgba(164, 19, 60, 0.4)',
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
							<Box sx={{ 
								display: 'flex', 
								justifyContent: { xs: 'center', md: 'flex-end' }, 
								alignItems: 'center',
								order: 3,
								width: { xs: '100%', md: 200 }
							}}>
								<Typography
									onClick={() => setAboutOpen(true)}
									sx={{
										fontFamily: "'Dancing Script', cursive",
										fontSize: { xs: '1.25rem', md: '1.5rem' },
										fontWeight: 600,
										color: '#800f2f',
										cursor: 'pointer',
										textShadow: '2px 2px 4px rgba(255, 182, 222, 0.6)',
										transition: 'all 0.3s ease',
										userSelect: 'none',
										'&:hover': {
											transform: 'scale(1.05)',
											textShadow: '3px 3px 6px rgba(164, 19, 60, 0.8)',
											color: '#a4133c'
										}
									}}
								>
									About...
								</Typography>
							</Box>
						</Toolbar>
					</AppBar>

					<Container maxWidth="lg" sx={{ flex: 1, py: 4, display: 'flex', flexDirection: 'column', overflow: 'hidden', position: 'relative', zIndex: 1 }}>
						<Gallery selectedYear={selectedYear} selectedMonth={selectedMonth} />
					</Container>

					<Box sx={{ pt: 2, pb: 0, mb: 0 }}>
					</Box>

					<Dialog 
						open={aboutOpen} 
						onClose={() => setAboutOpen(false)}
						maxWidth="lg"
						fullWidth
						PaperProps={{
							sx: {
								background: 'linear-gradient(to bottom, #ffd1dc 0%, #ffb3c1 30%, #ff8fa3 60%, #c9184a 85%, #a4133c 100%)',
								borderRadius: 2
							}
						}}
					>
						<IconButton
							onClick={() => setAboutOpen(false)}
							sx={{
								position: 'absolute',
								right: 16,
								top: 16,
								color: '#fff',
								backgroundColor: 'rgba(0, 0, 0, 0.5)',
								'&:hover': {
									backgroundColor: 'rgba(0, 0, 0, 0.7)'
								},
								zIndex: 1
							}}
						>
							<CloseIcon />
						</IconButton>
						<Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, p: 4, gap: 4 }}>
							<Box sx={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
								<Box
									sx={{
										backgroundColor: '#ffffff',
										padding: '24px 24px 80px 24px',
										boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
										maxWidth: '90%',
										transform: 'rotate(-1deg)',
										transition: 'transform 0.3s ease',
										'&:hover': {
											transform: 'rotate(0deg) scale(1.02)'
										}
									}}
								>
								<Box
									component="img"
									src="https://kiqjulnouryrndxojqdh.supabase.co/storage/v1/object/sign/user-uploads/Baby_Maira_And_Shaheer.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8zN2VkM2QxNy1kMmM1LTRlMzEtOGIxOC1mNTBmZWNiMTBhZmYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ1c2VyLXVwbG9hZHMvQmFieV9NYWlyYV9BbmRfU2hhaGVlci5qcGciLCJpYXQiOjE3NjU0MTk5NTEsImV4cCI6MTc5Njk1NTk1MX0.k9v5irrnHL63sScFypkk8ixd4VxjbOqwlsDPVbqfUcc"
									alt="About"
										sx={{ 
											width: '100%',
											maxHeight: '60vh',
											objectFit: 'contain',
											display: 'block',
											border: '2px solid #000000'
										}}
									/>
									<Typography
										variant="h6"
										sx={{
											fontFamily: '"Dancing Script", cursive',
											textAlign: 'center',
											mt: 2,
											color: '#333'
										}}
									>
										Maira & Shaheer
									</Typography>
								</Box>
							</Box>
							<Box sx={{ 
								flex: 1, 
								display: 'flex', 
								flexDirection: 'column', 
								justifyContent: 'center',
								backgroundColor: 'rgba(255, 255, 255, 0.9)',
								borderRadius: 2,
								p: 3,
								boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
							}}>
								<Typography 
									variant="h3" 
									component="h2" 
									gutterBottom
									sx={{
										fontFamily: '"Dancing Script", cursive',
										color: '#800f2f',
										fontWeight: 600,
										mb: 2
									}}
								>
									About...
								</Typography>
								<Typography 
									variant="body1"
									sx={{
										color: '#4a4a4a',
										lineHeight: 1.8,
										fontSize: '1.1rem',
										fontFamily: '"Georgia", serif',
										whiteSpace: 'pre-line'
									}}
								>
									{`Meri Jaan, happy 23rd birthday 🥳.

It's been a year and a half of us together but deep inside, it feels like I've known you my entire life. Maybe it's because without you, I always felt as if I'm searching for something. Searching for something that makes me feel alive. But I think I finally found that something, and it's you. 

That spark inside you, it lights up my world. That bubbly personality brings out the little kid hidden away in my introverted personality. 

Never change my love. You are perfect, just as you are. In Shaheer's dictionary, the description of "Perfect" is just a photo of you. If you change, the definition for me also changes since "Perfect" will always be you.

I made this website, to document all the fun moments in life we'll share together.

This will be Maira and Shaheer's secret world 🥰`}
								</Typography>
							</Box>
						</Box>
					</Dialog>
				</Box>
			</ResponsiveProvider>
		</QueryClientProvider>
	)
}
