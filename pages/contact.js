import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import MailchimpFormContainer from '../components/NewsletterForm';


export default function Contact({ status, message, onValidated }) {
  const [showForm, setShowForm] = useState(false);
  const [hideFields, setHideFields] = useState(true)
  
  const OpenForm =()=> {
    setShowForm(true)
  }
  
  const PassState = (state) => {
    setHideFields(state)
  }

  return (
    <>
      <section className="mt-48 custom-sec min-h-[240px] pt-7">
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
            <div>
              <div onClick={OpenForm} className={showForm && 'hidden'}>
                <p className="font-FoundersGroteskRegular cursor-pointer lg:text-[21px] underline hover:no-underline">
                  <span>
                    Join the mailing list
                  </span>
                </p>
              </div>
            </div>
            <div className={showForm ? 'block' : 'hidden'}>
              <MailchimpFormContainer sendState={PassState} hideFields={hideFields}/>
            </div>
          </div>
        </div>
      </section>
      <section className="custom-sec py-7">
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
                <a
                  href="https://www.instagram.com/campos_studio/"
                  target="_blank"
                  rel="noreferrer"
                  className="font-FoundersGroteskRegular lg:text-[21px] underline hover:no-underline"
                >
                  <span>Instagram</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.pinterest.ca/camposstudio/"
                  target="_blank"
                  rel="noreferrer"
                  className="font-FoundersGroteskRegular lg:text-[21px] underline hover:no-underline"
                >
                  <span>Pinterest</span>
                </a>
              </li>
            </ul>
            <div className="mt-8">
              <a
                href="https://www.makerbros.co"
                target="_blank"
                rel="noreferrer"
                className="font-FoundersGroteskRegular lg:text-[21px] underline hover:no-underline"
              >
                <span>Site by Maker Brothers Worldwide</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
