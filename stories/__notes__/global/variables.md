# Global Variables

Color, Font, Breakpoint, and Screen variable objects can be imported to any component.

To add or update variables, see `/components/global/variables`.

## Usage

#### Option 1

Import any combination of the three variable objects and use them directly:

```js
import { colors, fonts, screen } from "./global/variables"

colors.robinegg
```

#### Option 2

Import all variable objects under a parent object:

```js
import * as g from "./global/variables"

g.colors.robinegg
```

## The Screen Object (Media Queries)

The `screen` object is used for media queries.

It has two child objects - `min` and `max`, representing `(min-width:)` and `(max-width:)` respectively.

`min` and `max` each have four breakpoints, listed below. These breakpoints match the `react-grid-system`.

### Output

Screen variables include the entire `min-width` or `max-width` query. For example:

```jsx
${screen.min.lg} // => (min-width: 992px)
${screen.max.lg} // => (max-width: 991px)
${screen.min.md} and ${screen.max.lg} // => (min-width: 768px) and (max-width: 991px)
```

### Breakpoints

```jsx
sm: 576px
md: 768px
lg: 992px
xl: 1200px
```

### Devices

```jsx
Phone:   0px  to sm
Tablet:  sm to md
Desktop: md +
```
