"use client";

import { useFormStatus } from "react-dom";

export function SubmitButton({ children, className }: SubmitButtonProps) {
  const { pending } = useFormStatus();

  return (
    <button disabled={pending} type="submit" {...{ className }}>
      {pending ? "Loading..." : children}
    </button>
  );
}

type SubmitButtonProps = {
  children: React.ReactNode;
  className?: string;
};
