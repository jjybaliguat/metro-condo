'use client'

import ViewTeamDetails from '@/components/ViewTeamDetails'
import { PageWrapper } from '@/helpers/page-wrapper'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

async function getData() {
  const baseUrl =
    process.env.NEXT_PUBLIC_NODE_ENV === 'development'
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
    id: string
    webViewLink: string
    webContentLink: string
  }
}

export default function Teams() {
  const [teams, setTeams] = useState<TeamMember[]>([])

  useEffect(() => {
    getData().then(setTeams)
  }, [])

  return (
    <PageWrapper>
      {/* Hero */}
      <div
        className="relative z-0 h-[20vh] md:h-[60vh] w-full bg-fixed bg-no-repeat bg-center bg-cover"
        style={{ backgroundImage: `url("/team-bg.jpg")` }}
      >
        <div className="hero__black-overlay" />
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <h1 className="md:text-[3rem] text-[1.8rem] font-bold text-white tracking-wide">
            MCL TEAM
          </h1>
        </div>
      </div>

      {/* Team Section */}
      <section className="w-full bg-white px-4 py-16 md:px-8 lg:px-16">
        {teams && teams.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 place-items-center">
            {teams.map((team: TeamMember, index) => (
              <motion.div
                key={team._id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative w-full flex flex-col items-center max-w-[320px] bg-white border border-gray-100 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 group overflow-hidden"
              >
                {/* Image with Effects */}
                <div className="relative rounded-full h-[220px] w-[220px] overflow-hidden">
                  <Image
                    fill
                    src={
                      team?.photo
                        ? `https://drive.google.com/uc?export=view&id=${team?.photo?.id}`
                        : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png'
                    }
                    style={{
                      objectFit: "cover",
                      objectPosition: "center"
                    }}
                    alt={`${team.name} photo`}
                    className="rounded-full object-cover transition-all duration-700 ease-in-out group-hover:scale-105"
                  />
                </div>

                {/* Details */}
                <div className="p-6 text-center">
                  <h2 className="text-xl font-semibold text-gray-900 group-hover:text-primary transition duration-300">
                    {team.name}
                  </h2>
                  <p className="text-gray-500 text-sm mb-2">{team.role}</p>
                  <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
                    {team.description}
                  </p>

                  <div className="flex flex-center mt-4">
                    <ViewTeamDetails team={team} />
                  </div>
                </div>

                {/* Glow border effect */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary transition-all duration-500 rounded-xl pointer-events-none" />
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="w-full h-[70vh] flex flex-col items-center justify-center gap-4">
            <Image
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
