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

     <div>
      <div className='px-10 space-x-5'>
        <h1 className='text-6xl max-w-xl font-serif'>
          <span className='underline decoration-black 
          decoration-4'> Medium</span> is a place to write, read, and 
          connect</h1>
        <h2> It's easy and free to post your thinking on any
          topic and connect with millions of readers.
        </h2>
      </div>
      <div></div>
     </div>
        
    </div>
  )
}


