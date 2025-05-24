async function pinToIPFS(metadata) {
  const url = `https://api.pinata.cloud/pinning/pinJSONToIPFS`;
  const apiKey = 'YOUR_PINATA_API_KEY';
  const secretApiKey = 'YOUR_PINATA_SECRET_API_KEY';

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      pinata_api_key: apiKey,
      pinata_secret_api_key: secretApiKey
    },
    body: JSON.stringify({ pinataContent: metadata })
  });

  const data = await response.json();
  console.log("Pinned to IPFS:", data);
  return data;
}
