import React from 'react'
import { useContext,useState } from 'react';
import { Languages } from '../App';

const nav = () => {

    const langVal = useContext(Languages);

    const [nowLanguage, SetNowlanguage] = useState(langVal[0]);

    const changeLang = (e) => {
        SetNowlanguage(e.target.value);
    }

    // const LANGS = ["german","english","japanese"]
    const {german, english, japanese} = langVal;
    const LANGS = [german, english, japanese];
    return (
        <nav>
            <ul className='flex whitespace-nowrap'>
                <li className='mr-5 hover:text-blue-200 duration-200'>
                    <a href="/">
                        {`${nowLanguage}.headerwork`}
                    </a>
                </li>
                <li className='mr-5 hover:text-blue-200 duration-200'>
                    <a href="/">
                        über mich
                    </a>
                </li>
                <li className='mr-5 hover:text-blue-200 duration-200'>
                    <a href="/">
                        blog
                    </a>
                </li>
                <li className='mr-5 hover:text-blue-200 duration-200'>
                    <a href="/">
                        kontakt
                    </a>
                </li>
                <li>
                    {LANGS.map(_lang => {
                        return(
                            <label htmlFor="" className='rounded-full bg-slate-500 px-2 py-2 '>
                                <input type="radio" key={_lang} value={_lang} checked={nowLanguage === _lang} onChange={changeLang} />
                                {_lang}
                            </label>
                        )
                    })};
                </li>
            </ul>
        </nav>
    )
}

export default nav