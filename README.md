# Chemical Composition

For a given chemical formula represented by a string, write a function that counts the number of atoms of each element contained in the molecule and returns an object where keys correspond to atoms and values to the number of each atom in the molecule.

For example:

```js
var water = 'H2O'
parse_molecule(water)                 // return {'H': 2, 'O': 1}
```

```js
var magnesium_hydroxide = 'Mg(OH)2'
parse_molecule(magnesium_hydroxide)   // return {'Mg': 1, 'O': 2, 'H': 2}
```
```js
var fremy_salt = 'K4[ON(SO3)2]2'
parse_molecule(fremy_salt)             // return {'K': 4, 'O': 14, 'N': 2, 'S': 4}
```
As you can see, some formulas have brackets in them. The index outside the brackets tells you that you have to multiply count of each atom inside the bracket on this index. For example, in Fe(NO3)2 you have one iron atom, two nitrogen atoms and six oxygen atoms.

Note that brackets may be round, square or curly and can also be nested. Index after the braces is optional.


## Fun fact

```js
const a = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
let g;
function* newGen(ns) {
  for (const n of ns) { yield n };
}
```

This:
```js
function take2(ns) {
  let i = 0;
  for (const n of ns) {
    console.log(n);
    i++;
    if (i >= 3) break;
  }
}
g = newGen(a)
g.next()
take2(g)
g.next()
```

... differs from:
```js
function takeTwo(ns) {
  let i = 0;
  while (i < 2) {
    const n = ns.next().value();
    console.log(n);
    i++;
  }
}
g = newGen(a)
g.next()
takeTwo(g)
g.next()
```

From the [documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators#Generator_functions):
> each Generator may only be iterated once

That's bitchy (:
