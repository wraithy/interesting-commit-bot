"use strict";var _isInteresting = _interopRequireDefault(require("./isInteresting"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

function jsonFromStdIn() {
  const stdin = process.stdin;
  const stdout = process.stdout;

  stdin.resume();
  stdin.setEncoding('utf8');

  return new Promise((resolve, reject) => {
    let input = '';
    stdin.on('data', data => {input = input.concat(data);});
    stdin.on('end', () => resolve(JSON.parse(input)));
  });
}

jsonFromStdIn().
then(commits => commits.filter(c => (0, _isInteresting.default)(c.message))).
then(x => console.log(JSON.stringify(x, null, 2)));