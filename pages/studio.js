import Image from 'next/image';
import Book from '../components/book';
import StudioBg from '../public/images/pressBg.png';
import Wallpeper from '../public/images/wallpeper.png';
import Gray from '../public/images/GRAY.png';
import Deezen from '../public/images/DEEZEN.png';
import TheGlobe from '../public/images/THEGLOBE.png';
import Canadian from '../public/images/CANADIAN.png';
import Team from '../components/team';
import { useState } from 'react';
import { AiOutlineCaretDown } from 'react-icons/ai';
import { AiOutlineCaretUp } from 'react-icons/ai';
import MblTeam from '../components/mblTeam';

export default function Studio({ icon, title, info }) {
  const ImageData = [
    {
      id: 1,
      url: '1.png',
    },
    {
      id: 2,
      url: '2.png',
    },
    {
      id: 3,
      url: '3.png',
    },
    {
      id: 4,
      url: '4.png',
    },
    {
      id: 5,
      url: '5.png',
    },
    {
      id: 6,
      url: '6.png',
    },
    {
      id: 7,
      url: '7.png',
    },
    {
      id: 8,
      url: '8.png',
    },
    {
      id: 9,
      url: '9.png',
    },
    {
      id: 10,
      url: '10.png',
    },
    {
      id: 11,
      url: '11.png',
    },
    {
      id: 12,
      url: '12.png',
    },
    {
      id: 13,
      url: '13.png',
    },
  ];

  const [openTeamDetails, setOpenTeamDetails] = useState(null); // To handel Team Section
  const [pressActive, setPressActive] = useState(false);
  const [countUpdate, setCountUpdate] = useState(null);

  const handleTeam = (id) => {
    if (openTeamDetails === id) {
      return setOpenTeamDetails(null);
    }
    setOpenTeamDetails(id);

    if (countUpdate === id) {
      setCountUpdate(null);
    }
    setCountUpdate(id);
  };

  return (
    <>
      <section className="mt-40 custom-sec">
        <div className="gallery">
          <h2 className="font-FoundersGroteskMedium lg:text-[48px] md:text-[42px] text-[22px]">
            Process
          </h2>
          <Image src={StudioBg} alt="pressBG.png"></Image>
        </div>
      </section>
      {/* Press */}
      <section className="custom-sec py-7">
        <div
          className="flex items-center justify-between"
          onClick={() => setPressActive(!pressActive)}
        >
          <h2 className="font-FoundersGroteskMedium lg:text-[48px] md:text-[42px] text-[22px]">
            Press
          </h2>
          <div className="sm:hidden">
            {pressActive ? <AiOutlineCaretUp /> : <AiOutlineCaretDown />}
          </div>
        </div>
        <div
          className={`${pressActive ? 'block sm:block' : 'hidden sm:block'}`}
        >
          <div className="Press-sec">
            <div>
              <h2 className="font-FoundersGroteskMedium lg:text-[28px] md:text-[28px] text-[20px]">
                Publications
              </h2>
            </div>
            <div className="grid gap-8 mt-8 lg:grid-cols-4 md:grid-cols-3">
              <Book
                icon={Wallpeper}
                title="WALLPAPER*"
                info="House 004, Los Zacatitos"
              />
              <Book
                icon={Gray}
                title="GRAY MAGAZINE*"
                info="Los Zacatitos Houses"
              />
              <Book icon={Deezen} title="DEEZEN*" info="Sooke House" />
              <Book icon={Deezen} title="DEEZEN*" info="Point Grey Laneway" />
              <Book
                icon={TheGlobe}
                title="THE GLOBE AND MAIL*"
                info="Los Zacatitos Houses"
              />
              <Book
                icon={Canadian}
                title="CANADIAN ARCHITECT*"
                info="Sooke House"
              />
              <Book
                icon={Wallpeper}
                title="WALLPAPER*"
                info="House 004, Los Zacatitos"
              />
              <Book
                icon={Gray}
                title="GRAY MAGAZINE*"
                info="Los Zacatitos Houses"
              />
              <Book icon={Deezen} title="DEEZEN*" info="Sooke House" />
              <Book icon={Deezen} title="DEEZEN*" info="Point Grey Laneway" />
              <Book
                icon={TheGlobe}
                title="THE GLOBE AND MAIL*"
                info="Los Zacatitos Houses"
              />
              <Book
                icon={Canadian}
                title="CANADIAN ARCHITECT*"
                info="Sooke House"
              />
              <Book
                icon={Wallpeper}
                title="WALLPAPER*"
                info="House 004, Los Zacatitos"
              />
              <Book
                icon={Gray}
                title="GRAY MAGAZINE*"
                info="Los Zacatitos Houses"
              />
              <Book icon={Deezen} title="DEEZEN*" info="Sooke House" />
            </div>
          </div>
          <div className="mt-8 Books-sec">
            <div>
              <h2 className="font-FoundersGroteskMedium lg:text-[28px] md:text-[28px] text-[20px]">
                Books
              </h2>
            </div>
            <div className="grid gap-8 mt-8 lg:grid-cols-4 md:grid-cols-3">
              <Book
                icon={Wallpeper}
                title="WALLPAPER*"
                info="House 004, Los Zacatitos"
              />
              <Book
                icon={Gray}
                title="GRAY MAGAZINE*"
                info="Los Zacatitos Houses"
              />
              <Book icon={Deezen} title="DEEZEN*" info="Sooke House" />
            </div>
          </div>
          <div className="mt-8 Exhibitions-sec">
            <div>
              <h2 className="font-FoundersGroteskMedium lg:text-[28px] md:text-[28px] text-[20px]">
                Exhibitions and Talks
              </h2>
            </div>
            <div className="grid gap-12 mt-8 lg:grid-cols-5 md:grid-cols-2">
              <div>
                <p className="font-FoundersGroteskMedium text-[22px]">2019</p>
                <p className="font-FoundersGroteskMedium text-[18px]">
                  ARCHITECTURE AND DESIGN NOW TALK
                </p>
                <p className="font-FoundersGroteskRegular text-[17px]">
                  Lethbridge University, AB
                </p>
              </div>
              <div>
                <p className="font-FoundersGroteskMedium text-[22px]">2019</p>
                <p className="font-FoundersGroteskMedium text-[18px]">
                  ARCHITECTURE AND DESIGN NOW TALK
                </p>
                <p className="font-FoundersGroteskRegular text-[17px]">
                  Lethbridge University, AB
                </p>
              </div>
              <div>
                <p className="font-FoundersGroteskMedium text-[22px]">2019</p>
                <p className="font-FoundersGroteskMedium text-[18px]">
                  ARCHITECTURE AND DESIGN NOW TALK
                </p>
                <p className="font-FoundersGroteskRegular text-[17px]">
                  Lethbridge University, AB
                </p>
              </div>
              <div>
                <p className="font-FoundersGroteskMedium text-[22px]">2019</p>
                <p className="font-FoundersGroteskMedium text-[18px]">
                  ARCHITECTURE AND DESIGN NOW TALK
                </p>
                <p className="font-FoundersGroteskRegular text-[17px]">
                  Lethbridge University, AB
                </p>
              </div>
              <div>
                <p className="font-FoundersGroteskMedium text-[22px]">2019</p>
                <p className="font-FoundersGroteskMedium text-[18px]">
                  ARCHITECTURE AND DESIGN NOW TALK
                </p>
                <p className="font-FoundersGroteskRegular text-[17px]">
                  Lethbridge University, AB
                </p>
              </div>
              <div>
                <p className="font-FoundersGroteskMedium text-[22px]">2019</p>
                <p className="font-FoundersGroteskMedium text-[18px]">
                  ARCHITECTURE AND DESIGN NOW TALK
                </p>
                <p className="font-FoundersGroteskRegular text-[17px]">
                  Lethbridge University, AB
                </p>
              </div>
              <div>
                <p className="font-FoundersGroteskMedium text-[22px]">2019</p>
                <p className="font-FoundersGroteskMedium text-[18px]">
                  ARCHITECTURE AND DESIGN NOW TALK
                </p>
                <p className="font-FoundersGroteskRegular text-[17px]">
                  Lethbridge University, AB
                </p>
              </div>
              <div>
                <p className="font-FoundersGroteskMedium text-[22px]">2019</p>
                <p className="font-FoundersGroteskMedium text-[18px]">
                  ARCHITECTURE AND DESIGN NOW TALK
                </p>
                <p className="font-FoundersGroteskRegular text-[17px]">
                  Lethbridge University, AB
                </p>
              </div>
              <div>
                <p className="font-FoundersGroteskMedium text-[22px]">2019</p>
                <p className="font-FoundersGroteskMedium text-[18px]">
                  ARCHITECTURE AND DESIGN NOW TALK
                </p>
                <p className="font-FoundersGroteskRegular text-[17px]">
                  Lethbridge University, AB
                </p>
              </div>
              <div>
                <p className="font-FoundersGroteskMedium text-[22px]">2019</p>
                <p className="font-FoundersGroteskMedium text-[18px]">
                  ARCHITECTURE AND DESIGN NOW TALK
                </p>
                <p className="font-FoundersGroteskRegular text-[17px]">
                  Lethbridge University, AB
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* team section  */}
      <section className="custom-sec py-7">
        <div>
          <h2 className="font-FoundersGroteskMedium lg:text-[48px] md:text-[42px] text-[22px]">
            Team
          </h2>
          <MblTeam />
        </div>
        <div className="grid gap-2 mt-8 overflow-x-hidden lg:grid-cols-5 md:grid-cols-4 team ">
          {/* creating a team section with onclick team image goes left corner and the detail section goes right side and col-span 1  */}
          {ImageData.map((item, index) => {
            return (
              <div
                key={index}
                className={`relative ${openTeamDetails === item.id && 'col-start-1 row-num'
                  } `}
              >
                <div
                  className={`cursor-pointer`}
                  onClick={() => handleTeam(item.id)}
                >
                  <Team src={item.url} />
                </div>
                <div
<<<<<<< HEAD
                  className={`${openTeamDetails === item.id ? 'block' : 'hidden'
                    } bg-black -top-[26px] absolute lg:h-[341px] lg:left-[102.5%] w-screen md:h-[318px] z-10 md:left-[103%] text-white custom-sec py-7`}
=======
                  className={`${
                    openTeamDetails === item.id ? 'block' : 'hidden'
                  } bg-black overflow-y-scroll -top-[26px] absolute lg:h-[341px] lg:left-[102.5%] w-screen md:h-[318px] z-10 md:left-[103%] text-white custom-sec py-7`}
>>>>>>> bf7de5f614da6959cf13b4c1d613b486f8e94476
                >
                  <div className="flex flex-col px-5 lg:flex-row lg:gap-12">
                    <div className="lg:w-[200px] w-full flex flex-col justify-between mb-3">
                      <h3 className="text-white font-SignifierRegular lg:text-[27px] md:text-[24px] lg:block hidden">
                        Javier <br></br>Campos
                      </h3>
                      <h3 className="text-white font-SignifierRegular lg:text-[27px] md:text-[24px] lg:hidden block">
                        Javier Campos
                      </h3>
                      <p className="text-white font-SignifierRegular lg:text-[18px] md:text-[17px]">
                        Principal Designer
                      </p>
                    </div>
                    <div className="lg:w-[650px] w-[700px] team_content">
                      <p className="text-white font-FoundersGroteskRegular lg:text-lg md:text-base">
                        Javier Campos earned his Architecture Degree from the
                        University of British Columbia after having completed an
                        undergraduate degree in Art History. Previously he was
                        at Acton Ostry Architects where, as lead designer, his
                        projects were widely published and garnered numerous
                        awards including Canadian Architect and Lieutenant
                        Governor Medals in Architecture. His work adopted a
                        green agenda early and has included off the grid
                        projects since 2001. He became LEED certified in 2004.
                        Javier is also involved in Public Art and has won
                        several competitions with Artist Elspeth Pratt in
                        Vancouver. Javier served on the board of the
                        Contemporary Art Gallery for six years and as well being
                        the current president of the Heritage Vancouver Society,
                        where he established an award winning outreach series on
                        issues around Heritage.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="py-5 mt-0 custom-sec">
        <div className="lg:w-[805px] md:w-[754px] w-full">
          <h2 className="font-FoundersGroteskMedium lg:text-4xl md:text-[31px] text-lg">
            Past Collaborators
          </h2>
          <p className="text-base font-SignifierRegular lg:text-xl md:text-xl">
            Regan Appleton, Romain Bael, Jacquelyn Bortolussi, Tom Chung, Sarah
            Cree, Jessie Croll, Paul Crowley, Alix Demontrond, Hande Ersoy,
            Adrien Fera, Mike Fugeta, Ashley Gesner, Matias T. Grez, Maria
            Herrera, Paul Holley, Manuela Hurtavo, Arnold Jung, Zaid Kadhim,
            Nelly Lachman, Mario Lambraño, Michael Lis, Michael Lis, Colin
            Mbugua, Laura McMurran, David Morar, Juan David Moreno, Kate
            Richard, Clara Sabel, Jan Stretzlig, Bardia Tajik, Alex Vanderlee,
            Yiming Wang, Yanlan Wang, Britney Yan, Thomas Yuan, David Zeiben,
            Loriane Wong
          </p>
        </div>
      </section>
    </>
  );
}
