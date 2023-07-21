import React, { useContext } from 'react';
import LanguageContext from '../lib/LanguageContext';

const nav = () => {

    const { languageData } = useContext(LanguageContext);

    // const langVal = useContext(Languages);

    // const [nowLanguage, SetNowlanguage] = useState(langVal);

    // const changeLang = (e) => {
    //     SetNowlanguage(e.target.value);
    // }

    // const LANGS = ["german","english","japanese"]
    // const [german, english, japanese] = langVal;
    // const LANGS = [german, english, japanese];
    return (
        <nav>
            <ul className='flex whitespace-nowrap text-xs font-bold lg:text-2xl'>

                <li className='ml-2 mr-5 hover:text-black hover:opacity-80 duration-200'>
                    <a href="#work">
                        {languageData.headerwork}
                    </a>
                </li>
                <li className='mr-5 hover:text-black duration-200'>
                    <a href="#about">
                        {languageData.headerabout}
                    </a>
                </li>
                <li className='mr-5 hover:text-black duration-200'>
                    <a href="https://takaki-masataka-web02.work/news">
                        {languageData.headerblog}
                    </a>
                </li>
                <li className='mr-5 hover:text-black duration-200'>
                    <a href="/">
                        {languageData.headercontact}
                    </a>
                </li>
                {/* <li>
                    {LANGS.map(_lang => {
                        return(
                            <label htmlFor="" className='rounded-full bg-slate-500 px-2 py-2 '>
                                <input type="radio" key={_lang} value={_lang} checked={nowLanguage === _lang} onChange={changeLang} />
                                {_lang}
                            </label>
                        )
                    })};
                </li> */}
            </ul>
        </nav>
    )
}

export default nav