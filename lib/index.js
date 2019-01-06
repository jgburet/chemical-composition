/* eslint-disable no-console, no-continue, no-restricted-syntax */

const Element = require('./element');
const lexer = require('./lexer');
const {
  ElementToken,
  QuantityToken,
  TerminalToken,
} = require('./tokens');

function sub(tokens, terminatingTokenClass) {
  const root = [];
  let currentElement;
  for (const token of tokens) {
    switch (token.constructor) {
      case ElementToken:
        root.push(new Element(token.value));
        break;

      case QuantityToken:
        currentElement = root[root.length - 1];
        currentElement.times(token.value);
        break;

        /*
         * case SubToken:
         *   sub(tokens, SubTerminatingToken)
         */

      case terminatingTokenClass:
        return root.reduce(
          (acc, element) => acc.merge(element),
          new Element(),
        );

      default:
        throw new Error('WTF, I thought we were friends?');
    }
  }

  throw new Error('Terminating token not found');
}

function chemicalComposition(formula) {
  const tokens = lexer(formula, {
    types: [ElementToken, QuantityToken],
    terminating: TerminalToken,
  });
  return { ...sub(tokens, TerminalToken) };
}

module.exports = chemicalComposition;
