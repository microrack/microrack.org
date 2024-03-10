export type TextProps = {
  className?: string;
  /**
   * Text content
   */
  children: React.ReactNode;
  /**
   * Is text uppercase
   */
  uppercase?: boolean;
  /**
   * HTML tag
   */
  as?: 'p' | 'span' | 'h1' | 'h2' | 'h3';
  /**
   * Text size and line height
   */
  size?: 'xxl' | 'xl' | 'l' | 'm' | 's' | 'xs' | 'xxs';
  /**
   * Text weight
   */
  weight?: 'bold' | 'normal' | 'light';
  /**
   * Text color
   */
  color?: 'primary' | 'secondary' | 'purple' | 'green' | 'warning' | 'error';
};
