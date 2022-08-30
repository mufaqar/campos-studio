import Image from "next/image";
import Link from "next/link";

export default function WorkBox() {
    return (
        <>
            <div className='mt-[83px]'>
                <div>
                    <figure className="relative lg:w-[1023px] md:w-[860px] w-full lg:h-[683px] md:h-[573px] h-[237px] cursor-pointer">
                        <Link href="/works/single-work">
                            <Image src="/images/project1.png" alt="project1.png" layout='fill' className="object-cover"></Image>
                        </Link>
                    </figure>


                    <h2 className="font-FoundersGroteskMedium lg:text-[65px] md:text-[51px] text-[42px] leading-[76px]">
                        <Link href="#">
                            Sooke 01
                        </Link>
                    </h2>
                </div>
            </div>
        </>
    )
}
