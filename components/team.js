import Image from 'next/image';
import { useState } from 'react';

export default function Team({src, item}) {


    return (
        <>
            <div className=''>
                <figure className='relative lg:h-[341px] xl:h-[360px] md:h-[318px] w-full gallery'>
                    <Image src={src} layout='fill' className='object-cover'></Image>
                </figure>
            </div>
        </>
    )
}
