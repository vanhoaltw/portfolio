import * as React from 'react';

import UnstyledLink from '../links/UnstyledLink';
import { Timeline, TimelineEvent } from '../timeline';

export default function Education() {
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
            <TimelineEvent.Title>
              <UnstyledLink
                className='animated-underline mr-1 rounded-sm font-medium focus:outline-none focus-visible:ring focus-visible:ring-primary-300 dark:text-gray-200'
                href={tech.url}
              >
                {tech.title}
              </UnstyledLink>
              | {tech.date}
            </TimelineEvent.Title>

            <TimelineEvent.Description>{tech.major}</TimelineEvent.Description>

            <div className='flex flex-wrap gap-2'>
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
    id: 'ute',
    date: '06/2019 - Current',
    title: 'HCMC University of Technology and Education',
    url: 'https://hcmute.edu.vn/',
    major: 'Ecommerce',
    achives: ['Object Oriented Programming', 'Web design', 'Database'],
  },
];
