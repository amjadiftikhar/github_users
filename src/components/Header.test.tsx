import React from "react";
import { render } from "@testing-library/react";
import Header from "./Header";

/** Test if Header component renders correctly */
it('Header renders', () => {
    const {getByTestId} = render(<Header />)
    const headerComponent = getByTestId('headerTest');
    expect(headerComponent).toBeTruthy();
});