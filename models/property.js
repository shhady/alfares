// models/property.js
import mongoose from 'mongoose';

const propertySchema = new mongoose.Schema({
  generalInfo: {
    name: { type: String },
    location: { type: String },
    minPrice: { type: String },
    propertiesType: { type: String },
    developer: { type: String },
    deliveryDate: { type: String },
  },
  description: { type: String },
  images: { type: [Object], default: [] },
  paymentPlan: { type: String },
  strengths: { type: String },
  features: [{ type: String }],
}, { timestamps: true });

const Property = mongoose.models?.Property || mongoose.model('Property', propertySchema);

export default Property;
