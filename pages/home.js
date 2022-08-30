import WorkBox from "../components/work-box";

export default function Home() {
    return (
        <>
            <section className="custom-sec h-[700px] flex items-center justify-center">
                <div className=" flex items-center justify-center ">
                    <p className="font-SignifierLight lg:text-[26px] md:text-[32px] text-[18px] leading-[33.62px] lg:w-[1071px]">Architecture informed by <br></br>critical regionalism in the expanded field</p>
                </div>
            </section>

            <section className="custom-sec">
                <WorkBox />
                <WorkBox />
                <WorkBox />
                <WorkBox />
                <WorkBox />
                <WorkBox />
                <WorkBox />
                <WorkBox />
                <WorkBox />
                <WorkBox />
            </section>
        </>
    )
}
