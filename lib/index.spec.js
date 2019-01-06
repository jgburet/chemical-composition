const chemicalComposition = require('.');

describe('.chemicalComposition', () => {
  it('gives the composition of a molecule', () => {
    expect(chemicalComposition('H2O'))
      .toStrictEqual({ H: 2, O: 1 });

    expect(chemicalComposition('Mg(OH)2'))
      .toStrictEqual({ Mg: 1, O: 2, H: 2 });

    expect(chemicalComposition('Mg(OH)')) // sure :)
      .toStrictEqual({ Mg: 1, O: 1, H: 1 });

    expect(chemicalComposition('K4[ON(SO3)2]2'))
      .toStrictEqual({
        K: 4, O: 14, N: 2, S: 4,
      });
  });
});
