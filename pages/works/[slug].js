import { useState } from 'react';
import Image from 'next/image';
import Arrow from '../../public/images/Arrow.png';
import WorkBox from '../../components/work-box';
import AudioPlayer from '../../components/audioPlayer';
import { sanityClient, usePreviewSubscription } from '../../lib/sanity';
import OwnImage from '../../components/OwnImage';

const projectSlugQuery = `*[_type == "projects" && slug.current == $slug][0]{
  Collaborators,
  area,
  detail,
  excerpt,
  audio{
    asset->{
      url
    },
  },
  featureimage{
    asset->{
      url
    },
    caption,
  },
  gallery{
    images[]{
      asset->{
        url,
      },
      size
    }
  },
  links[]{
    hading,
    short_text,
    link
  },
  location,
  slug{
    current
  },
  tag_line,
  teammember[]->{
    member_name,
    profileimage{
      asset->{
        url
      },
    },
    about,
  },
  title,
  year,
  related_project[]->{
    featureimage{
      asset->{
        url
      },
      caption,
    },
    slug{
      current
    },
    title
  }
}`;

function FullContent({ open, setOpen, project }) {
  console.log("🚀 ~ file: [slug].js ~ line 77 ~ FullContent ~ project", project.gallery.images)
  

  return (
    <div className={`${open ? 'block' : 'hidden'}`}>
      <div className="border-b-2 border-black">
        <p className="font-FoundersGroteskRegular lg:text-[23px] md:text-[22px] text-lg text-left mb-4">
          {project?.detail}
        </p>
        <p className="font-FoundersGroteskRegular lg:text-[23px] md:text-[22px] text-lg text-left mb-7">
          {project?.tag_line}
        </p>
      </div>
      <ul>
        <li className="py-2 text-left border-b-2 border-black">
          <p className="font-FoundersGroteskMedium lg:text-[21px]">LOCATION</p>
          <p className="font-FoundersGroteskRegular lg:text-[21px]">
            {project?.location}
          </p>
        </li>
        <li className="py-2 text-left border-b-2 border-black">
          <p className="font-FoundersGroteskMedium lg:text-[21px]">YEAR</p>
          <p className="font-FoundersGroteskRegular lg:text-[21px]">
            {project?.year}
          </p>
        </li>
        <li className="py-2 text-left border-b-2 border-black">
          <p className="font-FoundersGroteskMedium lg:text-[21px]">
            SQUARE FOOTAGE
          </p>
          <p className="font-FoundersGroteskRegular lg:text-[21px]">
            {project?.area}
          </p>
        </li>
        <li className="py-2 text-left border-b-2 border-black">
          <p className="font-FoundersGroteskMedium lg:text-[21px]">Team</p>
          <div className='flex justify-between'>
            {project.teammember?.map((team, index) => {
              return (
                <p
                  key={index}
                  className="font-FoundersGroteskRegular lg:text-[21px] flex justify-between"
                >
                  <span>{team?.member_name}</span>
                </p>
              );
            })}
          </div>
        </li>
        <li className="py-2 text-left border-b-2 border-black">
          <p className="font-FoundersGroteskMedium lg:text-[21px]">
            COLLABORATORS
          </p>
          {project.Collaborators?.map((col, index) => (
            <p
              key={index}
              className="font-FoundersGroteskRegular lg:text-[21px]"
            >
              {col}
            </p>
          ))}
        </li>
      </ul>
    </div>
  );
}

export default function SingleWork({ project }) {
  const [open, setOpen] = useState(false);
  // const { data: project } = usePreviewSubscription(projectSlugQuery, {
  //   params: { slug: data.project?.slug.current },
  //   initialData: data,
  //   enabled: preview,
  // });
  
  return (
    <>
      <section>
        <OwnImage url={project.featureimage?.asset.url} alt={project.title} />
      </section>

      <section className="custom-sec py-7">
        <div className="lg:w-[899px] md:w-[683px] w-full mx-auto">
          <h2 className="font-FoundersGroteskMedium lg:text-[60px] md:text-[56px] text-[36px] leading-[70px] mb-8">
            {project.title}
          </h2>
          <div className="">
            <AudioPlayer audioURL={project.audio.asset.url} />
          </div>
          <div className="mb-4">
            <p className="font-FoundersGroteskRegular lg:text-[23px] md:text-[22px] text-lg">
              {project?.excerpt}
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
            <FullContent open={open} setOpen={setOpen} project={project} />
          </div>
        </div>
      </section>

      <section className="custom-sec gallery-section gap-x-2 space-y-[4px]">
        {
          project.gallery?.images.map((img, index) => {
            if (img.size === "half") {
              return (
                <div className="inline-block w-1/2 p-1 mt-0 halfimage" key={index}>
                  <figure className="relative mt-[5px] gallery"> 
                    <OwnImage url={img.asset.url} alt="gallery4"></OwnImage>
                  </figure>
                </div>
              )
            } else {
              return (
               <div className='fullimage'>
                 <figure key={index}>
                  <OwnImage url={img.asset.url} alt="gallery1" ></OwnImage>
                </figure>
               </div>
              )
            }
          })
        }

      </section>
      <section className="custom-sec">
        <div className="lg:w-[899px] md:w-[683px] w-full mx-auto">
          <ul>
            {project.links?.map((link, index) => (
              <li
                key={index}
                className="font-FoundersGroteskMedium lg:text-[36px] md:text-[36px] text-[24px] mb-10"
              >
                <a href={link.link} target="_blank" rel="noreferrer">
                  <p className="flex items-center cursor-pointer lg:gap-10">
                    {link.hading}
                    <Image src={Arrow} alt="Arrow"></Image>
                  </p>
                </a>
                <p className="text-xs font-FoundersGroteskRegular lg:text-lg md:text-lg">
                  {link.short_text}
                </p>
              </li>
            ))}
          </ul>
          <button className="bg-[#FCB450] w-5 h-5"></button>
        </div>
      </section>

      <section className="custom-sec">
        {project.related_project?.map((project, index) => (
          <WorkBox
            key={index}
            title={project.title}
            imageURL={project.featureimage.asset.url}
            imageCaption={project.featureimage.caption}
            slug={project.slug.current}
          />
        ))}
      </section>
    </>
  );
}

export async function getStaticPaths() {
  const paths = await sanityClient.fetch(`
  *[_type == "projects" && defined(slug.current)]{
       "params": {
         "slug" : slug.current
       }
     }
  `);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const project = await sanityClient.fetch(projectSlugQuery, { slug });
  return {
    props: {
      // data: { project },
      project,
      // preview: true
    }
  }
}
