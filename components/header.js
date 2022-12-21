import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showState, hideState } from '../slices/hippoShow';
import { useRouter } from 'next/router';
import styles from '../styles/Home.module.css';
import Hero from './hero';

export default function Header() {
  const state = useSelector((state) => state.hippo.value);
  //  Header sticky when scroll up word
  const [headerSticky, setHeaderSticky] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);
  const [showHippo, setShowHippo] = useState(false);

  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    function onScroll() {
      let currentPosition = window.pageYOffset;
      setScrollTop(currentPosition <= 0 ? 0 : currentPosition);
    }
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [scrollTop]);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.pageYOffset < scrollTop
        ? setHeaderSticky(true)
        : setHeaderSticky(false);
    });
  }, [scrollTop]);
  // x Header sticky when scroll up word x

  function handleClick() {
    //router.push('/');
    // setShowHippo(!showHippo);
  }

  const MouseEnter = () => {
    setShowHippo(true);
  };

  const MouseLeave = () => {
    setShowHippo(false);
  };

  return (
    <>
      <Head>
        <title>Campos Studio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <nav
        className={`mt-[9px] min-w-full max-w-full  flex items-center px-[9px] top-0 z-10 ${
          headerSticky ? 'fixed' : 'absolute'
        }`}
      >
        <div className="flex items-center justify-between max-w-full min-w-full font-FoundersGroteskMedium ">
          <div>
            <div
              className="flex"
              onMouseEnter={MouseEnter}
              onMouseLeave={MouseLeave}
              onClick={handleClick}
            >
              <div
                className={`lg:mt-2 cursor-pointer ${styles.imageContainer}`}
              >
                <Image
                  src="/images/logo-black.svg"
                  alt="logo"
                  layout="fill"
                  className={styles.image}
                ></Image>
              </div>
            </div>
          </div>

          <Link href="/">
            <a className="navlinks text-[6.8vw] sm:text-[7.2vw] leading-[0px]">
              WORK
            </a>
          </Link>
          <Link href="/studio">
            <a className="navlinks text-[6.8vw] sm:text-[7.2vw]  leading-[0px]">
              STUDIO
            </a>
          </Link>
          <Link href="/contact">
            <a className="navlinks text-[6.8vw] sm:text-[7.2vw]  leading-[0px]">
              CONTACT
            </a>
          </Link>
        </div>
      </nav>

      {/* {state ? 'block' : 'hidden'} */}
      <div className={showHippo ? 'block' : 'hidden'}>
        <Hero />
      </div>
    </>
  );
}
