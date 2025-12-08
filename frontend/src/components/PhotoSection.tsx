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
      >
        <IconButton
          onClick={() => setOpen(false)}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: 'grey.500',
            zIndex: 1
          }}
        >
          <CloseIcon />
        </IconButton>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, p: 3, gap: 3 }}>
          <Box sx={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Box
              component="img"
              src={photoSourceUrl}
              alt={title}
              sx={{ maxWidth: '100%', maxHeight: '70vh', objectFit: 'contain' }}
            />
          </Box>
          <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <Typography variant="h4" component="h2" gutterBottom>
              {title}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {description}
            </Typography>
          </Box>
        </Box>
      </Dialog>
    </>
  )
}
