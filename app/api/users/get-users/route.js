import { connectToDB } from '@/utils/database';
import User from '@/models/user';

export const dynamic = 'force-dynamic'; // Ensures dynamic data fetching

export async function GET() {
  await connectToDB();

  try {
    const users = await User.find().sort({ createdAt: -1 }).lean().exec();
    return new Response(JSON.stringify(users), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}