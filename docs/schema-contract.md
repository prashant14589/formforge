# Schema Contract (v1)

## Supported Field Types
- text
- select

## Field Schema

{
  id: string
  type: "text" | "select"
  label: string
  defaultValue?: any
  required?: boolean
  visibleIf?: {
    dependsOn: string
    equals: any
  }
}

## Versioning

schemaVersion: "1.0"
