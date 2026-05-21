"use client";

import { useState } from "react";

type SubmitState = "idle" | "submitting" | "success" | "error";

type WaitlistFormProps = {
  labels: {
    email: string;
    error: string;
    placeholder: string;
    privacy: string;
    submit: string;
    submitting: string;
    success: string;
  };
};

export function WaitlistForm({ labels }: WaitlistFormProps) {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<SubmitState>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("submitting");
    setMessage("");

    try {
      const response = await fetch("/api/waitlist", {
        body: JSON.stringify({ email, source: "homepage_waitlist" }),
        headers: {
          "Content-Type": "application/json"
        },
        method: "POST"
      });
      await response.json();

      if (!response.ok) {
        throw new Error(labels.error);
      }

      setState("success");
      setEmail("");
      setMessage(labels.success);
    } catch (error) {
      setState("error");
      setMessage(
        error instanceof Error
          ? error.message
          : labels.error
      );
    }
  }

  const isSubmitting = state === "submitting";

  return (
    <div className="mt-8 max-w-xl">
      <form className="flex flex-col gap-3 sm:flex-row" onSubmit={handleSubmit}>
        <label className="sr-only" htmlFor="waitlist-email">
          {labels.email}
        </label>
        <input
          autoComplete="email"
          className="min-h-12 flex-1 rounded-full border border-white/20 bg-white/10 px-5 text-ivory placeholder:text-ivory/55 focus:outline-none focus-visible:ring-2 focus-visible:ring-bluegrey"
          id="waitlist-email"
          name="email"
          onChange={(event) => setEmail(event.target.value)}
          placeholder={labels.placeholder}
          required
          type="email"
          value={email}
        />
        <button className="button-light" disabled={isSubmitting} type="submit">
          {isSubmitting ? labels.submitting : labels.submit}
        </button>
      </form>
      <p className="mt-4 text-sm leading-6 text-ivory/60">
        {labels.privacy}
      </p>
      <div aria-live="polite" className="mt-4 min-h-6">
        {message ? (
          <p
            className={
              state === "success"
                ? "text-sm font-medium text-bluegrey"
                : "text-sm font-medium text-ivory"
            }
          >
            {message}
          </p>
        ) : null}
      </div>
    </div>
  );
}
