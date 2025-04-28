import type { Meta, StoryObj } from "@storybook/react";
import { IconLink } from "./IconLink";
import { faPenNib, faFilePdf } from "@fortawesome/free-solid-svg-icons";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "components/IconLink",
  component: IconLink,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // * More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
  args: {
    href: "",
    label: "Default",
    icon: faFilePdf,
  },
} satisfies Meta<typeof IconLink>;

export default meta;
type Story = StoryObj<typeof meta>;

// * More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    href: "",
    label: "Primy",
    icon: faFilePdf,
  },
};

export const Secondary: Story = {
  args: {
    href: "",
    label: "Secondary",
    icon: faPenNib,
  },
};
