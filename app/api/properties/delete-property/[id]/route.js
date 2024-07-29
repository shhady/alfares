import connectToDB from '@/utils/database';
import Property from '@/models/property';

export const deleteProperty = async (id) => {
  try {
    await connectToDB();
    await Property.findByIdAndDelete(id);
    return { message: 'Property deleted successfully' };
  } catch (error) {
    throw new Error('Failed to delete property: ' + error.message);
  }
};