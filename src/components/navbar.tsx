import {links} from "@/lib/data";
import React from "react";
import Header from "@/components/header";
import HamburgerMenu from "@/components/hamburger-menu";

export default function Navbar() {
    return(
        <nav>
            <HamburgerMenu links={links}/>
            <Header links={links}/>
        </nav>
    )
}