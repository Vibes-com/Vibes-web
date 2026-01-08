import Link from "next/link";
import Image from 'next/image'
import React from 'react'
import { withImageBase } from "@/app/utils/image";

const Logo = () => {
    return (
        <Link href="/">
            <Image
                src={withImageBase("/home/vibes-logo.png")}
                alt=''
                width={100}
                height={100}
                className="vibes-logo"
             />
        </Link>
    )
}

export default Logo
