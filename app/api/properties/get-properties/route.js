import { connectToDB }  from '@/utils/database';
import Property from '@/models/property';

export async function GET(req, res) {
    await connectToDB();
  
  try {
    const properties = await Property.find({}).sort({ createdAt: -1 });
    return new Response(JSON.stringify(properties), { status: 200 });

  } catch (error) {
    throw new Error('Failed to fetch properties: ' + error.message);
  }
};


