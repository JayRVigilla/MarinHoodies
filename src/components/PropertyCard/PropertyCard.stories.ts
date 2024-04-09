import type { Meta, StoryObj } from '@storybook/react';
import { PropertyCard } from './PropertyCard';

// * More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'components/PropertyCard',
  component: PropertyCard,
  parameters: {
    // * Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // * This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // * More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {

  },
  args: {
  },
} satisfies Meta<typeof PropertyCard>;

export default meta;
type Story = StoryObj<typeof meta>;

// * More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    // * args go here
    price:"250,000",
    image: {
      src: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=2148&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "white and brown concrete building under blue sky during daytime"
    },
    address:"123 Some St",
    city:"Anytown",
    state:"YY",
  }
};
