# Website

This website is built using [Docusaurus 3.10](https://docusaurus.io/). The course files are MDX files located in `/website/courses`.

## Installation

```bash
yarn install
```

## Local Development

```bash
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```bash
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

This website gets deployed through AWS Amplify provided by Imply. Any merges into `main` are automatically published. No other steps are needed. 