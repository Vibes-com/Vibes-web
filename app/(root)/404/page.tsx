import React from 'react'
import { Button2 } from '@/components/ui/button2'
import { ArrowLeftIcon } from 'lucide-react'
const page = () => {
  return (
    <div className="grad-container flex flex-col items-center w-full py-22">
        <div className="floating-circle relative">404</div>
        
        <h1 className="text-white font-bold text-3xl mb-1">Oops! Page Not Found</h1>
        <p className="text-white mb-1">The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
        
        <Button2
                type="submit"
                className="mt-5 p-[20px] cursor-pointer"
              >
                <ArrowLeftIcon />
                <span>Explore More</span>
              </Button2>
    </div>
  )
}

export default page