
import {connectToDB} from '@/utils/database';
import Property from '@/models/property';

export async function DELETE(request, { params }) {
  await connectToDB();
  
  try {
    const { id } = params;
    if (!id) {
      return new Response(JSON.stringify({ error: 'ID is required' }), { status: 400 });
    }

    const deletedProperty = await Property.findByIdAndDelete(id);  
      if (!deletedProperty) {
      return new Response(JSON.stringify({ error: 'property not found' }), { status: 404 });
    }

    return new Response(JSON.stringify(deletedProperty), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 400 });
  }
}