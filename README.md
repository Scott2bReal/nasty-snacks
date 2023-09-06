# Nasty Snacks Website

Website for my band Nasty Snacks from Chicago, IL

[![Netlify Status](https://api.netlify.com/api/v1/badges/86c54fcf-c28f-47d4-a638-11413e2956c5/deploy-status)](https://app.netlify.com/sites/nastysnacks/deploys)

Built using the [Astro](https://astro.build) framework, hosted on [Netlify](https://netlify.com), pulling content from [Sanity](https://sanity.io).

Integration with the [Discord Snackbot](https://github.com/Scott2bReal/discord-snackbot),
allowing us to easily update our upcoming shows via Discord slash commands.

## Project setup

This is a [pnpm](https://pnpm.io) project. If you don't have pnpm installed, you can follow the installation instructions [here](https://pnpm.io/installation).

Once you have `pnpm` installed, you can run the following command:

```bash
pnpm install
```

This will install all dependencies for both the `astro` and `sanity` projects.

## Running the project

To run the project, you'll need to run two commands in separate terminals:

Starts the local dev server for the Astro site
```bash
pnpm astro:dev
```

Starts a local server for the Sanity Studio (CMS)
```bash
pnpm sanity:dev
```

## Environment Variables

The Astro app needs some environment variables to function properly. There is a
`./astro/.env.example` file which contains all of the environment variable
keys. You should create a separate `.env` by copying the example file (from the
project root):

```bash
cp ./astro/.env.example ./astro/.env
```

You can then hit me up for the values for each of the keys ;)

## Helpful Commands

The `package.json` file in the root directory of the project has several
helpful commands. For example:

* `pnpm format` - Runs `prettier --check` on the project, displaying any files that need to be formatted.  
* `pnpm lint` - Runs `eslint` on the project, displaying any linting errors.  

There are `:fix` versions of both of these commands which will attempt to fix any errors.
