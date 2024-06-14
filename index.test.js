/* eslint-env jest */

const fs = require('fs')
const path = require('path')
const crypto = require('crypto');
const convertCpbitmapToPng = require('./index');

function generateChecksum(output, algorithm, encoding) {
  return new Promise((resolve, reject) => {
    fs.readFile(output, function(err, data) {
      if (err) reject(err);
      return resolve(crypto
          .createHash(algorithm || 'md5')
          .update(data, 'utf8')
          .digest(encoding || 'hex'));
    })
  })
}

test('convert LockBackground.cpbitmap to LockBackground.png', (done) => {
  const input = path.join(__dirname, 'tests', 'LockBackground.cpbitmap');
  const output = path.join(__dirname, 'tests', 'LockBackground.png');
  convertCpbitmapToPng(input, output).then((res) => {
    console.log('convertCpbitmapToPng', res)
    expect(res).toBe(output);
    generateChecksum(output).then((checksum) => {
      console.log('checksum', checksum)
      expect(checksum).toBe('3ffe0cad91d87de183f6f626e91db9fa');
      done();
    })
  })
});

