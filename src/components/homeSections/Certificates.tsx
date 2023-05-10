/* eslint-disable @next/next/no-img-element */
import * as React from 'react';

import UnstyledLink from '../links/UnstyledLink';

export default function Certificates() {
  return (
    <ul className='grid  gap-2 sm:grid-cols-2 md:grid-cols-3'>
      {stacks.map((i) => (
        <UnstyledLink href={i.url} key={i.id}>
          <li className='flex gap-2 rounded-md border p-4 transition-all dark:border-white/10 dark:hover:bg-white/10'>
            <div className='shrink-0 pt-0.5'>
              <img
                src={i.logoUrl}
                loading='lazy'
                className='h-auto w-14 rounded-md'
                alt={i.title}
              />
            </div>
            <div>
              <p className='text-sm'>{i.date}</p>
              <p className='font-bold'>{i.title}</p>
              <p className='opacity-60'>{i.major}</p>
            </div>
          </li>
        </UnstyledLink>
      ))}
    </ul>
  );
}

const stacks = [
  {
    id: 'backend',
    date: '10/2022',
    logoUrl:
      'https://yt3.googleusercontent.com/ytc/AGIKgqMl9TL4OpwS8Zc5jHrNnfO01f_Wbovye9mQzfp36Q=s900-c-k-c0x00ffffff-no-rj',
    title: 'Backend Development and APIs',
    url: 'https://www.freecodecamp.org/certication/fcc67e7d990-951f-4a94-b358-9bc6270832ab/back-end-development-and-apis',
    major: 'freeCodecamp',
  },
  {
    id: 'visualization',
    date: '09/2022',
    logoUrl:
      'https://yt3.googleusercontent.com/ytc/AGIKgqMl9TL4OpwS8Zc5jHrNnfO01f_Wbovye9mQzfp36Q=s900-c-k-c0x00ffffff-no-rj',
    title: 'Data Visualization',
    url: 'https://www.freecodecamp.org/certication/fcc67e7d990-951f-4a94-b358-9bc6270832ab/data-visualization',
    major: 'freeCodecamp',
  },
];
