import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { MapControls } from "./MapControls";
import { fn } from "@storybook/test";

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
const [crimeSelector, setCrimeSelector] = useState(false)
const [foodInspectionSelector, setFoodInspectionSelector] = useState(false)


  return (
    <MapControls
      radius={radius}
      setRadius={setRadius}
      setCrimes={fn()}
      setFoodInspections={fn()}
      crimeSelector={crimeSelector}
      setCrimeSelector={setCrimeSelector}
      foodInspectionSelector={foodInspectionSelector}
      setFoodInspectionSelector={setFoodInspectionSelector}
    />
  );
};
