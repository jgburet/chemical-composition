/* eslint-disable no-console, no-continue, no-restricted-syntax */

class ElementToken {
  constructor(element) {
    this.value = element;
    this.weight = 2;
  }
}
ElementToken.regex = /^([A-Z][a-z]{0,1})/;

class QuantityToken {
  constructor(n) {
    this.value = Number(n);
    this.weight = 1;
  }
}
QuantityToken.regex = /^(\d+)/;

class TerminalToken {}

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
  }

  return new TerminalToken();
}

function sub(tokens, terminatingTokenClass) {
  /*
   * root = []
   * for (token <- tokens)
   *    switch token
   *    case ElementClass:
   *      root << token
   *    case QuantityToken:
   *      root[-1] * token.value
   *    case SubToken:
   *      sub(tokens, SubTerminatingToken)
   *    case TerminalToken:
   *      return new Composition(root)
   */
}

module.exports = function chemicalComposition(formula) {
  const tokens = lexer(formula);
  return sub(tokens, TerminalToken);
};
