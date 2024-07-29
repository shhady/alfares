// models/property.js
import mongoose from 'mongoose';

const propertySchema = new mongoose.Schema({
  generalInfo: {
    name: { type: String, required: true },
    location: { type: String, required: true },
    minPrice: { type: String, required: true },
    maxPrice: { type: String, required: true },
    propertiesType: { type: String, required: true },
    developer: { type: String, required: true },
    deliveryDate: { type: String, required: true },
    readiness:{ type: String, required: true },
  },
  description: { type: String, required: true },
  architecturalDesign: {
    totalArea: { type: String, required: true },
    totalBuiltArea: { type: String, required: true },
  },
  location: {
    description: { type: String, required: true },
  },
  prices: {
    studio: { type: String, required: true },
    oneBedroom: { type: String, required: true },
    twoBedroom: { type: String, required: true },
    threeBedroom: { type: String, required: true },
  },
  images: { type: [String], default: [] },
  paymentPlan: { type: String, required: true },
  strengths: { type: String, required: true },
  features: [{ type: String, required: true }],
}, { timestamps: true });

const Property = mongoose.models?.Property || mongoose.model('Property', propertySchema);

export default Property;
