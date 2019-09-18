# Forms

Wrap all form fields in the `Form` component. This component should contain all
form logic and should not include any styling. See Section Container below for
implementation details.

## Styles

Form field styles are part of the global stylesheet. See
`components/global/_forms.js` to edit styles.

## Utility Classes

##### `.invalid`

Apply this class when a required field is missing or invalid. It adds a red
border to the field. (See story knob.)

##### `.field-50`

Shrinks a form field to 50% width. Should be used with one of the `.col-`
classes. These field switch to 100% width on mobile.

##### `.col-left`

Adds right margin to `.form-50`.

##### `.col-right`

Adds left margin to `.form-50`.

## Section Container

A form section's background color, header, grid system, etc. should go
inside a `Container` component. The `Form` component should only include
form fields as children.


```jsx
<Container>
  <Row>
    <Col>
      <h3>Form Header</h3>
      <Form>
        {/* Form fields */}
      </Form>
    </Col>
  </Row>
</Container>
```

## `FormSelect` Utility

Any dropdown selection fields should use the `FormSelect` utility instead of a standard `<select>` field. See FormSelect Utility story.


```jsx
<Form>
  <FormSelect
    placeholder="Placeholder"
    options={[
      { value: "opt1", label: "Option 1" },
      { value: "opt2", label: "Option 2" },
    ]}
  />
</Form>
```

## Submit Button

Use the `Button` component for the submit button instead of
`<input type="submit"/>`.

```jsx
<Button type="submit">
  Submit Button
</Button>
```


## Putting It All Together

Here is an example of a complete form section with a background color, header, and grid:

```jsx
<Container bgColor={g.colors.gray100}>
  <Row center="xs">
    <Col md={9} lg={7} xl={6}>

      <h3>Form Header</h3>

      <Form>
        <input type="text" />
        <FormSelect options={options} />
        <Button type="submit">Submit</Button>
      </Form>

    </Col>
  </Row>
</Container>
```
