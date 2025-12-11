import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import { Box, CircularProgress, IconButton, Typography } from '@mui/material'
import { useQuery } from '@tanstack/react-query'
import { useEffect, useMemo, useState } from 'react'
import { useResponsive } from '../context/ResponsiveContext'
import { getPhotos } from '../services/GalleryService'
import PhotoSection from './PhotoSection'

interface GalleryProps {
  selectedYear: number
  selectedMonth: number
}

export default function Gallery({ selectedYear, selectedMonth }: GalleryProps): JSX.Element {
	const { isMobile, isTablet } = useResponsive()
  
	const [page, setPage] = useState(0)
	const { data: photos = [], isLoading } = useQuery({
		queryKey: ['photos', selectedYear, selectedMonth],
		queryFn: () => getPhotos({ year: selectedYear, month: selectedMonth })
	})

	const { photosPerPage, totalPages, isArrowNavigationVisible } = useMemo(() => {
		const photosPerPage = isMobile ? 1 : isTablet ? 2 : 3
		const totalPages = Math.ceil(photos.length / photosPerPage)
		const isArrowNavigationVisible = photos.length > photosPerPage
		return { photosPerPage, totalPages, isArrowNavigationVisible }
	}, [isMobile, isTablet, photos.length]);

	const startIndex = page * photosPerPage;
	const endIndex = startIndex + photosPerPage;
	const currentPhotos = photos.slice(startIndex, endIndex);

	useEffect(() => {
		setPage(0)
	}, [selectedYear, selectedMonth])

	return (
		<Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', overflow: 'hidden' }}>
			{isLoading ? (
				<Box sx={{ display: 'flex', justifyContent: 'center', py: 4 }}>
					<CircularProgress sx={{ color: 'white' }} />
				</Box>
			) : photos.length === 0 ? (
				<Typography align="center" sx={{ color: 'rgba(255,255,255,0.5)', py: 8 }}>
          No photos for this month
				</Typography>
			) : (
				<>
					<Box sx={{ 
						flex: 1, 
						display: 'flex', 
						flexDirection: (isMobile || isTablet) ? 'column' : 'row',
						alignItems: 'center', 
						justifyContent: 'center',
						gap: { xs: 2, lg: 4 }
					}}>
						{isArrowNavigationVisible && page > 0 ? (
							<IconButton
								onClick={() => setPage(prev => prev - 1)}
								sx={{
									bgcolor: 'rgba(255, 255, 255, 0.95)',
									color: '#a4133c',
									order: { xs: 1, lg: 0 },
									boxShadow: '0 4px 12px rgba(164, 19, 60, 0.3), 0 2px 8px rgba(201, 24, 74, 0.2)',
									'&:hover': {
										bgcolor: '#fff',
										transform: 'scale(1.1)',
										boxShadow: '0 6px 20px rgba(164, 19, 60, 0.5), 0 3px 12px rgba(201, 24, 74, 0.3)'
									}
								}}
							>
								<ArrowBackIosNewIcon />
							</IconButton>
						) : (
							<Box sx={{ width: { xs: 0, lg: 40 }, height: { xs: 40, lg: 0 }, order: { xs: 1, lg: 0 } }} />
						)}
            
						<Box sx={{ 
							display: 'grid',
							gridTemplateColumns: {
								xs: 'repeat(1, 1fr)',
								sm: 'repeat(2, 1fr)',
								lg: 'repeat(3, 1fr)'
							},
							gap: 3,
							order: { xs: 2, lg: 0 }
						}}>
						{currentPhotos.map((photo) => (
							<PhotoSection
								key={photo.id}
								title={photo.title}
								photoSourceUrl={photo.photoSourceUrl}
								description={photo.description}
								time={photo.time}
							/>
						))}
						</Box>

						{isArrowNavigationVisible && page < totalPages - 1 ? (
							<IconButton
								onClick={() => setPage(prev => prev + 1)}
								sx={{
									bgcolor: 'rgba(255, 255, 255, 0.95)',
									color: '#a4133c',
									order: { xs: 3, lg: 0 },
									boxShadow: '0 4px 12px rgba(164, 19, 60, 0.3), 0 2px 8px rgba(201, 24, 74, 0.2)',
									'&:hover': {
										bgcolor: '#fff',
										transform: 'scale(1.1)',
										boxShadow: '0 6px 20px rgba(164, 19, 60, 0.5), 0 3px 12px rgba(201, 24, 74, 0.3)'
									}
								}}
							>
								<ArrowForwardIosIcon />
							</IconButton>
						) : (
							<Box sx={{ width: { xs: 0, lg: 40 }, height: { xs: 40, lg: 0 }, order: { xs: 3, lg: 0 } }} />
						)}
					</Box>

					<Typography align="center" sx={{ py: 2, color: '#fff', fontWeight: 600, fontSize: '1rem', textShadow: '2px 2px 4px rgba(128, 15, 47, 0.7), 1px 1px 8px rgba(164, 19, 60, 0.5)' }}>
            Page {page + 1} of {totalPages}
					</Typography>
				</>
			)}
		</Box>
	)
}
