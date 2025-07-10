"use client"
import axios from 'axios';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import Report from './_components/Report';

function AiResumeAnalyzer() {
  const { recordid } = useParams();
  const [ pdfUrl , setPdfUrl ] = useState();
  const [aiReport, setAiReport] = useState();

  useEffect(() => {
      recordid && GetResumeAnalyzerRecord();
  }, [recordid]);

  const GetResumeAnalyzerRecord = async() => {
    const result = await axios.get('/api/history?recordId='+ recordid);
    console.log(result.data); 
    setPdfUrl(result.data?.metaData);
    setAiReport(result.data?.content);
  }

  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 h-[83vh]">
        {/* Report section */}
        <div className='col-span-1 overflow-auto border-r h-full'>
            < Report aiReport ={aiReport} />
        </div>

        {/* Resume Preview section */}
        <div className='col-span-1 h-full flex flex-col'> {/* Use flex-col for proper height distribution */}
            <h2 className='font-bold text-2xl mb-5 p-4'>Resume Preview</h2> {/* Added padding here for consistency */}
            <div className="flex-grow overflow-y-auto p-4 pt-0"> {/* Allow this div to grow and scroll */}
                <iframe
                    src={pdfUrl + '#toolbar=0&navpanes=0&scrollbar=0'} // Keep these for a cleaner look
                    width={'100%'}
                    height={'100%'} // Make iframe take full height of its *flex-grow* parent
                    className='min-w-lg' // This might still apply some min-width
                    style={{ 
                        border : 'none'
                    }}
                />
            </div>
        </div>
    </div>
  )
}

export default AiResumeAnalyzer;