"use client"
import React, { use, useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { LoaderCircle, Send } from 'lucide-react'
import EmptyState from '../_components/EmptyState'
import axios from 'axios'
import ReactMarkdown from 'react-markdown'
import { useParams, useRouter } from 'next/navigation'

const { v4: uuidv4 } = require('uuid');

type messages={
  content:string,
  role:string,
  type:string
}

function AiChat  ()  {

  const [userInput, setUserInput] = useState<string>('') ;
  const [loading,setLoading] = useState(false);
  const [messageList, setMessageList] = useState<messages[]>([]);
  const{ chatid }: any =  useParams();
  const router = useRouter()
  console.log(chatid);



  useEffect(() => {
      chatid && GetMessageList()
  }, [chatid])


  const GetMessageList =async() => {
    const result = await axios.get('/api/history?recordId='+ chatid);
    console.log(result.data); 
    setMessageList(result?.data.content)
  }


  const onSend = async() => {

    setLoading(true);
    setMessageList(prev => [...prev, { 
      content: userInput,
      role: 'user',
      type: 'text'
    }]);
    const result = await axios.post('/api/ai-career-chat-agent' , {
      userInput: userInput
    });
    setUserInput(''); // Clear input after sending
    console.log(result.data);
    setMessageList(prev => [...prev,result.data]);
    setLoading(false);

  }

  console.log(messageList);


  useEffect(() => {
      // save message into database
      messageList.length > 0 && updateMessageList();
  },[messageList])



  const updateMessageList = async () => {
    const result = await axios.put('/api/history', {
      content: messageList,
      recordId: chatid
    }); 
    console.log(result);
  }

   const onNewChat = async () => {
    const id = uuidv4();
      //create a new record to the history table
      const result = await axios.post('/api/history',{
          recordId : id,
          content : []
      });
      console.log(result);
      router.replace("/ai-tools/ai-chat/"+ id)
      }


  

  return (
    <div className='px-10 mx:px-24 lg:px-36 xl:px-48 h-[75vh] overflow-auto'>
        <div className='flex items-center justify-between gap-8'>
          <div>
            <h2 className='font-bold text-lg'>AI Career Q/A Chat</h2>
            <p>Smarter career decisions start here — get tailored advice, real-time market insights</p>
          </div>
          <Button onClick={onNewChat}>+  New Chat</Button>
        </div>

        <div className='flex flex-col h-[70vh] overflow-auto'>
          {messageList?.length <= 0 &&
            <div className='mt-5'>
                {/*Empty state  can be displayed here*/}
                <EmptyState selectedQuestion={(question:string)=>setUserInput(question)}/>
            </div>}

            <div className='flex-1'>
                {/*Message list */}             
                { messageList?.map((message, index) => (
                  <div>
                    <div key={index} className={`flex mb-2 ${message.role == 'user' ?'justify-end' : 'justify-start'}`}> 
                        <div className={`p-3 rounded-lg gap-2 ${message.role== 'user' ? 
                          'bg-gray-200 text-black rounded-lg' :
                          "bg-gray-50 text-black"
                        }`}>

                          <ReactMarkdown>
                            {message.content}
                          </ReactMarkdown>
                          
                        </div>
                        
                    </div>
                    {loading &&  messageList?.length -1 == index   && <div className='flex justify-start p-3 rounded-lg gap-2 bg-gray-50 text-black mb-2'>
                        <LoaderCircle className='animate-spin' /> Thincking...
                    </div>}
                  </div>
                ))}


            </div>

            <div className='flex justify-between items-center gap-6 absolute bottom-5 w-[50%]'>
                {/*Input field */}
                <Input placeholder='Type here' value={userInput}
                onChange={(event)=>setUserInput(event.target.value)} />
                <Button onClick={onSend} disabled={loading}><Send /></Button>
            </div>
        </div>
    </div>
  )
}

export default AiChat