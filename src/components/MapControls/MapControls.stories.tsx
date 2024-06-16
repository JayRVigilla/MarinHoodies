import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { MapControls } from "./MapControls";

export default {
  title: "components/MapControls",
  component: MapControls,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],

  argTypes: {},
  args: {},
} satisfies Meta<typeof MapControls>;

export const MapControlsDemo = () => {
  const [radius, setRadius] = useState(3);

  return <MapControls radius={radius} setRadius={setRadius}/>
};
