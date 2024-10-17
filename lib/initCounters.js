// utils/initCounters.js
import Counter from '../models/Counter';

export async function initializeCounter() {
  // Ensure the counter for 'blogs' is initialized only after connection is ready
  const existingCounter = await Counter.findOne({ _id: 'blogs' });
  if (!existingCounter) {
    // Create counter and start from seq 14
    await Counter.create({ _id: 'blogs', seq: 14 });
    console.log('Counter initialized for blogs starting at seq 14');
  } else {
    console.log('Counter for blogs already exists');
  }
}
