/**
 * Type definitions for the Universal Dots component.
 */

// Configuration parameters for the dotted background.
export type Configuration = {
  /** Initial scale of each dot. */
  initialScale: number;

  /** Minimal scale of each dot to ensure visibility. */
  minScale: number;
};

// Props for rendering static dots.
export type StaticDotsProps = {
  /** Size of the dots. */
  dotSize: number;

  /** Space between dots. */
  dotSpacing: number;
};

// Universal props for the Dots component, accommodating both static and interactive modes.
export type DotsProps = StaticDotsProps & {
  /** Optional: The radius around the mouse cursor that affects dot scaling, relevant only for interactive mode. */
  influenceRadius?: number;

  /** Determines whether the dots are interactive (respond to mouse movement) or static. */
  interactive?: boolean;
};
