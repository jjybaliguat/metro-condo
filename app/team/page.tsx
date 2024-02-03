import ViewTeamDetails from '@/components/ViewTeamDetails'
import { PageWrapper } from '@/helpers/page-wrapper'
import Image from 'next/image'
import React from 'react'

async function getData() {
  const baseUrl = process.env.NEXT_PUBLIC_NODE_ENV == "development" ? "http://localhost:8000/api" : "https://metro-api.rdnaksnds.com/api"
  const response = await fetch(`${baseUrl}/team`, {cache: 'no-store'})

 
  if (!response.ok) {
    throw new Error('Failed to fetch data')
  }

  return response.json()
}

type TeamMember = {
  _id: string,
  name: string,
  role: string,
  description: string,
  photo: {
      id: String,
      webViewLink: String,
      webContentLink: String
  }
}

export default async function Teams(){
  const teams: any = await getData()

  return (
    <PageWrapper>
        <div
        className="relative flex z-0 h-[20vh] md:h-[60vh] w-full bg-fixed bg-no-repeat bg-center bg-cover"
        style={{backgroundImage: `url("/team-bg.jpg")`}}
        >
          <div className='hero__black-overlay' />
          <div className="absolute flex flex-center w-full h-full z-20">
            <h1 className='md:text-[3rem] text-[1.5rem] font-bold text-white'>MCL TEAM</h1>
          </div>
        </div>
        <div className="w-full h-fit bg-white p-10">
          <div className='flex flex-wrap justify-center lg:gap-10 gap-5'>
            {teams && teams?.length != 0? teams?.map((team: TeamMember)=>(
              <div key={team._id} className='w-[280px] p-4 flex flex-col items-center gap-4'>
                <div className='relative h-[200px] w-[200px] lg:h-[200px] lg:w-[200px] md:h-[150px] md:w-[150px] rounded-full bg-black'>
                    <Image
                    fill
                    src={team?.photo? `https://drive.google.com/uc?export=view&id=${team?.photo?.id}` : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png'}
                    alt=""
                    style={{
                      objectFit: "cover",
                      objectPosition: "center"
                    }}
                    className='rounded-full'
                    />
                 </div>
                <div className='flex flex-col gap-1 items-center'>
                  <h1 className='text-[1.6rem] md:text-[1.3rem] lg:text-[1.6rem] text-center'>{team.name}</h1>
                  <h1 className='font-semibold text-gray-500 text-[18px] text-center'>{team.role}</h1>
                </div>
                <div className='team-description'>
                  <p className='text-center'>{team.description}</p>
                </div>
                <ViewTeamDetails team={team} />
              </div>
            )) : (
              <div className='w-full h-[70vh] flex flex-col gap-4 flex-center'>
                  <img src="/empty-data.svg" alt="no data png" height={250} width={250} />
                  <h1 className='text-[1.5rem]'>We're still working on it.</h1>
              </div>
            )}
          </div>
        </div>
    </PageWrapper>
  )
}
