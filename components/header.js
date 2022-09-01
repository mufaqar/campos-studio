import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';

function NavLink({ to, children }) {
    return <a href={to} className={``}>
        {children}
    </a>
}

export default function Header() {

    return (
        <>
            <Head>
                <title>Campos Studio</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>

            <nav className="mt-8 md:mt-3 lg:mt-0 min-w-full max-w-full lg:h-[106px] md:h-[91px] h-[50px] flex items-center px-[9px] fixed top-0 z-10">
                <div className="flex items-center justify-around max-w-full min-w-full py-2 font-FoundersGroteskMedium nav_item">
                    <Link href="/home">
                        <a className="flex">
                            <figure className='relative mt-2 md:mt-3 lg:mt-4 xl:mt-5 lg:w-[170px] lg:h-[66px] sm:w-[95px] sm:h-[40px] md:w-[144px] md:h-[55px] w-[49px] h-[20px]'>
                                <Image src="/images/logo.png" alt="logo" layout='fill' className='object-cover'></Image>
                            </figure>
                        </a>
                    </Link>

                    <NavLink to="/works">
                        WORK
                    </NavLink>
                    <NavLink to="/studio">
                        STUDIO
                    </NavLink>
                    <NavLink to="/contact">
                        CONTACT
                    </NavLink>
                </div>
            </nav>

        </>
    )
}
