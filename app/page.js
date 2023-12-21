"use client"
import Navbar from '@/components/Navbar'
import Image from 'next/image'
import { UserAuth } from "../app/context/AuthContext";
import Trending from'@/components/Trending'
import { useEffect, useState } from 'react';

export default function Home() {




  
  return (
    <main className="p-4">
      <h1 className='text-center'>Home Page</h1>
      <Trending/>
    </main>
  )
}