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

//exports.getImageFromPath = (path) => {
//  var img = ''
//    , fs = require('fs');
//
//  fs.readFile(path, function(err, data) {
//    if (err) throw err; // Fail if the file can't be read.
//    img = data; // Send the file data to the browser.
//  });
//  return img;
//};
//
//exports.getImageFromUrl = async (url) => {
//  var request = require('request').defaults({ encoding: null });
//  return await request.get(url)
//  .on('response', function (res) {
//    if (res.statusCode === 200) {
//      return res.body;
//    }
//    return '';
//  })
//  .on('error', function(err){ throw err; });
//};
