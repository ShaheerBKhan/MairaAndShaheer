import { Box, Typography } from '@mui/material'

type DescriptionProps = {
  title?: string
  description: string
}

export default function DescriptionSection(props: DescriptionProps): JSX.Element {
	const { description } = props
  
	return (
		<Box sx={{ maxWidth: 800, mx: 'auto', mt: 2 }}>
			<Typography variant="body1" color="text.secondary" align="center">
				{description}
			</Typography>
		</Box>
	)
}
