import { createServeCommand } from "@cloudquery/plugin-sdk-javascript/plugin/serve";
import test from "ava";
import { pathExists } from "path-exists";
import { temporaryDirectoryTask } from "tempy";

import { newSamplePlugin } from "./plugin.js";

const serve = createServeCommand(newSamplePlugin()).exitProcess(false);

test("should return error without command", (t) => {
  t.throws(() => serve.parse([]), { message: "Specify a command to run" });
});

test("should build sample docker plugin", async (t) => {
  await temporaryDirectoryTask(async (outputDirectory: string) => {
    await serve.parse([
      "package",
      "-m",
      "test",
      "v1.0.0",
      ".",
      "--dist-dir",
      outputDirectory,
      "--log-level",
      "debug",
    ]);
    t.true(await pathExists(`${outputDirectory}/tables.json`));
    t.true(await pathExists(`${outputDirectory}/package.json`));
    t.true(
      await pathExists(
        `${outputDirectory}/plugin-cq-js-sample-v1.0.0-linux-amd64.tar`,
      ),
    );
    t.true(
      await pathExists(
        `${outputDirectory}/plugin-cq-js-sample-v1.0.0-linux-arm64.tar`,
      ),
    );
    t.true(await pathExists(`${outputDirectory}/docs/overview.md`));
  });
});
