export type FieldType = "text" | "select";

export interface VisibilityRule {
  dependsOn: string;
  equals: any;
}

export interface FieldState {
  value: any;
  error?: string;
  visible: boolean;
}

export type FormState = Record<string, FieldState>;
