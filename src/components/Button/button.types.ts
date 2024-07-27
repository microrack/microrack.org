export type ButtonProps = {
  /**
   * Optional class name
   */
  className?: string;
  /**
   * Is this the principal call to action on the page?
   */
  variant?: 'primary' | 'secondary' | 'action' | 'promo' | 'link' | 'floating';
  /**
   * Button contents
   */
  text: string;
  /**
   * Link to navigate to
   */
  href?: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
};
