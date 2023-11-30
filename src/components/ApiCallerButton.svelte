<!-- ApiCallerButton.astro -->

  <script setup>
    const callCloudflareAPI = async () => {
      try {
        // Replace with your Cloudflare Worker URL and endpoint
        const workerURL = 'https://worker-rapid-base-08ea.ojas-443.workers.dev/hello';
  
        const response = await fetch(workerURL);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log('Data received from Cloudflare Worker:', data);
        // Process the data received from the API call as needed
      } catch (error) {
        console.error('There was a problem with the API call:', error);
      }
    };
  </script>
  <template>
    <button @click="callCloudflareAPI">Call Cloudflare API</button>
  </template>
  

  