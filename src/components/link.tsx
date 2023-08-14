interface LinkProps {
  href: string;
  children: React.ReactNode;
}

export default function Link({ href, children }: LinkProps) {
  const isExternal = href.startsWith("http");

  return (
    <a
      href={href}
      target={isExternal ? "_blank" : "_self"}
      className="underline decoration-neutral-300 underline-offset-4 transition-colors dark:decoration-neutral-600 focus:(decoration-neutral-400 outline-offset-6 dark:decoration-neutral-500) hover:(decoration-neutral-400 dark:decoration-neutral-500)"
    >
      {children}
    </a>
  );
}
