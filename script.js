async function checkUrls(urls) {
    const results = [];
  
    for (const url of urls) {
      try {
        const response = await fetch(url, {
            method: 'GET',
            mode: 'no-cors',
            cache: 'no-cache',
            headers: {
                'Access-Control-Allow-Origin' : url
            }
        });
        results.push({ url, error: false, status: response.status });
      } catch (error) {
        results.push({ url, error: true });
      }
    }
    console.log('results',results);
    return results;
  };

  

const arr = ['https://www.google.com/', 'https://www.youtube.com/', 'https://www.ibm.com/developerworks/ru/library/wa-meteor/', 'https://qwerty.qwerty']

checkUrls(arr);