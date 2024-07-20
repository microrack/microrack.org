import { TextProps } from '../Text/text.types';

export type MenuItemProps = {
  hideOnMobile?: boolean;
  subtitle?: string;
  external?: boolean;
  title: string;
  href: string;
};

export type MenuProps = {
  className?: string;
  wide?: boolean;
  uppercase?: boolean;
  items: MenuItemProps[];
  headingColor?: TextProps['color'];
  isOpen?: boolean; // Added isOpen prop
};
