"use client";

import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

// ─── Root exports (pass-throughs) ────────────────────────────────────────────

const Modal = DialogPrimitive.Root;
const ModalTrigger = DialogPrimitive.Trigger;
const ModalPortal = DialogPrimitive.Portal;
const ModalClose = DialogPrimitive.Close;

// ─── Overlay ─────────────────────────────────────────────────────────────────

const ModalOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay ref={ref} asChild {...props}>
    <motion.div
      className={cn(
        "fixed inset-0 z-50 bg-black/60 backdrop-blur-md",
        className
      )}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.22, ease: "easeOut" }}
    />
  </DialogPrimitive.Overlay>
));
ModalOverlay.displayName = "ModalOverlay";

// ─── Size variants ────────────────────────────────────────────────────────────

const sizeMap = {
  sm: "max-w-sm",
  md: "max-w-lg",
  lg: "max-w-2xl",
  xl: "max-w-4xl",
  full: "max-w-[95vw]",
};

// ─── Content ──────────────────────────────────────────────────────────────────

interface ModalContentProps
  extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content> {
  size?: keyof typeof sizeMap;
  showCloseButton?: boolean;
}

const ModalContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  ModalContentProps
>(
  (
    { className, children, size = "md", showCloseButton = true, ...props },
    ref
  ) => (
    <ModalPortal>
      <ModalOverlay />
      <DialogPrimitive.Content ref={ref} asChild {...props}>
        <motion.div
          role="dialog"
          aria-modal="true"
          className={cn(
            "fixed left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2",
            "w-full rounded-2xl",
            "bg-[#0e0e1a]/95 backdrop-blur-2xl",
            "border border-white/10",
            "shadow-[0_0_60px_rgba(99,102,241,0.15),0_32px_64px_rgba(0,0,0,0.6)]",
            "focus:outline-none",
            sizeMap[size],
            className
          )}
          initial={{ opacity: 0, scale: 0.93, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 16 }}
          transition={{ type: "spring", stiffness: 350, damping: 28 }}
        >
          {/* Inner gradient border shine */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-2xl overflow-hidden"
          >
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-400/40 to-transparent" />
          </div>

          {children}

          {/* Close button */}
          {showCloseButton && (
            <DialogPrimitive.Close asChild>
              <motion.button
                className={cn(
                  "absolute right-4 top-4 z-10",
                  "rounded-lg p-1.5 text-white/40",
                  "hover:text-white hover:bg-white/10",
                  "focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500",
                  "transition-colors duration-150"
                )}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.92 }}
                aria-label="Close dialog"
              >
                <X className="h-4 w-4" />
              </motion.button>
            </DialogPrimitive.Close>
          )}
        </motion.div>
      </DialogPrimitive.Content>
    </ModalPortal>
  )
);
ModalContent.displayName = "ModalContent";

// ─── Animated wrapper that uses AnimatePresence ───────────────────────────────

interface AnimatedModalProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
}

const AnimatedModal: React.FC<AnimatedModalProps> = ({
  open,
  onOpenChange,
  children,
}) => (
  <Modal open={open} onOpenChange={onOpenChange}>
    <AnimatePresence>{children}</AnimatePresence>
  </Modal>
);

// ─── Sub-components ───────────────────────────────────────────────────────────

const ModalHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col gap-1 px-6 pt-6 pb-4", className)}
    {...props}
  />
));
ModalHeader.displayName = "ModalHeader";

const ModalTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn("text-xl font-bold text-white tracking-tight", className)}
    {...props}
  />
));
ModalTitle.displayName = "ModalTitle";

const ModalDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn("text-sm text-white/55 leading-relaxed", className)}
    {...props}
  />
));
ModalDescription.displayName = "ModalDescription";

const ModalBody = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("px-6 py-2", className)}
    {...props}
  />
));
ModalBody.displayName = "ModalBody";

const ModalFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex items-center justify-end gap-3 px-6 py-5",
      "border-t border-white/8",
      className
    )}
    {...props}
  />
));
ModalFooter.displayName = "ModalFooter";

export {
  Modal,
  AnimatedModal,
  ModalTrigger,
  ModalPortal,
  ModalClose,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalTitle,
  ModalDescription,
  ModalBody,
  ModalFooter,
};
