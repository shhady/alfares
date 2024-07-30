
import {connectToDB} from '@/utils/database';
import Property from '@/models/property';

export async function PUT(request, { params }) {
  await connectToDB();
  try {
    const { id } = params;
    const data = await request.json();
    if (!id) {
      return new Response(JSON.stringify({ error: 'ID is required' }), { status: 400 });
    }

    const updatedProperty = await Property.findByIdAndUpdate(id, data, { new: true });  
      if (!updatedProperty) {
      return new Response(JSON.stringify({ error: 'property not found' }), { status: 404 });
    }

    return new Response(JSON.stringify(updatedProperty), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 400 });
  }
}