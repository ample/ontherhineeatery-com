# FormSelect Utility

The FormSelect utility is a custom-styled select field. It extends the
[`react-select`](https://react-select.com/) plugin.

## Field Options

The `options` prop is an array of objects with `value` and `label` keys. The dropdown menu will scroll if it has more than 7 options.

The `placeholder` text can be passed in as a string.

```jsx
<FormSelect
  placeholder="Placeholder"
  options={[
    { value: "opt1", label: "Option 1" },
    { value: "opt2", label: "Option 2" },
  ]}
/>
```

## Additional Props

See the `react-select`
[documentation](https://www.npmjs.com/package/react-select).


## Error State

Add the utility class `.invalid` to this field when a required field is missing
or invalid. This adds a red border. (See knob example.)
