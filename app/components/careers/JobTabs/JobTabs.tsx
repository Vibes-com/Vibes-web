"use client";
import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Form, FormField, FormItem, FormLabel } from '@/components/ui/form'
import { useForm, Controller } from "react-hook-form";
import { LucideMonitorPlay } from 'lucide-react';
import { FaCode } from 'react-icons/fa';
import { TbBrandAirtable } from "react-icons/tb";
import { useGetAllJobsQuery } from '@/app/redux/api/careerApi';

type FormValues = {
  firstname: string;
  lastname: string;
  email: string;
  file: string;
  mobile: string;
  message: string;
};

const JobTabs = () => {

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  const { data: allJobs } = useGetAllJobsQuery()

  console.log("ALL jobs is ", allJobs)

  return (
    <div className='career-wrap'>
      <section className="w-full py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="technology" className="w-full">
            <TabsList className='w-[60%] mx-auto mb-10 h-auto main-tab'>
              <TabsTrigger value="technology" className='flex flex-col h-auto text-center py-3'><FaCode className="!w-[40px] !h-[40px]" />
                <span>Technology</span></TabsTrigger>
              <TabsTrigger value="digital" className='flex flex-col h-auto text-center py-3'><LucideMonitorPlay className="!w-[40px] !h-[40px]" />Digital Marketing</TabsTrigger>
              <TabsTrigger value="branding" className='flex flex-col h-auto text-center py-3'><TbBrandAirtable className="!w-[40px] !h-[40px]" />Branding</TabsTrigger>
            </TabsList>
            {/* technology start */}
            <TabsContent value="technology">
              <Tabs defaultValue="php-developer" className="w-full flex">
                <div className="grid grid-cols-3 gap-4">

                  <div className="col-span-1">
                   
                    {
                      allJobs?.jobs?.map((job) => (
                        <TabsList key={job.career_id} className='block w-full mb-10 h-auto job-tab-wrapper'>
                          <TabsTrigger className='block w-full text-start bg-transparent' value="php-developer">
                            <Card className='tab-bg'>
                              <CardContent>
                                {job.job_title}
                              </CardContent>
                            </Card>
                          </TabsTrigger>
                        </TabsList>
                      ))
                    }
                  </div>
                  <div className="col-span-2">
                    <TabsContent value="php-developer">

                      <Tabs defaultValue="jd" className="w-full">
                        <TabsList className='w-[100%] mx-auto mb-3 inner-tab h-auto'>
                          <TabsTrigger className='h-auto py-3' value="jd">Job Description</TabsTrigger>
                          <TabsTrigger className='h-auto py-3' value="apply">Apply</TabsTrigger>
                        </TabsList>
                        <TabsContent value="jd"><Card className='tab-bg'>
                          <CardContent>
                            <p className='text-[#525252]'><b>Job Description:</b><br />
                              We are seeking a skilled Drupal Developer with 2 to 3 years of experience to join our dynamic team. The ideal candidate should have expertise in Drupal development and a working knowledge of the CodeIgniter 4 (CI4) framework. The role requires a deep understanding of module development, theming, and site-building to create robust and scalable web solutions. The candidate should also possess strong problem-solving skills and a proactive approach to troubleshooting and optimizing website performance.</p>

                            <p className='text-[#525252]'><b>Key Responsibilities:</b></p>
                            <ul>
                              <li>Develop, customize, and maintain Drupal-based websites and applications.</li>
                              <li>Work on module development, theming, and site-building.</li>
                              <li>Ensure website performance, security, and scalability.</li>
                              <li>Integrate third-party APIs and services.</li>
                              <li>Collaborate with designers, developers, and project managers for smooth execution.</li>
                              <li>Troubleshoot and debug issues in Drupal and CI4.</li>
                            </ul>
                            <p><b>Required Skills & Experience:</b></p>
                            <ul>
                              <li>Strong expertise in Drupal (preferably Drupal 8/9/10) is must Hands-on experience with PHP, MySQL, HTML, CSS, JavaScript, and jQuery.</li>
                              <li>Working Knowledge of the CodeIgniter 4 (CI4) framework </li>
                              <li>Understanding of web security, caching, and performance optimization.</li>
                              <li>Familiarity with Git and version control systems.</li>
                              <li>Ability to work in a fast-paced environment and meet deadlines.</li>
                            </ul>
                            <p> <b> Experience: 2 to 3 years.</b></p>
                            <p><b>Location: Noida sector 8.</b></p>
                          </CardContent>
                        </Card>
                        </TabsContent>
                        <TabsContent value="apply">
                          <div className='job-apply-wrap'>
                            <form
                              onSubmit={handleSubmit(onSubmit)}
                              className="w-full mx-auto bg-white p-8 rounded-xl shadow space-y-6"
                            >
                              {/* NAME */}
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <Controller
                                  name="firstname"
                                  control={control}
                                  rules={{ required: "First name is required" }}
                                  render={({ field }) => (
                                    <input
                                      {...field}
                                      placeholder="First Name"
                                      className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:border-black"
                                    />
                                  )}
                                />

                                <Controller
                                  name="lastname"
                                  control={control}
                                  rules={{ required: "Last name is required" }}
                                  render={({ field }) => (
                                    <input
                                      {...field}
                                      placeholder="Last Name"
                                      className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:border-black"
                                    />
                                  )}
                                />
                              </div>

                              {/* EMAIL */}
                              <Controller
                                name="email"
                                control={control}
                                rules={{
                                  required: "Email is required",
                                  pattern: {
                                    value: /^\S+@\S+$/i,
                                    message: "Invalid email",
                                  },
                                }}
                                render={({ field }) => (
                                  <input
                                    {...field}
                                    type="email"
                                    placeholder="Email Address"
                                    className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:border-black"
                                  />
                                )}
                              />

                              {/* PHONE */}
                              <Controller
                                name="mobile"
                                control={control}
                                rules={{ required: "Phone number is required" }}
                                render={({ field }) => (
                                  <input
                                    {...field}
                                    placeholder="Phone Number"
                                    className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:border-black"
                                  />
                                )}
                              />

                              <Controller
                                name="file"
                                control={control}
                                rules={{ required: "File is required" }}
                                render={({ field: { onChange, ref } }) => (
                                  <input
                                    type="file"
                                    ref={ref}
                                    onChange={(e) => onChange(e.target.files?.[0])}
                                    className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:border-black"
                                  />
                                )}
                              />

                              {/* MESSAGE */}
                              <Controller
                                name="message"
                                control={control}
                                render={({ field }) => (
                                  <textarea
                                    {...field}
                                    rows={4}
                                    placeholder="Your Message"
                                    className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:border-black"
                                  />
                                )}
                              />

                              {/* SUBMIT */}
                              <button
                                type="submit"
                                className="w-fit-content bg-black text-white py-3 px-3 rounded-lg hover:bg-gray-800 transition"
                              >
                                Apply
                              </button>
                            </form>
                          </div>
                        </TabsContent>
                      </Tabs>
                    </TabsContent>
                    <TabsContent value="frontend-developer">
                      <Tabs defaultValue="jd" className="w-full">
                        <TabsList className='w-[100%] mx-auto mb-3 inner-tab h-auto'>
                          <TabsTrigger value="jd" className='h-auto py-3'>Job Description</TabsTrigger>
                          <TabsTrigger value="apply" className='h-auto py-3'>Apply</TabsTrigger>
                        </TabsList>
                        <TabsContent value="jd"><Card className='tab-bg'>
                          <CardContent>
                            <p><b>Job Description:</b><br />
                              building UIs with React, creating reusable components, translating designs to code, optimizing performance, and collaborating with teams, requiring skills in JavaScript, HTML/CSS, React principles, state management (Redux/Context), REST APIs, and tools like Git, to develop dynamic, high-performance web applications. </p>

                            <p><b>Key Responsibilities:</b></p>
                            <ul>
                              <li>Develop, customize, and maintain Drupal-based websites and applications.</li>
                              <li>Work on module development, theming, and site-building.</li>
                              <li>Ensure website performance, security, and scalability.</li>
                              <li>Integrate third-party APIs and services.</li>
                              <li>Collaborate with designers, developers, and project managers for smooth execution.</li>
                              <li>Troubleshoot and debug issues in Drupal and CI4.</li>
                            </ul>
                            <p><b>Required Skills & Experience:</b></p>
                            <ul>
                              <li>Strong expertise in Drupal (preferably Drupal 8/9/10) is must Hands-on experience with PHP, MySQL, HTML, CSS, JavaScript, and jQuery.</li>
                              <li>Working Knowledge of the CodeIgniter 4 (CI4) framework </li>
                              <li>Understanding of web security, caching, and performance optimization.</li>
                              <li>Familiarity with Git and version control systems.</li>
                              <li>Ability to work in a fast-paced environment and meet deadlines.</li>
                            </ul>
                            <p><b> Experience: 2 to 3 years.</b></p>
                            <p><b>Location: Noida sector 8.</b></p>
                          </CardContent>
                        </Card>
                        </TabsContent>
                        <TabsContent value="apply">
                          <div className='job-apply-wrap'>
                            <form
                              onSubmit={handleSubmit(onSubmit)}
                              className="w-full mx-auto bg-white p-8 rounded-xl shadow space-y-6"
                            >
                              {/* NAME */}
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <Controller
                                  name="firstname"
                                  control={control}
                                  rules={{ required: "First name is required" }}
                                  render={({ field }) => (
                                    <input
                                      {...field}
                                      placeholder="First Name"
                                      className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:border-black"
                                    />
                                  )}
                                />

                                <Controller
                                  name="lastname"
                                  control={control}
                                  rules={{ required: "Last name is required" }}
                                  render={({ field }) => (
                                    <input
                                      {...field}
                                      placeholder="Last Name"
                                      className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:border-black"
                                    />
                                  )}
                                />
                              </div>

                              {/* EMAIL */}
                              <Controller
                                name="email"
                                control={control}
                                rules={{
                                  required: "Email is required",
                                  pattern: {
                                    value: /^\S+@\S+$/i,
                                    message: "Invalid email",
                                  },
                                }}
                                render={({ field }) => (
                                  <input
                                    {...field}
                                    type="email"
                                    placeholder="Email Address"
                                    className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:border-black"
                                  />
                                )}
                              />

                              {/* PHONE */}
                              <Controller
                                name="mobile"
                                control={control}
                                rules={{ required: "Phone number is required" }}
                                render={({ field }) => (
                                  <input
                                    {...field}
                                    placeholder="Phone Number"
                                    className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:border-black"
                                  />
                                )}
                              />

                              <Controller
                                name="file"
                                control={control}
                                rules={{ required: "File is required" }}
                                render={({ field: { onChange, ref } }) => (
                                  <input
                                    type="file"
                                    ref={ref}
                                    onChange={(e) => onChange(e.target.files?.[0])}
                                    className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:border-black"
                                  />
                                )}
                              />

                              {/* MESSAGE */}
                              <Controller
                                name="message"
                                control={control}
                                render={({ field }) => (
                                  <textarea
                                    {...field}
                                    rows={4}
                                    placeholder="Your Message"
                                    className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:border-black"
                                  />
                                )}
                              />

                              {/* SUBMIT */}
                              <button
                                type="submit"
                                className="w-fit-content bg-black text-white py-3 px-3 rounded-lg hover:bg-gray-800 transition"
                              >
                                Apply
                              </button>
                            </form>
                          </div>
                        </TabsContent>
                      </Tabs>
                    </TabsContent>
                  </div>




                </div>
              </Tabs>
            </TabsContent>
            {/* technology end */}
            {/* Digital start */}
            <TabsContent value="digital">
              <Tabs defaultValue="seomanager" className="w-full flex">
                <div className="grid grid-cols-3 gap-4">

                  <div className="col-span-1">
                    <TabsList className='block w-full mb-10 h-auto job-tab-wrapper'>
                      <TabsTrigger className='block w-full text-start bg-transparent' value="seomanager">
                        <Card className='tab-bg'>
                          <CardContent>
                            Seo Manager
                          </CardContent>
                        </Card>
                      </TabsTrigger>
                      <TabsTrigger className='block w-full text-start bg-transparent' value="frontend-developer">
                        <Card className='tab-bg'>
                          <CardContent>
                            Social Media Manager
                          </CardContent>
                        </Card>
                      </TabsTrigger>
                    </TabsList>
                  </div>
                  <div className="col-span-2">
                    <TabsContent value="seomanager">

                      <Tabs defaultValue="jd" className="w-full">
                        <TabsList className='w-[100%] mx-auto mb-3 inner-tab h-auto'>
                          <TabsTrigger value="jd" className='h-auto py-3'>Job Description</TabsTrigger>
                          <TabsTrigger value="apply" className='h-auto py-3'>Apply</TabsTrigger>
                        </TabsList>
                        <TabsContent value="jd"><Card className='tab-bg'>
                          <CardContent>
                            <p><b>Job Description:</b><br />
                              We are seeking a skilled Drupal Developer with 2 to 3 years of experience to join our dynamic team. The ideal candidate should have expertise in Drupal development and a working knowledge of the CodeIgniter 4 (CI4) framework. The role requires a deep understanding of module development, theming, and site-building to create robust and scalable web solutions. The candidate should also possess strong problem-solving skills and a proactive approach to troubleshooting and optimizing website performance.</p>

                            <p><b>Key Responsibilities:</b></p>
                            <ul>
                              <li>Develop, customize, and maintain Drupal-based websites and applications.</li>
                              <li>Work on module development, theming, and site-building.</li>
                              <li>Ensure website performance, security, and scalability.</li>
                              <li>Integrate third-party APIs and services.</li>
                              <li>Collaborate with designers, developers, and project managers for smooth execution.</li>
                              <li>Troubleshoot and debug issues in Drupal and CI4.</li>
                            </ul>
                            <p><b>Required Skills & Experience:</b></p>
                            <ul>
                              <li>Strong expertise in Drupal (preferably Drupal 8/9/10) is must Hands-on experience with PHP, MySQL, HTML, CSS, JavaScript, and jQuery.</li>
                              <li>Working Knowledge of the CodeIgniter 4 (CI4) framework </li>
                              <li>Understanding of web security, caching, and performance optimization.</li>
                              <li>Familiarity with Git and version control systems.</li>
                              <li>Ability to work in a fast-paced environment and meet deadlines.</li>
                            </ul>
                            <p> <b> Experience: 2 to 3 years.</b></p>
                            <p> <b>Location: Noida sector 8.</b></p>
                          </CardContent>
                        </Card>
                        </TabsContent>
                        <TabsContent value="apply">
                          <div className='job-apply-wrap'>
                            <form
                              onSubmit={handleSubmit(onSubmit)}
                              className="w-full mx-auto bg-white p-8 rounded-xl shadow space-y-6"
                            >
                              {/* NAME */}
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <Controller
                                  name="firstname"
                                  control={control}
                                  rules={{ required: "First name is required" }}
                                  render={({ field }) => (
                                    <input
                                      {...field}
                                      placeholder="First Name"
                                      className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:border-black"
                                    />
                                  )}
                                />

                                <Controller
                                  name="lastname"
                                  control={control}
                                  rules={{ required: "Last name is required" }}
                                  render={({ field }) => (
                                    <input
                                      {...field}
                                      placeholder="Last Name"
                                      className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:border-black"
                                    />
                                  )}
                                />
                              </div>

                              {/* EMAIL */}
                              <Controller
                                name="email"
                                control={control}
                                rules={{
                                  required: "Email is required",
                                  pattern: {
                                    value: /^\S+@\S+$/i,
                                    message: "Invalid email",
                                  },
                                }}
                                render={({ field }) => (
                                  <input
                                    {...field}
                                    type="email"
                                    placeholder="Email Address"
                                    className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:border-black"
                                  />
                                )}
                              />

                              {/* PHONE */}
                              <Controller
                                name="mobile"
                                control={control}
                                rules={{ required: "Phone number is required" }}
                                render={({ field }) => (
                                  <input
                                    {...field}
                                    placeholder="Phone Number"
                                    className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:border-black"
                                  />
                                )}
                              />

                              <Controller
                                name="file"
                                control={control}
                                rules={{ required: "File is required" }}
                                render={({ field: { onChange, ref } }) => (
                                  <input
                                    type="file"
                                    ref={ref}
                                    onChange={(e) => onChange(e.target.files?.[0])}
                                    className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:border-black"
                                  />
                                )}
                              />

                              {/* MESSAGE */}
                              <Controller
                                name="message"
                                control={control}
                                render={({ field }) => (
                                  <textarea
                                    {...field}
                                    rows={4}
                                    placeholder="Your Message"
                                    className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:border-black"
                                  />
                                )}
                              />

                              {/* SUBMIT */}
                              <button
                                type="submit"
                                className="w-fit-content bg-black text-white py-3 px-3 rounded-lg hover:bg-gray-800 transition"
                              >
                                Apply
                              </button>
                            </form>
                          </div>
                        </TabsContent>
                      </Tabs>

                    </TabsContent>
                    <TabsContent value="frontend-developer">
                      <Tabs defaultValue="jd" className="w-full">
                        <TabsList className='w-[100%] mx-auto mb-3 inner-tab h-auto'>
                          <TabsTrigger value="jd" className='h-auto py-3'>Job Description</TabsTrigger>
                          <TabsTrigger value="apply" className='h-auto py-3'>Apply</TabsTrigger>
                        </TabsList>
                        <TabsContent value="jd"><Card className='tab-bg'>
                          <CardContent>
                            <p><b>Job Description:</b><br />
                              building UIs with React, creating reusable components, translating designs to code, optimizing performance, and collaborating with teams, requiring skills in JavaScript, HTML/CSS, React principles, state management (Redux/Context), REST APIs, and tools like Git, to develop dynamic, high-performance web applications. </p>

                            <p><b>Key Responsibilities:</b></p>
                            <ul>
                              <li>Develop, customize, and maintain Drupal-based websites and applications.</li>
                              <li>Work on module development, theming, and site-building.</li>
                              <li>Ensure website performance, security, and scalability.</li>
                              <li>Integrate third-party APIs and services.</li>
                              <li>Collaborate with designers, developers, and project managers for smooth execution.</li>
                              <li>Troubleshoot and debug issues in Drupal and CI4.</li>
                            </ul>
                            <p><b>Required Skills & Experience:</b></p>
                            <ul>
                              <li>Strong expertise in Drupal (preferably Drupal 8/9/10) is must Hands-on experience with PHP, MySQL, HTML, CSS, JavaScript, and jQuery.</li>
                              <li>Working Knowledge of the CodeIgniter 4 (CI4) framework </li>
                              <li>Understanding of web security, caching, and performance optimization.</li>
                              <li>Familiarity with Git and version control systems.</li>
                              <li>Ability to work in a fast-paced environment and meet deadlines.</li>
                            </ul>
                            <p><b> Experience: 2 to 3 years.</b></p>
                            <p><b>Location: Noida sector 8.</b></p>
                          </CardContent>
                        </Card>
                        </TabsContent>
                        <TabsContent value="apply">
                          <div className='job-apply-wrap'>
                            <form
                              onSubmit={handleSubmit(onSubmit)}
                              className="w-full mx-auto bg-white p-8 rounded-xl shadow space-y-6"
                            >
                              {/* NAME */}
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <Controller
                                  name="firstname"
                                  control={control}
                                  rules={{ required: "First name is required" }}
                                  render={({ field }) => (
                                    <input
                                      {...field}
                                      placeholder="First Name"
                                      className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:border-black"
                                    />
                                  )}
                                />

                                <Controller
                                  name="lastname"
                                  control={control}
                                  rules={{ required: "Last name is required" }}
                                  render={({ field }) => (
                                    <input
                                      {...field}
                                      placeholder="Last Name"
                                      className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:border-black"
                                    />
                                  )}
                                />
                              </div>

                              {/* EMAIL */}
                              <Controller
                                name="email"
                                control={control}
                                rules={{
                                  required: "Email is required",
                                  pattern: {
                                    value: /^\S+@\S+$/i,
                                    message: "Invalid email",
                                  },
                                }}
                                render={({ field }) => (
                                  <input
                                    {...field}
                                    type="email"
                                    placeholder="Email Address"
                                    className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:border-black"
                                  />
                                )}
                              />

                              {/* PHONE */}
                              <Controller
                                name="mobile"
                                control={control}
                                rules={{ required: "Phone number is required" }}
                                render={({ field }) => (
                                  <input
                                    {...field}
                                    placeholder="Phone Number"
                                    className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:border-black"
                                  />
                                )}
                              />

                              <Controller
                                name="file"
                                control={control}
                                rules={{ required: "File is required" }}
                                render={({ field: { onChange, ref } }) => (
                                  <input
                                    type="file"
                                    ref={ref}
                                    onChange={(e) => onChange(e.target.files?.[0])}
                                    className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:border-black"
                                  />
                                )}
                              />

                              {/* MESSAGE */}
                              <Controller
                                name="message"
                                control={control}
                                render={({ field }) => (
                                  <textarea
                                    {...field}
                                    rows={4}
                                    placeholder="Your Message"
                                    className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:border-black"
                                  />
                                )}
                              />

                              {/* SUBMIT */}
                              <button
                                type="submit"
                                className="w-fit-content bg-black text-white py-3 px-3 rounded-lg hover:bg-gray-800 transition"
                              >
                                Apply
                              </button>
                            </form>
                          </div>
                        </TabsContent>
                      </Tabs>
                    </TabsContent>
                  </div>

                </div>
              </Tabs>
            </TabsContent>
            {/* Digital end */}

            {/* branding */}
            <TabsContent value="branding">


              <Tabs defaultValue="branding-specialist" className="w-full flex">
                <div className="grid grid-cols-3 gap-4">

                  <div className="col-span-1">
                    <TabsList className='block w-full mb-10 h-auto job-tab-wrapper'>
                      <TabsTrigger className='block w-full text-start bg-transparent' value="branding-specialist">
                        <Card className='tab-bg'>
                          <CardContent>
                            Branding Specialist
                          </CardContent>
                        </Card>
                      </TabsTrigger>
                      <TabsTrigger className='block w-full text-start bg-transparent' value="branding-manager">
                        <Card className='tab-bg'>
                          <CardContent>
                            Branding manager
                          </CardContent>
                        </Card>
                      </TabsTrigger>
                    </TabsList>
                  </div>
                  <div className="col-span-2">
                    <TabsContent value="branding-specialist">

                      <Tabs defaultValue="jd" className="w-full">
                        <TabsList className='w-[100%] mx-auto mb-3 inner-tab h-auto'>
                          <TabsTrigger value="jd" className='h-auto py-3'>Job Description</TabsTrigger>
                          <TabsTrigger value="apply" className='h-auto py-3'>Apply</TabsTrigger>
                        </TabsList>
                        <TabsContent value="jd"><Card className='tab-bg'>
                          <CardContent>
                            <p><b>Job Description:</b><br />
                              We are seeking a skilled Drupal Developer with 2 to 3 years of experience to join our dynamic team. The ideal candidate should have expertise in Drupal development and a working knowledge of the CodeIgniter 4 (CI4) framework. The role requires a deep understanding of module development, theming, and site-building to create robust and scalable web solutions. The candidate should also possess strong problem-solving skills and a proactive approach to troubleshooting and optimizing website performance.</p>

                            <p><b>Key Responsibilities:</b></p>
                            <ul>
                              <li>Develop, customize, and maintain Drupal-based websites and applications.</li>
                              <li>Work on module development, theming, and site-building.</li>
                              <li>Ensure website performance, security, and scalability.</li>
                              <li>Integrate third-party APIs and services.</li>
                              <li>Collaborate with designers, developers, and project managers for smooth execution.</li>
                              <li>Troubleshoot and debug issues in Drupal and CI4.</li>
                            </ul>
                            <p><b>Required Skills & Experience:</b></p>
                            <ul>
                              <li>Strong expertise in Drupal (preferably Drupal 8/9/10) is must Hands-on experience with PHP, MySQL, HTML, CSS, JavaScript, and jQuery.</li>
                              <li>Working Knowledge of the CodeIgniter 4 (CI4) framework </li>
                              <li>Understanding of web security, caching, and performance optimization.</li>
                              <li>Familiarity with Git and version control systems.</li>
                              <li>Ability to work in a fast-paced environment and meet deadlines.</li>
                            </ul>
                            <p><b> Experience: 2 to 3 years.</b></p>
                            <p> <b>Location: Noida sector 8.</b></p>
                          </CardContent>
                        </Card>
                        </TabsContent>
                        <TabsContent value="apply">
                          <div className='job-apply-wrap'>
                            <form
                              onSubmit={handleSubmit(onSubmit)}
                              className="w-full mx-auto bg-white p-8 rounded-xl shadow space-y-6"
                            >
                              {/* NAME */}
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <Controller
                                  name="firstname"
                                  control={control}
                                  rules={{ required: "First name is required" }}
                                  render={({ field }) => (
                                    <input
                                      {...field}
                                      placeholder="First Name"
                                      className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:border-black"
                                    />
                                  )}
                                />

                                <Controller
                                  name="lastname"
                                  control={control}
                                  rules={{ required: "Last name is required" }}
                                  render={({ field }) => (
                                    <input
                                      {...field}
                                      placeholder="Last Name"
                                      className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:border-black"
                                    />
                                  )}
                                />
                              </div>

                              {/* EMAIL */}
                              <Controller
                                name="email"
                                control={control}
                                rules={{
                                  required: "Email is required",
                                  pattern: {
                                    value: /^\S+@\S+$/i,
                                    message: "Invalid email",
                                  },
                                }}
                                render={({ field }) => (
                                  <input
                                    {...field}
                                    type="email"
                                    placeholder="Email Address"
                                    className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:border-black"
                                  />
                                )}
                              />



                              {/* PHONE */}
                              <Controller
                                name="mobile"
                                control={control}
                                rules={{ required: "Phone number is required" }}
                                render={({ field }) => (
                                  <input
                                    {...field}
                                    placeholder="Phone Number"
                                    className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:border-black"
                                  />
                                )}
                              />

                              <Controller
                                name="file"
                                control={control}
                                rules={{ required: "File is required" }}
                                render={({ field: { onChange, ref } }) => (
                                  <input
                                    type="file"
                                    ref={ref}
                                    onChange={(e) => onChange(e.target.files?.[0])}
                                    className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:border-black"
                                  />
                                )}
                              />

                              {/* MESSAGE */}
                              <Controller
                                name="message"
                                control={control}
                                render={({ field }) => (
                                  <textarea
                                    {...field}
                                    rows={4}
                                    placeholder="Your Message"
                                    className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:border-black"
                                  />
                                )}
                              />

                              {/* SUBMIT */}
                              <button
                                type="submit"
                                className="w-fit-content bg-black text-white py-3 px-3 rounded-lg hover:bg-gray-800 transition"
                              >
                                Apply
                              </button>
                            </form>
                          </div>
                        </TabsContent>
                      </Tabs>

                    </TabsContent>
                    <TabsContent value="branding-manager">
                      <Tabs defaultValue="jd" className="w-full">
                        <TabsList className='w-[100%] mx-auto mb-3 inner-tab h-auto'>
                          <TabsTrigger value="jd" className='h-auto py-3'>Job Description</TabsTrigger>
                          <TabsTrigger value="apply" className='h-auto py-3'>Apply</TabsTrigger>
                        </TabsList>
                        <TabsContent value="jd"><Card className='tab-bg'>
                          <CardContent>
                            <p><b>Job Description:</b><br />
                              building UIs with React, creating reusable components, translating designs to code, optimizing performance, and collaborating with teams, requiring skills in JavaScript, HTML/CSS, React principles, state management (Redux/Context), REST APIs, and tools like Git, to develop dynamic, high-performance web applications. </p>

                            <p><b>Key Responsibilities:</b></p>
                            <ul>
                              <li>Develop, customize, and maintain Drupal-based websites and applications.</li>
                              <li>Work on module development, theming, and site-building.</li>
                              <li>Ensure website performance, security, and scalability.</li>
                              <li>Integrate third-party APIs and services.</li>
                              <li>Collaborate with designers, developers, and project managers for smooth execution.</li>
                              <li>Troubleshoot and debug issues in Drupal and CI4.</li>
                            </ul>
                            <p><b>Required Skills & Experience:</b></p>
                            <ul>
                              <li>Strong expertise in Drupal (preferably Drupal 8/9/10) is must Hands-on experience with PHP, MySQL, HTML, CSS, JavaScript, and jQuery.</li>
                              <li>Working Knowledge of the CodeIgniter 4 (CI4) framework </li>
                              <li>Understanding of web security, caching, and performance optimization.</li>
                              <li>Familiarity with Git and version control systems.</li>
                              <li>Ability to work in a fast-paced environment and meet deadlines.</li>
                            </ul>
                            <p><b> Experience: 2 to 3 years.</b></p>
                            <p><b>Location: Noida sector 8.</b></p>
                          </CardContent>
                        </Card>
                        </TabsContent>
                        <TabsContent value="apply">
                          <div className='job-apply-wrap'>
                            <form
                              onSubmit={handleSubmit(onSubmit)}
                              className="w-full mx-auto bg-white p-8 rounded-xl shadow space-y-6"
                            >
                              {/* NAME */}
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <Controller
                                  name="firstname"
                                  control={control}
                                  rules={{ required: "First name is required" }}
                                  render={({ field }) => (
                                    <input
                                      {...field}
                                      placeholder="First Name"
                                      className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:border-black"
                                    />
                                  )}
                                />

                                <Controller
                                  name="lastname"
                                  control={control}
                                  rules={{ required: "Last name is required" }}
                                  render={({ field }) => (
                                    <input
                                      {...field}
                                      placeholder="Last Name"
                                      className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:border-black"
                                    />
                                  )}
                                />
                              </div>

                              {/* EMAIL */}
                              <Controller
                                name="email"
                                control={control}
                                rules={{
                                  required: "Email is required",
                                  pattern: {
                                    value: /^\S+@\S+$/i,
                                    message: "Invalid email",
                                  },
                                }}
                                render={({ field }) => (
                                  <input
                                    {...field}
                                    type="email"
                                    placeholder="Email Address"
                                    className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:border-black"
                                  />
                                )}
                              />

                              {/* PHONE */}
                              <Controller
                                name="mobile"
                                control={control}
                                rules={{ required: "Phone number is required" }}
                                render={({ field }) => (
                                  <input
                                    {...field}
                                    placeholder="Phone Number"
                                    className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:border-black"
                                  />
                                )}
                              />

                              <Controller
                                name="file"
                                control={control}
                                rules={{ required: "File is required" }}
                                render={({ field: { onChange, ref } }) => (
                                  <input
                                    type="file"
                                    ref={ref}
                                    onChange={(e) => onChange(e.target.files?.[0])}
                                    className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:border-black"
                                  />
                                )}
                              />

                              {/* MESSAGE */}
                              <Controller
                                name="message"
                                control={control}
                                render={({ field }) => (
                                  <textarea
                                    {...field}
                                    rows={4}
                                    placeholder="Your Message"
                                    className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:border-black"
                                  />
                                )}
                              />

                              {/* SUBMIT */}
                              <button
                                type="submit"
                                className="w-fit-content bg-black text-white py-3 px-3 rounded-lg hover:bg-gray-800 transition"
                              >
                                Apply
                              </button>
                            </form>
                          </div>
                        </TabsContent>
                      </Tabs>
                    </TabsContent>
                  </div>




                </div>
              </Tabs>
            </TabsContent>

            {/* branding end */}
          </Tabs>


        </div>
      </section>
    </div>
  )
}

export default JobTabs