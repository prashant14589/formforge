import { FieldType, VisibilityRule } from "./types";

export interface BaseField {
  id: string;
  type: FieldType;
  label: string;
  defaultValue?: any;
  required?: boolean;
  visibleIf?: VisibilityRule;
}

export interface TextField extends BaseField {
  type: "text";
  placeholder?: string;
}

export interface SelectOption {
  label: string;
  value: any;
}

export interface SelectField extends BaseField {
  type: "select";
  options: SelectOption[];
}

export type FieldSchema = TextField | SelectField;

export interface FormSchema {
  schemaVersion: string;
  fields: FieldSchema[];
}
