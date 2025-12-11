import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline'
import { Box, CardMedia, Typography } from '@mui/material'

type VideoProps = {
  src: string
  alt: string
  title: string
  date?: string
  onClick?: () => void
}

export default function Video(props: VideoProps): JSX.Element {
	const { src, alt, title, date, onClick } = props
  
	return (
		<Box 
			onClick={onClick}
			sx={{ 
				width: '280px',
				maxWidth: '100%',
				margin: '0 auto',
				cursor: onClick ? 'pointer' : 'default',
				transition: 'transform 0.3s ease, box-shadow 0.3s ease',
				'&:hover': onClick ? {
					transform: 'scale(1.03)',
					boxShadow: '0 20px 40px rgba(0,0,0,0.45), 0 10px 20px rgba(128, 15, 47, 0.4), 0 0 60px rgba(164, 19, 60, 0.3)'
				} : {},
				position: 'relative'
			}}
		>
			<Box
				sx={{
					padding: '12px 12px 40px 12px',
					background: '#ffffff',
					boxShadow: '0 12px 36px rgba(0,0,0,0.4), 0 6px 18px rgba(128, 15, 47, 0.35), 0 0 40px rgba(164, 19, 60, 0.2)',
					position: 'relative'
				}}
			>
				<CardMedia
					component="img"
					image={src}
					alt={alt}
					sx={{ 
						width: '256px',
						height: '256px',
						objectFit: 'cover',
						display: 'block',
						border: '2px solid #000000'
					}}
				/>
				{/* Play button overlay */}
				{onClick && (
					<Box
						sx={{
							position: 'absolute',
							top: '12px',
							left: '12px',
							width: '256px',
							height: '256px',
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							pointerEvents: 'none'
						}}
					>
						<PlayCircleOutlineIcon
							sx={{
								fontSize: '4rem',
								color: 'rgba(255, 255, 255, 0.9)',
								filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.5))',
								transition: 'transform 0.3s ease',
								'&:hover': {
									transform: 'scale(1.1)'
								}
							}}
						/>
					</Box>
				)}
				<Typography
					variant="body2"
					sx={{
						position: 'absolute',
						bottom: '8px',
						left: '12px',
						right: '12px',
						textAlign: 'center',
						color: '#333',
						fontFamily: "'Dancing Script', cursive",
						fontSize: '1rem',
						overflow: 'hidden',
						textOverflow: 'ellipsis',
						whiteSpace: 'nowrap'
					}}
				>
					{title}
				</Typography>
				{date && (
					<Typography
						variant="caption"
						sx={{
							position: 'absolute',
							bottom: '-8px',
							left: '12px',
							right: '12px',
							textAlign: 'center',
							color: '#666',
							fontFamily: "'Georgia', serif",
							fontSize: '0.75rem'
						}}
					>
						{new Date(date).toLocaleDateString('en-US', { 
							month: 'long', 
							day: 'numeric', 
							year: 'numeric' 
						})}
					</Typography>
				)}
			</Box>
		</Box>
	)
}
