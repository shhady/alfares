import { connectToDB } from '@/utils/database';
import Property from '@/models/property';

export async function POST(request) {
  await connectToDB();

  try {
    const data = await request.json();
    const newProperty = await Property.create(data);
    return new Response(JSON.stringify(newProperty), { status: 201 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 400 });
  }
}