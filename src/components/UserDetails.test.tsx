import React from "react";
import { render } from "@testing-library/react";
import UserDetails from "./UserDetails";

/** Test if UserDetails component renders correctly */
it('UserDetails renders', () => {
    const {getByTestId} = render(<UserDetails user={[]} />)
    const userDetailsComponent = getByTestId('userDetailsTest');
    expect(userDetailsComponent).toBeTruthy();
});