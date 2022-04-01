import fs from "fs";
import papaparse from "papaparse";
import SkyUtil from "skyutil";

(async () => {
    const users = fs.readFileSync("./results.csv");
    const result = papaparse.parse(users.toString());

    const addresses: string[] = [];
    for (const [index, data] of result.data.entries()) {
        if (index > 0) {
            const address = (data as any)[1].trim();
            addresses.push(address);
        }
    }

    console.log("\n\n\n3초 뒤 당첨자 발표!!!");

    setTimeout(() => {
        console.log("\n\n\n3 !!!");
        setTimeout(() => {
            console.log("\n\n\n2 !!!");
            setTimeout(() => {
                console.log("\n\n\n1 !!!");
                setTimeout(() => {
                    console.log("\n\n\n당첨자!!~@~!@!~@~!@");
                    console.log(addresses[SkyUtil.random(0, addresses.length - 1)]);
                    console.log("뿌뿌뿡~~!!!~@~!@!~@~!@\n\n\n");
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
})();