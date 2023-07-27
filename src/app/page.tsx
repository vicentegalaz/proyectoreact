'use client'
import Image from 'next/image'
import styles from './page.module.css'
import { Saludo } from './Componentes/Saludo'
import { Formulario } from './Componentes/Formulario'
import {BrowserRouter} from 'react-router-dom'
import { Header } from './Layout/Header'
import { AppRouter } from './Router/AppRouter'
import { Footer } from './Layout/Footer'
export default function Home() {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <AppRouter/>
        <Footer/>
      </BrowserRouter>
      
    </>
  )
}
