import dotenv from 'dotenv'
dotenv.config()

import { prisma } from './client'

async function main() {
  try {
    await prisma.$connect()
    console.log('🗄️  Connected to database successfully')

    const photoCount = await prisma.photo.count()
    console.log(`📷 Photos in DB: ${photoCount}`)
  } catch (err) {
    console.error('Database connection error:', err)
  } finally {
    await prisma.$disconnect()
  }
}

if (require.main === module) {
  main()
}

export default main
