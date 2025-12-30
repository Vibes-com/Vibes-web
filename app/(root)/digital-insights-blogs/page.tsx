"use client";
import BlogListingHero from '@/app/components/blog/blog-listing-hero/BlogListingHero';
import BlogListing from '@/app/components/blog/BlogListing'
import AboutHero from '@/app/components/who-we-are/about-hero/AboutHero'
import React from 'react'

const page = () => {
    return (
        <div>
            <BlogListingHero />
            <BlogListing />
        </div>
    )
}

export default page
