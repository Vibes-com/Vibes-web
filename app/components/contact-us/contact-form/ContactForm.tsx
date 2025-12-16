"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { IoIosMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { HiOfficeBuilding } from "react-icons/hi";
import { RotateCw, ArrowUpIcon } from "lucide-react";
import { Button2 } from "@/components/ui/button2";
import { useSubmitContactFormMutation } from "@/app/redux/api/contactApi";
import { z } from "zod";
import toast from "react-hot-toast";


const generateCaptcha = () => {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  return Array.from({ length: 5 }, () =>
    chars.charAt(Math.floor(Math.random() * chars.length))
  ).join("");
};

export const contactSchema = z.object({
  firstname: z.string().min(2, "First name is required"),
  lastname: z.string().min(2, "Last name is required"),
  mobile_no: z
    .string()
    .min(10, "Mobile number must be 10 digits")
    .max(10, "Mobile number must be 10 digits"),
  email: z.string().email("Invalid email address"),
  website: z.string().optional(),
  message: z.string().min(2, "Message must be atleast 5 character"),
});

const ContactForm = () => {
  const [submitContact, { isLoading, isSuccess, data, error }] =
    useSubmitContactFormMutation();

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    mobile_no: "",
    email: "",
    website: "",
    message: "",
  });

  const [captcha, setCaptcha] = useState("");
  const [captchaInput, setCaptchaInput] = useState("");
  const [captchaError, setCaptchaError] = useState("");

  useEffect(() => {
    refreshCaptcha();
  }, []);

  const refreshCaptcha = () => {
    setCaptcha(generateCaptcha());
    setCaptchaInput("");
    setCaptchaError("");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (captchaInput !== captcha) {
      toast.error("Invalid captcha");
      refreshCaptcha();
      return;
    }

        const validation = contactSchema.safeParse(formData);

        if (!validation.success) {
        validation.error.issues.forEach((issue) => {
            toast.error(issue.message);
        });
        return;
        }


    try {
    const res = await submitContact(formData).unwrap();
    toast.success(res.msg);
      refreshCaptcha();
      setFormData({
        firstname: "",
        lastname: "",
        mobile_no: "",
        email: "",
        website: "",
        message: "",
      });
    } catch (error) {
        toast.error("Something went wrong. Please try again.");
        }
    };

  return (
    <section className="w-full py-16">
      <div className="container mx-auto px-4">

       
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">

          <div className="bg-[#ECF3EE] shadow-md rounded-xl p-6 flex gap-4">
            <div className="p-4 bg-[#F4BE00] text-[#2b3332] rounded-full text-[20px] h-[50px] w-[50px]">
              <IoIosMail />
            </div>
            <div>
              <h4 className="text-lg font-semibold">Email Id</h4>
              <Link href="mailto:info@vibescom.in" className="text-[#606060]">
                info@vibescom.in
              </Link>
            </div>
          </div>

          <div className="bg-[#ECF3EE] shadow-md rounded-xl p-6 flex gap-4">
            <div className="p-4 bg-[#F4BE00] text-[#2b3332] rounded-full text-[20px] h-[50px] w-[50px]">
              <FaPhoneAlt />
            </div>
            <div>
              <h4 className="text-lg font-semibold">Phone No</h4>
              <Link href="tel:+01204101680" className="text-[#606060]">
                +91-0120-4101680
              </Link>
            </div>
          </div>

          <div className="bg-[#ECF3EE] shadow-md rounded-xl p-6 flex gap-4">
            <div className="p-4 bg-[#F4BE00] text-[#2b3332] rounded-full text-[20px] h-[50px] w-[50px]">
              <HiOfficeBuilding />
            </div>
            <div>
              <h4 className="text-lg font-semibold">Our Office</h4>
              <p className="text-[#606060]">
                C-84/B, Sector 8, Noida, Uttar Pradesh 201301
              </p>
            </div>
          </div>
        </div>

        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          
          <div className="bg-[#ECF3EE] shadow-lg rounded-2xl p-8">
            <h3 className="text-2xl font-semibold mb-6">Connect With Us</h3>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  name="firstname"
                  placeholder="First Name*"
                  value={formData.firstname}
                  onChange={handleChange}
                  required
                   className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-black bg-white"
                />
                <input
                  name="lastname"
                  placeholder="Last Name*"
                  value={formData.lastname}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-black bg-white"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  name="mobile_no"
                  placeholder="Phone Number*"
                  value={formData.mobile_no}
                  onChange={handleChange}
                  required
                   className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-black bg-white"
                />
                <input
                  name="email"
                  type="email"
                  placeholder="Email Address*"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-black bg-white"
                />
              </div>

              <input
                name="website"
                placeholder="Website"
                value={formData.website}
                onChange={handleChange}
                 className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-black bg-white"
              />

              <textarea
                name="message"
                placeholder="Your Message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                 className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-black bg-white"
              />

             
              <div>
                <label className="block font-medium mb-2">Captcha</label>
                <div className="flex gap-4 items-center">
                  <input
                    placeholder="Enter Captcha"
                    value={captchaInput}
                    onChange={(e) => setCaptchaInput(e.target.value)}
                     className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-black bg-white"
                  />
                  <div className="min-w-[160px] h-[48px] bg-[#7a7a7a] text-white rounded-md flex items-center justify-center tracking-widest">
                    {captcha}
                  </div>
                  <button type="button" onClick={refreshCaptcha}>
                    <RotateCw />
                  </button>
                </div>
                {captchaError && (
                  <p className="text-red-500 text-sm mt-1">{captchaError}</p>
                )}
              </div>

              <Button2
                type="submit"
                disabled={isLoading}
                className="mt-5 p-[20px]"
              >
                <span>{isLoading ? "Submitting..." : "Submit"}</span>
                <ArrowUpIcon className="rotate-45" />
              </Button2>

            </form>
          </div>

          
          <div className="rounded-2xl overflow-hidden shadow-lg h-[635px]">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d755.3230908954598!2d77.32894854443926!3d28.59704149805207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce4ffd0000001%3A0x97587b436ee39762!2sVibes%20Communications%20%7C%20Best%20Digital%20Marketing%20Agency%20in%20Noida%20%2C%20Delhi%20NCR!5e0!3m2!1sen!2sin!4v1765798139858!5m2!1sen!2sin"
                className="w-full h-full border-0"
                loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
