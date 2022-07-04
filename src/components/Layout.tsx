import * as React from 'react';
import { NextPage } from 'next';
import Link from 'next/link';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: NextPage<LayoutProps> = ({ children }) => {
  const [count, setCount] = React.useState(0);

  return (
    <div className="">
      <div className="w-full bg-slate-100">
        <div>Hello world</div>
        <div>
          {count} <button onClick={() => setCount((c) => c + 1)}>+</button>
        </div>
        <div className="container mx-auto max-w-3xl">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
