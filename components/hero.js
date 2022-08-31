import Image from "next/image";

export default function Hero() {
    return (
        <>
            <section className="custom-sec lg:mt-32 mt-52 ">
                <div>
                    <figure className="relative lg:w-[833px] md:w-[834px] w-full lg:h-[625px]  md:h-[625px] h-[268px]  ">
                        <Image src="/images/hippo.gif" alt="hippo" layout='fill' className="object-cover"></Image>
                    </figure>
                </div>
            </section>
        </>
    )
}
