import { extractPublicId } from 'cloudinary-build-url';
import clsx from 'clsx';
import * as React from 'react';
import { ImFilePdf } from 'react-icons/im';
import { InView } from 'react-intersection-observer';

import useLoaded from '@/hooks/useLoaded';

import Accent from '@/components/Accent';
import Certificates from '@/components/homeSections/Certificates';
import Education from '@/components/homeSections/Education';
import Experiences from '@/components/homeSections/Experiences';
import Skill from '@/components/homeSections/Skill';
import CloudinaryImg from '@/components/images/CloudinaryImg';
import { SocialLinks } from '@/components/layout/Footer';
import Layout from '@/components/layout/Layout';
import UnstyledLink from '@/components/links/UnstyledLink';
import Seo from '@/components/Seo';
import TechStack from '@/components/TechStack';
import Tooltip from '@/components/Tooltip';

import { personal_info } from '@/constants/common';

const IndexPage = () => {
  const isLoaded = useLoaded();
  return (
    <div className='layout'>
      <main className='min-h-main'>
        <section className={clsx('py-12', isLoaded && 'fade-in-start')}>
          <div>
            <h1 className='mt-1' data-fade='1'>
              <Accent>{personal_info.fullname}</Accent>
            </h1>
            <h4 className='mt-2 font-semibold' data-fade='2'>
              Frond-end Developer{' '}
              <span className='text-xl font-thin'>{'</>'}</span>
            </h4>
            <div className='mt-4' data-fade='3'>
              <CloudinaryImg
                className='float-right ml-6 w-40 md:w-72'
                publicId={extractPublicId(
                  'https://res.cloudinary.com/audio-life/image/upload/v1682937959/z4307307354915_ecf9978fe47a8defeb7affcbbb4a5315_afbroo.jpg'
                )}
                width='960'
                height='1280'
                alt='Photo of me'
              />
              <article className='prose dark:prose-invert'>
                <p data-fade='3'>
                  Hello! I'm Hoa. I'm a passionate dev with +1 year of work
                  experience in JavaScript/TypeScript, I'm a lover of page
                  design or other things and whenever I can I try to learn new
                  technologies since I discovered programming at 20 years old.
                </p>
                <p data-fade='4'>
                  There are a lot of things and technologies to learn in
                  frontend development and I am motivated to learn as much as
                  possible. I enjoy learning something new and getting feedback
                  to make myself better and improve.
                </p>
                <p data-fade='5'>
                  In this website I will be writing some blogs and showcase my
                  projects. I believe that writing what I have learned is the
                  best way to remember things, and I can share my knowledge
                  along the way. So do contact me and I will be very happy to
                  help!
                </p>
              </article>

              <h4 className='mt-12' data-fade='4'>
                Current Favorite Tech Stack
              </h4>
              <figure className='mt-2' data-fade='6'>
                <TechStack />
              </figure>

              <h4 className='mt-4' data-fade='4'>
                Find me on
              </h4>
              <figure className='mt-2' data-fade='6'>
                <SocialLinks />
              </figure>

              <h4 className='mt-4' data-fade='4'>
                Resume
              </h4>
              <figure className='mt-2' data-fade='6'>
                <Tooltip
                  trigger='mouseenter'
                  hideOnClick={false}
                  interactive
                  html={
                    <div className='inline-block rounded-md border bg-white p-2 text-gray-600 shadow-md dark:border-gray-600 dark:bg-dark dark:text-gray-200'>
                      portfolio.pgf
                    </div>
                  }
                >
                  <UnstyledLink href='https://vietcv.io/vanhoaltw'>
                    <button className='rounded-sm align-middle focus:outline-none focus-visible:ring focus-visible:ring-primary-300'>
                      <ImFilePdf size={20} />
                    </button>
                  </UnstyledLink>
                </Tooltip>
              </figure>
            </div>
          </div>
        </section>

        <InView triggerOnce rootMargin='-30% 0px'>
          {({ ref, inView }) => (
            <section
              id='education'
              ref={ref}
              className={clsx('py-12', inView && 'fade-in-start')}
            >
              <article data-fade='0' className='mb-8'>
                <h2 className='mt-1' data-fade='1'>
                  <Accent>Skill</Accent>
                </h2>
              </article>
              <div data-fade='2'>
                <Skill />
              </div>
            </section>
          )}
        </InView>

        <InView triggerOnce rootMargin='-30% 0px'>
          {({ ref, inView }) => (
            <section
              id='education'
              ref={ref}
              className={clsx('py-12', inView && 'fade-in-start')}
            >
              <article data-fade='0' className='mb-8'>
                <h2 className='mt-1' data-fade='1'>
                  <Accent>Education</Accent>
                </h2>
              </article>
              <Education />
            </section>
          )}
        </InView>

        <InView triggerOnce rootMargin='-30% 0px'>
          {({ ref, inView }) => (
            <section
              id='education'
              ref={ref}
              className={clsx('py-12', inView && 'fade-in-start')}
            >
              <article data-fade='0' className='mb-8'>
                <h2 className='mt-1' data-fade='0'>
                  <Accent>Experiences</Accent>
                </h2>
              </article>
              <Experiences />
            </section>
          )}
        </InView>

        <InView triggerOnce rootMargin='-20% 0px'>
          {({ ref, inView }) => (
            <section
              id='education'
              ref={ref}
              className={clsx('py-12', inView && 'fade-in-start')}
            >
              <article data-fade='0' className='mb-8'>
                <h2 className='mt-1' data-fade='0'>
                  <Accent>Certificates</Accent>
                </h2>
              </article>
              <figure data-fade={2}>
                <Certificates />
              </figure>
            </section>
          )}
        </InView>
      </main>
    </div>
  );
};

IndexPage.getLayout = (children: React.ReactElement) => {
  return (
    <Layout>
      <Seo />
      {children}
    </Layout>
  );
};

export default IndexPage;
