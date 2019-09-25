const brightness = require('brightness');
const notifier = require('node-notifier');

console.log('This program will turn your screen off for 20 seconds every 20 minutes.\nDon\`t forget to look at something 20 feet away! 🤓')

const startProgram = async () => {
  const initialBrightness = await brightness.get();

  setInterval(() => {
    notifier.notify({
      title: 'Sleeping... 😴',
      message: 'Don\`t forget to look away 🤓!'
    });

    setTimeout(() => {
      brightness.set(0.0);
    }, 3000);

    setTimeout(() => {
      brightness.set(initialBrightness);
    }, 23000);
  }, 1.2e+6);

  process.on('SIGINT', () => {
    process.stdout.write('\r\rBye!\n');
    process.exit();
  });
}

startProgram();