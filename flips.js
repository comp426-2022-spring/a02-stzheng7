import { coinFlips, countFlips } from "./modules/coin.mjs";
import minimist from "minimist";

const args = minimist(process.argv.slice(2));
args['number'];
const number = args.number || 1;
const FlipsA = coinFlips(number);

console.log(FlipsA);
console.log(countFlips(FlipsA));