import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';


export default function Contact() {

  const [showForm, setShowForm] = useState(false)
  const [input, setInput] = useState({
    name: '',
    email: '',
    country: '',
  })
  const OpenForm=()=>{
    setShowForm(true)
  }
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInput({ ...input, [name]: value });
  }


  return (
    <>
      <section className="mt-48 custom-sec py-7">
        <div className="grid gap-12 lg:grid-cols-3 md:grid-cols-1">
          <div className="lg:w-full md:w-1/2">
            <h2 className="font-FoundersGroteskMedium lg:text-[28px] md:text-[21px] text-[21px] border-b-2 border-black">
              Say Hello
            </h2>
            <p className="font-FoundersGroteskRegular lg:text-[21px]">
              Malen Fernandez
            </p>
            <Link href="#">
              <a className="font-FoundersGroteskRegular lg:text-[21px] underline hover:no-underline">
                <span>mfernandez@camposstudio.ca</span>
              </a>
            </Link>
          </div>
          <div className="lg:w-full md:w-1/2">
            <h2 className="font-FoundersGroteskMedium lg:text-[28px] md:text-[21px] text-[21px] border-b-2 border-black">
              Publishing
            </h2>
            <p className="font-FoundersGroteskRegular lg:text-[21px]">
              Samantha Bush
            </p>
            <Link href="#">
              <a className="font-FoundersGroteskRegular lg:text-[21px] underline hover:no-underline">
                <span>sbush@camposstudio.ca</span>
              </a>
            </Link>
          </div>
          <div className="lg:w-full md:w-1/2">
            <h2 className="font-FoundersGroteskMedium lg:text-[28px] md:text-[21px] text-[21px] border-b-2 border-black">
              Follow Along
            </h2>
            <div onClick={OpenForm} className={showForm && 'hidden'}>
              <p className="font-FoundersGroteskRegular cursor-pointer lg:text-[21px] underline hover:no-underline">
                <span>Join the mailing list</span>
              </p>
            </div>
            <form className={showForm ? 'block' : 'hidden'}>
              <div className="flex items-center justify-between mt-1">
                <input type='text' name="name" value={input.name} onChange={handleChange} className='input_field'  placeholder="Name"/> 
                <p className={input.name ? 'hidden' : 'block'}>Required Field</p>
              </div>
              <div className="flex items-center justify-between mt-1">
                <input type='email' name="email" value={input.email} onChange={handleChange} className='input_field' placeholder="Email"/> 
                <p className={input.email ? 'hidden' : 'block'}>Required Field</p>
              </div>
              <div className="flex items-center justify-between mt-1">
                <input type='text' name="country" value={input.country} onChange={handleChange} className='input_field' placeholder="Country"/> 
                <p className={input.country ? 'hidden' : 'block'}>Enter an email address</p>
              </div>
              <button type='submit' className='text-xl input_field'>Enter</button>
            </form>
          </div>
        </div>
      </section>
      <section className="mt-16 custom-sec py-7">
        <div className="grid gap-12 lg:grid-cols-3 md:grid-cols-1">
          <div className="flex order-3 gap-0 lg:w-full md:w-full md:gap-64 lg:order-1 ">
            <div className="w-full md:w-1/2">
              <Link href="#">
                <a className="font-FoundersGroteskRegular lg:text-[21px] underline hover:no-underline">
                  <span>+ 1 604 558 1881</span>
                </a>
              </Link>
              <p className="font-FoundersGroteskRegular lg:text-[21px] lg:w-[260px] mt-5">
                1395 Odlum Drive Vancouver, BC V5L 3M1 Canada
              </p>
              <p className="font-FoundersGroteskRegular lg:text-[21px] lg:w-[392px] mt-5">
                Campos Studio is located in Vancouver British Columbia’s
                Strathcona neighborhood. Steered by a compact group of
                individuals, the studio maintains a vast body of work—including
                a variety of projects in architecture, public art, branding and
                product design.{' '}
              </p>
            </div>
            <div className="lg:hidden md:block md:w-1/2">
              <figure className="relative h-[321px] gallery">
                <Image src="/images/contactBg.png" layout="fill" alt=""></Image>
              </figure>
            </div>
          </div>
          <div className="order-2 lg:w-full md:w-1/2 lg:block md:hidden">
            <figure className="relative h-[321px] gallery">
              <Image src="/images/contactBg.png" layout="fill" alt=""></Image>
            </figure>
          </div>
          <div className="grid order-1 lg:w-full md:w-1/2 place-content-between lg:order-3">
            <ul>
              <li>
                <Link href="#">
                  <a className="font-FoundersGroteskRegular lg:text-[21px] underline hover:no-underline">
                    <span>Instagram</span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a className="font-FoundersGroteskRegular lg:text-[21px] underline hover:no-underline">
                    <span>Pinterest</span>
                  </a>
                </Link>
              </li>
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
  );
}
