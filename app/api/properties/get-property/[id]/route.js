import {connectToDB} from '@/utils/database';
import Property from '@/models/property';

export async function GET(request, { params }) {
  await connectToDB();

  try {
    const { id } = params;

    if (!id) {
      return new Response(JSON.stringify({ error: 'ID is required' }), { status: 400 });
    }

    const property = await Property.findById(id);
    if (!property) {
      return new Response(JSON.stringify({ error: 'property not found' }), { status: 404 });
    }

    return new Response(JSON.stringify(property), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 400 });
  }
}