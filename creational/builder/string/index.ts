import StringBuilder from "./StringBuilder";

const s =
  new StringBuilder('initial value | ')
    .append(' end0')
    .append(' end1')
    .replace('  end0 ','_|_')
    .build()

console.log(`"${s}"`)