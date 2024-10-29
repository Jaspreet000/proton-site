// models/Analytic.ts

import mongoose from 'mongoose';

const pageVisitSchema = new mongoose.Schema({
  pageName: { type: String, required: true },
  timeSpent: { type: Number, required: true }, // Time spent on page in seconds
});

const analyticsSchema = new mongoose.Schema({
  userId: { type: String, required: true, unique: true }, // Make userId unique to prevent duplicates
  pageVisits: [pageVisitSchema], // Array of pages visited by the user
  lastUpdated: { type: Date, default: Date.now }, // Optional: track last update time
});

export default mongoose.models.Analytic || mongoose.model('Analytic', analyticsSchema);
