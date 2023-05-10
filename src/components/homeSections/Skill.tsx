import clsx from 'clsx';
import React from 'react';
import {
  SiApollographql,
  SiFirebase,
  SiGit,
  SiGraphql,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiSass,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiVuedotjs,
} from 'react-icons/si';

import Tooltip from '../Tooltip';

const Skill = () => {
  return (
    <div>
      <ul className='grid grid-cols-[repeat(auto-fill,minmax(150px,_1fr))] gap-2'>
        {stacks.map((tech) => (
          <Tooltip key={tech.id} tipChildren={<p>{tech.tooltip}</p>}>
            <li className='flex h-20 items-center justify-center rounded-md border border-current text-gray-600 transition-colors hover:text-primary-300 dark:text-gray-200 dark:hover:text-primary-300'>
              <tech.icon key={tech.id} className={clsx('h-10 w-10')} />
            </li>
          </Tooltip>
        ))}
      </ul>
    </div>
  );
};

const stacks = [
  {
    id: 'nextjs',
    icon: SiNextdotjs,
    tooltip: 'Next.js',
  },
  {
    id: 'react',
    icon: SiReact,
    tooltip: 'React',
  },
  {
    id: 'vuejs',
    icon: SiVuedotjs,
    tooltip: 'Vue.js',
  },
  {
    id: 'sass',
    icon: SiSass,
    tooltip: 'Sass',
  },
  {
    id: 'firebase',
    icon: SiFirebase,
    tooltip: 'Firebase',
  },
  {
    id: 'typescript',
    icon: SiTypescript,
    tooltip: 'Typescript',
  },
  {
    id: 'tailwind',
    icon: SiTailwindcss,
    tooltip: 'Tailwind',
  },
  {
    id: 'apollo-client',
    icon: SiApollographql,
    tooltip: 'Apollo Client',
  },
  {
    id: 'node',
    icon: SiNodedotjs,
    tooltip: 'Node.js',
  },
  {
    id: 'Graphql',
    icon: SiGraphql,
    tooltip: 'Graphql',
  },
  {
    id: 'mongodb',
    icon: SiMongodb,
    tooltip: 'MongoDB',
  },
  {
    id: 'git',
    icon: SiGit,
    tooltip: 'Github',
  },
  {
    id: 'vercel',
    icon: SiVercel,
    tooltip: 'Vercel',
  },
];
export default Skill;
