import { Handle, Position } from '@xyflow/react'
import { ExternalLink, Link } from 'lucide-react'
import React from 'react'

function TurboNode({data}: any) {
  return (
    <div className='rounded-lg border border-gray-300 bg-yellow-100 shadow-md w-64'>
        <div className='font-bold text-lg text-gray-800'>
            {data.title}
        </div>
        <p className='text-sm text-gray-600 mt-1 line-clamp-2'>{data.description}</p>
        {data?.link && (
            <a 
                href={data.link} 
                target='_blank' 
                rel='noopener noreferrer'
                className='text-blue-600 hover:text-blue-800 underline text-sm mt-2 inline-flex items-center gap-1'
            >
                Learn More
                <ExternalLink size={14} />
            </a>
        )}
        
        <Handle type='target' position={Position.Top} />
        <Handle type='source' position={Position.Bottom} />
    </div>
  )
}

export default TurboNode