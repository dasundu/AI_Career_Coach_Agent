import React from 'react'
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

function ResumeUploadDialog({openResumeUpload , setOpenResumeDialog} : any) {
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
                        <h2 className='mt-3'>Click here to upload pdf file</h2>


                    </label>
                    <input type='file' id='resumeUpload' className='hidden'/>
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