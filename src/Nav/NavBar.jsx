

import Image from 'next/image';
import React from 'react';

import NavTab from '@/Nav/NavTab';
import MarQuee from '@/Nav/MarQuee';
import UserInfo from '@/app/UserInfo/page';
import Link from 'next/link';
import { authClient } from '@/lib/auth-client';



const NavBar = () => {

    const date = new Date().toLocaleDateString("bn-BD", { dateStyle: "full" })
    // const { data: session } = authClient.useSession()
    // console.log(session)



    


    return (


        <>


        <Link href="/">



            <div className='w-full max-w-7xl mx-auto px-2 py-2'>


                <div className='flex justify-between '>

                    <div className='flex items-center '>
                        <Image
                            src="/logo-icon.png"
                            alt="website-logo"
                            width={60}
                            height={40}
                            className='bg-green-600 p-3 m-5 rounded-[12px]'
                        />

                        <div className='flex flex-col'>
                            <p className=' font-bold text-[36px]'>বাজার দর </p>
                            <p>{date}</p>
                        </div>
                    </div>


                    



                    <UserInfo></UserInfo>


                   

                </div>



            </div>

            </Link>



            <NavTab></NavTab>
            <MarQuee></MarQuee>

        </>






    );
};

export default NavBar;