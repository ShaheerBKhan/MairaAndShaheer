export type PhotoItem = {
  id: string
  title: string
  photoSourceUrl: string
  description: string
  time: string
}

const photoSourceUrl = 'https://picsum.photos/200/300'

const samplePhotos: PhotoItem[] = [
  {
    id: '1',
    title: '1',
    photoSourceUrl: photoSourceUrl,
    description: 'A beautiful snowy day together.',
    time: '2024-01-15T14:30:00Z'
  },
  {
    id: '2',
    title: '2',
    photoSourceUrl: photoSourceUrl,
    description: 'Our special Valentine\'s celebration.',
    time: '2024-02-14T19:00:00Z'
  },
  {
    id: '3',
    title: '3',
    photoSourceUrl: photoSourceUrl,
    description: 'Cherry blossoms in full bloom.',
    time: '2024-03-22T11:20:00Z'
  },
  {
    id: '4',
    title: '4',
    photoSourceUrl: photoSourceUrl,
    description: 'Perfect sunny day at the beach.',
    time: '2024-06-15T14:30:00Z'
  },
  {
    id: '5',
    title: '5',
    photoSourceUrl: photoSourceUrl,
    description: 'A cosy coffee date at our favorite cafe.',
    time: '2024-07-20T10:15:00Z'
  },
  {
    id: '6',
    title: '6',
    photoSourceUrl: photoSourceUrl,
    description: 'Walking together during golden hour.',
    time: '2024-08-05T19:45:00Z'
  },
  {
    id: '7',
    title: '7',
    photoSourceUrl: photoSourceUrl,
    description: 'Autumn leaves everywhere.',
    time: '2024-10-12T15:00:00Z'
  },
  {
    id: '8',
    title: '8',
    photoSourceUrl: photoSourceUrl,
    description: 'Grateful for this moment together.',
    time: '2024-11-28T18:30:00Z'
  },
  {
    id: '9',
    title: '9',
    photoSourceUrl: photoSourceUrl,
    description: 'Celebrating the holidays together.',
    time: '2024-12-24T20:00:00Z'
  },
  {
    id: '10',
    title: '10',
    photoSourceUrl: photoSourceUrl,
    description: 'Starting the new year together.',
    time: '2025-01-01T00:05:00Z'
  },
  {
    id: '11',
    title: '11',
    photoSourceUrl: photoSourceUrl,
    description: 'Perfect picnic in the park.',
    time: '2025-06-10T13:15:00Z'
  },
  {
    id: '12',
    title: '12',
    photoSourceUrl: photoSourceUrl,
    description: 'Celebrating our special day.',
    time: '2025-09-15T19:30:00Z'
  },
  {
    id: '13',
    title: '13',
    photoSourceUrl: photoSourceUrl,
    description: 'Celebrating our special day.',
    time: '2025-09-15T19:30:00Z'
  },
  {
    id: '14',
    title: '14',
    photoSourceUrl: photoSourceUrl,
    description: 'Celebrating our special day.',
    time: '2025-09-15T19:30:00Z'
  },
  {
    id: '15',
    title: '15',
    photoSourceUrl: photoSourceUrl,
    description: 'Celebrating our special day.',
    time: '2025-09-15T19:30:00Z'
  },
  {
    id: '16',
    title: '16',
    photoSourceUrl: photoSourceUrl,
    description: 'Celebrating our special day.',
    time: '2025-09-15T19:30:00Z'
  },
  {
    id: '17',
    title: '17',
    photoSourceUrl: photoSourceUrl,
    description: 'Celebrating our special day.',
    time: '2025-09-15T19:30:00Z'
  },
  {
    id: '18',
    title: '18',
    photoSourceUrl: photoSourceUrl,
    description: 'Celebrating our special day.',
    time: '2025-09-15T19:30:00Z'
  },
  {
    id: '19',
    title: '19',
    photoSourceUrl: photoSourceUrl,
    description: 'Celebrating our special day.',
    time: '2025-09-15T19:30:00Z'
  },
  {
    id: '20',
    title: '20',
    photoSourceUrl: photoSourceUrl,
    description: 'Celebrating our special day.',
    time: '2025-09-15T19:30:00Z'
  },
  {
    id: '21',
    title: '21',
    photoSourceUrl: photoSourceUrl,
    description: 'Celebrating our special day.',
    time: '2025-09-15T19:30:00Z'
  }
]

export interface IGetPhotosRequest {
  year: number,
  month: number
}

export async function getPhotos(request: IGetPhotosRequest): Promise<PhotoItem[]> {
  const { year, month } = request
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500))
  
  // TODO: Replace with actual API call
  // const response = await fetch(`/api/photos?year=${year}&month=${month}`)
  // return response.json()
  
  if (year !== undefined && month !== undefined) {
    return samplePhotos.filter(photo => {
      const photoDate = new Date(photo.time)
      return photoDate.getFullYear() === year && photoDate.getMonth() === month - 1
    })
  }
  
  return samplePhotos
}
