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
}`



export default function Hippo({projects}) {
  return (
    <>
      <Hero />
      <section className="custom-sec h-[692px] flex items-center lg:ml-[21%]">
        <div className="flex items-center ">
          <p className="font-SignifierLight lg:text-[26px] md:text-[32px] text-[18px] leading-[33.62px] lg:w-[1071px] md:w-[877px] w-[233px]">
            Architecture informed by <br></br>critical regionalism in the
            expanded field
          </p>
        </div>
      </section>

      <section className="custom-sec">
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