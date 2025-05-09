import { useState } from 'react';
import { Icon } from '@iconify/react/dist/iconify.js';

export default function Accordion({ id, title, content }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="py-2 w-full md:max-w-[390px] border-b-2 border-b-slate-300">
      <button
        onClick={() => setOpen(!open)}
        className="flex justify-between items-center w-full"
      >
        <span className="text-start space-y-1">
          <h1 className="text-2xl font-medium font-mono">{id}</h1>
          <h2 className="text-md font-medium leading-tight">{title}</h2>
        </span>
        <span
          className="mt-9 transition-transform duration-300 ease-in-out transform"
          style={{ transform: open ? 'rotate(45deg)' : 'rotate(0deg)' }}
        >
          <Icon icon="fa6-solid:plus" />
        </span>
      </button>
      <div
        className={`grid overflow-hidden transition-all py-2 duration-300 ease-in-out text-slate-600 text-sm ${
          open ? 'grid-rows-1 opacity-100' : 'grid-rows-[0fr] opacity-o'
        }`}
      >
        <div className="overflow-hidden">{content}</div>
      </div>
    </div>
  );
}
