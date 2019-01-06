/* eslint-disable no-console, no-continue, no-restricted-syntax */

class Token {
  constructor(value) {
    this.value = value;
  }
}

class ElementToken extends Token {}
ElementToken.regex = /^([A-Z][a-z]{0,1})/;

class QuantityToken extends Token {
  constructor(n) {
    super(Number(n));
  }
}
QuantityToken.regex = /^(\d+)/;

class TerminalToken extends Token {}

function* lexer(formula) {
  for (let i = 0, left = formula; i < formula.length; left = formula.slice(i)) {
    const matchElement = left.match(ElementToken.regex);
    if (matchElement) {
      yield new ElementToken(matchElement[1]);
      i += matchElement[1].length;
      continue;
    }

    const matchQuantity = left.match(QuantityToken.regex);
    if (matchQuantity) {
      yield new QuantityToken(matchQuantity[1]);
      i += matchQuantity[1].length;
      continue;
    }

    throw new Error('Can not identify any kind of token with remaining', left);
  }

  yield new TerminalToken();
}

class Element {
  constructor(atom) {
    if (!atom) return; // Then it might be an aggregator

    this[atom] = 1;
  }

  times(n) {
    Object.keys(this).forEach((k) => {
      this[k] *= n;
    });
  }

  merge(other) {
    Object.keys(other).forEach((k) => {
      this[k] = (this[k] || 0) + other[k];
    });
    return this;
  }
}

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
  const tokens = lexer(formula);
  return { ...sub(tokens, TerminalToken) };
}

module.exports = chemicalComposition;
