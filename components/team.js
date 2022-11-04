import Image from 'next/image';
import OwnImage from '../components/OwnImage'

export default function Team({ src, item }) {
  return (
    <>
      <div className="">
        <figure className="relative w-full overflow-hidden gallery">
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
