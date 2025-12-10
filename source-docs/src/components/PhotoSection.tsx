import CloseIcon from '@mui/icons-material/Close'
import { Box, Dialog, IconButton, Typography } from '@mui/material'
import { useState } from 'react'
import Photo from './Photo'

type PhotoSectionProps = {
  title: string
  photoSourceUrl: string
  description: string
}

export default function PhotoSection(props: PhotoSectionProps): JSX.Element {
	const { title, photoSourceUrl, description } = props
	const [open, setOpen] = useState(false)
  
	return (
		<>
			<Box>
				<Photo src={photoSourceUrl} alt={title} title={title} onClick={() => setOpen(true)} />
			</Box>

			<Dialog 
				open={open} 
				onClose={() => setOpen(false)}
				maxWidth="lg"
				fullWidth
				PaperProps={{
					sx: {
						background: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
						borderRadius: 2
					}
				}}
			>
				<IconButton
					onClick={() => setOpen(false)}
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
						{/* Polaroid frame wrapper */}
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
								src={photoSourceUrl}
								alt={title}
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
								{title}
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
								color: '#d35d6e',
								fontWeight: 600,
								mb: 2
							}}
						>
							{title}
						</Typography>
						<Typography 
							variant="body1"
							sx={{
								color: '#4a4a4a',
								lineHeight: 1.8,
								fontSize: '1.1rem',
								fontFamily: '"Georgia", serif'
							}}
						>
							{description}
						</Typography>
					</Box>
				</Box>
			</Dialog>
		</>
	)
}
