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

## Process

### Decisions/Thoughts

- Kept user input form very simple without any form libraries just to keep it simple and focus on the core functionality
  - used browser default validation for required fields (not perfect with Shadcn having position absolute so it's not showing in the best position)
- Used Shadcn for simple UI components
- Simple approach with react query for api handling
- Jotai for simple atomic state management
  - can be scaled to more complex use cases
  - removes need to use context as a state manager (context is best used for dependency injection)

### Future Improvements

- Api key security on a proxy Node api (AWS Lambda maybe) or by using a framework that can be run on a server like React Router 7 (framework version)/Next.js/Tanstack Start as examples
- Add unit tests with testing library for quality and accessability updates
- Factory Pattern for query and mutation keys constants
- Form validation could be improved with zod and a form library for better UX
  - also maybe update to use onChange submit and remove the submit button
  - nicer UI for field and form level validation messaging
- Add error handling in case of network errors for better user experience
- Form components could be updated to a compound pattern for improved reusability
- Introduce data loaders using React Router or Tanstack Router (for example) to lift the api calls up the http waterfall for improved performance
- linting and typechecking could go in a pipeline
