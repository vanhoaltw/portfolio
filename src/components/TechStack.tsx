import clsx from 'clsx';
import * as React from 'react';
import {
  SiApollographql,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';

import Tooltip from '@/components/Tooltip';

export default function TechStack() {
  return (
    <div className='flex space-x-2 md:space-x-4'>
      {stacks.map((tech) => (
        <Tooltip key={tech.id} tipChildren={<p>{tech.tooltip}</p>}>
          <tech.icon
            key={tech.id}
            className={clsx(
              'h-6 w-6',
              'text-gray-600 hover:text-primary-300 dark:text-gray-200 dark:hover:text-primary-300',
              'transition-colors'
            )}
          />
        </Tooltip>
      ))}
    </div>
  );
}

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
  // {
  //   id: 'sass',
  //   icon: SiSass,
  //   tooltip: 'Sass',
  // },
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
  // {
  //   id: 'vercel',
  //   icon: IoLogoVercel,
  //   tooltip: 'Vercel',
  // },
  // {
  //   id: 'node',
  //   icon: SiNodedotjs,
  //   tooltip: 'Node.js',
  // },
  // {
  //   id: 'Graphql',
  //   icon: SiGraphql,
  //   tooltip: 'Graphql',
  // },
];
