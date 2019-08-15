import React from 'react'
import { prependOnceListener } from "cluster";

const layout = (props) => {
    <React.Fragment>
    <div>Toolbar, SideDrawer, Backdrop</div>
    <main>
        {props.children}
    </main>
    </React.Fragment>
};