"use client"
import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useGetAllJobsQuery } from '@/app/redux/api/careerApi'
import { Card, CardContent } from '@/components/ui/card'
import { useForm, Controller } from "react-hook-form";
import DOMPurify from 'dompurify';
import { FormValues } from './JobTabs';
import JobApplyForm from './JobForm'

const ListJobs = ({ type }: { type: number }) => {
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValues>();

    const onSubmit = (data: FormValues) => {
        console.log(data);
    };

    const { data, isLoading } = useGetAllJobsQuery(type)
    if (isLoading) {
        return <div>Loading...</div>
    }

    return (
        <div>
            <Tabs defaultValue={data?.jobs[0].career_id} className="w-full flex">
                <div className="grid grid-cols-3 gap-4">
                    <div className="col-span-1 border-r pr-5">
                        {
                            data?.jobs?.map((job) => (
                                <TabsList key={job.career_id} className='block w-full border-none h-auto job-tab-wrapper'>
                                    <TabsTrigger className='block w-full text-start bg-transparent' value={job.career_id}>
                                        <Card className='tab-bg'>
                                            <CardContent className='px-3'>
                                                {job.job_title}
                                            </CardContent>
                                        </Card>
                                    </TabsTrigger>
                                </TabsList>
                            ))
                        }
                    </div>
                    <div className="col-span-2">

                        {
                            data?.jobs?.map((job) => (
                                <TabsContent key={job.career_id} value={job.career_id}>
                                    <Tabs defaultValue="jd" className="w-full">
                                        <TabsList className='w-[100%] mx-auto mb-3 inner-tab h-auto'>
                                            <TabsTrigger className='h-auto py-3' value="jd">Job Description</TabsTrigger>
                                            <TabsTrigger className='h-auto py-3' value="apply">Apply</TabsTrigger>
                                        </TabsList>
                                        <TabsContent value="jd">
                                            <Card className='tab-bg border-0 shadow-none p-0'>
                                                <CardContent className='px-6 rounded-br-0'>
                                                    <div className='jobdesc'
                                                        dangerouslySetInnerHTML={{
                                                            __html: DOMPurify.sanitize(job.job_description),
                                                        }}
                                                    />
                                                </CardContent>
                                            </Card>
                                        </TabsContent>
                                        <TabsContent value="apply">
                                            <JobApplyForm jobTitle={job.job_title} />
                                        </TabsContent>
                                    </Tabs>
                                </TabsContent>
                            ))
                        }
                    </div>
                </div>
            </Tabs>
        </div>
    )
}

export default ListJobs