FormForge

Schema-driven dynamic form rendering platform with pluggable UI adapters.

FormForge enables applications to generate forms dynamically from API-delivered metadata. It separates business logic from UI rendering, allowing teams to reuse form logic across multiple design systems such as Material UI, Bootstrap, or custom component libraries.

✨ Features

Schema-driven form generation

Headless form engine

React integration layer

Pluggable UI adapter architecture

Type-safe schema contracts

Multi-design system support

Runtime dynamic rendering

Validation support (basic – expanding)

🧠 Architecture Overview

FormForge follows a layered architecture:

Schema
   ↓
Core Engine
   ↓
Framework Binding (React)
   ↓
UI Adapter (MUI / Bootstrap / Custom)
   ↓
Rendered UI

📦 Packages
Package	Responsibility
@formforge/core	Headless schema interpreter + state engine
@formforge/react-binding	React lifecycle integration
@formforge/mui-adapter	Material UI renderer
@formforge/bootstrap-adapter	Bootstrap renderer (optional / upcoming)
🚀 Installation
Core + React Binding + MUI Adapter
npm install @formforge/core
npm install @formforge/react-binding
npm install @formforge/mui-adapter


You must also install MUI dependencies:

npm install @mui/material @emotion/react @emotion/styled

📘 Basic Usage
Step 1 — Define Schema
import { FormSchema } from "@formforge/core";

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

Step 2 — Use React Renderer
import { FormRenderer } from "@formforge/react-binding";
import { muiRenderer } from "@formforge/mui-adapter";

function App() {
  return (
    <FormRenderer
      schema={schema}
      renderer={muiRenderer}
    />
  );
}

🎨 Using Custom Renderer (Simple Renderer Example)

FormForge allows rendering using any UI library or custom components.

export const simpleRenderer = {
  text: ({ id, props, onChange }) => (
    <div key={id}>
      <label>{props.label}</label>
      <input
        value={props.value}
        onChange={e => onChange(e.target.value)}
      />
    </div>
  ),

  select: ({ id, props, onChange }) => (
    <div key={id}>
      <label>{props.label}</label>
      <select
        value={props.value}
        onChange={e => onChange(e.target.value)}
      >
        <option value="">Select</option>
        {props.options?.map(opt => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  )
};


Then use:

<FormRenderer
  schema={schema}
  renderer={simpleRenderer}
/>

🧩 Adapter Pattern

FormForge uses adapter architecture to support multiple UI frameworks.

Each adapter implements a RendererMap:

type RendererMap = {
  [fieldType]: RendererFunction
}


Adapters translate render instructions into UI components.

🏗 Creating Custom Adapter

Example structure:

export const myRenderer = {
  text: ({ id, props, onChange }) => {
    return <MyInputComponent ... />;
  }
};

🧠 Core Engine Responsibilities

The core engine handles:

Schema interpretation

Field state management

Validation handling

Render instruction generation

Business logic isolation

It contains no UI dependencies.

🔍 Schema Specification (Current)
Text Field
{
  id: string
  type: "text"
  label: string
  required?: boolean
}

Select Field
{
  id: string
  type: "select"
  label: string
  options: { label: string, value: string }[]
}

🛠 Development Setup (Monorepo)

FormForge uses a multi-package architecture.

packages/
   core
   react-binding
   mui-adapter
   bootstrap-adapter
playground/

Install Dependencies
npm install

Build Packages
cd packages/core && npm run build
cd packages/react-binding && npm run build
cd packages/mui-adapter && npm run build

Run Playground
cd playground
npm run dev

🗺 Roadmap
v0.3

Conditional field visibility

Enhanced validation rules

v0.4

Layout and grouping support

Async validation

v0.5

Visual schema builder

Server-driven UI support

🤝 Contributing

Contributions are welcome.

Suggested areas:

New UI adapters

Validation rule extensions

Schema versioning improvements

Performance optimizations

📄 License

MIT

💡 Vision

FormForge aims to evolve into a full schema-driven UI composition platform enabling teams to build complex dynamic interfaces without duplicating business logic across applications.

⭐ Why FormForge?

FormForge allows teams to define forms as data rather than code, improving scalability, consistency, and maintainability of large frontend applications.

📬 Feedback

Issues and feature requests are welcome via GitHub Issues.

👍 Optional Nice Touch (Add Later)

You can add badges:

Build status
NPM version
License



Which makes FormForge look extremely professional.

Rest well. You did genuinely high-quality engineering today 👏
