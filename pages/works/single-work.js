<<<<<<< HEAD
//import Audio from '../../components/audio';
=======

>>>>>>> 61218c296c48bde14a4e8396f9a5295f5219eb64
import { useState } from 'react';
import Image from "next/image";
import Gallery1 from '../../public/images/gallery1.png'
import Gallery2 from '../../public/images/gallery2.png'
import Gallery3 from '../../public/images/gallery3.png'
import Gallery4 from '../../public/images/gallery4.png'
import Gallery5 from '../../public/images/gallery5.png'
import Gallery6 from '../../public/images/gallery6.png'
import Arrow from '../../public/images/Arrow.png'
import Link from "next/link";
import WorkBox from "../../components/work-box";
import AudioPlayer from "../../components/audioPlayer";


function FullContent({ open, setOpen }) {
    return (
        <div className={`${open ? "block" : "hidden"}`}>
            <div className="border-b-2 border-black">
                <p className="font-FoundersGroteskRegular lg:text-[23px] md:text-[22px] text-lg text-left mb-4">Zacatitos 03 was designed as a formal expression of the local construction methodology - concrete-reinforced insulation panel system. The program elements are organized in a linear fashion across the sloping site in response to the orientation sun, direction of local prevailing breezes. The double line of panels was then shifted and laterally accommodate views, maximize ventilation, and protect against solar gain.</p>
                <p className="font-FoundersGroteskRegular lg:text-[23px] md:text-[22px] text-lg text-left mb-7">This project was completed as Campos Leckie Studio.</p>
            </div>
            <ul>
                <li className="py-2 text-left border-b-2 border-black">
                    <p className="font-FoundersGroteskMedium lg:text-[21px]">LOCATION</p>
                    <p className="font-FoundersGroteskRegular lg:text-[21px]">Los Zacatitos, Baja California Sur, Mexico</p>
                </li>
                <li className="py-2 text-left border-b-2 border-black">
                    <p className="font-FoundersGroteskMedium lg:text-[21px]">YEAR</p>
                    <p className="font-FoundersGroteskRegular lg:text-[21px]">2011</p>
                </li>
                <li className="py-2 text-left border-b-2 border-black">
                    <p className="font-FoundersGroteskMedium lg:text-[21px]">SQUARE FOOTAGE</p>
                    <p className="font-FoundersGroteskRegular lg:text-[21px]">3800 ft2</p>
                </li>
                <li className="py-2 text-left border-b-2 border-black">
                    <p className="font-FoundersGroteskMedium lg:text-[21px]">Team</p>
                    <p className="font-FoundersGroteskRegular lg:text-[21px] flex justify-between">
                        <span>Javier Campos</span>
                        <span>Malen Fernandez</span>
                        <span>Ashley Gesner</span>
                    </p>
                </li>
                <li className="py-2 text-left border-b-2 border-black">
                    <p className="font-FoundersGroteskMedium lg:text-[21px]">COLLABORATORS</p>
                    <p className="font-FoundersGroteskRegular lg:text-[21px]">General Contractor:  Boydco</p>
                    <p className="font-FoundersGroteskRegular lg:text-[21px]">Project Photography:  Ema Peter</p>
                </li>
            </ul>
        </div>
    )
}

export default function SingleWork({ title, image_path }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section className="workBanerBg lg:h-[800px] md:h-[800px] h-[375px]">
        <div></div>
      </section>

<<<<<<< HEAD
      <section className="custom-sec py-7">
        <div className="lg:w-[899px] md:w-[683px] w-full mx-auto">
          <h2 className="font-FoundersGroteskMedium lg:text-[60px] md:text-[56px] text-[36px] leading-[70px] mb-8">
            Zacatitos 03
          </h2>
          <div className="">{/* <Audio /> */}</div>
          <div className="mb-4">
            <p className="font-FoundersGroteskRegular lg:text-[23px] md:text-[22px] text-lg">
              This project is the third of a series of desert dwelling
              prototypes that comprise an ongoing body of research into off-grid
              living in a relatively extreme climate. All three research sites
              are located in the remote community of Los Zacatitos, in Baja
              California Sur, Mexico.
            </p>
          </div>
          <div className="text-center">
            <button
              className="font-FoundersGroteskMedium lg:text-lg md:text-[17px] text-[13px]"
              onClick={() => {
                setOpen(!open);
              }}
            >
              <span className={`${open ? 'hidden' : 'block'}`}>READ MORE</span>
            </button>
            <FullContent open={open} setOpen={setOpen} />
          </div>
        </div>
      </section>
=======
            <section className="custom-sec py-7">
                <div className="lg:w-[899px] md:w-[683px] w-full mx-auto">
                    <h2 className="font-FoundersGroteskMedium lg:text-[60px] md:text-[56px] text-[36px] leading-[70px] mb-8">Zacatitos 03</h2>
                    <div className="">
                        <AudioPlayer />
                    </div>
                    <div className="mb-4">
                        <p className="font-FoundersGroteskRegular lg:text-[23px] md:text-[22px] text-lg">This project is the third of a series of desert dwelling prototypes that comprise an ongoing body of research into off-grid living in a relatively extreme climate. All three research sites are located in the remote community of Los Zacatitos, in Baja California Sur, Mexico.</p>
                    </div>
                    <div className="text-center">
                        <button className="font-FoundersGroteskMedium lg:text-lg md:text-[17px] text-[13px]"
                            onClick={() => { setOpen(!open) }}>
                            <span className={`${open ? "hidden" : "block"}`}>READ MORE</span>
                        </button>
                        <FullContent open={open} setOpen={setOpen} />
                    </div>
                </div>
            </section>
>>>>>>> 61218c296c48bde14a4e8396f9a5295f5219eb64

            <section className="custom-sec gallery-section">
                <figure className="relative gallery"><Image src={Gallery1} alt="gallery1"></Image></figure>
                <figure className="relative gallery"><Image src={Gallery2} alt="gallery2"></Image></figure>
                <figure className="relative gallery"><Image src={Gallery3} alt="gallery3"></Image></figure>
                <div className="grid grid-cols-1 gap-1 lg:grid-cols-2 md:grid-cols-2">
                    <figure className="relative gallery"><Image src={Gallery4} alt="gallery4"></Image></figure>
                    <figure className="relative gallery"><Image src={Gallery5} alt="gallery5"></Image></figure>
                </div>
                <figure className="relative gallery"><Image src={Gallery6} alt="gallery6"></Image></figure>
            </section>
            <section className="custom-sec">
                <div className="lg:w-[899px] md:w-[683px] w-full mx-auto">
                    <ul>
                        <li className="font-FoundersGroteskMedium lg:text-[36px] md:text-[36px] text-[24px] mb-10">
                            <Link href="#">
                                <p className="flex items-center cursor-pointer lg:gap-10">Baja homes that catch a wind<Image src={Arrow} alt="Arrow"></Image></p>
                            </Link>
                            <p className="text-xs font-FoundersGroteskRegular lg:text-lg md:text-lg">THE GLOBE AND MAIL</p>
                        </li>
                        <li className="font-FoundersGroteskMedium lg:text-[36px] md:text-[36px] text-[24px] mb-10">
                            <Link href="#">
                                <p className="flex items-center cursor-pointer lg:gap-10">House 004, Los Zacatitos<Image src={Arrow} alt="Arrow"></Image></p>
                            </Link>
                            <p className="text-xs font-FoundersGroteskRegular lg:text-lg md:text-lg">WALLPAPER*</p>
                        </li>
                        <li className="font-FoundersGroteskMedium lg:text-[36px] md:text-[36px] text-[24px] mb-10">
                            <Link href="#">
                                <p className="flex items-center cursor-pointer lg:gap-10">Off-Grid in Z-Town<Image src={Arrow} alt="Arrow"></Image></p>
                            </Link>
                            <p className="text-xs font-FoundersGroteskRegular lg:text-lg md:text-lg">CANADIAN ARCHITECT</p>
                        </li>
                    </ul>
                </div>
            </section>

            <section className="custom-sec">
                <WorkBox title="Two Rivers Meat" image_path="/images/project6.png" />
                <WorkBox title="The Brick House" image_path="/images/project7.png" />
                <WorkBox title="Music Shed" image_path="/images/project8.png" />
                <WorkBox title="Yew House" image_path="/images/project9.png" />
                <WorkBox title="Iamota" image_path="/images/project10.png" />
                <WorkBox title="Zacatitos 01" image_path="/images/project11.png" />
                <WorkBox title="Sooke 02" image_path="/images/project12.png" />
                <WorkBox title="Hasting Sunrise Studio" image_path="/images/project14.png" />
                <WorkBox title="Green Lake House" image_path="/images/project13.png" />
                <WorkBox title="Zacatitos 04" image_path="/images/project15.png" />
                <WorkBox title="Inter|section" image_path="/images/project16.png" />
                <WorkBox title="Grandview Renovation" image_path="/images/project17.png" />
            </section>
        </>

    )
}
