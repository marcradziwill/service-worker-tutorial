if ('serviceWorker' in navigator) {
  console.log('yes')
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('service-worker.js')
    .then(registration => {
      console.log('congrats. scope is: ', registration.scope);
    })
    .catch(error => {
      console.log('sorry', error);
    });
  });
}