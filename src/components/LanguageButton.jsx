import React from 'react'
import { useState } from 'react';
import { useContext } from 'react';
import { Languages } from '../App';

const Japanese = () => {
    const langVal = useContext(Languages);
    const ger = langVal[0].german;
    const jpn = langVal[2].japanese;
    
    const [nowLanguage, SetNowlanguage] = useState(ger);

    const ChangeJpn = () => {
        SetNowlanguage(jpn)
        console.log(SetNowlanguage(jpn));
    }


    return (
        <>
            <button 
            className='rounded-full bg-slate-500 px-2 py-2 ml-6'
            onClick={ChangeJpn}
            >
                {nowLanguage}
            </button>
        </>
    )
}


const English = () => {
    const langVal = useContext(Languages);
    const ger = langVal[0].german;
    const eng = langVal[1].english;
    
    const [nowLanguage, SetNowlanguage] = useState(ger);

    const ChangeEng = () => {
        SetNowlanguage(eng)
        console.log(SetNowlanguage(eng));
    }

        return(
            <>
                <button 
                className='rounded-full bg-slate-500 px-2 py-2'
                onClick={ChangeEng}
                >
                    &nbsp;{nowLanguage}&nbsp;
                </button>
            </>
        )
}

export { Japanese, English };