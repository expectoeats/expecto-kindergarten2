"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import Link from "next/link";
import { forwardRef, type ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "sunshine" | "teal" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface BouncyButtonProps extends Omit<HTMLMotionProps<"button">, "ref"> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  children: ReactNode;
  className?: string;
  icon?: ReactNode;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-coral text-cream shadow-soft hover:shadow-[0_8px_25px_-5px_rgba(255,107,107,0.5)]",
  secondary:
    "bg-transparent text-skyteal border-2 border-skyteal hover:bg-skyteal hover:text-cream",
  sunshine:
    "bg-sunshine text-ink shadow-soft hover:shadow-[0_8px_25px_-5px_rgba(255,201,60,0.5)]",
  teal: "bg-skyteal text-cream shadow-soft hover:shadow-[0_8px_25px_-5px_rgba(46,196,182,0.5)]",
  ghost: "bg-transparent text-ink hover:bg-ink/5",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "text-sm px-5 py-2.5 gap-2",
  md: "text-base px-7 py-3.5 gap-2.5",
  lg: "text-lg px-10 py-4 gap-3",
};

const BouncyButton = forwardRef<HTMLButtonElement, BouncyButtonProps>(
  function BouncyButton(
    {
      variant = "primary",
      size = "md",
      href,
      children,
      className = "",
      icon,
      ...rest
    },
    ref,
  ) {
    const baseClasses = `font-nunito font-bold rounded-full inline-flex items-center justify-center transition-colors duration-200 tracking-normal`;
    const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

    const content = (
      <>
        {icon}
        {children}
      </>
    );

    if (href) {
      return (
        <motion.div whileHover={{ scale: 1.06, y: -3 }} whileTap={{ scale: 0.96, y: 0 }}>
          <Link href={href} className={classes} ref={ref as never}>
            {content}
          </Link>
        </motion.div>
      );
    }

    return (
      <motion.button
        ref={ref}
        className={classes}
        whileHover={{ scale: 1.06, y: -3 }}
        whileTap={{ scale: 0.96, y: 0 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        {...rest}
      >
        {content}
      </motion.button>
    );
  },
);

export default BouncyButton;
