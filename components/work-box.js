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
          <h2 className="campo_heading">
            <Link href={`/works/${slug}`}>{title}</Link>
          </h2>
        </div>
      </div>
    </>
  );
}
