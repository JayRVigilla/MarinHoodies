import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'twitter',
      values: [
        {
          name: 'twitter',
          value: '#00aced',
        },
        {
          name: 'facebook',
          value: '#3b5998',
        },
        {
          name: 'dark',
          value: '#43404f',
        },
        {
          name: 'light',
          value: '#f0e9e9',
        },
      ],
    },
  },
};

export default preview;
