const { PrismaClient } = require('@prisma/client')
const bcrypt = require('bcryptjs')

const prisma = new PrismaClient()

async function createAdmin() {
  try {
    const adminEmail = process.env.ADMIN_EMAIL || 'admin@portfolio.com'
    const adminPassword = process.env.ADMIN_PASSWORD || 'admin123'
    
    const hashedPassword = await bcrypt.hash(adminPassword, 12)
    
    const admin = await prisma.user.upsert({
      where: { email: adminEmail },
      update: {
        password: hashedPassword // Update password if user exists
      },
      create: {
        email: adminEmail,
        name: 'Admin',
        password: hashedPassword,
        role: 'admin'
      }
    })

    console.log('Admin user created/updated successfully:')
    console.log(`Email: ${adminEmail}`)
    console.log(`Password: ${adminPassword}`)
    console.log('Please change these credentials in production!')
    
  } catch (error) {
    console.error('Error creating admin user:', error)
  } finally {
    await prisma.$disconnect()
  }
}

createAdmin()