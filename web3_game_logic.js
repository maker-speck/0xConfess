async function connectWallet() {
  if (typeof window.ethereum !== 'undefined') {
    try {
      const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
      alert("Connected: " + accounts[0]);
    } catch (err) {
      alert("Connection failed: " + err.message);
    }
  } else {
    alert("MetaMask not detected.");
  }
}

async function fakeStake(amount) {
  if (!window.ethereum) return alert("Wallet not connected.");
  alert(`Staking ${amount} $TRTH... (simulated)`); // Replace with real staking logic later
}
