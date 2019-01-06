
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

module.exports = {
  ElementToken,
  QuantityToken,
  TerminalToken,
};
