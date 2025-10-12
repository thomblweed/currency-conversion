# currency-conversion

## Setup

This repository uses [pnpm](https://pnpm.io/installation) as the package manager, version `10.18.2`. It was developed on an environment using [Node version 22.18.0](https://nodejs.org/en/blog/release/v22.18.0)

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

To format files

`pnpm format`

To check the types

`pnpm typecheck`

To run in preview/production build mode

`pnpm preview`

## Components and Styling

This app uses [shadcn](https://ui.shadcn.com/) for the components and theme. Each component is installed locally to the [`src/ui/components`](./src/ui/components/) folder as described [here](https://ui.shadcn.com/docs/installation/vite#add-components).

[Tailwind](https://tailwindcss.com/) is used for the styling
