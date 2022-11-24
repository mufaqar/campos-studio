import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import MailchimpFormContainer from '../components/NewsletterForm';
import OwnImage from '../components/OwnImage';

export default function Contact({ status, message, onValidated }) {
  const [showForm, setShowForm] = useState(false);
  const [hideFields, setHideFields] = useState(true);

  const OpenForm = () => {
    setShowForm(true);
  };

  const PassState = (state) => {
    setHideFields(state);
  };

  return (
    <>
      <section className="md:mt-[132px] mt-[64px] custom-sec">
        <div className="grid gap-[13px] lg:grid-cols-3 md:grid-cols-1">
          <div className="lg:w-full md:w-1/2">
            <h2 className="font-FoundersGroteskMedium lg:text-[28px] md:text-[21px] text-[13px] ">
              Say hello
            </h2>

            <a href="mailto:mfernandez@camposstudio.ca">
              <span className="font-FoundersGroteskRegular lg:text-[21px] text-[18px] underline hover:no-underline">
                <span> Malen Fernandez</span>
              </span>
            </a>
          </div>
          <div className="lg:w-full md:w-1/2">
            <h2 className="font-FoundersGroteskMedium lg:text-[28px] md:text-[21px] text-[13px] ">
              Publishing
            </h2>
            <p className="font-FoundersGroteskRegular lg:text-[21px] text-[18px]"></p>
            <a href="mailto:sbush@camposstudio.ca">
              <span className="font-FoundersGroteskRegular lg:text-[21px] underline hover:no-underline">
                <span> Samantha Bush</span>
              </span>
            </a>
          </div>
          <div className="lg:w-full md:w-1/2 relative">
            <h2 className="font-FoundersGroteskMedium lg:text-[28px] md:text-[21px] text-[13px] ">
              Read on
            </h2>
            <div>
              <div onClick={OpenForm} className={showForm && 'hidden'}>
                <p className="font-FoundersGroteskRegular cursor-pointer lg:text-[21px] underline hover:no-underline">
                  <span>Hipo mail</span>
                </p>
              </div>
            </div>
            <div className={showForm ? 'block w-full lg:absolute' : 'hidden'}>
              <MailchimpFormContainer
                sendState={PassState}
                hideFields={hideFields}
              />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="w-full md:w-2/3 ml-[9px] pr-[18px] md:mr-0 mt-[42px]">
          <figure className="">
            <OwnImage url="/images/contact-us.webp" alt="fill" />
          </figure>
        </div>
        <div className="w-1/3"></div>
      </section>
      <section className="custom-sec ">
        <div className="grid gap-12 lg:grid-cols-2 md:grid-cols-1">
          <div className="">
            <ul>
              <li>
                <a
                  href="https://www.instagram.com/campos_studio/"
                  target="_blank"
                  rel="noreferrer"
                  className="font-FoundersGroteskRegular lg:text-[21px] text-[18px] underline hover:no-underline"
                >
                  <span>Instagram</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.pinterest.ca/camposstudio/"
                  target="_blank"
                  rel="noreferrer"
                  className="font-FoundersGroteskRegular lg:text-[21px]  text-[18px] underline hover:no-underline"
                >
                  <span>Pinterest</span>
                </a>
              </li>
            </ul>
            <div className="mt-[42px]">
              <a
                href="https://www.makerbros.co"
                target="_blank"
                rel="noreferrer"
                className="font-FoundersGroteskRegular lg:text-[21px] text-[18px] underline hover:no-underline"
              >
                <span>Site by Maker Brothers Worldwide®</span>
              </a>
            </div>
          </div>
          <div className="flex order-3 gap-0 lg:w-full md:w-full md:gap-64 ">
            <div className="w-full md:w-2/3">
              <Link href="#">
                <a className="font-FoundersGroteskRegular lg:text-[21px] text-[18px] underline hover:no-underline">
                  <span>+ 1 604 558 1881</span>
                </a>
              </Link>
              <p className="font-FoundersGroteskRegular lg:text-[21px] text-[18px] lg:w-[260px] mt-[13px]">
                1395 Odlum Drive <br /> Vancouver, BC V5L 3M1 <br />
                Canada
              </p>
              <p className="font-FoundersGroteskRegular lg:text-[21px] text-[18px]  mt-[42px] mb-[9px]">
                Campos Studio is located in Vancouver British Columbia’s
                Strathcona neighborhood. Steered by a compact group of
                individuals, the studio maintains a vast body of work—including
                a variety of projects in architecture, public art, branding and
                product design.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
