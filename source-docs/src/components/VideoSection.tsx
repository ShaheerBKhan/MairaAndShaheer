import CloseIcon from '@mui/icons-material/Close'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import { Box, Dialog, IconButton, Typography } from '@mui/material'
import { useMemo, useRef, useState } from 'react'
import Video from './Video'

type VideoSectionProps = {
  title: string
  videoSourceUrl: string
  thumbnailUrl: string
  description: string
  time?: string
}

const RIBBON_COLORS = [
	'#ff69b4', // Hot pink
	'#ff1493', // Deep pink
	'#ff6b9d', // Pastel pink
	'#c71585', // Medium violet red
	'#ff85a1', // Light pink
	'#ff4d94', // Bright pink
]

const BACKGROUND_GRADIENTS = [
	// Pink gradient
	'linear-gradient(to bottom, #ffd1dc 0%, #ffb3c1 30%, #ff8fa3 60%, #c9184a 85%, #a4133c 100%)',
	// Blue gradient
	'linear-gradient(to bottom, #e3f2fd 0%, #bbdefb 30%, #64b5f6 60%, #1976d2 85%, #0d47a1 100%)',
	// Green gradient
	'linear-gradient(to bottom, #e8f5e9 0%, #c8e6c9 30%, #81c784 60%, #388e3c 85%, #1b5e20 100%)',
	// Orange gradient
	'linear-gradient(to bottom, #fff3e0 0%, #ffe0b2 30%, #ffb74d 60%, #f57c00 85%, #e65100 100%)',
	// Yellow gradient
	'linear-gradient(to bottom, #fffde7 0%, #fff9c4 30%, #fff176 60%, #fbc02d 85%, #f57f17 100%)',
]

export default function VideoSection(props: VideoSectionProps): JSX.Element {
	const { title, videoSourceUrl, thumbnailUrl, description, time } = props
	const [open, setOpen] = useState(false)
	const [isPlaying, setIsPlaying] = useState(false)
	const videoRef = useRef<HTMLVideoElement>(null)
	
	const ribbonColor = useMemo(() => {
		return RIBBON_COLORS[Math.floor(Math.random() * RIBBON_COLORS.length)]
	}, [title])
	
	const backgroundGradient = useMemo(() => {
		return BACKGROUND_GRADIENTS[Math.floor(Math.random() * BACKGROUND_GRADIENTS.length)]
	}, [title])

	const handlePlayPause = () => {
		if (videoRef.current) {
			if (isPlaying) {
				videoRef.current.pause()
			} else {
				videoRef.current.play()
			}
			setIsPlaying(!isPlaying)
		}
	}

	const handleClose = () => {
		if (videoRef.current) {
			videoRef.current.pause()
			videoRef.current.currentTime = 0
		}
		setIsPlaying(false)
		setOpen(false)
	}
  
	return (
		<>
			<Box>
				<Video src={thumbnailUrl} alt={title} title={title} onClick={() => setOpen(true)} />
			</Box>

			<Dialog 
				open={open} 
				onClose={handleClose}
				maxWidth="lg"
				fullWidth
				PaperProps={{
					sx: {
						background: backgroundGradient,
						borderRadius: 2
					}
				}}
			>
				<IconButton
					onClick={handleClose}
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
								padding: '24px 24px 35px 24px',
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
								sx={{
									position: 'relative',
									width: '100%',
									height: '500px',
									border: '4px solid #000000',
									boxShadow: 'inset 0 0 8px rgba(0,0,0,0.2)',
									overflow: 'hidden'
								}}
							>
								<Box
									component="video"
									ref={videoRef}
									controls
									preload="metadata"
									sx={{ 
										width: '100%',
										height: '100%',
										objectFit: 'contain',
										display: 'block',
										backgroundColor: '#000'
									}}
								>
									<source src={videoSourceUrl} type="video/mp4" />
									<source src={videoSourceUrl} type="video/quicktime" />
									Your browser does not support the video tag.
								</Box>
								{/* Play/Pause button overlay */}
								{!isPlaying && (
									<IconButton
										onClick={handlePlayPause}
										sx={{
											position: 'absolute',
											top: '50%',
											left: '50%',
											transform: 'translate(-50%, -50%)',
											color: '#fff',
											backgroundColor: 'rgba(0, 0, 0, 0.6)',
											'&:hover': {
												backgroundColor: 'rgba(0, 0, 0, 0.8)',
												transform: 'translate(-50%, -50%) scale(1.1)'
											},
											width: '80px',
											height: '80px',
											transition: 'all 0.3s ease'
										}}
									>
										<PlayArrowIcon sx={{ fontSize: '3rem' }} />
									</IconButton>
								)}
							</Box>
							<Typography
								variant="h5"
								sx={{
									fontFamily: '"Dancing Script", cursive',
									textAlign: 'center',
									mt: 2.5,
									color: '#222',
									fontWeight: 600,
									fontSize: '1.5rem'
								}}
							>
								{title}
							</Typography>
							{time && (
								<Typography
									variant="body2"
									sx={{
										textAlign: 'center',
										mt: 0.75,
										color: '#555',
										fontFamily: '"Georgia", serif',
										fontSize: '1rem',
										display: 'block'
									}}
								>
									{new Date(time).toLocaleDateString('en-US', { 
										month: 'long', 
										day: 'numeric', 
										year: 'numeric' 
									})}
								</Typography>
							)}
							<Box
								sx={{
									display: 'flex',
									justifyContent: 'center',
									alignItems: 'center',
									mt: 3,
									gap: 1.5
								}}
							>
								<Box
									sx={{
										width: '100px',
										height: '3px',
										background: `linear-gradient(to right, transparent, ${ribbonColor}, transparent)`
									}}
								/>
								<Box
									sx={{
										width: '12px',
										height: '12px',
										borderRadius: '50%',
										backgroundColor: ribbonColor,
										boxShadow: `0 0 8px ${ribbonColor}80`
									}}
								/>
								<Box
									sx={{
										width: '100px',
										height: '3px',
										background: `linear-gradient(to right, transparent, ${ribbonColor}, transparent)`
									}}
								/>
							</Box>
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
