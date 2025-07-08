import { NextRequest, NextResponse } from "next/server";
import { WebPDFLoader } from "@langchain/community/document_loaders/web/pdf";
import { inngest } from "@/inngest/client";
import axios from "axios";


export async function POST(req:NextRequest) {

    const FormData = await req.formData();
    const resumeFile:any = FormData.get('resumeFile') ;
    const recordId = FormData.get('recordId');
    

    const lorder = new WebPDFLoader(resumeFile);
    const docs = await lorder.load();
    console.log(docs[0]) //Raw pdf file

    const arrayBuffer = await resumeFile.arrayBuffer();
    const base64 = Buffer.from(arrayBuffer).toString('base64');

     const resultIds = await inngest.send({
        name: 'AiResumeAgent',
        data: { 
           recordId: recordId,
           base64ResumeFile : base64,
           pdfText: docs[0]?.pageContent
        }
    });
    const runId = resultIds?.ids[0];

    let runStatus;
    while(true){
        runStatus = await getRuns(runId);
        console.log(runStatus?.data)
        if(runStatus?.data[0]?.status=== 'Completed') 
            break;

        await new Promise(resolve => setTimeout(resolve, 500))
    }

    return NextResponse.json(runStatus.data?.[0].output?.output[0])

}

export async function getRuns(runId:string) {
    const result=await axios.get(process.env.INNGEST_SERVER_HOST+'/v1/events/' + runId + '/runs',{
        headers:{
            Authorization: `Bearer ${process.env.INNGEST_SIGNING_KEY}`
        }
    })

    return result.data
    
}


 


