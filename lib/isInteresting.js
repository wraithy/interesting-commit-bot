"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = _default;exports.hasSwear = exports.hasSpecialWord = exports.isShouting = void 0;var _swearWords = _interopRequireDefault(require("./swearWords"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

const isShouting = msg => !!msg.match(/\b[A-Z]+[A-Z0-9]*\b!/);exports.isShouting = isShouting;

const hasSpecialWord = msg => {
  const smallMsg = msg.toLowerCase();
  return ['oops'].map(word => smallMsg.includes(word)).some(x => !!x);
};exports.hasSpecialWord = hasSpecialWord;

const hasSwear = msg => {
  const smallMsg = msg.toLowerCase();
  return _swearWords.default.map(word => !!smallMsg.match(new RegExp(`\\b${word}\\b`))).some(x => !!x);
};exports.hasSwear = hasSwear;

function _default(msg) {
  return isShouting(msg) || hasSwear(msg); //|| hasSpecialWord(msg)
}