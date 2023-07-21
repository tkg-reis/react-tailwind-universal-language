import React from "react";
import Nav from './Nav'
import Logo from './Logo'
import RadioLang from "./RadioLang";

function Header() {
    
    return(
        <header className="text-blue-100  font-medium text-base  flex-col bg-gradient-to-r from-cyan-500 to-blue-500 text-center w-full pt-4">
            <div className="flex  justify-around items-center flex-col lg:flex-row"
            >
                <Logo/>
                <div className="flex items-center flex-col mt-4">
                    <Nav/>
                    <RadioLang/>
                </div>
            </div>
        </header>
    );
}

export default Header;