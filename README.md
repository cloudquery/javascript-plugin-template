# CloudQuery JS Source Plugin Template

This is a template for a CloudQuery Source plugin using [CloudQuery JavaScript SDK](https://github.com/cloudquery/plugin-sdk-javascript).
It creates a simple table called `Names` with two rows of data.

Read about how to build a new CloudQuery plugin from this template in [Creating a New JS Plugin](https://www.cloudquery.io/blog/creating-a-new-js-plugin).

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

1. Update the plugin metadata in [src/plugins.ts](src/plugin.ts#L99) to match your team and plugin name.
2. Run `npm run build` to build the plugin.
3. Run `node dist/main.js package -m "Initial release" v0.0.1 .`. `-m` specifies changelog and `v0.0.1` is the version.
4. Run `cloudquery plugin publish -f` to publish the plugin to the CloudQuery registry.

> More about publishing plugins [here](https://docs.cloudquery.io/docs/developers/publishing-an-addon-to-the-hub)
