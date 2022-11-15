import WorkBox from '../../components/work-box';
import { sanityClient } from '../../lib/sanity';

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
}`



export default function index({ projects }) {
  console.log('projects', projects)
  return (
    <>
      <section className="pt-[24px] md:pt-[38px] lg:pt-[72px] 2xl:pt-[56px] custom-sec">
        {
          projects.map((item,index)=>(
            <WorkBox title={item.title} imageURL={item.featureimage.asset.url} imageCaption={item.featureimage.caption} slug={item.slug.current}  key={index}/>
          ))
        }
        
        
      </section>
    </>
  );
}


export async function getStaticProps() {
  const projects = await sanityClient.fetch(projectQuery);
  return {
    props: {
      projects
    }
  };
}