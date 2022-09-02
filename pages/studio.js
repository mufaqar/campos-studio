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

export default function Studio({ icon, title, info }) {

  const [openTeamDetails, setOpenTeamDetails] = useState(); // To handel Team Section
  const [pressActive, setPressActive] = useState(false);

  const handleTeam = (id) => {
    // 👇️ get html dom
    const activeTeam = document.querySelectorAll('.activeTeamDetail');
    const activeTeamMember = document.querySelectorAll('.activeTeam');

    activeTeam.forEach(team => {
      // ✅ Remove class from each element
      team.classList.remove('activeTeamDetail');
    });

    activeTeamMember.forEach(team => {
      // ✅ Remove class from each activeTeamMember
      team.classList.remove('activeTeam');
    });

    // ✅ Add class to active(onclick) element
    var el = document.querySelector(`#id_${id}`)
    var at = document.querySelector(`#teamid_${id}`)

    el.classList.add('activeTeamDetail')
    at.classList.add('activeTeam')

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
       <div className="flex items-center justify-between" onClick={()=>setPressActive(!pressActive)}>
        <h2 className="font-FoundersGroteskMedium lg:text-[48px] md:text-[42px] text-[22px]">Press</h2>
        <div className="sm:hidden">{ pressActive ? <AiOutlineCaretUp/> : <AiOutlineCaretDown/>  }</div>
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
          <h2 className="font-FoundersGroteskMedium lg:text-[48px] md:text-[42px] text-[22px]">Team</h2>
        </div>
        <div className="grid gap-2 mt-8 lg:grid-cols-5 md:grid-cols-4">
          {/* creating a team section with onclick team image goes left corner and the detail section goes right side and col-span 1  */}

          <Team src="1.png" />
          <Team src="2.png" />
          <Team src="3.png" />
          <Team src="4.png" />
          <Team src="6.png" />
          <Team src="7.png" />
          <Team src="8.png" />
          <Team src="9.png" />
          <Team src="10.png" />
          <Team src="11.png" />
          <Team src="12.png" />
          {/* <div id={`teamid_1`} onClick={()=>handleTeam(1)} className={`relative lg:h-[341px] md:h-[318px] w-full gallery bg-green-100`}>1</div>
          <div id={`id_1`} className="col-span-4 hidden bg-red-200 col-start-2 -order-1 p-5 lg:h-[341px] md:h-[318px] w-full"> detail content 1</div>
          <div id={`teamid_2`} onClick={()=>handleTeam(2)} className={`relative lg:h-[341px] md:h-[318px] w-full gallery bg-green-100`}>2</div>
          <div id={`id_2`} className="col-span-4 hidden bg-red-200 col-start-2 -order-1 p-5 lg:h-[341px] md:h-[318px] w-full"> detail content 2</div>
          <div id={`teamid_3`} onClick={()=>handleTeam(3)} className={`relative lg:h-[341px] md:h-[318px] w-full gallery bg-green-100`}>3</div>
          <div id={`id_3`} className="col-span-4 hidden bg-red-200 col-start-2 -order-1 p-5 lg:h-[341px] md:h-[318px] w-full"> detail content 3</div> */}

        </div>
      </section>
      {/* Past Collaborators */}
      <section className="custom-sec py-7">
        <div>
          <h2 className="font-FoundersGroteskMedium lg:text-[36px] md:text-[31px] text-lg">Past Collaborators</h2>
          <p className="lg:w-[805px] md:w-[754px] font-SignifierRegular lg:text-xl mt-5">Regan Appleton, Romain Bael, Jacquelyn Bortolussi, Tom Chung, Sarah Cree, Jessie Croll, Paul Crowley, Alix Demontrond, Hande Ersoy, Adrien Fera, Mike Fugeta, Ashley Gesner,
            Matias T. Grez,  Maria Herrera, Paul Holley, Manuela Hurtavo, Arnold Jung, Zaid Kadhim, Nelly Lachman, Mario Lambraño, Michael Lis, Michael Lis, Colin Mbugua, Laura McMurran, David Morar, Juan David Moreno, Kate Richard, Clara Sabel, Jan Stretzlig, Bardia Tajik,
            Alex Vanderlee, Yiming Wang, Yanlan Wang, Loriane Wong, Britney Yan, Thomas Yuan,
            David Zeiben</p>
        </div>
      </section>


    </>
  )
}
