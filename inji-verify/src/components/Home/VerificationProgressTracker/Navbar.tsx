import React from 'react';
import {NavbarContainer} from "./styles";

function Navbar(props: any) {
    // Logo goes here
    return (
        <NavbarContainer>
            <img src='/assets/images/inji_verify.svg' height='100%'/>
        </NavbarContainer>
    );
}

export default Navbar;
