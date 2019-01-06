const chemicalComposition = require('.');

describe('.chemicalComposition', () => {
  it('gives the composition of a molecule', () => {
    expect(chemicalComposition('H2O'))
      .toStrictEqual({ H: 2, O: 1 });
  });
});
