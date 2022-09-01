import Image from "next/image";
import Link from "next/link";

export default function WorkBox() {
    return (
        <>
            <div className='mt-[83px] mb-3'>
                <div>
                    <Link href="/works/single-work">
                        <figure className="relative lg:w-[1023px] md:w-[860px] w-full lg:h-[683px] md:h-[573px] h-[237px] cursor-pointer">
                            <Image src="/images/project1.png" alt="project1.png" layout='fill' className="object-cover"></Image>
                        </figure>
                    </Link>

                    <h2 className="font-FoundersGroteskMedium lg:text-[65px] md:text-[51px] text-[42px] leading-[76px]">
                        <Link href="/works/single-work">
                            Sooke 01
                        </Link>
                    </h2>
                </div>
            </div>
        </>
    )
}
