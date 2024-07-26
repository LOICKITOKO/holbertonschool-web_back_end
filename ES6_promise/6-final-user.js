// Import the necessary functions
import signUpUser from './4-user-promise.js';
import uploadPhoto from './5-photo-reject.js';

// Define and export the handleProfileSignup function
export default async function handleProfileSignup(firstName, lastName, fileName) {
  // Use Promise.allSettled to handle both promises
  const results = await Promise.allSettled([
    signUpUser(firstName, lastName),
    uploadPhoto(fileName)
  ]);

  // Format the results as required
  return results.map(result => ({
    status: result.status,
    value: result.status === 'fulfilled' ? result.value : result.reason,
  }));
}
