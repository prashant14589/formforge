import { FormRenderer } from "@df/react-binding";
import { FormSchema } from "@df/core";
import { simpleRenderer } from "./simpleRenderer";

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

export default function App() {
  return (
    <div style={{ padding: 20 }}>
      <h2>Dynamic Form Playground</h2>

      <FormRenderer
        schema={schema}
        renderer={simpleRenderer}
      />
    </div>
  );
}
