import { useRef, useState } from "react";
import { FormEngine, FormSchema } from "@df/core";

export function useFormEngine(schema: FormSchema) {
    const engineRef = useRef<FormEngine | null>(null);


    if (!engineRef.current) {
        engineRef.current = new FormEngine(schema);
      }

  const [, setTick] = useState(0);

  const forceUpdate = () => {
    setTick(x => x + 1);
  };

  const updateValue = (fieldId: string, value: any) => {
    engineRef.current!.updateValue(fieldId, value);
    forceUpdate();
  };

  return {
    engine: engineRef.current!,
    updateValue,
    getState: () => engineRef.current!.getState(),
    getInstructions: () =>
      engineRef.current!.getRenderInstructions()
  };
}
