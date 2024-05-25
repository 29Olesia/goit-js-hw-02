document.addEventListener('DOMContentLoaded', () => {
  function checkForSpam(message) {
      const lowerCaseMessage = message.toLowerCase();
      return lowerCaseMessage.includes("spam") || lowerCaseMessage.includes("sale");
  }

  const task3Results = document.getElementById('task-3-results');

  const messages = [
      checkForSpam("Latest technology news"),
      checkForSpam("JavaScript weekly newsletter"),
      checkForSpam("Get best sale offers now!"),
      checkForSpam("Amazing SalE, only tonight!"),
      checkForSpam("Trust me, this is not a spam message"),
      checkForSpam("Get rid of sPaM emails. Our book in on sale!"),
      checkForSpam("[SPAM] How to earn fast money?")
  ];

  messages.forEach(message => {
      const p = document.createElement('p');
      p.textContent = message;
      task3Results.appendChild(p);
  });
});
