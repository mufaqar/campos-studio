import Image from 'next/image';
import { useState } from 'react';

export default function Team() {

    const [open, setOpen] = useState(false)
    return (
        <>
            <div className='flex'>
            <figure className='relative lg:h-[341px] md:h-[318px] w-full gallery' 
            //onMouseEnter={() => { setOpen(!open) }}
            >
                    <Image src="/images/team1.png" layout='fill'></Image>
                </figure>
                
                <TeamContent open={open} setOpen={setOpen} />
            </div>
        </>
    )
}


function TeamContent({ open, setOpen }) {
    return (
        <>
            <div className={`absolute left-[9px] right-[9px] grid grid-cols-5 gap-2 ${open ? "block" : "hidden"}`}>
                <figure className='relative h-[412px] gallery float-left'>
                    <Image src="/images/team2.png" layout='fill'></Image>
                </figure>
                <div className='bg-black col-span-4 float-right'>
                    <div className=' lg:pt-8 lg:pb-6 lg:px-5 p-3 flex lg:flex-row md:flex-col'>
                        <div className='lg:w-[272px]'>
                            <h3 className='text-white font-SignifierRegular lg:text-[27px] md:text-[24px]'>01 Javier Campos</h3>
                            <p className='text-white font-SignifierRegular lg:text-[18px] md:text-[17px]'>Principal Designer</p>
                        </div>
                        <div className='lg:w-[535px]'>
                            <p className='text-white font-FoundersGroteskRegular lg:text-lg md:text-lg mb-5'>Javier Campos earned his Architecture Degree from the University of British Columbia after having completed an undergraduate degree in Art History. Previously he was at Acton Ostry Architects where, as lead designer, his projects were widely published and garnered numerous awards including Canadian Architect and Lieutenant Governor Medals in Architecture. His work adopted a green agenda early and has included off the grid projects since 2001.</p>
                            <p className='text-white font-FoundersGroteskRegular lg:text-lg md:text-lg'>He became LEED certified in 2004.  Javier is also involved in Public Art and has won several competitions with Artist Elspeth Pratt in Vancouver. Javier served on the board of the Contemporary Art Gallery for six years and as well being the current president of the Heritage Vancouver Society, where he established an award winning outreach series on issues around Heritage.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
