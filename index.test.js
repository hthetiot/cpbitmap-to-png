/* eslint-env jest */

const fs = require('fs')
const path = require('path')
const crypto = require('crypto');
const convertCpbitmapToPng = require('./index');

function generateChecksum(str, algorithm, encoding) {
    return crypto
        .createHash(algorithm || 'md5')
        .update(str, 'utf8')
        .digest(encoding || 'hex');
}

test('convert LockBackground.cpbitmap to LockBackground.png', (done) => {
  const input = path.join(__dirname, 'tests', 'LockBackground.cpbitmap');
  const output = path.join(__dirname, 'tests', 'LockBackground.png');
  convertCpbitmapToPng(input, output)
  fs.readFile(output, function(err, data) {
    if (err) throw err;
    var checksum = generateChecksum(data);
    expect(checksum).toBe('3ffe0cad91d87de183f6f626e91db9fa');
    done();
  });
});

