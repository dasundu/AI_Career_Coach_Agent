"use client"
import React from 'react'
import Image from 'next/image'
import { useState } from 'react'
import { Button } from '@/components/ui/button'

const History = () => {

    const [userHistory, setUserHistory] = useState([]);

    

  return (
    <div className='mt-5'>
        <h2 className='font-bold text-lg'>Previous History</h2>
        <p>What Your previously work on, You can find here</p>

        {userHistory.length == 0 &&
            <div className='flex place-items-center justify-center mt-5 flex-col mt-6 '>
                <Image src={'/idea.png'}  
                    alt ='bulb' 
                    width={50} 
                    height={50} 
                />
                <p>You do Not Have any History</p>
                <Button>Explore AI Tool</Button>
            </div>
        
        }

    </div>
  )
}

export default History