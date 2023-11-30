// Replace 'https://your-cloudflare-worker.youraccount.workers.dev/your-endpoint' with your Cloudflare Worker URL and endpoint
const workerURL = 'https://worker-rapid-base-08ea.ojas-443.workers.dev';

// Fetch data from Cloudflare Worker
fetch(workerURL)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    // Process the data received from Cloudflare Worker
    console.log('Data received from Cloudflare Worker:', data);
    // Use the data as needed within your Astro website
  })
  .catch(error => {
    // Handle errors
    console.error('There was a problem with the fetch operation:', error);
  });
