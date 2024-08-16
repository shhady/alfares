import { connectToDB } from '@/utils/database';
import User from '@/models/user';

export const dynamic = 'force-dynamic';

export async function GET(req) {
  await connectToDB();

  const url = new URL(req.url);
  const page = parseInt(url.searchParams.get('page')) || 1; // Default to page 1 if not provided
  const limit = parseInt(url.searchParams.get('limit')) || 10; // Default to 10 items per page

  const skip = (page - 1) * limit;

  try {
    const users = await User.find()
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .lean()
      .exec();

    const totalUsers = await User.countDocuments(); // Get the total number of users for pagination

    return new Response(JSON.stringify({
      users,
      totalUsers,
      page,
      totalPages: Math.ceil(totalUsers / limit),
    }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}
