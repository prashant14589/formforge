export const simpleRenderer = {
    text: ({ id, props, onChange }) => (
      <div key={id}>
        <label>{props.label}</label>
        <input
          value={props.value}
          placeholder={props.placeholder}
          onChange={e => onChange(e.target.value)}
        />
        {props.error && <p style={{ color: "red" }}>{props.error}</p>}
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
  