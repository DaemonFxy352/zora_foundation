"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Brand } from "./Brand";

const groups = [
  {
    label: "What We Do",
    links: [
      ["Education & Resources", "/education"],
      ["Programs & Initiatives", "/programs"],
      ["Research", "/research"],
    ],
  },
  {
    label: "About",
    links: [
      ["Our Mission", "/about#mission"],
      ["About the Foundation", "/about"],
      ["Leadership", "/leadership"],
    ],
  },
  {
    label: "Get Involved",
    links: [
      ["Partner With Us", "/partner"],
      ["Support the Foundation", "/support"],
      ["Contact", "/contact"],
    ],
  },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const root = useRef<HTMLElement>(null);
  const mobileButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const closeOutside = (event: PointerEvent) => {
      if (!root.current?.contains(event.target as Node)) {
        setOpenGroup(null);
        setMobileOpen(false);
      }
    };
    const resize = () => {
      setOpenGroup(null);
      setMobileOpen(false);
    };
    const media = window.matchMedia("(min-width: 1000px)");
    document.addEventListener("pointerdown", closeOutside);
    media.addEventListener("change", resize);
    return () => {
      document.removeEventListener("pointerdown", closeOutside);
      media.removeEventListener("change", resize);
    };
  }, []);

  const close = () => {
    setMobileOpen(false);
    setOpenGroup(null);
  };
  return (
    <header
      className="site-header"
      ref={root}
      onKeyDown={(event) => {
        if (event.key === "Escape") {
          if (openGroup) {
            root.current
              ?.querySelector<HTMLButtonElement>(
                `button[data-group="${openGroup}"]`,
              )
              ?.focus();
            setOpenGroup(null);
          } else if (mobileOpen) {
            setMobileOpen(false);
            mobileButton.current?.focus();
          }
        }
      }}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) close();
      }}
    >
      <div className="container header-inner">
        <Brand />
        <div className="mobile-controls">
          <Link className="button button-small" href="/support" onClick={close}>
            Support
          </Link>
          <button
            className="menu-toggle"
            ref={mobileButton}
            aria-expanded={mobileOpen}
            aria-controls="main-navigation"
            onClick={() => {
              setMobileOpen(!mobileOpen);
              setOpenGroup(null);
            }}
          >
            {mobileOpen ? "Close" : "Menu"}
            <span aria-hidden="true">{mobileOpen ? "×" : "☰"}</span>
          </button>
        </div>
        <nav
          id="main-navigation"
          className={`navigation${mobileOpen ? " is-open" : ""}`}
          aria-label="Main navigation"
        >
          <Link className="nav-link" href="/" onClick={close}>
            Home
          </Link>
          {groups.map((group, index) => (
            <div className="nav-group" key={group.label}>
              <button
                className="nav-link"
                data-group={group.label}
                aria-expanded={openGroup === group.label}
                aria-controls={`nav-group-${index}`}
                onClick={() =>
                  setOpenGroup(openGroup === group.label ? null : group.label)
                }
              >
                {group.label}
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
              <div
                id={`nav-group-${index}`}
                className="nav-dropdown"
                hidden={openGroup !== group.label}
              >
                {group.links.map(([label, href]) => (
                  <Link href={href} key={label} onClick={close}>
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
          <Link
            className="button button-small desktop-support"
            href="/support"
            onClick={close}
          >
            Support Our Work
          </Link>
        </nav>
      </div>
    </header>
  );
}
