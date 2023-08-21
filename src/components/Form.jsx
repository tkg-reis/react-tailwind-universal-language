import React, { useContext } from 'react';
import LanguageContext from '../lib/LanguageContext';

const Form = () => {
    const { languageData } = useContext(LanguageContext);
    return (
        <>
            <form action="" className='flex flex-col items-center pb-8 mx-auto w-11/12 text-white lg:text-xl'>
                <div className="mt-5 w-3/4 lg:w-1/2">
                    <label htmlFor="name" className=''>
                        {languageData.contactname}
                    </label>
                    <input type="text" name="name" id="name" className='block w-full rounded-xl'/>
                </div>
                <div className="mt-3 w-3/4 lg:w-1/2">
                    <label htmlFor="email" className=''>
                        {languageData.contactemail}
                    </label>
                    <input type="emil" name="email" id="email" className='block w-full rounded-xl'/>
                </div>
                <div className="mt-3 w-3/4 lg:w-1/2">
                    <label htmlFor="question" className=''>
                        {languageData.contactcontent}
                    </label>
                    <textarea name="question" id="question" cols="30" rows="10" className='block w-full rounded-xl'></textarea>
                </div>
                <div className="flex items-center mt-6">
                    <input type="checkbox" name="" id="" />
                    <a href="" className='ml-3 lg:text-xs underline'>
                        {/* api追加 */}
                        <p>{languageData.privacyPolicy}</p>
                    </a>
                </div>
                    <input type="submit" value={languageData.contactsubmit}  className='w-full max-w-xs mt-4 rounded-3xl bg-teal-600 hover:bg-black hover:text-white'/>
            </form>
        </>
    )
}

export default Form;