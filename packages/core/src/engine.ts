import { FormSchema, FieldSchema } from "./schema";
import { FormState } from "./types";

export class FormEngine {
  private schema: FormSchema;
  private state: FormState = {};

  constructor(schema: FormSchema) {
    this.schema = schema;
    this.initializeState();
  }

  private initializeState() {
    this.schema.fields.forEach(field => {
      this.state[field.id] = {
        value: field.defaultValue ?? "",
        visible: true
      };
    });

    this.evaluateVisibility();
    this.validate();
  }

  getState(): FormState {
    return this.state;
  }

  updateValue(fieldId: string, value: any) {
    this.state[fieldId].value = value;

    this.evaluateVisibility();
    this.validate();
  }

  private evaluateVisibility() {
    this.schema.fields.forEach(field => {
      if (!field.visibleIf) {
        this.state[field.id].visible = true;
        return;
      }

      const dependencyValue =
        this.state[field.visibleIf.dependsOn]?.value;

      this.state[field.id].visible =
        dependencyValue === field.visibleIf.equals;
    });
  }

  private validate() {
    this.schema.fields.forEach(field => {
      const fieldState = this.state[field.id];

      if (!fieldState.visible) {
        fieldState.error = undefined;
        return;
      }

      if (field.required && !fieldState.value) {
        fieldState.error = "This field is required";
      } else {
        fieldState.error = undefined;
      }
    });
  }

  getRenderInstructions() {
    return this.schema.fields
      .filter(field => this.state[field.id].visible)
      .map(field => this.buildInstruction(field));
  }

  private buildInstruction(field: FieldSchema) {
    const state = this.state[field.id];

    return {
      id: field.id,
      type: field.type,
      props: {
        label: field.label,
        value: state.value,
        error: state.error,
        placeholder:
          field.type === "text" ? field.placeholder : undefined,
        options:
          field.type === "select" ? field.options : undefined
      }
    };
  }
}
