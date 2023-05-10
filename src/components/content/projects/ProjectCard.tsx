import { extractPublicId } from 'cloudinary-build-url';
import clsx from 'clsx';
import dayjs from 'dayjs';
import * as React from 'react';
import { FiGithub } from 'react-icons/fi';
import { HiLink } from 'react-icons/hi';

import CloudinaryImg from '@/components/images/CloudinaryImg';
import ButtonLink from '@/components/links/ButtonLink';
import TechIcons, { TechListType } from '@/components/TechIcons';

import { ProjectFrontmatter } from '@/types/frontmatters';

type ProjectCardProps = {
  project: ProjectFrontmatter;
} & React.ComponentPropsWithoutRef<'li'>;

export default function ProjectCard({ project, className }: ProjectCardProps) {
  return (
    <li
      className={clsx(
        'project-card rounded-md md:w-full',
        'border dark:border-gray-600',
        'scale-100 hover:scale-[1.02] motion-safe:transform-gpu',
        'transition duration-100',
        'motion-reduce:hover:scale-100',
        'animate-shadow',
        className
      )}
    >
      <div className='flex h-full flex-col items-start rounded-md p-4 focus:outline-none focus-visible:ring focus-visible:ring-primary-300'>
        <p className='text-sm opacity-60'>
          {dayjs(project.publishedAt).format('DD/MM/YYYY')}
        </p>

        <h4>{project.title}</h4>
        <p className='mb-2 mb-auto mt-1 text-sm text-gray-700 opacity-60 dark:text-gray-300'>
          {project.description}
        </p>
        <div className='mt-2'>
          <TechIcons techs={project.techs.split(',') as Array<TechListType>} />
        </div>

        <CloudinaryImg
          className='pointer-events-none mt-3 w-full'
          publicId={extractPublicId(project.banner)}
          alt={project.title}
          width={1440}
          height={792}
          preview={false}
        />

        <div className='mt-2 flex items-center gap-2'>
          {project?.github && (
            <ButtonLink href={project.github}>
              <FiGithub />
            </ButtonLink>
          )}

          {project?.link && (
            <ButtonLink href={project.link}>
              <HiLink />
            </ButtonLink>
          )}
        </div>
      </div>
    </li>
  );
}
