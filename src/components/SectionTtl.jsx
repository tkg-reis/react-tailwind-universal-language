import React from 'react'
import WorkIcon from '@mui/icons-material/Work';
import Face6Icon from '@mui/icons-material/Face6';
import EmailIcon from '@mui/icons-material/Email';
import { LanguageData } from '../lib/languageData';

const WerkTxt = () => {
    return (
        <>
            <div className='flex justify-center flex-col items-center py-8'>
                <div className='flex gap-6'>
                    <WorkIcon style={{ fontSize: "2rem" }}/>
                    <h2>hallo</h2>
                </div>
                    <p>hallo welt</p>
            </div>
        </>
    )
}

const UeberMich = () => {
    return(
        <>
            <div className='bg-gray-200/30 backdrop-blur-lg border border-gray-200/30 shadow-lg px-6 py-2   '>
                    <Face6Icon style={{ fontSize: "2rem" }}/>
                    <h1 className="text-xl">
                        tkg_web_making
                    </h1>
                    <p className="mt-5">
                        Willkommen!
                        <br />
                        Vielen dank für mein Webseite sehen <br /> 
                        Ich bin tkg. Schön, Sie kennenzulernen
                    </p>
            </div>
        </>
    )
}

const KontaktTxt = () => {
    return(
        <>
            <div className='flex justify-center items-center mt-8'>
                <div className='flex gap-6'>
                    <EmailIcon style={{ fontSize: "2rem" }}/>
                    <h2>Kontkt</h2>
                </div>
            </div>
        </>
    )
}

export { WerkTxt, UeberMich, KontaktTxt }; 