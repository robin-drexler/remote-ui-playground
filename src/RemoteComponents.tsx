import React from "react";
import { createRemoteReactComponent } from "@remote-ui/react";

// export const Text = createRemoteReactComponent<'Text',
//   Omit<import('@shopify/checkout-web-ui').TextProps, 'children'>>('Text');

export const Card = createRemoteReactComponent<
  "Card",
  Omit<React.ComponentProps<typeof import("@shopify/polaris").Card>, "children">
>("Card");
export const Button = createRemoteReactComponent<
  "Button",
  Omit<
    React.ComponentProps<typeof import("@shopify/polaris").Button>,
    "children"
  >
>("Button");

export const TextField = createRemoteReactComponent<
  "TextField",
  Omit<
    React.ComponentProps<typeof import("@shopify/polaris").TextField>,
    "children"
  >
>("TextField");

export const DataTable = createRemoteReactComponent<
  "DataTable",
  Omit<
    React.ComponentProps<typeof import("@shopify/polaris").DataTable>,
    "children"
  >
>("DataTable");
