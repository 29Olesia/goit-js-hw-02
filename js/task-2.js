document.addEventListener('DOMContentLoaded', () => {
  function formatMessage(message, maxLength) {
      if (message.length <= maxLength) {
          return message;
      } else {
          return message.slice(0, maxLength) + "...";
      }
  }

  const task2Results = document.getElementById('task-2-results');

  const messages = [
      formatMessage("Curabitur ligula sapien", 16),
      formatMessage("Curabitur ligula sapien", 23),
      formatMessage("Vestibulum facilisis purus nec", 20),
      formatMessage("Vestibulum facilisis purus nec", 30),
      formatMessage("Nunc sed turpis a felis in nunc fringilla", 15),
      formatMessage("Nunc sed turpis a felis in nunc fringilla", 41)
  ];

  messages.forEach(message => {
      const p = document.createElement('p');
      p.textContent = message;
      task2Results.appendChild(p);
  });
});
