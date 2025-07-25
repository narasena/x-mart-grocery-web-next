import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import * as React from 'react';
import { FaCartShopping } from 'react-icons/fa6';
import { MdCategory } from 'react-icons/md';

export interface IAppProps {}

export default function Header(props: IAppProps) {
  return (
    <div className="border border-gray-200">
      <div className="flex justify-between gap-3 py-2 md:max-w-[1100px] md:mx-auto">
        <div className="flex flex-col text-sm">
          <span className="font-bold">{`X-Mart`}</span>
          <span className="text-xs uppercase">Grocery</span>
        </div>
        <Input placeholder="Search..." className="md:w-full" />
        <NavigationMenu viewport={false}>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="flex gap-1">
                <MdCategory />
                Categories
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink>Link</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink>
                <FaCartShopping />
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink>Avatar Link</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
}
