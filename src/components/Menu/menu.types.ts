export type MenuItemProps = {
  subtitle?: string;
  external?: boolean;
  title: string;
  href: string;
  hideOnMobile?: boolean;
};

export type MenuProps = {
  wide?: boolean;
  uppercase?: boolean;
  items: MenuItemProps[];
};
