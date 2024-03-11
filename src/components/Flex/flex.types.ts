export type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export type ItemProps = {
  columns?: number;
  children: React.ReactNode;
  hideOnMobile?: boolean;
};