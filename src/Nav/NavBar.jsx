import Image from 'next/image';
import React, { Suspense } from 'react';

import NavTab from '@/Nav/NavTab';
import MarQuee from '@/Nav/MarQuee';
import UserInfo from '@/app/UserInfo/page';
import CurrentDate from '@/Nav/CurrentDate';
import Link from 'next/link';

const NavBar = () => {
    return (
        <>
            <div className='w-full max-w-7xl mx-auto px-2 py-2'>
                <div className='flex justify-between items-center'>
                    <Link href="/" className='flex items-center'>
                        <Image
                            src="/logo-icon.png"
                            alt="website-logo"
                            width={60}
                            height={40}
                            className='bg-green-600 p-3 m-5 rounded-[12px]'
                        />

                        <div className='flex flex-col'>
                            <p className='font-bold text-[36px]'>বাজার দর</p>
                            <CurrentDate />
                        </div>
                    </Link>

                    <UserInfo />
                </div>
            </div>

            <Suspense fallback={<div className="h-10 w-full max-w-7xl mx-auto" />}>
                <NavTab />
            </Suspense>
            <Suspense fallback={<div className="h-10 w-full bg-gray-200 animate-pulse" />}>
                <MarQuee />
            </Suspense>
        </>
    );
};

export default NavBar;