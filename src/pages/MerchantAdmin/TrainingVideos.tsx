import React, { Fragment, useEffect, useState } from 'react';
import IconSearch from '../../components/Icon/IconSearch';

const TrainingVideos = () => {
    const [search, setSearch] = useState<any>('');
    const [contactList] = useState<any>([
        {
            id: 1,
            youtubelink: 'https://www.youtube.com/embed/AQDiykpGguU',
            title: 'KOTAK',
            description: 'Bring your crazy dreams to Kotak BizLabs',
        },
        {
            id: 2,
            youtubelink: 'https://www.youtube.com/embed/2mVf7LNSSF0',
            title: 'SBI',
            description: '#NicobarIslands: SBI Branch in Nancowry',
        },
        {
            id: 3,
            youtubelink: 'https://www.youtube.com/embed/pr3vdlDkY18?si=UNS15B_eQITkTc37',
            title: 'SBI',
            description: 'No matter what your financial goals are, your #BFF is always there to support you.',
        },
        {
            id: 4,
            youtubelink: 'https://www.youtube.com/embed/gZz9sTiye_Y',
            title: 'HDFC Bank',
            description: 'FinanciallyEverAfter | What happens when Finance meets Romance?',
        },
    ]);
    const [filteredItems, setFilteredItems] = useState<any>(contactList);

    useEffect(() => {
        setFilteredItems(() => {
            return contactList.filter((item: any) => {
                return item.title.toLowerCase().includes(search.toLowerCase());
            });
        });
    }, [search, contactList]);
    return (
        <>
            <div className="flex items-center justify-between flex-wrap gap-4">
                <h2 className="text-xl">Videos</h2>
                <div className="flex sm:flex-row flex-col sm:items-center sm:gap-3 gap-4 w-full sm:w-auto">
                    <div className="relative">
                        <input type="text" placeholder="Search Videos Name" className="form-input py-2 ltr:pr-11 rtl:pl-11 peer" value={search} onChange={(e) => setSearch(e.target.value)} />
                        <button type="button" className="absolute ltr:right-[11px] rtl:left-[11px] top-1/2 -translate-y-1/2 peer-focus:text-primary">
                            <IconSearch className="mx-auto" />
                        </button>
                    </div>
                </div>
            </div>
            <div className="grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 mt-2 w-full">
                {filteredItems.map((contact: any, index: number) => {
                    return (
                        <div key={index} className="bg-white dark:bg-[#1c232f] rounded-md overflow-hidden text-center shadow relative">
                            <div className="py-3 px-2">
                                <iframe title="youtube-video" src={contact.youtubelink} className="w-full"></iframe>
                                <h5 className="text-[#3b3f5c] text-xl font-semibold mb-1 dark:text-white-light">{contact.title}</h5>
                                <p className="text-white-dark">{contact.description}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default TrainingVideos;
