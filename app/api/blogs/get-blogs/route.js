import { connectToDB } from '@/utils/database';
import Blog from '@/models/blog';

export async function GET(req, res) {
  await connectToDB();

  try {
    const blogs = await Blog.find({}).sort({ createdAt: -1 }); 
    console.log(blogs);// Ensure this is fetching all blogs
    return new Response(JSON.stringify(blogs), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}
