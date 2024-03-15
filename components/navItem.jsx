'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function navItem(props) {
  const targetPathName = props.pathName;
  const currentPath = usePathname();
  return (
    <li id={props.id}>
      <Link href={targetPathName === `Home` ? `/` : '/' + targetPathName}>
        {targetPathName}
      </Link>
      {currentPath === `/${targetPathName}` ? '😝' : ''}
      {currentPath === '/' && targetPathName === 'Home' ? '😝' : ''}
    </li>
  );
}
