import Link from "next/link";
import Image from 'next/image'
import React from 'react'

const Logo = () => {
    return (
        <Link href="/">
            <Image
                src={"/assests/img/home/vibes-logo.png"}
                alt=''
                width={100}
                height={100}
            />
        </Link>
    )
}

export default Logo
