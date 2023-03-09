async function checkUrls(urls) {
    const results = [];
  
    for (const url of urls) {
      try {
        const response = await fetch(url);
        results.push({ url, status: response.status });
      } catch (error) {
        results.push({ url, error: true });
      }
    }
  
    return results;
  }