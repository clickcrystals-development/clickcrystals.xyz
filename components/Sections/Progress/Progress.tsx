'use client';

import CountUp from 'react-countup';
import { Container } from '@/components/ui/Container';
import { getTotalDownloads } from '@/lib/getDownloads';
import { useEffect, useState } from 'react';

export default function Progress() {
  const [downloads, setDownloads] = useState(0);

  const progress = [
    {
      metric: 'Total Downloads',
      value: downloads,
      postfix: '+',
    },
    {
      metric: 'Staff',
      value: 20,
      postfix: '+',
    },
    {
      metric: 'Years',
      value: 2,
      postfix: '+',
    },
  ];

  useEffect(() => {
    const fetchData = async () => {
      const totalDownloads = await getTotalDownloads();
      setDownloads(totalDownloads);
    };

    fetchData();
  }, []);

  return (
    <div className="py-12 bg-[#0c3768] my-0 bg-[radial-gradient(ellipse_200%_200%_at_bottom_left,#054874,#000000_100%)]">
      <div className="rounded-md py-8 px-4 lg:px-32 flex gap-4 sm:flex-row flex-col justify-between">
        {progress.map((progress, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center mx-4"
            >
              <Container>
                <h2 className="text-yellow-300 text-4xl font-bold flex flex-row">
                  <CountUp
                    start={0}
                    end={progress.value}
                    duration={4}
                    separator=","
                    className="text-red-500 text-4xl font-bold"
                  />
                  {progress.postfix}
                </h2>
              </Container>
              <p className="text-white text-base text-center">
                {progress.metric}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
