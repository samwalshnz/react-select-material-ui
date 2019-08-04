# @appgeist/react-select-material-ui

[![NPM version][npm-image]][npm-url]
[![License][license-image]][license-url]

An outlined [Material-UI](https://material-ui.com) input component based on [react-select](https://react-select.com/home), inspired by the [Autocomplete section in Material-UI docs](https://material-ui.com/components/autocomplete).

Supports [react-select/async](https://react-select.com/async) and [react-select/creatable](https://react-select.com/creatable).

## Usage

```js
import React, { Fragment, useState } from "react";
import Select from "@appgeist/react-select-material-ui";

const KINGDOMS = [
  { value: "AS", label: "Astur" },
  { value: "FA", label: "Fargos" },
  { value: "LE", label: "Laeden" },
  { value: "TH", label: "Therras" },
  { value: "VE", label: "Vessar" }
];

export default () => {
  const [kingdom, setKingdom] = useState(null);

  return (
    <Fragment>
      <h1>Fictional places:</h1>
      <Select
        id="place"
        label="Kingdom"
        placeholder="Select a kingdom"
        options={KINGDOMS}
        value={kingdom}
        onChange={setKingdom}
        isClearable
        helperText="Where would you like to live?"
      />
    </Fragment>
  );
};
```

## Async/creatable select

- Providing an `{ isAsync: true }` prop a will generate an [async](https://react-select.com/async) select;
- Providing an `{ isCreatable: true }` prop a will generate a [creatable](https://react-select.com/creatable) select;
- `isAsync` and `isCreatable` can be combined.

## Component props

- id (string);
- label (string);
- error (string);
- helperText (string);
- isAsync (bool);
- isCreatable (bool);
- all other props are forwarded to react-select component - see [the API docs](https://react-select.com/props).

## Peer dependencies

- react (> 16.8 with hooks);
- prop-types;
- clsx;
- @material-ui/core;
- material-ui/styles.

## License

The [ISC License](LICENSE).

[npm-image]: https://img.shields.io/npm/v/@appgeist/react-select-material-ui.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/@appgeist/react-select-material-ui
[license-image]: https://img.shields.io/npm/l/@appgeist/react-select-material-ui.svg?style=flat-square
[license-url]: LICENSE