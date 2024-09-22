/* eslint-disable no-unused-vars */
import React from 'react'
import { useTranslation } from 'react-i18next'

export const Home = () => {
    const [t, i18n] = useTranslation("global")
    return (
        <div className='flex items-center justify-center'>{t("home.text")}</div>
    )
}
