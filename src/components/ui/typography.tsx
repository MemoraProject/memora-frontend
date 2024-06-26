import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils/utils";

const typographyVariants = cva("", {
  variants: {
    hStyle: {
      h1: "text-[32px] tracking-tight",
      h2: "text-[29px] tracking-tight font-medium",
      h3: "text-[26px] tracking-tight font-light",
      h4: "text-[23px] tracking-tight font-medium",
      h5: "text-[20px] tracking-tight font-light",
      h6: "text-[18px] tracking-tight font-medium",
      body: "text-[16px]",
      p: "text-[14px] tracking-tight font-light",
      span: "text-[12px] tracking-tight",
    },
  },
  defaultVariants: {
    hStyle: "p",
  },
});

export interface TypographyProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof typographyVariants> {
  hElement?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
}

const Typography = React.forwardRef<HTMLHeadingElement, TypographyProps>(
  ({ className, hStyle, hElement, ...props }, ref) => {
    const Comp = hElement ? hElement : "p";
    return (
      <Comp
        className={cn(typographyVariants({ hStyle, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Typography.displayName = "Typography";

export { Typography, typographyVariants };
