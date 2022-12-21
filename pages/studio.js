import Image from 'next/image';
import Book from '../components/book';
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
import { sanityClient } from '../lib/sanity';
// import video from '../public/video.mp4'

// sanity Queries

const pressPublicationsQuery = `*[_type == "press" && (categories == "publications")]{
  brand_name,
  title,
  image{
    asset->{
      url
    }
  },
}`;

const pressBooksQuery = `*[_type == "press" && (categories == "books")]{
  brand_name,
  title,
  image{
    asset->{
      url
    }
  },
}`;

const eAndTQuery = `*[_type == "exhibitions_and_talks"]{
  year,
  fields_data[]{
    title,
    place
  }
}`;

const teamQuery = `*[_type == "team"]{
  _id,
  member_name,
  designation,
  profileimage{
    asset->{
      url
    }
  },
  about
}`;

export default function Studio({
  exhibitionsAndTalks,
  team,
  publications,
  books,
}) {
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

  const TeamDetailClick = () => {
    setOpenTeamDetails(null);
  };

  return (
    <>
      <section className="mt-[132px] custom-sec">
        <div className="gallery">
          <div className="iframe-container">
            <iframe
              src="https://player.vimeo.com/video/34901903?h=a1b3cf7c37&title=0&byline=0&portrait=0"
              width="1200"
              height="800"
              className="w-screen"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>
      {/* Press */}
      <section className="custom-sec mt-[42px]">
        <div>
          <div className="Press-sec">
            <div className="grid gap-[9px] mt-8 lg:grid-cols-4 md:grid-cols-3">
              {publications.map((publication, index) => (
                <Book
                  icon={publication.image.asset.url}
                  title={publication.title}
                  info={publication.brand_name}
                  key={index}
                />
              ))}
            </div>
          </div>
          <div className="mt-8 Books-sec">
            <div className="grid gap-[9px] mt-[21px] lg:grid-cols-4 md:grid-cols-3">
              {books.map((book, index) => (
                <Book
                  icon={book.image.asset.url}
                  title={book.title}
                  info={book.brand_name}
                  key={index}
                />
              ))}
            </div>
          </div>
          <div className="mt-[42px] Exhibitions-sec">
            {/* <div>
              <h2 className="font-FoundersGroteskMedium lg:text-[28px] md:text-[28px] text-[20px]">
                Exhibitions and Talks
              </h2>
            </div> */}
            <div className="grid  mt-8 lg:grid-cols-5 md:grid-cols-2">
              <section>
                <div className="mb-[13px]">
                  {/* <p className="font-FoundersGroteskMedium text-[22px]">2019</p> */}
                  <p className="font-FoundersGroteskMedium campo_bodyfont">
                    ARCHITECTURE AND DESIGN NOW TALK
                  </p>
                  <p className="font-FoundersGroteskRegular campo_bodyfont2">
                    Lethbridge University, AB
                  </p>
                </div>
                <div className="mb-[13px]">
                  {/* <p className="font-FoundersGroteskMedium text-[22px] mt-[13px]">
                    2017
                  </p> */}
                  <p className="font-FoundersGroteskMedium campo_bodyfont">
                    MoV ECO CITIES
                  </p>
                  <p className="font-FoundersGroteskRegular campo_bodyfont2">
                    Museum of Vancouver, BC
                  </p>
                </div>
                <div className="mb-[13px]">
                  <p className="font-FoundersGroteskMedium campo_bodyfont">
                    URBANARIUM
                  </p>
                  <p className="font-FoundersGroteskRegular campo_bodyfont2">
                    Robson Square, Vancouver, BC
                  </p>
                </div>
                <div className="mb-[13px]">
                  <p className="font-FoundersGroteskMedium campo_bodyfont">
                    GRAY MAGAZINE PANEL
                  </p>
                  <p className="font-FoundersGroteskRegular campo_bodyfont2">
                    Venue, Seattle, WA, United States of America
                  </p>
                </div>
              </section>

              <section>
                <div className="mb-[13px]">
                  {/* <p className="font-FoundersGroteskMedium text-[22px]">2016</p> */}
                  <p className="font-FoundersGroteskMedium campo_bodyfont">
                    YOUR FUTURE HOME: CREATING THE NEW VANCOUVER
                  </p>
                  <p className="font-FoundersGroteskRegular campo_bodyfont2">
                    Exhibition Name, Museum of Vancouver, BC
                  </p>
                </div>
                <div className="mb-[13px]">
                  {/* <p className="font-FoundersGroteskMedium text-[22px] mt-[13px]">
                    2014
                  </p> */}
                  <p className="font-FoundersGroteskMedium campo_bodyfont">
                    THE WEST COAST MODERN HOUSE BOOK
                  </p>
                  <p className="font-FoundersGroteskRegular campo_bodyfont2">
                    Ocean Park, Wallace Street House
                  </p>
                </div>
              </section>

              <section>
                <div className="mb-[13px]">
                  {/* <p className="font-FoundersGroteskMedium text-[22px]">2012</p> */}
                  <p className="font-FoundersGroteskMedium campo_bodyfont">
                    PECHA KULCHA TALK
                  </p>
                  <p className="font-FoundersGroteskRegular campo_bodyfont2">
                    Venue, City of Richmond Culture Days, BC
                  </p>{' '}
                </div>
                <div className="mb-[13px]">
                  <p className="font-FoundersGroteskMedium campo_bodyfont">
                    PECHA KULCHA 21 TALK
                  </p>
                  <p className="font-FoundersGroteskRegular campo_bodyfont2">
                    Vogue Theatre, Vancouver, BC
                  </p>
                </div>

                <div className="mb-[13px]">
                  {/* <p className="font-FoundersGroteskMedium text-[22px] mt-[13px]">
                    2011
                  </p> */}
                  <p className="font-FoundersGroteskMedium campo_bodyfont">
                    VIEW FROM THE EDGE EXHIBITION
                  </p>
                  <p className="font-FoundersGroteskRegular campo_bodyfont2">
                    Architectural Institue of British Columbia, Vancouver, BC
                  </p>
                </div>
              </section>

              <section>
                <div className="mb-[13px]">
                  {/* <p className="font-FoundersGroteskMedium text-[22px]">2010</p> */}
                  <p className="font-FoundersGroteskMedium campo_bodyfont">
                    20+ CHANGE EXHIBITION
                  </p>
                  <p className="font-FoundersGroteskRegular campo_bodyfont2">
                    Dalhousie University of Architecture, Halifax, NS
                  </p>
                  <p className="font-FoundersGroteskRegular campo_bodyfont2">
                    Emily Carr University of Art and Design Vancouver, BC
                  </p>
                  <p className="font-FoundersGroteskRegular campo_bodyfont2">
                    AIBC Architecture Centre Gallery, Vancouver, BC
                  </p>
                  <p className="font-FoundersGroteskRegular campo_bodyfont2">
                    La Maison de l’architecture du Quebec, Montreal, QC
                  </p>
                  <p className="font-FoundersGroteskRegular campo_bodyfont2">
                    The Gladstone Hotel, Toronto, ON
                  </p>{' '}
                </div>
                <div className="mb-[13px]">
                  <p className="font-FoundersGroteskMedium campo_bodyfont">
                    HIGH PERFORMANCE EXHIBITION
                  </p>
                  <p className="font-FoundersGroteskRegular campo_bodyfont2">
                    Emily Carr University of Art and Design Vancouver, BC
                  </p>
                </div>
              </section>

              <section>
                <div>
                  {/* <p className="font-FoundersGroteskMedium text-[22px]">2009</p> */}
                  <p className="font-FoundersGroteskMedium campo_bodyfont">
                    IIDEX / NEOCON EXHIBITION
                  </p>
                  <p className="font-FoundersGroteskRegular campo_bodyfont2">
                    Venue, Toronto, ON
                  </p>
                </div>

                <div>
                  <p className="font-FoundersGroteskMedium campo_bodyfont">
                    2004
                  </p>
                  <p className="font-FoundersGroteskMedium campo_bodyfont">
                    MAKING OUT EXHIBITION
                  </p>
                  <p className="font-FoundersGroteskRegular campo_bodyfont2">
                    Emily Carr University of Art and Design Vancouver, BC
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>

      {/* team section  */}
      <section className="custom-sec">
        <div>
          {/* <h2 className="font-FoundersGroteskMedium lg:text-[48px] md:text-[42px] text-[22px]">
            Team
          </h2> */}
          {team.map((item, index) => (
            <MblTeam item={item} key={index} />
          ))}
        </div>
        <div className="grid gap-2 mt-8 overflow-x-hidden lg:grid-cols-5 md:grid-cols-4 team ">
          {/* creating a team section with onclick team image goes left corner and the detail section goes right side and col-span 1  */}
          {team.map((item, index) => {
            return (
              <div
                key={index}
                className={`relative ${
                  openTeamDetails === item._id && 'col-start-1 row-num'
                } `}
              >
                <div
                  className={`cursor-pointer`}
                  onClick={() => handleTeam(item._id)}
                >
                  <Team src={item.profileimage.asset.url} />
                </div>
                <div
                  onClick={() => TeamDetailClick()}
                  className={`${
                    openTeamDetails === item._id ? 'block' : 'hidden'
                  } bg-black overflow-y-scroll -top-[42px] absolute h-full lg:left-[102.5%] w-screen  z-10 md:left-[103%] text-white custom-sec pl-[18px] pt-[13px]`}
                >
                  <div className="lg:flex-row lg:gap-12">
                    <div className="w-full flex flex-col justify-between mb-3">
                      <h3 className="text-white font-normal font-serif lg:text-[27px] italic md:text-[24px] lg:block hidden">
                        {item?.member_name}
                      </h3>
                      <h3 className="text-white font-normal font-serif lg:text-[27px] md:text-[24px] italic lg:hidden block">
                        {item?.member_name}
                      </h3>
                      <p className="text-white font-SignifierRegular  md:text-[17px]">
                        {item?.designation
                          ? item?.designation
                          : 'Principal Designer'}
                      </p>
                    </div>
                    <div className="lg:max-w-[900px] w-[700px] team_content mt-[21px]">
                      <p className="text-white font-FoundersGroteskRegular lg:text-lg md:text-base">
                        {item?.about}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className=" mb-4 custom-sec2">
        <div className="lg:w-[805px] md:w-[754px] w-full">
          <h2
            className="font-SignifierRegular team_title py-[13px]"
            onClick={() => setPressActive(!pressActive)}
          >
            Past Collaborators
          </h2>
          <p
            className={
              pressActive
                ? 'block campo_bodyfont'
                : 'md:block hidden campo_bodyfont'
            }
          >
            Regan Appleton , Romain Bael , Jacquelyn Bortolussi , Tom Chung ,
            Sarah Cree, Jessie, Croll, Paul Crowley, Alix Demontrond, Hande
            Ersoy, Adrien Fera, Mike Fugeta, Ashley Gesner, Matias T. Grez,
            Maria Herrera, Paul Holley, Manuela Hurtavo, Arnold Jung, Zaid
            Kadhim, Nelly Lachman, Mario Lambraño, Michael Lis, Michael Lis,
            Colin Mbugua, Laura McMurran, David Morar, Juan David Moreno, Kate
            Richard, Clara Sabel, Jan Stretzlig, Bardia Tajik, Alex Vanderlee,
            Yiming Wang, Yanlan Wang, Britney Yan, Thomas Yuan, David Zeiben,
            Loriane Wong
          </p>
        </div>
      </section>
    </>
  );
}

export async function getStaticProps() {
  const publications = await sanityClient.fetch(pressPublicationsQuery);
  const books = await sanityClient.fetch(pressBooksQuery);
  const exhibitionsAndTalks = await sanityClient.fetch(eAndTQuery);
  const team = await sanityClient.fetch(teamQuery);
  return {
    props: {
      publications,
      books,
      exhibitionsAndTalks,
      team,
    },
  };
}
