import { useState } from 'react';
import Hero from '../components/hero';
import WorkBox from '../components/work-box';
import { sanityClient } from '../lib/sanity';

// sanity Queries
const projectQuery = `*[_type == "projects"]{
  title,
  featureimage{
    asset->{
      url
    },
    caption,
  },
  slug,
}`;

export default function Hippo({ projects }) {
  return (
    <>
      <section className="custom-sec md:mb-0 h-screen md:mt-0 flex items-center">
        <div className="flex items-center ">
          <p className="font-SignifierLight campos_home_title ">
            Architecture informed by <br></br>critical regionalism in the
            expanded field
          </p>
        </div>
      </section>

      <section className="custom-sec">
        {projects.map((item, index) => (
          <WorkBox
            title={item.title}
            imageURL={item.featureimage.asset.url}
            imageCaption={item.featureimage.caption}
            slug={item.slug.current}
            key={index}
          />
        ))}
      </section>
    </>
  );
}

export async function getStaticProps() {
  const projects = await sanityClient.fetch(projectQuery);
  return {
    props: {
      projects,
    },
  };
}
