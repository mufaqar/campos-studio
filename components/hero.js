import Image from "next/image";

export default function Hero() {
    return (
        <>
            <section className="custom-sec lg:mt-32 mt-52 ">
                <div>
                    <figure className="relative md:w-[85%] w-full lg:h-[725px] lg:w-[83%] w1366:w-[64%] w2560:h-[1040px] bm sm:h-[500px]  md:h-[625px] h-[300px]  ">
                        <Image src="/images/hippo.gif" alt="hippo" layout='fill' className="object-cover"></Image>
                    </figure>
                </div>
            </section>
        </>
    )
}
