"use client"

import React from 'react';
import Link from 'next/link';
import { Button } from "@heroui/react"
import { authClient } from "@/lib/auth-client";
import { Avatar } from "@heroui/react";


const UserInfo = () => {

    const { data: session } = authClient.useSession()
    const user = session?.user
    console.log(user)

    const handleSignout = async ()=>{
    await  authClient.signOut();
    }


    return (

        <div>

            {user ?

                <div className="flex items-center justify-center gap-3 mt-10">


                    <Button
                        className="bg-red-600 text-white mr-20 hover:bg-red-700"
                        onPress={handleSignout}
                        
                    >
                        Sign out
                    </Button>


                    <Link href="/UserName">

                    <div className='flex items-center justify-center '>

                    <p className="font-semibold text-lg">
                        {user.name}
                    </p>


                    <div className='bg-gray-300 p-1 rounded-[30px] ml-5'>

                    <Avatar>
                        <Avatar.Fallback>
                            {user.name.charAt(0).toUpperCase()}
                        </Avatar.Fallback>
                    </Avatar>

                    </div>

                    </div>



                    </Link>


                </div>




                : 
                
                <div className='flex items-center gap-8 mt-10'>

                    <Link href={"/signIn"} ><Button className="bg-green-700" size="lg">sign in</Button></Link>


                    <Link href={"/signUp"}> <Button className="bg-green-700" size="lg">sign up</Button></Link>

                </div>}







        </div>




    );
};

export default UserInfo;