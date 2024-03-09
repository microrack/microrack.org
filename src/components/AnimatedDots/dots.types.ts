
/**
 * Defines the structure and properties of a single dot.
 */
export type DotType = {
  /** Unique identifier for the dot. */
  id: string;

  /** The x-coordinate of the dot. */
  x: number;

  /** The y-coordinate of the dot. */
  y: number;

  /** Scale of the dot. */
  scale: number;
};

/**
 * Configuration parameters for the dotted background.
 */
export type Configuration = {
  /** Space between dots. */
  spacing: number;

  /** Width of the drawing area. */
  width: number;

  /** Height of the drawing area. */
  height: number;

  /** The radius around the mouse cursor that affects dot scaling. */
  influenceRadius: number;

  /** Initial scale of each dot. */
  initialScale: number;

  /** Minimal scale of each dot to ensure visibility. */
  minScale: number;
};