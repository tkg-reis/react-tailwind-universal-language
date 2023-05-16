import React from "react";
import Nav from './Nav'
import Logo from './Logo'

function Header() {
    
    return(
        <header className="text-blue-100 border-b font-medium text-base  flex-col bg-cyan-800 text-center h-28 w-full">
            <div className="flex  justify-around items-center"
            >
                <Logo/>
                <div className="flex items-center">
                    <Nav/>
                </div>
            </div>
        </header>
    );
}

export default Header;