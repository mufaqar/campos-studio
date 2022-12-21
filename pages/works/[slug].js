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
  return (
    <div className={`${open ? 'block' : 'hidden'}`}>
      <div className="border-b-2 border-black">
        <p className="campo_bodyfont">{project?.detail}</p>
        <p className="campo_bodyfont text-left mb-7">{project?.tag_line}</p>
      </div>
      <ul>
        <li className=" text-left border-b-2 border-black">
          <p className="campo_bodyfont mt-[6px] mb-[6px]">
            {project?.location}
          </p>
        </li>
        <li className=" text-left border-b-2 border-black">
          <p className="campo_bodyfont mt-[6px] mb-[6px]">{project?.year}</p>
        </li>
        <li className=" text-left border-b-2 border-black">
          <p className="campo_bodyfont mt-[6px] mb-[6px]">{project?.area}</p>
        </li>
        <li className=" text-left border-b-2 border-black">
          <div className="flex justify-between">
            {project.teammember?.map((team, index) => {
              return (
                <p
                  key={index}
                  className="campo_bodyfont mt-[6px] mb-[6px] flex justify-between"
                >
                  <span>{team?.member_name}</span>
                </p>
              );
            })}
          </div>
        </li>
        <li className=" text-left border-b-2 border-black">
          {/* <p className="font-FoundersGroteskMedium lg:text-[21px]">
            COLLABORATORS
          </p> */}
          {project.Collaborators?.map((col, index) => (
            <p key={index} className="campo_bodyfont mt-[6px] mb-[6px]">
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

  return (
    <>
      <section>
        <OwnImage url={project.featureimage?.asset.url} alt={project.title} />
      </section>

      <section className="custom-sec2">
        <div className="lg:w-[899px] md:w-[683px] w-full mx-auto">
          <h2 className="campo_heading">{project.title}</h2>
          <div className="">
            <AudioPlayer audioURL={project.audio.asset.url} />
          </div>
          <div className="mt-[13px] mb-[13px]">
            <p className="campo_bodyfont">{project?.excerpt}</p>
          </div>
          <div className="text-center mb-[42px]">
            <button
              className="campo_bodyfont underline"
              onClick={() => {
                setOpen(!open);
              }}
            >
              <span className={`${open ? 'hidden' : 'block'}  `}>
                Read More
              </span>
            </button>
            <FullContent open={open} setOpen={setOpen} project={project} />
          </div>
        </div>
      </section>

      <section className="custom-sec gallery-section mt-0">
        {project.gallery?.images.map((img, index) => {
          if (img.size === 'half') {
            return (
              <div className="inline-block w-1/2 mt-0 halfimage " key={index}>
                <figure className="relative gallery">
                  <OwnImage url={img.asset.url} alt="gallery4"></OwnImage>
                </figure>
              </div>
            );
          } else {
            return (
              <div className="mt-0 fullimage" key={index}>
                <figure>
                  <OwnImage url={img.asset.url} alt="gallery1"></OwnImage>
                </figure>
              </div>
            );
          }
        })}
      </section>
      <section className="custom-sec mb-[-42px]">
        <div className="lg:w-[899px] md:w-[683px] w-full  mx-auto">
          <ul>
            {project.links?.map((link, index) => (
              <li key={index} className="campo_heading2 mb-[13px]">
                <a href={link.link} target="_blank" rel="noreferrer">
                  {link.hading}
                </a>
                <p className="campo_bodyfont2">{link.short_text}</p>
              </li>
            ))}
          </ul>
          <button className="campo_square"></button>
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
    },
  };
}
