import fs from "fs";
import papaparse from "papaparse";
import SkyUtil from "skyutil";

(async () => {
    const users = fs.readFileSync("./results.csv");
    const result = papaparse.parse(users.toString());

    const check = "dsc,dogesoundclub,도싸클,도사클,도지사운드클럽,도지사운드클럽메이트,메이트";
    const s = check.split(",");

    const addresses: string[] = [];
    for (const [index, data] of result.data.entries()) {
        if (index > 0) {
            let want = (data as any)[0].trim().toLowerCase().replace(/ /g, "");
            if (want.indexOf("#") !== -1) {
                want = want.substring(0, want.indexOf("#"));
            }
            const address = (data as any)[1].trim();
            for (const ss of s) {
                if (want.indexOf(ss) !== -1) {
                    console.log((data as any)[0], address);
                    addresses.push(address);
                    break;
                }
            }
        }
    }

    console.log(`\n\n\n${addresses.length} 명 신청`);
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