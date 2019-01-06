
class Token {
  constructor(value) {
    this.value = value;
  }
}

class SubOpening extends Token {}
class SubClosing extends Token {}

class ElementToken extends Token {}
ElementToken.regex = /^([A-Z][a-z]{0,1})/;

class QuantityToken extends Token {
  constructor(n) {
    super(Number(n));
  }
}
QuantityToken.regex = /^(\d+)/;

class TerminalToken extends SubClosing {}

// (, )
class CloseParenthesisToken extends SubClosing {}
CloseParenthesisToken.regex = /^(\))/;

class OpenParenthesisToken extends SubOpening {}
OpenParenthesisToken.regex = /^(\()/;
OpenParenthesisToken.closingTokenClass = CloseParenthesisToken;

// [, ]
class CloseBracketToken extends SubClosing {}
CloseBracketToken.regex = /^(\])/;

class OpenBracketToken extends SubOpening {}
OpenBracketToken.regex = /^(\[)/;
OpenBracketToken.closingTokenClass = CloseBracketToken;

module.exports = {
  ElementToken,
  QuantityToken,

  CloseParenthesisToken,
  OpenParenthesisToken,
  CloseBracketToken,
  OpenBracketToken,

  TerminalToken,
};
