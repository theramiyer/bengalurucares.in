import React from "react";

import { BrandHeading, FetchWards, Autocomplete } from "./components";

import css from "./App.module.css";

export const App = () => {
  return (
    <div className={css.root}>
      <FetchWards />
      <BrandHeading className={css.brandTitle} />
      <Autocomplete />
    </div>
  );
};