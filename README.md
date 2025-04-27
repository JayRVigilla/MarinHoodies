# Marin Hoodies


Using open APIs available by [Marin County](https://data.marincounty.org/) and [Leaflet](https://leafletjs.com/), `Marin Hoodies` maps county data. There is plenty of knowledge that a person should have when looking to buy, sell, or rent a home in Marin County.

## Tech/Dev Info
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

### Getting Started
Install dependencies:
`npm install`

Set up `.env` for
```
NEXT_PUBLIC_POSITIONSTACK_API_KEY=
```

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
npm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

### Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

### Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

### Storybook
[Storybook](https://storybook.js.org/) is a Frontend tool for building components in a separate environment than the project. Meaning, you don't have to load the entire project to develop components.

We also get documentation for our components and the ability to demo for PRs and other stakeholders.

#### Usage
When building a component, also create a file in the same folder `COMPONENT_NAME.stories.jsx`. Use [`Button.stories.jsx`](src/reactComponents/sharedComponents/Button/Button.stories.jsx) and [`OpportunityCardSmall.stories.jsx`](src/reactComponents/OpportunityCardSmall/OpportunityCardSmall.stories.jsx) as templates.

#### Configurations
Some background colors from the Design are configured so you can see your component with the same color as seen in Figma.

#### `npm run storybook`
This script will start Storybook and open `localhost:6006` in your browser. Find your component in the left-hand menu and develop away.