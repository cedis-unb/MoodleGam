"use client";
import Image from "next/image";
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';


export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push('/pages/loginPage');
  }, []);
  return null
}
