import React from 'react';
import dynamic from 'next/dynamic';

const InstagramEmbedWithNoSSR = dynamic(() => import('./Content'), { ssr: false });

interface InstagramEmbedProps {
  url: string;
  className?: string;
}

export const InstagramEmbed: React.FC<InstagramEmbedProps> = ({ url, className }) => {
  return <InstagramEmbedWithNoSSR url={url} className={className} />;
};
