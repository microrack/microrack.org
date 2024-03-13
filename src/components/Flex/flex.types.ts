export type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export type ItemProps = {
  columns?: number;
  className?: string;
  children: React.ReactNode;
  hideOnMobile?: boolean;
  hideOnTablet?: boolean;
};