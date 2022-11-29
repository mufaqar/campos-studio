import Image from 'next/image';

export default function Book(props) {
  return (
    <>
      <div className="flex">
        <figure className="book_image">
          <Image
            src={props.icon}
            alt="wallpeper.png"
            width={85}
            height={85}
          ></Image>
        </figure>
        <div className="ml-3">
          <p className="font-FoundersGroteskMedium text-[18px]">
            {props.title}
          </p>
          <p className="font-FoundersGroteskRegular text-[16px] ">
            {props.info}
          </p>
        </div>
      </div>
    </>
  );
}
