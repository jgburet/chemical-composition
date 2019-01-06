/* eslint-disable no-continue, no-restricted-syntax */

function* lexer(formula, { types, endWith: TerminatingTokenType }) {
  for (let i = 0, left = formula; i < formula.length; left = formula.slice(i)) {
    let hasMatched = false;
    for (const TokenType of types) {
      const match = left.match(TokenType.regex);
      hasMatched = !!match;

      if (hasMatched) {
        yield new TokenType(match[1]);
        i += match[1].length;
        break;
      }
    }

    if (hasMatched) continue;
    throw new Error(`Can not identify next token from '${left}'`);
  }

  yield new TerminatingTokenType();
}

module.exports = lexer;
