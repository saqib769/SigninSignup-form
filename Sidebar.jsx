import React from 'react'

const Sidebar = () => {
  return (
    <>
      <div className='bg-slate-500'>
          <ul className='bg-green-500 text-sm w-[20%] h-96'>
            <li className='bg-black py-6 px-3 w-[100%] h-20 text-white'>Content</li>
            <li className='bg-blue-500  p-3 px-4 w-[100%]  text-white'>Home</li>
            <li className='pt-6 ml-3'>Membership</li>
            <li className='pt-6 ml-3'>jubilee</li>
            <li className='pt-6 ml-3'>Dropdown</li>
           <li className='pt-6 ml-3'>Support</li>
        </ul>

      </div>    
    </>
  )
}

export default Sidebar