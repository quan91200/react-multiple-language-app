import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

export const Header = () => {
    const [t, i18n] = useTranslation("global")
    const [currentLanguage, setCurrentLanguage] = useState(i18n.language)

    const handleLanguage = (lang) => {
        i18n.changeLanguage(lang)
        setCurrentLanguage(lang)
        alert(t('alert.text'))
    }

    useEffect(() => {
        setCurrentLanguage(i18n.language)
    }, [i18n.language])

    return (
        <div className='flex items-center justify-center flex-col'>
            <h1>{t("header.text")}</h1>
            <div className='flex gap-1 p-1'>
                <button
                    onClick={() => handleLanguage('en')}
                    className={currentLanguage === 'en' ? 'active' : ''}
                >
                    EN
                </button>
                <button
                    onClick={() => handleLanguage('vn')}
                    className={currentLanguage === 'vn' ? 'active' : ''}
                >
                    VN
                </button>
            </div>
        </div>
    )
}
