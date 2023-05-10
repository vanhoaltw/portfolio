import clsx from 'clsx';
import * as React from 'react';

import useLoaded from '@/hooks/useLoaded';

import Button from '@/components/buttons/Button';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

export default function ProjectsPage() {
  const isLoaded = useLoaded();

  return (
    <Layout>
      <Seo
        templateTitle='Projects'
        description="Showcase of my projects on front-end development that I'm proud of."
      />

      <main className='min-h-screen'>
        <section className={clsx(isLoaded && 'fade-in-start')}>
          <div className='mx-auto max-w-screen-md px-4 py-8 lg:py-16'>
            <h2
              data-fade={0}
              className='mb-4 text-center text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white'
            >
              Contact Us
            </h2>
            <p
              data-fade={1}
              className='mb-8 text-center font-light text-gray-500 dark:text-gray-400 lg:mb-16'
            >
              Got a technical issue? Want to send feedback about a beta feature?
              Need details about our Business plan? Let us know.
            </p>
            <form action='#' className='space-y-8' data-fade={2}>
              <div>
                <label
                  htmlFor='email'
                  className='mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300'
                >
                  Your email
                </label>
                <input
                  type='email'
                  id='email'
                  className='dark:shadow-sm-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-900/20 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500'
                  placeholder='name@flowbite.com'
                  required
                />
              </div>
              <div>
                <label
                  htmlFor='subject'
                  className='mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300'
                >
                  Subject
                </label>
                <input
                  type='text'
                  id='subject'
                  className='dark:shadow-sm-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900 shadow-sm focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-900/20 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500'
                  placeholder='Let us know how we can help you'
                  required
                />
              </div>
              <div className='sm:col-span-2'>
                <label
                  htmlFor='message'
                  className='mb-2 block text-sm font-medium text-gray-900 dark:text-gray-400'
                >
                  Your message
                </label>
                <textarea
                  id='message'
                  rows={6}
                  className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-900/20 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500'
                  placeholder='Leave a comment...'
                ></textarea>
              </div>
              <Button type='submit'>Send message</Button>
            </form>
          </div>
        </section>
      </main>
    </Layout>
  );
}
