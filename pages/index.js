import Hero from '../components/hero';
import WorkBox from '../components/work-box';

export default function Hippo() {
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
        <WorkBox title="Two Rivers Meat" image_path="/images/project6.png" />
        <WorkBox title="The Brick House" image_path="/images/project7.png" />
        <WorkBox title="Music Shed" image_path="/images/project8.png" />
        <WorkBox title="Yew House" image_path="/images/project9.png" />
        <WorkBox title="Iamota" image_path="/images/project10.png" />
        <WorkBox title="Zacatitos 01" image_path="/images/project11.png" />
        <WorkBox title="Sooke 02" image_path="/images/project12.png" />
        <WorkBox title="Hasting Sunrise Studio" image_path="/images/project14.png" />
        <WorkBox title="Green Lake House" image_path="/images/project13.png" />
        <WorkBox title="Zacatitos 04" image_path="/images/project15.png" />
        <WorkBox title="Inter|section" image_path="/images/project16.png" />
        <WorkBox title="Grandview Renovation" image_path="/images/project17.png" />
      </section>
    </>
  );
}
