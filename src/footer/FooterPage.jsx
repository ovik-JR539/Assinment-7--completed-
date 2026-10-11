import React from 'react';
import Image from 'next/image';

const FooterPage = () => {
    return (
        
   <div className="w-full bg-gray-300 border-y border-gray-400  mb-7">

    <div className="w-full max-w-8xl mx-auto px-4 py-4">

        <div className="grid grid-cols-3 items-center gap-3">

            {/* First section: Image + Text */}
            <div className="flex items-center gap-4 pl-50">
                <Image
                    src="/logo-icon.png"
                    alt="website-logo"
                    width={50}
                    height={30}
                    className="bg-green-700 p-4 rounded-[12px]"
                />

                <p className="font-bold text-[36px]">
                    বাজার দর
                </p>
            </div>

            {/* Second section */}
            <p className="font-bold text-[18px] text-center">
                বাজার দর — গ্রাহকপ্রিয়ভাবে সঠিক দাম এক নজরে।
            </p>

            {/* Third section */}
            <p className="font-bold text-[18px] text-center">
                সকল দাম সময়ে সময়ে; বাজার অবস্থার উপর নির্ভর করে পরিবর্তিত হয়।
            </p>

        </div>

    </div>

</div>
       

    );
};

export default FooterPage;


