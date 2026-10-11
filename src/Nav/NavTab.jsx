import Link from 'next/link';
import React from 'react';

const NavTab = async () => {

    const res = await fetch(
        "https://api.abcz.workers.dev/api/bazardor/categories"
    );

    // https://api.api-store.workers.dev/api/bazardor/categories





    const data = await res.json();

    return (
        <div className='w-full max-w-7xl mx-auto px-2 py-2'>

            <div className='flex gap-4'>

                {data.map((n, i) => (
                    <Link
                        key={i}
                        href={`/${n.slug}`}
                    >
                        {n.icon} {n.nameBn}
                    </Link>
                ))}

            </div>

        </div>
    );
};

export default NavTab;