# CloudQuery JS Source Plugin Template

This is a template for a CloudQuery Source plugin using [CloudQuery JavaScript SDK](https://github.com/cloudquery/plugin-sdk-javascript).
It creates a simple table called `Names` with two rows of data.

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

This will create db.sql file (a Sqlite database) with a table `Names`` and two records.
