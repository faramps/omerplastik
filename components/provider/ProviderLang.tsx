"use client"
import React from 'react'
import { Provider } from 'react-redux';
import store from '@/store';

interface ProviderLangProps {
  children: React.ReactNode;
}

const ProviderLang = ({ children }: ProviderLangProps   ) => {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}

export default ProviderLang