"use client";

import { useState } from "react";

type SubmitState = "idle" | "submitting" | "success" | "error";

export function WaitlistForm() {
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
      const result = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(result.message || "Unable to join the waitlist.");
      }

      setState("success");
      setEmail("");
      setMessage(result.message || "You are on the waitlist.");
    } catch (error) {
      setState("error");
      setMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    }
  }

  const isSubmitting = state === "submitting";

  return (
    <div className="mt-8 max-w-xl">
      <form className="flex flex-col gap-3 sm:flex-row" onSubmit={handleSubmit}>
        <label className="sr-only" htmlFor="waitlist-email">
          Email address
        </label>
        <input
          autoComplete="email"
          className="min-h-12 flex-1 rounded-full border border-white/20 bg-white/10 px-5 text-ivory placeholder:text-ivory/55 focus:outline-none focus-visible:ring-2 focus-visible:ring-bluegrey"
          id="waitlist-email"
          name="email"
          onChange={(event) => setEmail(event.target.value)}
          placeholder="you@example.com"
          required
          type="email"
          value={email}
        />
        <button className="button-light" disabled={isSubmitting} type="submit">
          {isSubmitting ? "Joining..." : "Join the waitlist"}
        </button>
      </form>
      <p className="mt-4 text-sm leading-6 text-ivory/60">
        We will only use your email for RICORTU early access updates. No public
        profile, no GPS tracking, no shared travel feed.
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
