// utils/incrementCounter.js
import Counter from '../models/Counter';

export async function getNextSequence(name) {
  const counter = await Counter.findByIdAndUpdate(
    { _id: name },
    { $inc: { seq: 1 } },
    { new: true, upsert: true } // Create if it doesn't exist
  );
  return counter.seq;
}
