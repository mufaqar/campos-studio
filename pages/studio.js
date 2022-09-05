import Image from "next/image";
import Book from "../components/book";
import StudioBg from '../public/images/pressBg.png';
import Wallpeper from '../public/images/wallpeper.png';
import Gray from '../public/images/GRAY.png';
import Deezen from '../public/images/DEEZEN.png';
import TheGlobe from '../public/images/THEGLOBE.png';
import Canadian from '../public/images/CANADIAN.png';
import Team from "../components/team";
import { useRef, useState } from "react";
import { AiOutlineCaretDown } from 'react-icons/ai';
import { AiOutlineCaretUp } from 'react-icons/ai';
import MblTeam from "../components/mblTeam";




export default function Studio({ icon, title, info }) {


  const ImageData = [
    {
      id: 1,
      url: "1.png"
    },
    {
      id: 2,
      url: "2.png"
    },
    {
      id: 3,
      url: "3.png"
    },
    {
      id: 4,
      url: "4.png"
    },
    {
      id: 5,
      url: "5.png"
    },
    {
      id: 6,
      url: "6.png"
    },
    {
      id: 7,
      url: "7.png"
    },
    {
      id: 8,
      url: "8.png"
    },
    {
      id: 9,
      url: "9.png"
    },
    {
      id: 10,
      url: "10.png"
    },
    {
      id: 11,
      url: "11.png"
    },
    {
      id: 12,
      url: "12.png"
    },
    {
      id: 13,
      url: "13.png"
    },
  ];

  const [openTeamDetails, setOpenTeamDetails] = useState(null); // To handel Team Section
  const [pressActive, setPressActive] = useState(false);
  const [countUpdate, setCountUpdate] = useState(null);

  const handleTeam = (id) => {
    if (openTeamDetails === id) {
      return setOpenTeamDetails(null)
    }
    setOpenTeamDetails(id)

    if (countUpdate === id) {
      setCountUpdate(null)
    }
    setCountUpdate(id)
  }




  return (
    <>
      <section className="mt-40 custom-sec">
        <div className="gallery">
          <h2 className="font-FoundersGroteskMedium lg:text-[48px] md:text-[42px] text-[22px]">Process</h2>
          <Image src={StudioBg} alt="pressBG.png"></Image>
        </div>
      </section>
      {/* Press */}
      <section className="custom-sec py-7">
        <div className="flex items-center justify-between" onClick={() => setPressActive(!pressActive)}>
          <h2 className="font-FoundersGroteskMedium lg:text-[48px] md:text-[42px] text-[22px]">Press</h2>
          <div className="sm:hidden">{pressActive ? <AiOutlineCaretUp /> : <AiOutlineCaretDown />}</div>
        </div>
        <div className={`${pressActive ? 'block sm:block' : 'hidden sm:block'}`}>
          <div className="Press-sec">
            <div>
              <h2 className="font-FoundersGroteskMedium lg:text-[28px] md:text-[28px] text-[20px]">Publications</h2>
            </div>
            <div className="grid gap-8 mt-8 lg:grid-cols-4 md:grid-cols-3">
              <Book icon={Wallpeper} title="WALLPAPER*" info="House 004, Los Zacatitos" />
              <Book icon={Gray} title="GRAY MAGAZINE*" info="Los Zacatitos Houses" />
              <Book icon={Deezen} title="DEEZEN*" info="Sooke House" />
              <Book icon={Deezen} title="DEEZEN*" info="Point Grey Laneway" />
              <Book icon={TheGlobe} title="THE GLOBE AND MAIL*" info="Los Zacatitos Houses" />
              <Book icon={Canadian} title="CANADIAN ARCHITECT*" info="Sooke House" />
              <Book icon={Wallpeper} title="WALLPAPER*" info="House 004, Los Zacatitos" />
              <Book icon={Gray} title="GRAY MAGAZINE*" info="Los Zacatitos Houses" />
              <Book icon={Deezen} title="DEEZEN*" info="Sooke House" />
              <Book icon={Deezen} title="DEEZEN*" info="Point Grey Laneway" />
              <Book icon={TheGlobe} title="THE GLOBE AND MAIL*" info="Los Zacatitos Houses" />
              <Book icon={Canadian} title="CANADIAN ARCHITECT*" info="Sooke House" />
              <Book icon={Wallpeper} title="WALLPAPER*" info="House 004, Los Zacatitos" />
              <Book icon={Gray} title="GRAY MAGAZINE*" info="Los Zacatitos Houses" />
              <Book icon={Deezen} title="DEEZEN*" info="Sooke House" />
            </div>
          </div>
          <div className="mt-8 Books-sec">
            <div>
              <h2 className="font-FoundersGroteskMedium lg:text-[28px] md:text-[28px] text-[20px]">Books</h2>
            </div>
            <div className="grid gap-8 mt-8 lg:grid-cols-4 md:grid-cols-3">
              <Book icon={Wallpeper} title="WALLPAPER*" info="House 004, Los Zacatitos" />
              <Book icon={Gray} title="GRAY MAGAZINE*" info="Los Zacatitos Houses" />
              <Book icon={Deezen} title="DEEZEN*" info="Sooke House" />
            </div>
          </div>
          <div className="mt-8 Exhibitions-sec">
            <div>
              <h2 className="font-FoundersGroteskMedium lg:text-[28px] md:text-[28px] text-[20px]">Exhibitions and Talks</h2>
            </div>
            <div className="grid gap-12 mt-8 lg:grid-cols-5 md:grid-cols-2">
              <div>
                <p className="font-FoundersGroteskMedium text-[22px]">2019</p>
                <p className="font-FoundersGroteskMedium text-[18px]">ARCHITECTURE AND DESIGN NOW TALK</p>
                <p className="font-FoundersGroteskRegular text-[17px]">Lethbridge University, AB</p>
              </div>
              <div>
                <p className="font-FoundersGroteskMedium text-[22px]">2019</p>
                <p className="font-FoundersGroteskMedium text-[18px]">ARCHITECTURE AND DESIGN NOW TALK</p>
                <p className="font-FoundersGroteskRegular text-[17px]">Lethbridge University, AB</p>
              </div>
              <div>
                <p className="font-FoundersGroteskMedium text-[22px]">2019</p>
                <p className="font-FoundersGroteskMedium text-[18px]">ARCHITECTURE AND DESIGN NOW TALK</p>
                <p className="font-FoundersGroteskRegular text-[17px]">Lethbridge University, AB</p>
              </div>
              <div>
                <p className="font-FoundersGroteskMedium text-[22px]">2019</p>
                <p className="font-FoundersGroteskMedium text-[18px]">ARCHITECTURE AND DESIGN NOW TALK</p>
                <p className="font-FoundersGroteskRegular text-[17px]">Lethbridge University, AB</p>
              </div>
              <div>
                <p className="font-FoundersGroteskMedium text-[22px]">2019</p>
                <p className="font-FoundersGroteskMedium text-[18px]">ARCHITECTURE AND DESIGN NOW TALK</p>
                <p className="font-FoundersGroteskRegular text-[17px]">Lethbridge University, AB</p>
              </div>
              <div>
                <p className="font-FoundersGroteskMedium text-[22px]">2019</p>
                <p className="font-FoundersGroteskMedium text-[18px]">ARCHITECTURE AND DESIGN NOW TALK</p>
                <p className="font-FoundersGroteskRegular text-[17px]">Lethbridge University, AB</p>
              </div>
              <div>
                <p className="font-FoundersGroteskMedium text-[22px]">2019</p>
                <p className="font-FoundersGroteskMedium text-[18px]">ARCHITECTURE AND DESIGN NOW TALK</p>
                <p className="font-FoundersGroteskRegular text-[17px]">Lethbridge University, AB</p>
              </div>
              <div>
                <p className="font-FoundersGroteskMedium text-[22px]">2019</p>
                <p className="font-FoundersGroteskMedium text-[18px]">ARCHITECTURE AND DESIGN NOW TALK</p>
                <p className="font-FoundersGroteskRegular text-[17px]">Lethbridge University, AB</p>
              </div>
              <div>
                <p className="font-FoundersGroteskMedium text-[22px]">2019</p>
                <p className="font-FoundersGroteskMedium text-[18px]">ARCHITECTURE AND DESIGN NOW TALK</p>
                <p className="font-FoundersGroteskRegular text-[17px]">Lethbridge University, AB</p>
              </div>
              <div>
                <p className="font-FoundersGroteskMedium text-[22px]">2019</p>
                <p className="font-FoundersGroteskMedium text-[18px]">ARCHITECTURE AND DESIGN NOW TALK</p>
                <p className="font-FoundersGroteskRegular text-[17px]">Lethbridge University, AB</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* team section  */}
      <section className="custom-sec py-7">
        <div>
          <h2 className="font-FoundersGroteskMedium lg:text-[48px] md:text-[42px] text-[22px] md:mb-0 mb-3 ">Team</h2>

          <MblTeam />
        </div>
        <div className="grid gap-2 mt-8 overflow-x-hidden lg:grid-cols-5 md:grid-cols-4">
          {/* creating a team section with onclick team image goes left corner and the detail section goes right side and col-span 1  */}

          {
            ImageData.map((item, index) => {
              return (
                <div key={index} className={`relative ${openTeamDetails === item.id && 'col-start-1 row-start-1'} `}>
                  <div className={`cursor-pointer`} onClick={() => handleTeam(item.id)}>
                    <Team src={item.url} />
                  </div>      
                  <div className={`${openTeamDetails === item.id ? 'block' : 'hidden'} bg-black -top-[26px] absolute lg:h-[341px] lg:left-[102.5%] w-screen md:h-[318px] z-10 md:left-0   text-white custom-sec py-7`}>
                    <div className="px-10">
                      <h2 className="font-FoundersGroteskMedium lg:text-[36px] md:text-[31px] text-lg">Past Collaborators - {countUpdate}</h2>
                      <p className="lg:w-[805px] md:w-[754px] font-SignifierRegular lg:text-xl mt-5">Regan Appleton, Romain Bael, Jacquelyn Bortolussi, Tom Chung, Sarah Cree, Jessie Croll, Paul Crowley, Alix Demontrond, Hande Ersoy, Adrien Fera, Mike Fugeta, Ashley Gesner,
                        Matias T. Grez,  Maria Herrera, Paul Holley, Manuela Hurtavo, Arnold Jung, Zaid Kadhim, Nelly Lachman, Mario Lambraño, Michael Lis, Michael Lis, Colin Mbugua, Laura McMurran, David Morar, Juan David Moreno, Kate Richard, Clara Sabel, Jan Stretzlig, Bardia Tajik,
                        Alex Vanderlee, Yiming Wang, Yanlan Wang, Loriane Wong, Britney Yan, Thomas Yuan,
                        David Zeiben</p>
                    </div>
                  </div>
                </div>
              )
            })
          }

        </div>
      </section>


    </>
  )
}
