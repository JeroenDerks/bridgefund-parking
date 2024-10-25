type BoxOptions = {
  alignItems?: "center" | "flex-start" | "flex-end";
  children: React.ReactNode;
  display?: "flex" | "block";
  flexDirection?: "column" | "row";
  gap?: number;
  height?: string | number;
  justifyContent?: "center" | "flex-start" | "space-between" | "flex-end";
  maxHeight?: string | number;
  maxWidth?: string | number;
  padding?: string;
  style?: any;
  width?: string | number;
};

export const Box = ({
  alignItems = "flex-start",
  children,
  display = "flex",
  flexDirection = "row",
  gap = 0,
  height = "auto",
  justifyContent = "flex-start",
  maxHeight = "auto",
  maxWidth = "auto",
  padding = "0px",
  style,
  width = "100%",
}: BoxOptions) => (
  <div
    style={{
      alignItems,
      display,
      flexDirection,
      gap,
      height,
      justifyContent,
      maxHeight,
      maxWidth,
      padding,
      width,
      ...style,
    }}
  >
    {children}
  </div>
);
