//@ts-nocheck
import { useState } from 'react'
import type { NextPage } from 'next'
import { InferGetServerSidePropsType } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

interface HomeProps {
  data: String
}

export const getServerSideProps = async () =>{
  const url: string = `https://kanjiapi.dev/v1/kanji/川`

  const res = await fetch(url)
  const data = await res.json()
  console.log(data)
  return {props: {data}}

}


const Home: NextPage = ({data}) => {
  console.log(data)
  return (
    <div className="">
      <p>{data.jlpt}</p>
      <p>hello</p>
      <Link href="/page" prefetch={false}><p>link to page</p></Link>
    </div>
  )
}

export default Home
