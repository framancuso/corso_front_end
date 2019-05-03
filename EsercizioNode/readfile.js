var fs=require("fs");
console.log("Before read");
var file=fs.readFileSync("./testo");
console.log("Finish read",file)
console.log("After read");