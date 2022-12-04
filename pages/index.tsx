import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'

export default function  Home () {
  return (
    <div className="">
      <Head>
        <title>Medium clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

     <Header/>
        
    </div>
  )
}


