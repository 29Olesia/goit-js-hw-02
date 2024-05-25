document.addEventListener('DOMContentLoaded', () => {
  function getShippingCost(country) {
      let price;
      let message;
    
      switch (country) {
          case "China":
              price = 100;
              message = `Shipping to ${country} will cost ${price} credits`;
              break;
          case "Chile":
              price = 250;
              message = `Shipping to ${country} will cost ${price} credits`;
              break;
          case "Australia":
              price = 170;
              message = `Shipping to ${country} will cost ${price} credits`;
              break;
          case "Jamaica":
              price = 120;
              message = `Shipping to ${country} will cost ${price} credits`;
              break;
          default:
              message = "Sorry, there is no delivery to your country";
      }
    
      return message;
  }

  const task4Results = document.getElementById('task-4-results');

  const messages = [
      getShippingCost("Australia"),
      getShippingCost("Germany"),
      getShippingCost("China"),
      getShippingCost("Chile"),
      getShippingCost("Jamaica"),
      getShippingCost("Sweden")
  ];

  messages.forEach(message => {
      const p = document.createElement('p');
      p.textContent = message;
      task4Results.appendChild(p);
  });
});
