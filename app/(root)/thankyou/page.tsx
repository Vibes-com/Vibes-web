import { Button2 } from '@/components/ui/button2'
import { ArrowLeftIcon } from 'lucide-react'
import React from 'react'

const page = () => {
  return (
    <div className="grad-container flex items-center justify-center h-screen">

        <div className="flex flex-col items-center space-y-2">
            <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"> <circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none"/> <path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
            </svg>
            <h1 className="text-4xl font-bold text-white">Thank You !</h1>
            <p className='text-white'>We’ve received your message! We’ll get in touch with you shortly.</p>
          
            <Button2
                type="submit"
                className="mt-5 p-[20px]  cursor-pointer"
              >
                <ArrowLeftIcon />
                <span>Explore More</span>
              </Button2>
        </div>
    </div>
  )
}

export default page