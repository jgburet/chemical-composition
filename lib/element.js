module.exports = class Element {
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
};
