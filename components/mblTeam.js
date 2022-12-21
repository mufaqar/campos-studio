import Image from 'next/image';

export default function MblTeam({ item }) {
  return (
    <>
      <div className="block mblTeam md:hidden">
        <details className="py-[13px] " closed>
          <summary className="">
            <h2 className="team_title font-SignifierRegular">
              {item?.member_name}
            </h2>
          </summary>
          <p className="team_design font-SignifierRegular">
            {item?.designation} Designer
          </p>
          <div className="mt-5">
            <div>
              <figure className="relative h-[464px] w-full">
                <Image
                  src={item.profileimage.asset.url}
                  layout="fill"
                  className="object-cover"
                  alt=""
                ></Image>
              </figure>
              <p className="my-5 campo_bodyfont font-FoundersGroteskRegular">
                {item.about}
              </p>
            </div>
          </div>
        </details>
      </div>
    </>
  );
}
