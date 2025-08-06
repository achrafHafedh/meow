"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div className="flex justify-between items-center w-full px-3 lg:px-30 py-3 shadow-sm">
      <div className="border-r border-indigo-300 pr-5">
        <Link href="/">
          <Image src="/images/logo.png" alt="logo" width={160} height={30} />
        </Link>
      </div>
    </div>
  );
}
