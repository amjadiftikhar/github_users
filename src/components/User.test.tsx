import React from "react";
import { render } from "@testing-library/react";
import User from "./User";

/** Test if User component renders correctly */
it('User renders', () => {
    const {getByTestId} = render(<User userData={[]} />)
    const userComponent = getByTestId('userTest');
    expect(userComponent).toBeTruthy();
});