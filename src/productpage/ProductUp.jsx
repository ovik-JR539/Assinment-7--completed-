
import React from 'react';
import Link from "next/link";

const ProductUp = async () => {

    const res = await fetch("https://api.abcz.workers.dev/api/bazardor/products")
    const data = await res.json()
    console.log(data)

    // https://api.api-store.workers.dev/api/bazardor/products


    return (
        <>

            <div className='w-full max-w-7xl mx-auto px-2 py-2'>


                <p className='font-bold text-[32px]'> <span className='text-red-600'> ▲ </span>আজ দাম বেড়েছে</p>




                <div>
                    <div className=" grid grid-cols-3   gap-2">

                        {data
                            .filter((h) => h.change.dir === "up")
                            .map((h) => {
                                return (

                                                 <Link key={h.id}
                            href={`/productDetail/${h.id}`}
                            >





                                    <div key={h.id} className="bg-white border rounded-[15px] shadow-md p-5 m-7">

                                        <div className="flex gap-2 py-5">
                                            <p className="bg-gray-300 border rounded-[15px] w-12 h-12 flex justify-center items-center">
                                                {h.image}
                                            </p>

                                            <div>
                                                <p>{h.nameBn}</p>
                                                <p>প্রতি ({h.unit})</p>
                                            </div>
                                        </div>



                                        <div className="flex justify-between gap-2">


                                            <div >

                                                <p>আজকের দাম</p>
                                                <p className='font-bold text-[32px]'>{h.today} টাকা</p>


                                            </div>

                                            <p className="flex justify-center items-center  ">

                                                <span className='bg-gray-200 border rounded-[25px] mt-4 py-2 px-3'>

                                                    {h.change.dir === "up" ? <span className="text-red-600  "> ▲ </span> : <span> </span>}
                                                    {h.change.pct}%


                                                </span>

                                            </p>


                                        </div>






                                    </div>

                                     </Link>



                                )
                            })}

                    </div>
                </div>





            </div>

        </>


    );
};

export default ProductUp;