let fs = require("fs")

let zero = (phone_numer) => {
    while (phone_numer.length < 7) {
        phone_numer = "0" + phone_numer;
    }
    return phone_numer;
}

for (let i = 0; i < 100000000; i++) {
    fs.appendFileSync("./phone_list.txt", zero(i.toString()) + "\n", { encoding: "utf-8" });
}


