// import React from 'react'
import React, { useContext } from 'react';
import LanguageContext from '../lib/LanguageContext';
import Face6Icon from '@mui/icons-material/Face6';

const PersonInfo = () => {
  const { languageData } = useContext(LanguageContext);

  return (
    <>
        <div className='bg-gray-200/30 backdrop-blur-lg border border-gray-200/30 shadow-lg mt-6 pl-1 pr-4 py-3'>
                <Face6Icon style={{ fontSize: "2rem" }}/>
                <h1 className="text-sm font-bold text-white mt-2">
                    tkg_web_making
                </h1>
                <p className="mt-5 text-white">
                  {languageData.abouttxt}
                </p>
        </div>
    </>
  )
}

export default PersonInfo