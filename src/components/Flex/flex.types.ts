export type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export type ItemProps = {
  containerRef?: React.RefObject<HTMLDivElement>;
  columns?: number;
  className?: string;
  children: React.ReactNode;
  hideOnMobile?: boolean;
};