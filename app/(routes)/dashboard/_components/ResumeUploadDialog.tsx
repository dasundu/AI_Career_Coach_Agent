import React, { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { File, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { uuid } from 'drizzle-orm/pg-core';
const { v4: uuidv4 } = require('uuid');

function ResumeUploadDialog({openResumeUpload , setOpenResumeDialog} : any) {
 
  
  const [file, setFile] = useState<any>();
  const onFileChange = (event: any) => {
    const file = event.target.files?.[0];
    if (file){
      console.log(file.name);
      setFile(file);
    }
  }

  const onUploadAndAnalyze= () => {
      const recordId = uuidv4();

  } 

  return (
    <Dialog open ={openResumeUpload} onOpenChange={setOpenResumeDialog}>
        {/* DialogTrigger is used to open the dialog */}
        
        <DialogContent>
            <DialogHeader>
            <DialogTitle>Upload resume pdf file</DialogTitle>
            <DialogDescription>
                <div>
                    <label htmlFor = 'resumeUpload' className='flex items-center flex-col 
                    justify-center p-7 border border-dashed 
                    rounded-xl hover:bg-slate-200 cursor-pointer'>
                        <File className='h-10 w-10' />
                        {file?
                        <h2 className='mt-3 text-blue-600'>{file?.name}</h2>:
                        <h2 className='mt-3'>Click here to upload PDF file</h2>}


                    </label>
                    <input type='file' id='resumeUpload' accept='application/pdf' 
                    className='hidden' onChange={onFileChange}/>
                </div>
            </DialogDescription>
            </DialogHeader>
            <DialogFooter>
                <Button variant={'outline'}>Cancel</Button>
                <Button><Sparkles /> Upload & Analyze</Button>
            </DialogFooter>
        </DialogContent>
    </Dialog>
  )
}

export default ResumeUploadDialog