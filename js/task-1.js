document.addEventListener('DOMContentLoaded', () => {
  function makeTransaction(quantity, pricePerDroid, customerCredits) {
      const totalPrice = quantity * pricePerDroid;
      
      if (totalPrice > customerCredits) {
          return "Insufficient funds!";
      } else {
          return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
      }
  }

  const task1Results = document.getElementById('task-1-results');

  const results1 = [
      makeTransaction(5, 3000, 23000),
      makeTransaction(3, 1000, 15000),
      makeTransaction(10, 5000, 8000),
      makeTransaction(8, 2000, 10000),
      makeTransaction(10, 500, 5000)
  ];

  results1.forEach(result => {
      const p = document.createElement('p');
      p.textContent = result;
      task1Results.appendChild(p);
  });
});
