import NextAuth from 'next-auth';
import { authOptions } from '@/lib/auth';
import { initializeDatabase } from '@/lib/database';

// Initialize database on server start
initializeDatabase().catch(console.error);

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };