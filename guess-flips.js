import { flipACoin } from "./modules/coin.mjs";
import minimist from "minimist";

const args = minimist(process.argv.slice(2));
const call = args["call"] || null;
if (call != "heads" || call != "tails") {
    console.log(flipACoin(call));
}
else {
    console.log("Error: no input. \n Usage: node guess-flip --call=[heads|tails]")
}