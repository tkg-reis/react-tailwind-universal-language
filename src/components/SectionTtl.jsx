import WorkIcon from '@mui/icons-material/Work';
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';
import React, { useContext } from 'react';
import LanguageContext from '../lib/LanguageContext';

const WerkTxt = () => {
    const { languageData } = useContext(LanguageContext);
    return (
        <>
            <div className='flex justify-center flex-col items-center py-8 lg:text-3xl' id='#work'>
                <div className='flex items-center flex-col gap-6'>
                    <div className='flex items-center gap-3 mt-4'>
                        <WorkIcon style={{ fontSize: "2rem" }}/>
                        <h2 className='text-white'>
                            {languageData.workttl}
                        </h2>
                    </div>
                        <p className='text-white'>
                            {languageData.worktxt}  
                        </p>
                </div>
            </div>
        </>
    )
}

const UeberMich = () => {
    const { languageData } = useContext(LanguageContext);

    return(
        <>
            <div className='flex items-center gap-6 justify-center mt-10 lg:text-3xl' id='about'>
                <PersonIcon style={{ fontSize: "2rem" }} />
                <h2 className='text-white'>
                    {languageData.aboutttl}
                </h2>
            </div>
        </>
    )
}

const KontaktTxt = () => {
    const { languageData } = useContext(LanguageContext);

    return(
        <>
            <div className='flex justify-center items-center mt-8 lg:text-3xl' id='contact'>
                <div className='flex gap-6 items-center'>
                    <EmailIcon style={{ fontSize: "2rem" }}/>
                    <h2 className='text-white'>
                        {languageData.contactttl}
                    </h2>
                </div>
            </div>
        </>
    )
}

export { WerkTxt, UeberMich, KontaktTxt }; 