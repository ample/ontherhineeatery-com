# Menu Sections

The `MenuSections` component generates each menu section inside of a tab,
including the title and all of its menu items.

## Props

- `label` (required string) - Generates aria label active tab panel
- `sections` (required array) - All Sections data
- `activeIdx` (number) - Currently active tab panel


## Usage

This component is rendered by `MobileMenus` or `DesktopMenus`.

```jsx
<MenuSection label={} sections={} activeIdx={} />
```
