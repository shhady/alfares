import connectToDB from '@/utils/database';
import Property from '@/models/property';

export const updateProperty = async (id, data) => {
  try {
    await connectToDB();
    const updatedProperty = await Property.findByIdAndUpdate(id, data, { new: true });
    return updatedProperty;
  } catch (error) {
    throw new Error('Failed to update property: ' + error.message);
  }
};