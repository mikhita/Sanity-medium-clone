import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import {sanityClient, urlFor} from "../sanity"
import { Post } from '../typings'

// interface Props{
//   posts: [Post],

// }

// { posts }: Props

export default function  Home () {
  return (
    <div className="max-w-7xl mx-auto">
      <Head>
        <title>Medium clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

     <Header/>

     <div className='flex justify-between 
     items-center
     bg-yellow-400 border-y-black
     py-10
     lg:py-0'>
      <div className='px-10 '>
        <h1 className='text-6xl max-w-xl font-serif'>
          <span className='underline decoration-black 
          decoration-4'> Medium</span> is a place to write, read, and 
          connect</h1>
        <h2> It's easy and free to post your thinking on any
          topic and connect with millions of readers.
        </h2>
      </div>
      <div>
        <img 
        className='hidden md:inline-flex h-32 lg:h-full'
        src="http://accountabilitylab.org/wp-content/uploads/2020/03/Medium-logo.png" 
        alt="" />
      </div>
     </div>
        
    </div>
  )
}

export const getServerSideProps = async ()=> {
  const query = `*[_type == "post"]{
    _id,
    title,
    author->{
    name,
    image
  },
   description,
   mainImage,
   slug
  }`;
   const posts = await sanityClient.fetch(query);

  return{
    props:{
      posts,
    }
  }
}
  

