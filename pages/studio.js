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
}`

const pressBooksQuery = `*[_type == "press" && (categories == "books")]{
  brand_name,
  title,
  image{
    asset->{
      url
    }
  },
}`

const eAndTQuery = `*[_type == "exhibitions_and_talks"]{
  year,
  fields_data[]{
    title,
    place
  }
}`

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
}`






export default function Studio({ exhibitionsAndTalks, team, publications, books }) {
  console.log('publications', publications)
  console.log('books', books)
  console.log('team', team)
  console.log('exhibitionsAndTalks', exhibitionsAndTalks)

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
          <video className='w-screen videoTag' autoPlay loop muted>
            <source src='/video.mp4' type='video/mp4' />
          </video>

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
              {
                publications.map((publication, index) => (
                  <Book
                    icon={publication.image.asset.url}
                    title={publication.title}
                    info={publication.brand_name}
                    key={index}
                  />
                ))
              }

            </div>
          </div>
          <div className="mt-8 Books-sec">
            <div>
              <h2 className="font-FoundersGroteskMedium lg:text-[28px] md:text-[28px] text-[20px]">
                Books
              </h2>
            </div>
            <div className="grid gap-8 mt-8 lg:grid-cols-4 md:grid-cols-3">
              {
                books.map((book, index) => (
                  <Book
                    icon={book.image.asset.url}
                    title={book.title}
                    info={book.brand_name}
                    key={index}
                  />
                ))
              }
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
          {team.map((item, index) => (
            <MblTeam item={item} key={index}/> 
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
                  className={`${
                    openTeamDetails === item._id ? 'block' : 'hidden'
                  } bg-black overflow-y-scroll -top-[26px] absolute lg:h-[341px] xl:h-[360px] lg:left-[102.5%] w-screen md:h-[318px] z-10 md:left-[103%] text-white custom-sec py-7`}
                >
                  <div className="flex flex-col px-5 lg:flex-row lg:gap-12">
                    <div className="lg:w-[200px] w-full flex flex-col justify-between mb-3">
                      <h3 className="text-white font-SignifierRegular lg:text-[27px] md:text-[24px] lg:block hidden">
                        {item?.member_name}
                      </h3>
                      <h3 className="text-white font-SignifierRegular lg:text-[27px] md:text-[24px] lg:hidden block">
                        {item?.member_name}
                      </h3>
                      <p className="text-white font-SignifierRegular lg:text-[18px] md:text-[17px]">
                        {item?.designation}
                      </p>
                    </div>
                    <div className="lg:w-[650px] w-[700px] team_content">
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
      team
    }
  };
}

