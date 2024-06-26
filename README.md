# Description

This repository is a refactor of the legacy project page available at [AniWorld Advanced Search](https://aniworld.netlify.app/advanced-search/). The refactor includes various architectural enhancements, aiming to improve functionality while maintaining minimalistic designs. Several additional complexity layers, such as caching with Tanstack and Redux, were introduced to showcase these technologies.

Explore the refactored project here: [Lawndemo](https://lawndemo-e6yw.vercel.app/).

Highlights:

<div style="display: flex; align-items: center; justify-content: space-between;">
  <img src="https://github.com/rmc-softdev/lawndemo/assets/64040204/5d0d0d11-0ec8-4e8b-bce1-0d10aeaee1cb" style="width: 49%; height: auto;" />
  <img src="https://github.com/rmc-softdev/lawndemo/assets/64040204/7ef7395d-65eb-40c7-8d7a-8f5ddf26b4cf" style="width: 49%; height: auto;" />
</div>


# Steps to run

1. Clone the repo.
2. Rum `npn ci`.
3. Run `npn run dev`
4. Open on port `http://localhost:3000/`.

As with any modern stack, it requires node 18+ and it's better suited for Unix-like systems.

# Architecture.

The project has:

- E2E testing with Cypress
- Unit testing with React Testing Library.
- CI/CD
- Linting, prettier and several other configurations and checks.
- Uses latest tooling and techniques, such as next@14.
  - server components
  - server actions
  - prefetching SSR
  - app domain/layout
  - and much more
- Uses react-query for caching API call.
- Uses redux-toolkit for managing complex store interactions.
- Debounce for searching with live caching for keeping track of the last searched entries.
- TypeScript with full type, including API responses and not a single `any`.
- Scalable file system using the slice pattern (duck-like) for Redux and a lot of Layer-Based Organization.
