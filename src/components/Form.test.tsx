import React from "react";
import { render } from "@testing-library/react";
import Form from "./Form";

/** Test if Form component renders correctly */
it('Form renders', () => {
    const {getByTestId} = render(<Form search='' setSearch='' />)
    const formComponent = getByTestId('formTest');
    expect(formComponent).toBeTruthy();
});