import Image from 'next/image';
import Link from 'next/link';
export default function WorkBox(props) {
  return (
    <>
      <div className="mt-[60px] mb-2">
        <div>
          <Link href="/works/single-work">
            <figure className=" relative lg:w-[1023px] md:w-[860px] w-full lg:h-[683px] md:h-[573px] h-[237px] cursor-pointer">
              <Image
                src={props.image_path}
                alt="project1.png"
                layout="fill"
                className="object-cover"
              ></Image>
            </figure>
          </Link>
          <h2 className="font-FoundersGroteskMedium lg:text-[65px] md:text-[51px] text-[42px] lg:leading-[76px] md:leading-[60px] leading-[43px]">
            <Link href="/works/single-work"><span>{props.title}</span></Link>
          </h2>
        </div>
      </div>
    </>
  );
}
