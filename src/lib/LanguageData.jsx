import React, { useState } from "react";
import LanguageContext from "./LanguageContext";

export const LanguageData = [
    {
        german: {
            headerwork:"Mein Werke",
            headerabout: "Über mich",
            headerblog: "Blog",
            headercontact: "Kontakt",
            workttl: "Mein Werke",
            worktxt:"Diese Werke ist von mir gemacht.",
            aboutttl: "Über mich",
            abouttxt: "Willkommen Vielen dank für mein Webseite sehen. Ich bin tkg. Schön, Sie kennenzulernen",
            contactttl: "kontakt",
            contactname: "Ihnen Name",
            contactemail: "Ihnen Email",
            contactcontent: "Ihnen Fragen",
            contactsubmit: "Senden"
        },
        english: {
            headerwork:"My work",
            headerabout: "About me",
            headerblog: "Blog",
            headercontact: "Contact",
            workttl: "My work",
            worktxt:"There are portfolio which i made",
            aboutttl: "About me",
            abouttxt: "Wellcome! thank you for wacthing my website. I`m tkg. nice to meet you",
            contactttl: "Contact",
            contactname: "Your name",
            contactemail: "Your email",
            contactcontent: "Your question",
            contactsubmit: "Send"
        },
        japanese: {
            headerwork:"わたしの作品",
            headerabout: "私について",
            headerblog: "ブログへ",
            headercontact: "お問い合わせ",
            workttl: "私の作品",
            worktxt:"これらの作品は私の作成物です",
            aboutttl: "私について",
            abouttxt: "ようこそ!私のウェブサイトを見て頂きありがとうございます。私はTKGと申します。よろしくお願いします。",
            contactttl: "お問い合わせ",
            contactname: "お名前",
            contactemail: "メール",
            contactcontent: "お問い合わせ内容",
            contactsubmit: "送信"
        }
    }
];

const LanguageProvider = ({ children }) => {
    const [selectedLanguage, setSelectedLanguage] = useState('german');
  
    const handleLanguageChange = (event) => {
      setSelectedLanguage(event.target.value);
    };
  
    const languageData = LanguageData[0][selectedLanguage];
  
    return (
      <LanguageContext.Provider value={{ languageData, handleLanguageChange, selectedLanguage }}>
        {children}
      </LanguageContext.Provider>
    );
  };

export default LanguageProvider;


