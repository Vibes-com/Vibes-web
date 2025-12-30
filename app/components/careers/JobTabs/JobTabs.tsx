

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import { LucideMonitorPlay } from 'lucide-react';
import { FaCode } from 'react-icons/fa';
import { TbBrandAirtable } from "react-icons/tb";

import ListJobs from "./ListJobs";

export type FormValues = {
  careerId: string;
  firstname: string;
  lastname: string;
  email: string;
  file: string;
  mobile: string;
  message: string;
};

const JobTabs = () => {

  return (
    <div className='career-wrap'>
      <section className="w-full py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="technology" className="w-full">
            <TabsList className='w-[80%] mx-auto mb-10 h-auto main-tab p-0 rounded-md bg-gray-50'>
              <TabsTrigger value="technology" className='flex flex-col h-auto text-center py-6 rounded-r-none'><FaCode className="!w-[40px] !h-[40px] cursor-pointer" />
                <span>Technology</span></TabsTrigger>
              <TabsTrigger value="digital" className='flex flex-col h-auto text-center py-6 rounded-none border-x border-y-0 border-gray-400 cursor-pointer'><LucideMonitorPlay className="!w-[40px] !h-[40px]" />Digital Marketing</TabsTrigger>
              <TabsTrigger value="branding" className='flex flex-col h-auto text-center py-6 rounded-l-none cursor-pointer'><TbBrandAirtable className="!w-[40px] !h-[40px]" />Branding</TabsTrigger>
            </TabsList>
            {/* technology start */}
            <TabsContent value="technology">
              <ListJobs type={1} />
            </TabsContent>
            <TabsContent value="digital">
              <ListJobs type={2} />
            </TabsContent>
            <TabsContent value="branding">
              <ListJobs type={3} />
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  )
}

export default JobTabs