//@ts-nocheck
import { useState } from 'react'
import type { NextPage } from 'next'
import { InferGetServerSidePropsType } from 'next'
import Head from 'next/head'
import Image from 'next/image'

interface HomeProps {
  data: Object
}

export const getServerSideProps = async () =>{
  const url: string = `https://kanjiapi.dev/v1/kanji/川`

  const res = await fetch(url)
  const data = await res.json()
  console.log(data)
  return {props: {data}}

}


const Home: NextPage = ({data}) => {



  return (
    <div className="">
      <p>hello</p>
      <p>{JSON.stringify(data)}</p>
    </div>
  )
}

export default Home
