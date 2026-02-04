# Dynamic Form Engine Architecture

## Vision
Schema-driven dynamic form engine separating logic and UI.

---

## Package Ecosystem

### @df/core
- Schema parsing
- State management
- Validation
- Render instruction generation
- Framework independent

---

### @df/react-binding
- React lifecycle integration
- FormRenderer component

---

### @df/mui-adapter
- Maps render instructions to MUI components

---

### @df/bootstrap-adapter
- Maps render instructions to Bootstrap components
