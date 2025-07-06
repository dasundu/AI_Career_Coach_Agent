"use client"

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
const { v4: uuidv4 } = require('uuid');

interface TOOL{
    name: string,
    desc: string,
    icon: string,
    button: string,
    path: string
}

type AIToolProps = {
    tool: TOOL
}

function AiToolCard  ({tool}: AIToolProps)  {
  const id = uuidv4();
  const { user } = useUser();
  const router = useRouter();

  const onClickButton = () => {
      //create a new record to the history table
  }

  return (
    <div className='p-3 border rounded-lg'>
        <Image src={tool.icon} alt={tool.name} width={40} height={40} />
        <h2 className='font-bold mt-2'>{tool.name}</h2>
        <p className='text-gray-400'>{tool.desc}</p>
        
        <Button className='w-full mt-3'
        onClick={onClickButton}
        >{tool.button}</Button>
        
    </div>
  )
}

export default AiToolCard