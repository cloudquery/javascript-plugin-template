# CloudQuery JS Source Plugin Template

This is a finished example of a CloudQuery source plugin using [CloudQuery JavaScript SDK](https://github.com/cloudquery/plugin-sdk-javascript).
It loads CSV files and stores them in the designated destination.

Example spec (using a locally built container):

```yaml
kind: source
spec:
  name: "cq-js-sample"
  registry: "docker"
  path: "cq-js-sample:latest"
  version: "v1.0.0"
  tables:
    ["*"]
  destinations:
    - "sqlite"
  spec:
    path: "test_data" # path to the directory with CSV files
    csvDelimiter: "," # CSV delimiter character. Optional, defaults to ","
```

## Getting started

Install dependencies

```shell
npm install
```

Run the plugin locally

```shell
npm run dev
```

Run cloudquery

```shell
cloudquery sync sync.yml
```

This will create db.sql file (a Sqlite database) with a table `Names` and two records.

## Building and publishing the plugin

Use the following command to build a container with the plugin:

```shell
npm run package:container
```

Check out the [Releasing and Deploying Your Plugin
](https://www.cloudquery.io/docs/developers/creating-new-plugin/javascript-source#releasing-and-deploying-your-plugin) in our documentation to learn more about publishing your own plugin for wider use.
