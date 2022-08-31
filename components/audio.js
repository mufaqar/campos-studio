import Image from "next/image";
import play from '../public/images/PLAY.png'
import WAVEFORM from '../public/images/WAVEFORM.png'

export default function Audio() {
    return (
        <>
            <div className="flex justify-between mb-8">
                <p className="font-FoundersGroteskRegular lg:text-[26px] md:text[25px] text-[15px]">Hear Campos Studio talk about this project</p>
                <p className="font-FoundersGroteskRegular lg:text-[23px] md:text-[22px] text-[13px]">(00:00 - 21:38)</p>
            </div>
            <div className="mb-11">
                <button className="flex w-3/4 justify-between items-center">
                    <figure className="relative lg:w-[54px] md:w-[44px] w-[28px]"><Image src={play} alt="Play"></Image>
                    </figure>
                    <figure  className="relative lg:w-[421px] md:w-[381px] w-[234px]"><Image src={WAVEFORM} alt="WAVEFORM"></Image></figure>
                    
                </button>
            </div>
        </>
    )
}
