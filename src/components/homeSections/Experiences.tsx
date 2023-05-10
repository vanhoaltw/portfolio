/* eslint-disable @next/next/no-img-element */
import * as React from 'react';

import CustomLink from '../links/CustomLink';
import UnstyledLink from '../links/UnstyledLink';
import { Timeline, TimelineEvent } from '../timeline';

export default function Experiences() {
  return (
    <div>
      <Timeline>
        {stacks.map((tech, index) => (
          <TimelineEvent
            active={index === 0}
            last={index === stacks.length - 1}
            key={tech.id}
            data-fade={index + 1}
          >
            <div className='flex gap-2'>
              {tech?.logoUrl && (
                <div className='shrink-0'>
                  <img
                    src={tech?.logoUrl}
                    className='h-auto w-12 rounded-md'
                    alt={tech?.title}
                  />
                </div>
              )}
              <div>
                <div>
                  <div className='mr-1 font-bold dark:text-gray-200'>
                    {tech?.url ? (
                      <UnstyledLink
                        href={tech.url}
                        className='animated-underline rounded-sm focus:outline-none focus-visible:ring focus-visible:ring-primary-300 '
                      >
                        {tech.title}
                      </UnstyledLink>
                    ) : (
                      tech.title
                    )}
                  </div>
                </div>
                <p className='opacity-60'>{tech.desciprtion}</p>
              </div>
            </div>
            <p>
              {tech.major} | {tech.date}
            </p>
            <ul className='list-inside list-disc'>
              {tech.tasks.map((i, index) => (
                <li key={index}>{i}</li>
              ))}
            </ul>

            <div className='mt-1 flex flex-wrap gap-2'>
              {tech.achives.map((i) => (
                <span key={i} className='rounded-md border p-0.5 px-1 text-xs'>
                  {i}
                </span>
              ))}
            </div>
          </TimelineEvent>
        ))}
      </Timeline>
    </div>
  );
}

const stacks = [
  {
    id: 'onmic',
    date: '03/2022 - Present',
    title: 'Onmic - CONNECTION MADE AUDIBLE',
    url: 'https://app.getonmic.com/vi',
    logoUrl:
      'https://scontent.fdad3-4.fna.fbcdn.net/v/t1.6435-9/186523944_100433158921824_1779478205109453050_n.png?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=uymUrJKn1PwAX8KVNAr&_nc_ht=scontent.fdad3-4.fna&oh=00_AfDMZCwjXoD6gdqvo8pigc-LqN3u75jsRCs4k5aoJGenrg&oe=64769F7E',
    imageUrl: '',
    major: 'Fresher Front-end Developer',
    desciprtion:
      'A voice-streaming platform towards barrier-free expression and authentic connection through voice',
    tasks: [
      'Responsible for working on 3 website (web app, web admin, landing page), designing appealing websites and interacting on a daily basis with graphic designers.',
      'Developing and maintaining the front-end functionality of websites.',
      'Participating in discussions with team Marketing and team Partnership to clarify what they want.',
      'Designing prototypes for apps and websites.',
      'Build bot auto report bug to Trello for members in group Telegram',
    ],
    achives: ['Nextjs', 'Apollo Client', 'Mantine', 'Agora'],
  },
  {
    id: 'fiahub',
    date: '01/2023 - 01/2023',
    title: 'Fiahub',
    url: 'https://fiahub-web.vercel.app',
    logoUrl:
      'https://fiahub-assets.s3-ap-southeast-1.amazonaws.com/short_logo.png',
    imageUrl: '',
    major: 'Freelance Front-end Developer',
    desciprtion:
      'Fiahub is the leading cryptocurrency trading platforms in Vietnam.',
    tasks: [
      'Build ui and animated base on figma design',
      'Setup multiple language and color schema for project',
    ],
    achives: ['Nextjs', 'ChartJS', 'Mantine', 'Tanstack Query'],
  },
  {
    id: 'freelance',
    date: '10/2022 - 3/2023',
    title: 'Freelance',
    major: 'Front-end Developer',
    logoUrl:
      'https://www.samayo.org/wp-content/uploads/2020/11/Samayo.org-Blog-Web-Design-SEO-creazione-siti-web-blog-e-commerce-Ayouni-Housam-102-1024x1024.png',
    desciprtion:
      'Worked as part of a multi-disciplinary team, carrying out ad-hoc tasks as requested by the IT Manager. Had a specic brief to ensure the websites build for customer’s precisely matched their requirements.',
    tasks: [
      <CustomLink key='1' href='https://2903v.kiemdinhoto.vn'>
        Car inspection
      </CustomLink>,
      <CustomLink key='2' href='https://freeappcenter.com'>
        Clone App Store & ChPlaY
      </CustomLink>,
      <CustomLink key='3' href='https://lottery6868.com/'>
        Lottery6868
      </CustomLink>,
      <CustomLink key='4' href='hps://facmine-web.makefamousapp.com'>
        FiNetwork
      </CustomLink>,
    ],
    achives: [
      'Nextjs',
      'Reactjs',
      'Sass',
      'Typescript',
      'Antd',
      'ChartJS',
      'Redux',
      'Firebase',
    ],
  },
  {
    id: 'fihome',
    date: '10/2022 - 11/2022',
    title: 'Fihome',
    url: 'https://fihome.vn/',
    logoUrl:
      'https://is5-ssl.mzstatic.com/image/thumb/Purple112/v4/b5/e7/29/b5e7296b-e5fa-7df8-60ec-927c530f02ab/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/460x0w.webp',
    imageUrl: '',
    major: 'Intern Front-end Developer',
    desciprtion: 'Real Estate website purchases and sale',
    tasks: [
      'Build features for web application in coordination with the backend team',
      'Upkeep and improvement of application functionality',
      'Set up animated and design some screen for extra function',
    ],
    achives: ['Nextjs', 'Typescript', 'Antd', 'ChartJS'],
  },
];
