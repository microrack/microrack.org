import {TextProps} from '../Text/text.types';

export type MenuItemProps = {
  subtitle?: string;
  external?: boolean;
  title: string;
  href: string;
  hideOnMobile?: boolean;
};

export type MenuProps = {
  className?: string;
  wide?: boolean;
  uppercase?: boolean;
  items: MenuItemProps[];
  headingColor?: TextProps['color'];
};
