//* This is the layout component for the app
//* It is the parent component for all other components
//* We will call the Header and Footer components here
//* We will also call the children components here
//* The children components are the components that are nested inside the Layout component

import React, { useState, useEffect } from 'react';
import { Header } from "../components";

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            {children}
        </>
    );
}

export default Layout;