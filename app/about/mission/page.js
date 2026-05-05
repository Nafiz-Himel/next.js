import React from 'react'
import Image from 'next/image';
// import ButtonOne from "../../components/ButtonOne";
import ButtonOne from "@/app/components/ButtonOne";
import picOne from "@/public/images/picOne.png";

const mission = () => {
  return (
    <main>
      <div>
        Mission page
      </div>

      <div className='w-[400px]'>
        <Image src={picOne} alt="Description of the image" quality={100} placeholder='blur'/>
      </div>
      <ButtonOne />
    </main>
  )
}

export default mission
