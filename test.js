require("child_process").spawn(process.argv[0], ["--expose_gc", "--eval", "console.log(typeof global.gc)"], { stdio: "inherit" });
