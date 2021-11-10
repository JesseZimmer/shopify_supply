We are currently rebuilding Shopify Supply as a [Hydrogen](https://github.com/Shopify/hydrogen) reference example. 

## Hydrogen
Hydrogen is a React framework and SDK that you can use to build fast and dynamic Shopify custom storefronts.  To learn more head to: 

- [Hydrogen Github Repo](https://github.com/Shopify/hydrogen)
- [Hydrogen Getting Started Docs](https://shopify.dev/custom-storefronts/hydrogen)

## What is Shopify Supply?

[Shopify Supply](https://shopify.supply/) is more than swag. It's your first stop for the highly-anticipated releases you've been asking for, and the surprise drops that'll delight you. If you're interested in unique products designed for entrepreneurs, you're in the right place.

## Getting started

**Requirements:**

- Node v14+
- Yarn

```bash
yarn
yarn dev
```

## Testing

This application is tested with [Cypress](https://docs.cypress.io/).

Cypress is currently configured to run against a local dev server. See instructions for starting a dev server in the `Getting started` section.

### Running headless cypress

```bash
yarn cypress:run
```

### Running headed cypress

```bash
yarn cypress:open
```

## Building for production

```bash
yarn build
```

Then, you can run a local `server.js` using the production build with:

```bash
yarn serve
```
