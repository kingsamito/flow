import React from 'react'

const PoweringGrowth = () => {
  return (
    <>
      <div className='lg:p-25'>
        <h1 className='lg:text-[50px] md:text-[30px] text-[25px] text-center font-[poppins] font-semibold lg:w-[50%] mx-auto'>Powering Growth With Real Impact</h1>

        <div className='flex lg:flex-row flex-col  justify-center text-center lg:pt-15 pt-[20px]'>
          <div className='flex flex-col font-[poppins] pb-[10px]'>
            <div className='bg-[#d7d7d7] w-[50%] mx-auto'>
              <h3 className='p-1'>Business Served</h3>
            </div>
            <div className='p-[10px]'>
            <p className='font-medium lg:text-8xl text-5xl pt-[15px]'>10k+</p>
            <p className='font'>Trusted by businesses to payments and boost cashflow.</p>
            </div>
          </div>


          <div className='flex flex-col font-[poppins] pb-[10px]'>
            <div className='bg-[#94def9] w-[50%] mx-auto'>
              <h3 className='p-1 text-[15px]'>Transactions Processed</h3>
            </div>
            <div className='p-[10px]'>
              <p className='font-medium lg:text-8xl text-5xl pt-[15px]'>$50M+</p>
              <p>Enable seamless, secure, and flexible payments at scale.</p>
            </div>
          </div>


          <div className='flex flex-col font-[poppins] pb-[10px]'>
            <div className='bg-[#bad3a5] w-[50%] mx-auto'>
              <h3 className='p-1 '>Faster Payout</h3>
            </div>
            <div className='p-[10px]'>
              <p className='font-medium lg:text-8xl text-5xl pt-[15px]'>92%</p>
              <p>Pay suppliers on the time and keep buyers happy with flexibility.</p>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default PoweringGrowth