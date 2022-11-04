import Image from 'next/image';
import OwnImage from '../components/OwnImage'

export default function Team({ src, item }) {
  return (
    <>
      <div className="">
        <figure className="relative lg:h-[341px] xl:h-[360px] md:h-[318px] w-full gallery overflow-hidden">
          {/* <Image
            src={src}
            layout="fill"
            className="object-cover"
            alt=""
          ></Image> */}
          <OwnImage url={src} alt="team member"/>
        </figure>
      </div>
    </>
  );
}
