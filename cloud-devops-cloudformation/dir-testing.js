const express = require('express')
const router = express.Router()
const app = express()
const { readFile } = require('fs')
const fs = require('fs')
const { writeFile } = require('fs/promises')


router.get('/greeting', (req, res) => {
  const { fileName } = req.query;
  // ruleid:express-fs-filename
  readFile(fileName)
    .then((resolve, reject) => {
      foobar()
      return res.send('ok')
    })
})

router.get('/greet-template', async (req, res) => {
  // ruleid:express-fs-filename
  const data = await fs.promises.mkdir(`/tmp/${req.body.name}`, {})
  return res.send(data)
})

module.exports = router

app.get('/', function (req, res) {
  var user = req.query.name;

  const data = new Uint8Array(Buffer.from('Hello Node.js'));
  // ruleid:express-fs-filename
  fs.writeFile(user, data, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
    res.end('ok');
  });
});

app.get('/test', async function (req, res) {
  var user = req.query.name;

  const data = new Uint8Array(Buffer.from('Hello Node.js'));
  // ruleid:express-fs-filename
  await writeFile(user, data);
  console.log('The file has been saved!');
  res.end('ok');
});

app.get('/okTest1', function (req, res) {
  var user = foobar();

  const data = new Uint8Array(Buffer.from('Hello Node.js'));
  // ok:express-fs-filename
  fs.writeFile(user, data, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
    res.end('ok');
  });
});

app.get('/okTest2', function (req, res) {
  const { fileName } = "hardcoded.txt";
  // ok:express-fs-filename
  readFile(fileName)
    .then((resolve, reject) => {
      foobar()
      return res.send('ok')
    })
});

app.listen(8000);
