import Image from 'next/image';

export default function Hero() {
  return (
    <>
      <section className="fixed top-0 hipe-custom md:left-[9px]  z-20  lg:mt-[170px] mt-[131px] md:mt-[143px]">
        <div className="md:h-[557px] md:w-[557px] w-[100vw] lg:h-[550px] w1536:w-[710px] w1536:h-[710px]">
          <figure className=" md:w-[85%] w-full lg:h-[725px] lg:w-[83%] w1366:w-[64%] w2560:h-[1040px] bm sm:h-[500px]  md:h-[625px] h-[300px]">
            <Image
              src="/images/hippo.gif"
              alt="hippo"
              layout="fill"
              className="object-cover"
            ></Image>
          </figure>
        </div>
      </section>
    </>
  );
}
