export type PhotoItem = {
  id: string
  title: string
  photoSourceUrl: string
  description: string
  time: string
}
export interface IGetPhotosRequest {
  year: number,
  month: number
}

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5025'

export async function getPhotos(request: IGetPhotosRequest): Promise<PhotoItem[]> {
	const { year, month } = request
  
	try {
		const response = await fetch(`${API_URL}/api/photos?year=${year}&month=${month}`)
    
		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`)
		}
    
		return await response.json()
	} catch (error) {
		console.error('Error fetching photos from API:', error)
		console.log('Using API_URL:', API_URL)
		return []
	}
}
