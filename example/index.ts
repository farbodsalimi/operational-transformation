import { makeOps } from '../lib/ops';

const prevText = 'Hello, World!';
const currText = 'Helo, World!';

const ops = makeOps(prevText, currText);
console.log(ops);
