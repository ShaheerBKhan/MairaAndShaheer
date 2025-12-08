import { Box, CardMedia, Typography } from '@mui/material'

type PhotoProps = {
  src: string
  alt: string
  title: string
  onClick?: () => void
}

export default function Photo(props: PhotoProps): JSX.Element {
  const { src, alt, title, onClick } = props
  
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
          boxShadow: '0 12px 24px rgba(0,0,0,0.2)'
        } : {}
      }}
    >
      <Box
        sx={{
          padding: '12px 12px 40px 12px',
          background: '#ffffff',
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
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
            display: 'block'
          }}
        />
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
      </Box>
    </Box>
  )
}
