let fakeBalance = 420690;

function connectWallet() {
  alert("Fake wallet connected. You have " + fakeBalance + " $TRTH");
}

function stakeTokens(amount) {
  if (amount <= fakeBalance) {
    fakeBalance -= amount;
    alert("Staked " + amount + " $TRTH! New balance: " + fakeBalance);
  } else {
    alert("Not enough $TRTH to stake!");
  }
}
