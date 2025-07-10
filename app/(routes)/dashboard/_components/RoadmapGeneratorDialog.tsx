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
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { SparkleIcon } from 'lucide-react'

function RoadmapGeneratorDialog( { openDialog, setOpenDialog } : any ) {

const GenerateRoadmap = () => {
    try {

    } catch (e){
        console.log(e)
    }
}

  return (
    <Dialog open={ openDialog } onOpenChange={setOpenDialog}>
        <DialogContent>
            <DialogHeader>
            <DialogTitle>Enter Position/Skills to Generate Roadmap</DialogTitle>
            <DialogDescription asChild>
                <div className='mt-2'>
                    <Input placeholder = 'e.g Full Stack Developer' />
                </div>
            </DialogDescription>
            </DialogHeader>
            <DialogFooter>
                <Button variant={'outline'}>Cancel</Button>
                <Button onClick = {GenerateRoadmap}><SparkleIcon/>Generate</Button>
            </DialogFooter>
        </DialogContent>
    </Dialog>
  )
}

export default RoadmapGeneratorDialog 