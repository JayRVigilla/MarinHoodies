import type { Meta, StoryObj } from "@storybook/react";
import { DatePicker } from "./DatePicker";

// * More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "components/DatePicker",
  component: DatePicker,
  parameters: {
    // * Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // * This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // * More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
  args: {},
} satisfies Meta<typeof DatePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

// * More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    // * args go here
    label: "test",
    value: undefined,
    min: "2016-12-05",
    max: "2020-12-05",
    onChange: () => {},
  },
};
