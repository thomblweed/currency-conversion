# currency-conversion

## Setup

This repository uses [pnpm](https://pnpm.io/installation) as the package manager, version `10.12.4`. It was developed on an environment using [Node version 22.17.0](https://nodejs.org/en/blog/release/v22.17.0)

To install dependencies

`pnpm install`

### API Key

This project relies on an api key from [https://currencybeacon.com](https://currencybeacon.com/register).

Example for local development and preview running of the app, create a `.env` file in the root directory and add the following value;

`VITE_CURRENCY_BEACON_API_KEY=<YOUR-KEY-GOES-HERE>`

## Development

To run for development

`pnpm dev`

To check for linting

`pnpm lint`

To check the types

`pnpm typecheck`

To run in preview/production build mode

`pnpm preview`
