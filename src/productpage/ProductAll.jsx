

import Link from "next/link";
import React from "react";

const ProductAll = async () => {
    const res = await fetch(
        "https://api.abcz.workers.dev/api/bazardor/products"
    );

    // https://api.api-store.workers.dev/api/bazardor/products




    const data = await res.json();

    return (
        <div className="w-full max-w-7xl mx-auto px-2 py-2 mt-20">

            <p className="font-bold text-[32px]">
                সব পণ্য
            </p>

            <p>
                মোট {data.length} পণ্য দেখানো হচ্ছে
            </p>

            <div className="grid grid-cols-3  gap-5 mt-5">

                {data.map((h) => {
                    return (


                        <Link key={h.id}
                            href={`/productDetail/${h.id}`}
                            >

                        




                        <div
                            key={h.id}
                            className="bg-white border border-gray-200 rounded-[15px] shadow-md p-5 m-5"
                        >

                            <div className="flex gap-3 py-5">

                                <p className="bg-gray-300 border rounded-[15px] w-12 h-12 flex justify-center items-center">
                                    {h.image}
                                </p>

                                <div>
                                    <p className="font-bold">
                                        {h.nameBn}
                                    </p>

                                    <p>
                                        প্রতি ({h.unit})
                                    </p>
                                </div>

                            </div>

                            <div className="flex justify-between items-center gap-2">

                                <div>
                                    <p>আজকের দাম</p>

                                    <p className="font-bold text-[32px]">
                                        {h.today} টাকা
                                    </p>
                                </div>

                                <p>
                                    <span className="bg-gray-200 border rounded-[25px] py-2 px-3 inline-flex items-center gap-1">

                                        <span className="w-5 text-center">
                                            {h.change.dir === "up" ? (
                                                <span className="text-red-600">
                                                    ▲
                                                </span>
                                            ) : h.change.dir === "down" ? (
                                                <span className="text-green-600">
                                                    ▼
                                                </span>
                                            ) : null}
                                        </span>

                                        {h.change.pct}%

                                    </span>
                                </p>

                            </div>

                        </div>

                        </Link>

                        


                    );
                })}

            </div>

        </div>
    );
};

export default ProductAll;

