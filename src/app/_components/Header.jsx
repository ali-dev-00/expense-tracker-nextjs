'use client'
import React from "react";
import { UserButton, useUser } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
function Header() {
  const { user, isSignedIn } = useUser();

  return (
    <div className="p-5 flex justify-between items-center border shadow-sm">
      <div className="flex flex-row items-center">
        <Image src={"/chart-donut.svg"} alt="logo" width={40} height={25} />
        <span className="text-blue-800  font-bold text-xl">FinanceSmart</span>
      </div>
      {isSignedIn ? (
        <UserButton />)
        :
        <div className="flex gap-3 items-center">
          <Link href='/dashboard'>
            <Button variant="outline" className="rounded-full">
              Dashboard
            </Button>
          </Link>
          <Link href='/dashboard'>
            <Button className="rounded-full ">
              Get Started
            </Button>
          </Link>


        </div>


      }

    </div>
  );
}

export default Header;
