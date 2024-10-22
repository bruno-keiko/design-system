const fontSizes = {
  xs: "xs",
  sm: "sm",
  base: "base",
  lg: "lg",
  xl: "xl",
};

export default Object.freeze(fontSizes);

export type FontSizes = keyof typeof fontSizes;