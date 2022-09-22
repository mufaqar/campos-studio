import Image from 'next/image';
import Link from 'next/link';
import OwnImage from './OwnImage';

export default function WorkBox({title, imageURL, imageCaption, slug}) {
  return (
    <>
      <div className="mt-[60px] mb-2">
        <div>
          <Link href={`/works/${slug}`}>
            <figure className="cursor-pointer md:pr-[30%]">
              <OwnImage url={imageURL} altText={imageCaption}/>
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
