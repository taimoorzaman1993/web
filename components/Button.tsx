import type React from "react"
import { cn } from "@/lib/utils"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "ghost"
}

export default function Button({ variant = "default", className, children, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        variant === "default"
          ? "bg-primary text-primary-foreground hover:bg-primary/90"
          : "bg-background text-primary hover:bg-primary/10",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  )
}

