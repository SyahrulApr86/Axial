# Axial

My Portfolio Website

## 📋 TODO

- [ ] **Add CV/Resume**: Implement downloadable CV functionality
- [ ] **Update Projects**: Add real project data and images
- [ ] make project carousel cyclic
- [ ] Add url to project cards (optional)
- [ ] Implement all projects page and fill with real data
- [ ] Add blog section
- [ ] Optimize performance and SEO
- [ ] Add analytics tracking

## 1. Environment Setup

1. Copy the example environment file:
```bash
cp .env.example .env
```

2. Update the `.env` file with your configuration:
```env
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/portfolio"
POSTGRES_DB="portfolio"
POSTGRES_USER="your_username"
POSTGRES_PASSWORD="your_password"
POSTGRES_PORT="5432"

# JWT Secret (generate a secure random string)
JWT_SECRET="your-super-secret-jwt-key-here"

# Admin Credentials (change these!)
ADMIN_EMAIL="admin@portfolio.com"
ADMIN_PASSWORD="your-secure-password"

# Next.js secrets
NEXTAUTH_SECRET="your-nextauth-secret-here"
NEXTAUTH_URL="http://localhost:3000"
```

## 2. Database Setup

1. Generate Prisma client:
```bash
npm run db:generate
```

2. Push the database schema (for development):
```bash
npm run db:push
```

Or create and run migrations (for production):
```bash
npm run db:migrate
```

3. Create the admin user:
```bash
npm run setup:admin
```

This will create an admin user using the credentials from your `.env` file:
- **Email**: Uses `ADMIN_EMAIL` from `.env`
- **Password**: Uses `ADMIN_PASSWORD` from `.env`

**⚠️ Important**: Set strong credentials in your `.env` file, especially for production!

## 3. Testing the Setup

1. Start the development server:
```bash
npm run dev
```

2. Test the contact form at `http://localhost:3000`

3. Access the admin panel at `http://localhost:3000/admin`
   - Login with your `.env` credentials
   - View submitted messages
   - Mark messages as read/unread
   - Delete messages

## 4. Database Management

- **View database**: `npm run db:studio` (opens Prisma Studio)
- **Reset database**: Delete the database and run `npm run db:push` again
- **Create new admin**: Run `npm run setup:admin` again

## 5. Features

### Contact Form (`/api/contact`)
- Stores messages in PostgreSQL
- Validates email format
- Returns JSON responses
- Handles errors gracefully

### Admin Authentication (`/api/auth/login`)
- JWT-based authentication
- HTTP-only cookies for security
- Password hashing with bcrypt
- Session management

### Admin Panel (`/admin`)
- Protected route requiring authentication
- View all messages with pagination
- Mark messages as read/unread
- Delete messages
- Reply via email (opens mail client)
- Real-time message status updates

### Development Commands
```bash
# View database
npm run db:studio

# Reset database
npx prisma db push --force-reset

# Create new migration
npx prisma migrate dev --name "your_migration_name"

# Generate Prisma client after schema changes
npm run db:generate
```
