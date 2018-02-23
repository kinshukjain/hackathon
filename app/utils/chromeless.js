// chromeless

const { Chromeless } = require('chromeless');

exports.getScreenshot = (url = 'https://www.google.com') => {
  async function run() {
    const chromeless = new Chromeless({
      remote: {
        endpointUrl: '',
        apiKey: ''
      },
    });

    const screenshot = await chromeless
      .goto(url)
      .type('chromeless', 'input[name="q"]')
      .press(13)
      .wait('#resultStats')
      .screenshot();

    console.log(screenshot); // prints local file path or S3 url
    await chromeless.end();
    return screenshot;
  };
  return run().catch(console.error.bind(console));
};
