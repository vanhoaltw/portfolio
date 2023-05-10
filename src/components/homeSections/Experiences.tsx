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
    date: '08/2022 - 12/2023',
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
    date: '12/2021 - 01/2022',
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
  {
    id: 'hodace',
    date: '10/2021 - 12/2022',
    title: 'HODACE NETWORK',
    url: 'https://hobe.com.vn/',
    logoUrl:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAA0lBMVEX///8nyNwrvcwAxNotKC4pwdL0+/0AuMgoxtn8//8bx9soxdgrvc1i0uKR3+sqwNBIz+EgGSHv+/2PjZDf9fgoIim86/JRTlKI3emf4+3O8fbC7fQAAABXU1fd9flW0eItGB2q5u962udeytax4ugpr8EVCxYqgY8tHyQrYm0uFBlKxNKG1N110Nqn3uVszdn18O+tq60ZAAB3dXcJAAjGxcYopbWfnp9APEErlqLe3t8sdX9iX2IsVl4sX2ktMjgsSVItDRItOUCEg4Xj4eGewscsdn0WAAALeklEQVR4nO2d+2ObthbHwbJJwC/CCDO4s2snTdMma9c13aPd8+7e//9fukiAEEJYwtGRqOfvfuqcBD4+0tE5Ry/HOeuss84666zhyPd9j1H+T9tvpEV+vEl26X6/DUPXdVGtIP9nGM7naZpkcWT7NY+Rt0kW+5CwYLli4Y8IsDtf7bLoa7FqvE7nLkHr4BKzYs5wv9vYfv3D8rJ03peNsylC21Uy0GabpdvgeDiWM7fmKvFs8zTlJfsAaYBjKcN0MC022m2RVrwSMkDuYgiQSd7ztNNRSuSmdjtlvNLbOIWQ87U1vmwOjVcyuqmVoXIdGuErIRfGfesmhOt9QsZgZRZwbZaPMLomzbgwD2gWcX8U4GWtgSN6oYqHuZxOp5PJcrJcjrq1XC4nuaaKzIEbmwCM3UMWvMyxJiXULP9PXTNMO5WgBgYQu3wMRjtkLiXIwrCHQOERUwFgztbHWAqkM2zSydQGIu9jLicTrWw86mTSsibKAPm8Letjps9ulWrijQmIGLkU8NIQXU15aQAxq/imS73dTlG1KVECArhDJV6vMUCvlpMScQcASHzM1GzbFEJOYRD9Lcr7nm26Uri56kb060BlROIsu8J2RHqrG179Bc4monHYvDQTOmwbsc1WSDfhw8kT3pw84ePs5AlP3tO8uzh1G94OjjDQXLPJTp5wMzhCVy+gE588oT84wlAzoTM4wrluwqHFNMFWN+HD0Ai1T0XdDIwQLXQTfj8bFmGQ6iZ8HBqh9kJNHZieCc1If1V4ffKE2dAIta+WiodGqH2SLRoaofbFYN7QCHUDMoHpmdCQ9BPenDzh+9mgCLUnT0xgOgjCQHsC7DjpoFopBCENTJfHvhSqVoPjPQfPXNQf7PUTrp9DiJfer5IsKoZpP4oTvOvkGZAQhNnRhAFy95mgfhunx68y1p8AM4FpT8KDK9E3iyMZ9aeHTGDaizBA+8Mhsp8e1SMhCP1jCNFWngL46RF2RBA7FGa9CQNX7T28ee81xyCE1VIoZUK0V94lkfRF1J8eOnVgqkrYa01PpLSyGpqwlw0Dt2eZoV9L1Z8AO3VNWIkwcDtewYsistM5ag2QvTYABBCEjz1aaRC2u2Cxfjqo1G5nogXWnQ+A2JdQBaZKNmx9xSvHcRtdLWhPAPaxIgCgk5SEM/nj270kRgsnawIIPNFe3d3YJRRUa7e4Vc6bAEG7JSt7VO0zwFixKiFqR8VrhKc0PY6wnR9EioT650f7EIqeTsAT3pcIbK069IMQRoqEgqFqR0yTt8qw+aOCtjZXsiLMZkRfjVDQRj1UvdYGyX5WrZ0CbbdUtGH7F6tRAG14bymwd6qCCJEAO3SxwmFCwVYIarh8CPQ5ZyMoKCkAAhOODj+8/Xv1VqJ8CEykzmanYESQ/RZ1xfTgo9smZLfzIc/ZcgARn+n5KoQwW/RVCAWjeOPjfR7dNH8BtX5jJUcMYAjTCymhwMc1x8D8y180AARGj+Vjov4ZYKJbOaHgyf6KfWHcgRpfiSj8ksduQIRrOaEwIGYPJ8BAjY4pelX5gAGSANc14e7NyF0DMa2mFUlhHbeIS9fyZtruvFq0kRJ2uri4MGP5DUSUoMMWchvCEHpywu7Gs8OF38rTkiEP5/kdA7c8OAXAc1QIuQdv2GJMNEeViT186st2vl+Vh7K0KhLyjghD6I8khHwMFoUoCMP9alGQ7aqPm0fQRWErdMtkHREkAXZo2CbcJk8IeUeDkyVSdTrg3HcoaIVuGwkhTALsKBBy0WLd2Dq/c29LYLj/68sIAWaAid7LCJvxiVe/Z5eTTYqJp9ZMkqQfQsyPEpU14U5CrrU14kvR3/NpnRtxzuYwIBzhu8KGnUsVmoQRH63xWtczh3wPlhHCpIe0JqxI2BzUWkVqv1H/5Srgtghv+xDy9V/ez24bn3MRuIwQJgGmgakaYTNBCFY7Lt7hi1INLyUjhDk1ggamnYTsV8tVKwSZMZ/oMh/J0nygczFoxbSbkOke3CsJmhWHwcaonmQ8BJkfJQ+WEdZOnKtuC0d8vihVN2NZ1AZGWFZMu6fXKEiEmhIvrJ+HDdV2ltX2gRJgp1qO0U1Ie1u0iTebOKLi/k57AriphawfghE+zA4TqraeVYswxqL/CjufUD4H7GS695KiN3Uo0X7e1JZ8Xpo4D6wD1BZ1NZ4sPQygAKvAtPvJNOafo6Ah8mlFKC6I1t5Imh4CLGMv9SgrttH6idjfF5+Kp5cYbyQtCUMlwLQmfICQDsU7EWJBKJytZ1M+aQ0DjvBWRsi8p8hbEEJxrbDHaAiXANOa8IGH1y8qqkQQQmEhLWA2vfJzN+0fhkoPaeh9oNjGJHqCxogJOyxUP0ReDwYkjKSETK1W4PPxZ5EIgK1yyBfVgKWHNDDtLGO4DSO2Yy9CL/CUbO1M+A1wP659HzeVLylFYTEuozWHRAgFqREbCyksxkC3YISOAiFjD97ZlMFWq6LNVmlUDpkGmh8lejicPhUcdXrKNciS0G+9MZMey/nA5riJbhQImXbqN0O3KmDeVSFdGZAy6bHS2j3IM1rfqxAyVaVswWpV2crdJYUyovrvqy36giR8VCFs19V47TqyH9l8RfX3AS+ESCUpcPUKxw1YkRIfZHpYBqYz+Srho4phnqvSCYEJE2lgWr1Ef3fnq29IALztIlMl7N9QI1ULwhLGyoRyd9NUps4HmB72InRR2KO79NmJAEro9CB0A+XphWjbBxAwAaaEqvdToLnSyNVzex5gephrKQ+9Gy+jcAPO+uBtEsYJi5qwMiG5AeegHZP+N/IAJsBOdbJCry35eCNwh3uPV8dskYUlVAtMW4zBvHWxobdeHblfHWgJdEUombnohkRou09v11jJboV34x973xDYDDBRUTE97liFOiPsvrdTRWAzwM8m1CWgBcKl1APTr5VwMwRC0BsRo5Mn9PqFbTCEoJchegoVU3BCSMBqscIpE6rUhIEFmh4q1oS/asLvjwzb9Ak2Aa5Cb4U9+XCEoOkhXUV7JoQkhJsfJZJP5Z8IocUBEWwJdKmiYmrzshnY9FC+ihZekHPcRLJVtPCEkLd0Yo0k6xPBBXoPKVZ5hZ5FQtD00KFn0dobLkwR2hsuQA7BYlWuorXoTEFTfIeGbRad6ckTAqeHaicrfN2EmWVC6AS4PvLLljOFJ6yO/LLlTBFwAlyfrGCLEDo9dOhpu7acqQHC0ciqq4FOgJ36yC9LkSnsHDdRdZ6wJWcKneI79ZFfllwNeALsOIuRVVcDngAz10BYIgTb5UxVnUVrydUYIKQXXdjpiLAzwETHXgOhixAckLmBzQoh3C5nqvp+MisdcfoDNOCH6wrQzpg/+/EbWMCPT/eU0IqrefX27ltIwH/uxi9fLW12xFdvx1eAiJ9ejMdvf7JK+NPL8fjuZzDCX67H45e/Lm12xF9zwvEVFODnp3GD0MaISAjvPgERfrjL//r9a0poo5m+vsc2hPKn31xhwi81oYVm+hrb8Po3UMI3NaGF8eILtuH1d6CEv09GFpvpG3jC699rG1oI3P6AJxz/ydjQfDP96xqecMzY0HwzNUH493JWExr3pn+O4QnfXowsNtOCECoyLQlfzSw203sDhEzYZt6I07+NExo2ohFCNjA17mvy9NA4odkV0WYIvzQIzRoRJ8A54Ucgwk93hPCPJqFRI5L0cHwFleT/UBCyobdpIxaET5+BCJ2PpJn+hyM06U5JAgzWDSsjtggNjomE8AWYCXGxDQe+I17mkiicAL/4AAfoOJ+vr8YvL3hCc87mzf3VE1QZqtLP10/NoAbLWNXt7uof8IkLx/nv/1pGNNQVgwfAHtjQaGYH0cAkfqmsbUQTiPCr9mq9s4EovMIMTLcCRODgBm3hp/BZxTcXAgmO6dYlF365Fy/PrIzznXXWWWed9e/R/wGoc/WVPyyyRwAAAABJRU5ErkJggg==',
    major: 'Intern Front-end Developer',
    desciprtion:
      'HODACE NETWORK is a system that collects and analyzes real estate data from the internet. Investors, brokers and homebuyers can view and freely use data freely through website / mobile app system.',
    tasks: [
      'Build features for web application in coordination with the backend team',
      'Upkeep and improvement of application functionality',
      'Set up animated and design some screen for extra function',
    ],
    achives: ['Nextjs', 'Typescript', 'Antd', 'ChartJS'],
  },
];
