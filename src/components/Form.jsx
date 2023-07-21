import React, { useContext } from 'react';
import LanguageContext from '../lib/LanguageContext';

const Form = () => {
    // const [ german, english , japanese ] = useContext(Languages);
    const { languageData } = useContext(LanguageContext);
    // console.log(languageData);
    return (
        <>
            <form action="" className='flex flex-col justify-center items-center pb-8 mx-auto w-11/12 text-white'>
                <label htmlFor="name" className='mt-5'>
                    {languageData.contactname}
                </label>
                <input type="text" name="name" id="name" className='w-full max-w-sm'/>
                <label htmlFor="email" className='mt-3'>
                    {languageData.contactemail}
                </label>
                <input type="emil" name="email" id="email" className='w-full max-w-sm'/>
                <label htmlFor="question" className='mt-3'>
                    {languageData.contactcontent}
                </label>
                <textarea name="question" id="question" cols="30" rows="10" className='w-full max-w-sm'></textarea>
                <input type="submit" value={languageData.contactsubmit  }  className='w-full max-w-xs mt-4 rounded-3xl bg-teal-600 hover:bg-black hover:text-white'/>
            </form>
        </>
    )
}

export default Form;