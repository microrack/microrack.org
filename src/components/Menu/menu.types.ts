export type MenuItemProps = {
  external?: boolean;
  title: string;
  href: string;
};

export type MenuProps = {
  wide?: boolean;
  uppercase?: boolean;
  items: MenuItemProps[];
};
