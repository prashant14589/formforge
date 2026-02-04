import React from "react";
import { FormSchema } from "@df/core";
import { useFormEngine } from "./useFormEngine";
import { RendererMap } from "./types";

interface Props {
  schema: FormSchema;
  renderer: RendererMap;
}

export function FormRenderer({ schema, renderer }: Props) {
  const form = useFormEngine(schema);

  const instructions = form.getInstructions();

  return (
    <>
      {instructions.map(instr =>
        renderer[instr.type]({
          id: instr.id,
          props: instr.props,
          onChange: value =>
            form.updateValue(instr.id, value)
        })
      )}
    </>
  );
}
