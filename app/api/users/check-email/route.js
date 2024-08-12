import { connectToDB } from '@/utils/database';
import User from '@/models/user';

export async function GET(request) {
  await connectToDB();
  const { searchParams } = new URL(request.url);
  const email = searchParams.get('email');

  try {
    const user = await User.findOne({ email });
    if (user) {
      return new Response(JSON.stringify(user), { status: 200 });
    } else {
      return new Response(null, { status: 404 });
    }
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}
