import connectToDB from '@/utils/database';
import Property from '@/models/property';

export const getPropertyById = async (id) => {
  try {
    await connectToDB();
    const property = await Property.findById(id);
    if (!property) {
      throw new Error('Property not found');
    }
    return property;
  } catch (error) {
    throw new Error('Failed to fetch property: ' + error.message);
  }
};