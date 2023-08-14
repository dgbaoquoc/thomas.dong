interface CodeProps {
  children: React.ReactNode;
}

export default function Code({ children }: CodeProps) {
  <code className="[letter-spacing:-0.02em] rounded text-sm after:(font-black text-gray-400 dark:text-gray-600) before:(font-black text-gray-400 dark:text-gray-600)">
    {children}
  </code>;
}
