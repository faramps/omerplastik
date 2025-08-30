"use client"
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setLanguage } from '@/store/actions';
 

const LanguageSwitcher = () => {

    const dispatch = useDispatch();
    const currentLanguage = useSelector((state: any) => state.language.language);
    
    const changeLanguage = (lang: string) => {
        dispatch(setLanguage(lang));
    }

  return (
    <div>
      <button onClick={() => dispatch(setLanguage("en"))}>English</button>
      <button onClick={() => dispatch(setLanguage("tr"))}>Türkçe</button>
      <button onClick={() => dispatch(setLanguage("de"))}>Deutsch</button>
    </div>
  )
}

export default LanguageSwitcher