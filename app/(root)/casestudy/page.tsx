'use client';

import React from 'react';
import CaseStudiesCard from '@/app/components/common/CommonCasestudy/CommonCasestudy';

/* UI card type (what CommonCasestudy expects) */
export interface SingleCardProps {
    id: number;
    img: string;
    title: string;
    buttonText?: string;
    tags?: string[];
}

/* Raw case study type */
export interface CaseStudy {
    id: number;
    img: string;
    title: string;
    buttonText: string;
    tags: string[];
}

/* Static data */
const cards: CaseStudy[] = [
    {
        id: 1,
        img: '/assests/img/home/interio-heaven-img.jpg',
        title: 'Interio Heaven',
        buttonText: 'View More',
        tags: ['Branding', 'Creative', 'Product Design'],
    },
    {
        id: 2,
        img: '/assests/img/home/tomarrow-india-img.jpg',
        title: 'Tomorrow India',
        buttonText: 'View More',
        tags: ['Branding', 'Creative', 'Product Design'],
    },
    {
        id: 3,
        img: '/assests/img/home/mahakumbh-img.png',
        title: 'Mahakumbh',
        buttonText: 'View More',
        tags: ['Branding', 'Creative', 'Product Design'],
    },
];

const Page = () => {
    const mappedCards: SingleCardProps[] = cards.map((item) => ({
        id: item.id,
        img: item.img,
        title: item.title,
        buttonText: item.buttonText,
        tags: item.tags,
    }));

    return (
        <div>
            {/* <CaseStudiesCard data={mappedCards} /> */}
        </div>
    );
};

export default Page;
