import Image from 'next/image';
import Link from 'next/link';
import OwnImage from './OwnImage';

export default function WorkBox({ title, imageURL, imageCaption, slug }) {
  return (
    <>
      <div className="mt-[84px] mb-2">
        <div>
          <Link href={`/works/${slug}`}>
            <figure className="cursor-pointer lg:pr-[25%]">
              <OwnImage url={imageURL} alt={imageCaption} />
            </figure>
          </Link>
          <h2 className="font-FoundersGroteskMedium cursor-pointer lg:text-[65px] md:text-[51px] text-[42px] leading-[50px]">
            <Link href={`/works/${slug}`}>
              <span>{title}</span>
            </Link>
          </h2>
        </div>
      </div>
    </>
  );
}
