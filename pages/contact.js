import Image from "next/image";
import Link from "next/link";

export default function Contact() {
  return (
    <>
      <section className="custom-sec mt-48 py-7">
        <div className="grid lg:grid-cols-3 md:grid-cols-1 gap-12">
          <div className="lg:w-full md:w-1/2">
            <h2 className="font-FoundersGroteskMedium lg:text-[28px] md:text-[42px] text-[22px] border-b-2 border-black">Say Hello</h2>
            <p className="font-FoundersGroteskRegular lg:text-[21px]">Malen Fernandez</p>
            <Link href="#">
              <a className="font-FoundersGroteskRegular lg:text-[21px] underline hover:no-underline">
                <span>mfernandez@camposstudio.ca</span>
              </a>
            </Link>
          </div>
          <div className="lg:w-full md:w-1/2">
            <h2 className="font-FoundersGroteskMedium lg:text-[28px] md:text-[42px] text-[22px] border-b-2 border-black">Publishing</h2>
            <p className="font-FoundersGroteskRegular lg:text-[21px]">Samantha Bush</p>
            <Link href="#">
              <a className="font-FoundersGroteskRegular lg:text-[21px] underline hover:no-underline">
                <span>sbush@camposstudio.ca</span>
              </a>
            </Link>
          </div>
          <div className="lg:w-full md:w-1/2">
            <h2 className="font-FoundersGroteskMedium lg:text-[28px] md:text-[42px] text-[22px] border-b-2 border-black">Follow Along</h2>
            <Link href="#">
              <a className="font-FoundersGroteskRegular lg:text-[21px] underline hover:no-underline">
                <span>Join the mailing list</span>
              </a>
            </Link>
          </div>
        </div>
      </section>
      <section className="custom-sec mt-16 py-7">
        <div className="grid lg:grid-cols-3 md:grid-cols-1 gap-12">
          <div className="lg:w-full md:w-full flex md:gap-64 gap-0 lg:order-1 order-3 ">
            <div className="w-full md:w-1/2">
              <Link href="#">
                <a className="font-FoundersGroteskRegular lg:text-[21px] underline hover:no-underline">
                  <span>+ 1 604 558 1881</span>
                </a>
              </Link>
              <p className="font-FoundersGroteskRegular lg:text-[21px] lg:w-[260px] mt-5">1395 Odlum Drive Vancouver, BC V5L 3M1 Canada</p>
              <p className="font-FoundersGroteskRegular lg:text-[21px] lg:w-[392px] mt-5">Campos Studio is located in Vancouver British Columbia’s Strathcona neighborhood. Steered by a compact group of individuals, the studio maintains a vast body of work—including a variety of projects in architecture, public art, branding and product design. </p>
            </div>
            <div className="lg:hidden md:block md:w-1/2">
              <figure className='relative h-[321px] gallery'>
                <Image src="/images/contactBg.png" layout='fill'></Image>
              </figure>
            </div>
          </div>
          <div className="lg:w-full md:w-1/2 lg:block md:hidden order-2">
            <figure className='relative h-[321px] gallery'>
              <Image src="/images/contactBg.png" layout='fill'></Image>
            </figure>
          </div>
          <div className="lg:w-full md:w-1/2 grid place-content-between lg:order-3 order-1">
            <ul>
              <li>
                <Link href="#">
                  <a className="font-FoundersGroteskRegular lg:text-[21px] underline hover:no-underline">
                    <span>Instagram</span>
                  </a>
                </Link>
              </li>
              <li><Link href="#">
                <a className="font-FoundersGroteskRegular lg:text-[21px] underline hover:no-underline">
                  <span>Pinterest</span>
                </a>
              </Link></li>
            </ul>
            <div className="mt-8">
              <Link href="#">
                <a className="font-FoundersGroteskRegular lg:text-[21px] underline hover:no-underline">
                  <span>Site by Maker Brothers Worldwide</span>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
