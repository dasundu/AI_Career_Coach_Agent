"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { db } from '@/configs/db'
import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import axios from 'axios'
import ResumeUploadDialog from './ResumeUploadDialog'
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
  const [openResumeUpload,setOpenResumeUpload] = useState(false);

  const onClickButton = async () => {

    if(tool.name == "AI Resume Analyzer" )
    {
        setOpenResumeUpload(true);
        return;
    }


      //create a new record to the history table
      const result = await axios.post('/api/history',{
          recordId : id,
          content : []
      });
      console.log(result);
      router.push(tool.path+ "/"+ id)
      }

  return (
    <div className='p-3 border rounded-lg'>
        <Image src={tool.icon} alt={tool.name} width={40} height={40} />
        <h2 className='font-bold mt-2'>{tool.name}</h2>
        <p className='text-gray-400'>{tool.desc}</p>
        
        <Button className='w-full mt-3'
        onClick={onClickButton}
        >{tool.button}</Button>

        <ResumeUploadDialog openResumeUpload = {openResumeUpload} 
        setOpenResumeDialog = { setOpenResumeUpload}/>
        
    </div>
  )
}

export default AiToolCard