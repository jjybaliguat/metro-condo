import ViewTeamDetails from '@/components/ViewTeamDetails'
import { PageWrapper } from '@/helpers/page-wrapper'
import Image from 'next/image'
import React from 'react'

async function getData() {
  const baseUrl =
    process.env.NEXT_PUBLIC_NODE_ENV == 'development'
      ? 'http://localhost:3000/api'
      : 'https://metrocondoliving.com/api'

  const response = await fetch(`${baseUrl}/team`, { cache: 'no-store' })

  if (!response.ok) {
    throw new Error('Failed to fetch data')
  }

  return response.json()
}

type TeamMember = {
  _id: string
  name: string
  role: string
  description: string
  photo: {
    id: String
    webViewLink: String
    webContentLink: String
  }
}

export default async function Teams() {
  const teams: any = await getData()

  return (
    <PageWrapper>
      {/* Hero Section */}
      <div
        className="relative flex z-0 h-[20vh] md:h-[60vh] w-full bg-fixed bg-no-repeat bg-center bg-cover"
        style={{ backgroundImage: `url("/team-bg.jpg")` }}
      >
        <div className="hero__black-overlay" />
        <div className="absolute flex items-center justify-center w-full h-full z-20">
          <h1 className="md:text-[3rem] text-[1.5rem] font-bold text-white">MCL TEAM</h1>
        </div>
      </div>

      {/* Team Section */}
      <section className="w-full bg-white px-4 py-12 md:px-8 lg:px-16">
        {teams && teams.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 place-items-center">
            {teams.map((team: TeamMember) => (
              <div
                key={team._id}
                className="w-full max-w-[320px] bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 flex flex-col items-center text-center"
              >
                <div className="relative h-[200px] w-[200px] rounded-full overflow-hidden shadow-lg">
                  <Image
                    fill
                    src={
                      team?.photo
                        ? `https://drive.google.com/uc?export=view&id=${team?.photo?.id}`
                        : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png'
                    }
                    alt={`${team.name} photo`}
                    className="object-cover object-center transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <h2 className="mt-4 text-xl font-semibold text-gray-800">{team.name}</h2>
                <p className="text-gray-500 text-sm font-medium">{team.role}</p>
                <p className="team-description mt-3 text-sm text-gray-600 leading-relaxed">{team.description}</p>
                <div className="mt-4">
                  <ViewTeamDetails team={team} />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="w-full h-[70vh] flex flex-col items-center justify-center gap-4">
            <img
              src="/empty-data.svg"
              alt="no data"
              height={250}
              width={250}
              className="opacity-70"
            />
            <h2 className="text-xl text-gray-700">We're still working on it.</h2>
          </div>
        )}
      </section>
    </PageWrapper>
  )
}
