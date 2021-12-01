import React from "react";
import Map from "./Map";

export default {
  component: "Map",
  title: "Pages/Map",
  parameters: {
    layout: "fullscreen",
  },
};

export const Default = () => <Map />;
