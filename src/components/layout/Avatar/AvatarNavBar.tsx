import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import Link from 'next/link';
import React from 'react';

export default function AvatarNavBar() {
  const avatarMenu = [
    { title: 'Profile', link: '#' },
    { title: 'Billing', link: '#' },
    { title: 'Admin Panel', link: '/admin/dashboard' },
    { title: 'Settings', link: '#' },
    { title: 'Logout', link: '#' },
  ];

  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </NavigationMenuTrigger>
      <NavigationMenuContent className='!w-[200px]'>
        {avatarMenu.map((item, index) => (
          <NavigationMenuLink asChild key={index}>
            <Link href={item.link}>{item.title}</Link>
          </NavigationMenuLink>
        ))}
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
}
