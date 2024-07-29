import { connectToDB } from '@/utils/database';
import User from '@/models/user';

export async function POST(request) {
  await connectToDB();

  try {
    const data = await request.json();
    const newUser = await User.create(data);
    return new Response(JSON.stringify(newUser), { status: 201 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 400 });
  }
}