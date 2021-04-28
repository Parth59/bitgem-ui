# Bitgem UI

This is the UI for the https://bitgem.co site. This site is built using React, NextJS and TailwindCSS

## Initial setup

To setup the project, first run `yarn install`

if you want to be able to deploy a staging server, you'll need to install vercel by running `npm i -g vercel` and create an account.

## Develop

To run a local dev server, after cloning the repository run:

- yarn dev
- Navigate to https://localhost:3000

## Deploy

To deploy a staging server:

- vercel

To deploy to production:

- vercel --prod

## Notes

- A `typecheck` script is also added to `package.json`, which runs TypeScript's `tsc` CLI in `noEmit` mode to run type-checking separately. You can then include this, for example, in your `test` scripts.
