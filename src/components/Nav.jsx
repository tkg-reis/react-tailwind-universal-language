import React, { useContext } from 'react';
import LanguageContext from '../lib/LanguageContext';
import AnchorLink from "react-anchor-link-smooth-scroll";


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
                    <AnchorLink href="#work">
                        {languageData.headerwork}
                    </AnchorLink>
                </li>
                <li className='mr-5 hover:text-black duration-200'>
                    <AnchorLink href="#about">
                        {languageData.headerabout}
                    </AnchorLink>
                </li>
                <li className='mr-5 hover:text-black duration-200'>
                    <AnchorLink href="https://takaki-masataka-web02.work/news">
                        {languageData.headerblog}
                    </AnchorLink>
                </li>
                <li className='mr-5 hover:text-black duration-200'>
                    <AnchorLink href="#contact">
                        {languageData.headercontact}
                    </AnchorLink>
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