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

Use the following command to build a container with the plugin:

```shell
npm run package:container
```

Check out the [Releasing and Deploying Your Plugin
](https://www.cloudquery.io/docs/developers/creating-new-plugin/javascript-source#releasing-and-deploying-your-plugin) in our documentation to learn more about publishing your own plugin for wider use.
