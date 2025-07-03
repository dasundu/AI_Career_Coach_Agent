import { PricingTable } from '@clerk/nextjs'
import React from 'react'

const Billing = () => {
  return (
    <div>
        <h2 className='font-bold text-3xl text-center'>Choose Your Plan</h2>
        <p className='text-lg text-center'>Select a subscription bundle to get AI Tools Access</p>
        <div className='mt-6'>
        <PricingTable/>
        </div>
    </div>
  )
}

export default Billing