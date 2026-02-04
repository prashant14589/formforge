import * as React from "react";
import { TextField, MenuItem } from "@mui/material";
import { RendererMap } from "@df/react-binding";

export const muiRenderer: RendererMap = {
  text: ({ id, props, onChange }) => (
    <TextField
      key={id}
      label={props.label}
      value={props.value}
      error={!!props.error}
      helperText={props.error}
      placeholder={props.placeholder}
      onChange={e => onChange(e.target.value)}
      fullWidth
      margin="normal"
    />
  ),

  select: ({ id, props, onChange }) => (
    <TextField
      key={id}
      select
      label={props.label}
      value={props.value}
      error={!!props.error}
      helperText={props.error}
      onChange={e => onChange(e.target.value)}
      fullWidth
      margin="normal"
    >
      {props.options?.map((opt: any) => (
        <MenuItem key={opt.value} value={opt.value}>
          {opt.label}
        </MenuItem>
      ))}
    </TextField>
  )
};
