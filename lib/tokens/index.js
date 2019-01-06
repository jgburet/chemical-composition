
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

// {, }
class CloseBracesToken extends SubClosing {}
CloseBracesToken.regex = /^(\})/;

class OpenBracesToken extends SubOpening {}
OpenBracesToken.regex = /^(\{)/;
OpenBracesToken.closingTokenClass = CloseBracesToken;

module.exports = {
  ElementToken,
  QuantityToken,

  CloseParenthesisToken,
  OpenParenthesisToken,
  CloseBracketToken,
  OpenBracketToken,
  CloseBracesToken,
  OpenBracesToken,

  TerminalToken,
};
