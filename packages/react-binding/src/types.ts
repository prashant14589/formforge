import { FieldType } from "@df/core";
import React from "react";

export type RendererMap = {
  [key in FieldType]: (args: {
    id: string;
    props: any;
    onChange: (value: any) => void;
  }) => React.ReactNode;
};
