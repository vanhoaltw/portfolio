import clsx from 'clsx';
import { HTMLAttributes, ReactNode } from 'react';

export const Timeline = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

export const TimelineEvent = ({
  active,
  children,
  last,
  ...rest
}: {
  active?: boolean;
  children: ReactNode;
  last?: boolean;
} & HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      {...rest}
      className={clsx('flex w-full justify-start gap-6 border-neutral-800', {
        'border-l': !last,
        'pb-16': !last,
      })}
    >
      <div className='relative'>
        <div
          className={clsx(
            'absolute left-[-8.5px] top-[-2px] aspect-square h-4 w-4 rounded-full outline-black',
            {
              'bg-emerald-500': active,
              'bg-neutral-800': !active,
              'h-3 w-3': !active,
              'left-[-5.5px]': !active,
            }
          )}
        >
          {active && (
            <div
              className={clsx(
                'absolute left-0 top-0 -z-10 aspect-square h-4 w-4 animate-ping rounded-full bg-emerald-500'
              )}
            />
          )}
        </div>
      </div>
      <div className='mt-[-4px] flex flex-col gap-2'>{children}</div>
    </div>
  );
};

const TimelineEventTitle = ({ children }: { children: React.ReactNode }) => (
  <p>{children}</p>
);

const TimelineEventDescription = ({
  children,
}: {
  children: React.ReactNode;
}) => <p className='text-base'>{children}</p>;

TimelineEvent.Title = TimelineEventTitle;

TimelineEvent.Description = TimelineEventDescription;
