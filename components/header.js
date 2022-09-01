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

            <nav className="min-w-full max-w-full lg:h-[106px] md:h-[91px] h-[50px] flex items-center px-[9px] fixed top-0 z-10">
                <div className="min-w-full max-w-full flex font-FoundersGroteskMedium nav_item justify-around items-center py-2">
                    <Link href="/">
                        <a className="flex">
                            <figure className='relative lg:w-[170px] lg:h-[66px] md:w-[144px] md:h-[55px] w-[49px] h-[20px]'>
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
