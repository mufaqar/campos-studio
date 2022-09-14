import Image from 'next/image';
import Link from 'next/link';
export default function WorkBox({title, imageURL, imageCaption, slug}) {
  return (
    <>
      <div className="mt-[60px] mb-2">
        <div>
          <Link href={`/works/${slug}`}>
            <figure className=" relative lg:w-[83%] md:w-[860px] w-full lg:h-[683px] w1366:w-[80%] w1366:h-[740px] w1728:w-[86%] w1728:h-[900px] w2560:w-[64%] md:h-[573px] h-[237px] cursor-pointer">
              <Image
                src={imageURL}
                alt={imageCaption}
                layout="fill"
                className="object-cover"
              ></Image>
            </figure>
          </Link>
          <h2 className="font-FoundersGroteskMedium cursor-pointer lg:text-[65px] md:text-[51px] text-[42px] leading-[42px] md:leading-[77px]">
            <Link href={`/works/${slug}`}>
              <span>{title}</span>
            </Link>
          </h2>
        </div>
      </div>
    </>
  );
}
