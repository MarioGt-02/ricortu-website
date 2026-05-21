"use client";

import Link from "next/link";

type WaitlistLinkProps = {
  children: React.ReactNode;
  className: string;
  href?: string;
};

export function WaitlistLink({
  children,
  className,
  href = "/#waitlist"
}: WaitlistLinkProps) {
  function handleClick(event: React.MouseEvent<HTMLAnchorElement>) {
    const section = document.getElementById("waitlist");
    const input = document.getElementById("waitlist-email");

    if (!section) {
      return;
    }

    event.preventDefault();
    section.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(null, "", "#waitlist");

    window.setTimeout(() => {
      input?.focus({ preventScroll: true });
    }, 450);
  }

  return (
    <Link className={className} href={href} onClick={handleClick}>
      {children}
    </Link>
  );
}
