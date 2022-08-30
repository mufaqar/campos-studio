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
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>

            <nav className="lg:h-[106px] md:h-[91px] h-[50px] flex justify-between transition-all duration-300 items-center px-[9px] fixed top-0 left-0 right-0 z-10">
                <div className="flex items-center">
                    <Link href="/">
                        <a className="flex ">
                            <figure className='relative lg:w-[170px] lg:h-[66px] md:w-[144px] md:h-[55px] w-[49px] h-[20px]'>
                            <Image src="/images/logo.png" alt="logo" layout='fill' className='object-cover'></Image>
                            </figure>
                        </a>
                    </Link>
                </div>
                <div className="flex items-center">
                    <div className="flex font-FoundersGroteskMedium nav_item justify-between">
                        <NavLink to="/works">
                            WORK
                        </NavLink>
                        <NavLink to="">
                            STUDIO
                        </NavLink>
                        <NavLink to="">
                            CONTACT
                        </NavLink>
                    </div>
                </div>
            </nav>

        </>
    )
}
