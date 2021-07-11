import React from "react";
import { render } from "@testing-library/react";
import Loader from "./Loader";

/** Test if Loader component renders correctly */
it('Loader renders', () => {
    const {getByTestId} = render(<Loader />)
    const loaderComponent = getByTestId('loaderTest');
    expect(loaderComponent).toBeTruthy();
});