import { FormEngine, FormSchema } from "./src";

const schema: FormSchema = {
  schemaVersion: "1.0",
  fields: [
    {
      id: "name",
      type: "text",
      label: "Name",
      required: true
    },
    {
      id: "country",
      type: "select",
      label: "Country",
      options: [
        { label: "India", value: "IN" },
        { label: "USA", value: "US" }
      ]
    }
  ]
};

const engine = new FormEngine(schema);

console.log(engine.getRenderInstructions());
