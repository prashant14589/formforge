# FormForge

[![License:
MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/Built%20with-TypeScript-blue)]()
[![Architecture](https://img.shields.io/badge/Architecture-Headless%20%2B%20Adapter-green)]()

**Schema-driven dynamic form rendering platform with pluggable UI
adapters.**

------------------------------------------------------------------------

## 🚀 What is FormForge?

FormForge is a modular, schema-driven UI platform that allows
applications to dynamically render forms using API-delivered metadata.

It separates:

-   Business Logic
-   UI Rendering
-   Framework Integration
-   Design System Implementation

------------------------------------------------------------------------

## 🧠 Architecture

                    ┌───────────────┐
                    │   API Schema  │
                    └───────┬───────┘
                            ↓
                    ┌───────────────┐
                    │  Core Engine  │
                    │ (Headless)    │
                    └───────┬───────┘
                            ↓
                    ┌───────────────┐
                    │ React Binding │
                    └───────┬───────┘
                            ↓
            ┌───────────────┼────────────────┐
            ↓               ↓                ↓
       MUI Adapter    Bootstrap Adapter   Custom Adapter
            ↓               ↓                ↓
                    ┌───────────────┐
                    │   UI Output   │
                    └───────────────┘

------------------------------------------------------------------------

## ✨ Key Features

-   Dynamic API-driven forms
-   Headless business logic engine
-   Adapter-based UI abstraction
-   Multi-design system compatibility
-   Type-safe schema model
-   Runtime renderer swapping
-   Validation-ready architecture

------------------------------------------------------------------------

## 📦 Packages

  Package                          Description
  -------------------------------- ---------------------------------
  `@formforge/core`                Form state + schema interpreter
  `@formforge/react-binding`       React lifecycle wrapper
  `@formforge/mui-adapter`         Material UI renderer
  `@formforge/bootstrap-adapter`   Bootstrap renderer (planned)

------------------------------------------------------------------------

## 📥 Installation

``` bash
npm install @formforge/core
npm install @formforge/react-binding
npm install @formforge/mui-adapter
```

Install peer dependencies:

``` bash
npm install @mui/material @emotion/react @emotion/styled
```

------------------------------------------------------------------------

## 🧪 Example Usage

### Define Schema

``` ts
import { FormSchema } from "@formforge/core";

const schema: FormSchema = {
  schemaVersion: "1.0",
  fields: [
    {
      id: "email",
      type: "text",
      label: "Email",
      required: true
    }
  ]
};
```

------------------------------------------------------------------------

### Render Using MUI

``` tsx
import { FormRenderer } from "@formforge/react-binding";
import { muiRenderer } from "@formforge/mui-adapter";

<FormRenderer schema={schema} renderer={muiRenderer} />
```

------------------------------------------------------------------------

## 🎨 Custom Renderer Support

You can implement your own renderer adapter:

``` tsx
export const customRenderer = {
  text: ({ id, props, onChange }) => (
    <input
      value={props.value}
      onChange={(e) => onChange(e.target.value)}
    />
  )
};
```

------------------------------------------------------------------------

## 🔍 Schema Specification

### Text Field

``` ts
{
  id: string;
  type: "text";
  label: string;
  required?: boolean;
}
```

------------------------------------------------------------------------

## 🛠 Local Development

    packages/
      core/
      react-binding/
      mui-adapter/
    playground/

### Install

``` bash
npm install
```

### Build Packages

``` bash
npm run build
```

### Run Playground

``` bash
npm run dev
```

------------------------------------------------------------------------

## 🗺 Roadmap

  Version   Feature
  --------- ------------------------
  v0.3      Conditional visibility
  v0.4      Layout system
  v0.5      Async validation
  v1.0      Visual form builder

------------------------------------------------------------------------

## 🤝 Contributing

We welcome contributions in:

-   Adapter creation
-   Validation rule enhancements
-   Performance improvements
-   Documentation

------------------------------------------------------------------------

## 📄 License

MIT

------------------------------------------------------------------------

## 💡 Vision

FormForge aims to become a universal schema-driven UI composition engine
enabling rapid UI generation across platforms.

------------------------------------------------------------------------

## ⭐ Why FormForge?

Define forms as **data**, not UI code.
