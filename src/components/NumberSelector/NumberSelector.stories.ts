import type { Meta, StoryObj } from "@storybook/react";
import { NumberSelector } from "./NumberSelector";

// * More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "components/NumberSelector",
  component: NumberSelector,
  parameters: {
    // * Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // * This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // * More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
  args: {},
} satisfies Meta<typeof NumberSelector>;

export default meta;
type Story = StoryObj<typeof meta>;

// * More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    // * args go here
    value: undefined,
    setValue: () => {},
    label: "Bedrooms",
  },
};
