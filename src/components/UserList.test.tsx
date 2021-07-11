import React from "react";
import { render } from "@testing-library/react";
import UserList from "./UserList";

/** Test if UserList component renders correctly */
it('UserList renders', () => {
    const {getByTestId} = render(<UserList userData={[]} />)
    const userListComponent = getByTestId('userListTest');
    expect(userListComponent).toBeTruthy();
});