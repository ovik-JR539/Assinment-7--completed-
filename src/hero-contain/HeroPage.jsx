import Image from 'next/image';


import React from 'react';


const HeroPage = () => {

     const date = new Date().toLocaleDateString("bn-BD", { dateStyle: "full" })

    console.log(date)

    return (
        <div className='w-full max-w-7xl mx-auto mx-2 my-15 '>

            <div className='bg-white rounded-[20px] border shadow px-10 py-7' >

                <div className='flex justify-between items-center'>

                <div>
                    <p className='inline-block bg-green-300 rounded-[20px] border shadow my-2 p-2'>{date}</p>
                    <p className='font-bold text-[52px]'>আজকের বাজারের দাম এক নজরে</p>

                    <p className='text-[18px] py-10'>চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক বিস্তারিত, গড়,
                        <br /> সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।</p>


                       

                     <button className='bg-green-700 rounded-[20px] text-white p-3 mt-3 mb-10'>সব পণ্য দেখুন</button> 

                       


                </div>

                <div>

                    <Image src="/bazar-hero.png" alt="hero contain" width={450} height={350}></Image>



                </div>

                </div>

                





                

            </div>

           
            
        </div>
    );
};

export default HeroPage;