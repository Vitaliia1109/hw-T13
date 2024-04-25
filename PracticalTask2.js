// Define an asynchronous function to fetch a random cat GIF URL
async function fetchRandomCatGifUrl() {
  try {
    // Make a GET request to the specified API URL to fetch a random cat GIF
    const response = await fetch('http://thecatapi.com/api/images/get?format=src&type=gif');
    
    // Check if the response is successful (status code 200)
    if (!response.ok) {
      // If the response is not OK, throw an error
      throw new Error('Failed to fetch cat GIF');
    }
    
    // Extract the URL of the cat GIF from the response
    const imageURL = response.url;
    
    // Log the URL of the random cat GIF in the console
    console.log('Random cat GIF URL:', imageURL);
  } catch (error) {
    // If an error occurs during the fetch operation, catch it here
    console.error('Error fetching cat GIF:', error.message);
  }
}

// Call the fetchRandomCatGifUrl function to fetch and display a random cat GIF URL
fetchRandomCatGifUrl();