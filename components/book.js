import Image from 'next/image';

export default function Book(props) {
  return (
    <>
    <div className='flex'>
        <Image src={props.icon} alt="wallpeper.png" width={85} height={85}></Image>
        <div className='ml-3'>
          <p className='font-FoundersGroteskMedium lg:text-[18px] md:text-[18px]'>{props.title}</p>
          <p className='font-FoundersGroteskRegular lg:text-[15px] md:text-[15px]'>{props.info}</p>
        </div>
    </div>
    </>
  )
}
