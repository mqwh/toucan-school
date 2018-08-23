const fs = require('fs');

const filename = 'node_modules/@microsoft/office-js-helpers/dist/office.helpers.d.ts';

function fixOfficeJsHelpersDts() {
  console.log('Fix the office-js-helpers.d.ts file.');

  fs.readFile(filename, 'utf8', (err, data) => {
    if (err) {
      return console.log(err);
    }

    const result = data.replace(
      'export default function stringify',
      'export function stringify');

    fs.writeFile(filename, result, 'utf8', (err) => {
      if (err) {
        return console.log(err);
      }
    })
  });
}

fixOfficeJsHelpersDts();
