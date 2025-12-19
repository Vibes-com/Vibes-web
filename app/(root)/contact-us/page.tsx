"use client";
import ContactForm from '@/app/components/contact-us/contact-form/ContactForm'
import ContactHero from '@/app/components/contact-us/contact-hero/ContactHero'
import SuccessStory from '@/app/components/technology-details/success-story/SuccessStory'
import { useRouter } from "next/navigation";
import React from 'react'

const page = () => {
    const router = useRouter();
    return (
        <div>
            <ContactHero />
            <ContactForm />
        </div>
    )
}

export default page
