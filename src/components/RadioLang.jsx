import React, { useContext } from 'react';
import LanguageContext from '../lib/LanguageContext';


const RadioLang = () => {
    const { handleLanguageChange,selectedLanguage } = useContext(LanguageContext);

  return (
    <div className='flex gap-2 items-center mt-3'>
        <div>
            <label htmlFor='german' className='hover:text-black duration-100'>
            <input
                type="radio"
                value="german"
                id='german'
                className='mr-1 '
                checked={selectedLanguage === 'german'}
                onChange={handleLanguageChange}
            />
            German
            </label>
        </div>
        <div>
          <label htmlFor='english' className='hover:text-black duration-100'>
            <input
              type="radio"
              value="english"
              id='english'
              className='mr-1 '
              checked={selectedLanguage === 'english'}
              onChange={handleLanguageChange}
            />
            English
          </label>
        </div>
        <div>
          <label htmlFor='japanese' className='hover:text-black duration-100'>
            <input
              type="radio"
              value="japanese"
              id='japanese'
              className='mr-1 '
              checked={selectedLanguage === 'japanese'}
              onChange={handleLanguageChange}
            />
            Japanese
          </label>
        </div>
    </div>
  )
}

export default RadioLang