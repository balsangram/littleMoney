import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import DataTableComponent from '../../components/common/DataTableComponent';
import { useDispatch } from 'react-redux';
import { setPageTitle } from '../../store/themeConfigSlice';
const rowData = [
    { id: 1, message: 'Details...', action: true },
    { id: 2, message: 'message about the query...', action: true },
];
const columns = [
    { accessor: 'id', title: 'ID', sortable: true },
    { accessor: 'message', title: 'Message', sortable: true },
];
const MerchantSupport = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setPageTitle('Support'));
    });
    return (
        <div>
            <ul className="flex space-x-2 rtl:space-x-reverse">
                <li>
                    <Link to="/merchant/dashboard" className="text-primary hover:underline">
                        Dashboard
                    </Link>
                </li>
                <li className="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2">
                    <span>Support</span>
                </li>
            </ul>
            <div>
                <div className="panel mb-5">
                    <form>
                        <div className="mb-5">
                            <label htmlFor="title">Title</label>
                            <input type="text" id="title" placeholder="Title..." className="form-input w-full" required />
                        </div>
                        <div className="mb-5">
                            <label htmlFor="query">Query</label>
                            <textarea id="query" rows={2} placeholder="Enter Query" className="form-textarea resize-none min-h-[70px]"></textarea>
                        </div>
                        <button type="button" className="btn btn-primary mt-2">
                            Create
                        </button>
                    </form>
                    <hr className="my-6" />
                    <div className="mb-5 flex items-center justify-center gap-2">
                        <div className="mb-5 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 gap-4 place-items-center">
                            <div className="max-w-[24rem] w-full bg-white shadow-[4px_6px_10px_-3px_#bfc9d4] rounded border border-white-light dark:border-[#1b2e4b] dark:bg-[#191e3a] dark:shadow-none p-5">
                                <div className="flex justify-between mb-5 border-b-2">
                                    <h6 className="text-black font-semibold text-base dark:text-white-light">Grievance Title</h6>
                                    <span className="badge bg-primary/10 text-primary py-1.5 dark:bg-primary dark:text-white">IN PROGRESS</span>
                                </div>
                                <div className="flex items-center justify-start -space-x-3 rtl:space-x-reverse mb-5">
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam labore iusto reiciendis, consequuntur vero beatae optio itaque soluta dolorem, dolore quia,
                                        fuga sint sequi! Recusandae aliquam blanditiis quasi libero quibusdam?
                                    </p>
                                </div>
                                <div className="text-right">Raised: 24-02-2025, 17:20:00</div>
                            </div>
                            <div className="max-w-[24rem] w-full bg-white shadow-[4px_6px_10px_-3px_#bfc9d4] rounded border border-white-light dark:border-[#1b2e4b] dark:bg-[#191e3a] dark:shadow-none p-5">
                                <div className="flex justify-between mb-5 border-b-2">
                                    <h6 className="text-black font-semibold text-base dark:text-white-light">Grievance Title</h6>
                                    <span className="badge bg-primary/10 text-primary py-1.5 dark:bg-primary dark:text-white">IN PROGRESS</span>
                                </div>
                                <div className="flex items-center justify-start -space-x-3 rtl:space-x-reverse mb-5">
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam labore iusto reiciendis, consequuntur vero beatae optio itaque soluta dolorem, dolore quia,
                                        fuga sint sequi! Recusandae aliquam blanditiis quasi libero quibusdam?
                                    </p>
                                </div>
                                <div className="text-right">Raised: 24-02-2025, 17:20:00</div>
                            </div>
                            <div className="max-w-[24rem] w-full bg-white shadow-[4px_6px_10px_-3px_#bfc9d4] rounded border border-white-light dark:border-[#1b2e4b] dark:bg-[#191e3a] dark:shadow-none p-5">
                                <div className="flex justify-between mb-5 border-b-2">
                                    <h6 className="text-black font-semibold text-base dark:text-white-light">Grievance Title</h6>
                                    <span className="badge bg-success/10 text-success py-1.5 dark:bg-success dark:text-white">RESOLVED</span>
                                </div>
                                <div className="flex items-center justify-start -space-x-3 rtl:space-x-reverse mb-5">
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam labore iusto reiciendis, consequuntur vero beatae optio itaque soluta dolorem, dolore quia,
                                        fuga sint sequi! Recusandae aliquam blanditiis quasi libero quibusdam?
                                    </p>
                                </div>
                                <div className="text-right">Raised: 24-02-2025, 17:20:00</div>
                            </div>
                            <div className="max-w-[24rem] w-full bg-white shadow-[4px_6px_10px_-3px_#bfc9d4] rounded border border-white-light dark:border-[#1b2e4b] dark:bg-[#191e3a] dark:shadow-none p-5">
                                <div className="flex justify-between mb-5 border-b-2">
                                    <h6 className="text-black font-semibold text-base dark:text-white-light">Grievance Title</h6>
                                    <span className="badge bg-primary/10 text-primary py-1.5 dark:bg-primary dark:text-white">IN PROGRESS</span>
                                </div>
                                <div className="flex items-center justify-start -space-x-3 rtl:space-x-reverse mb-5">
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam labore iusto reiciendis, consequuntur vero beatae optio itaque soluta dolorem, dolore quia,
                                        fuga sint sequi! Recusandae aliquam blanditiis quasi libero quibusdam?
                                    </p>
                                </div>
                                <div className="text-right">Raised: 24-02-2025, 17:20:00</div>
                            </div>
                            <div className="max-w-[24rem] w-full bg-white shadow-[4px_6px_10px_-3px_#bfc9d4] rounded border border-white-light dark:border-[#1b2e4b] dark:bg-[#191e3a] dark:shadow-none p-5">
                                <div className="flex justify-between mb-5 border-b-2">
                                    <h6 className="text-black font-semibold text-base dark:text-white-light">Grievance Title</h6>
                                    <span className="badge bg-primary/10 text-primary py-1.5 dark:bg-primary dark:text-white">IN PROGRESS</span>
                                </div>
                                <div className="flex items-center justify-start -space-x-3 rtl:space-x-reverse mb-5">
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam labore iusto reiciendis, consequuntur vero beatae optio itaque soluta dolorem, dolore quia,
                                        fuga sint sequi! Recusandae aliquam blanditiis quasi libero quibusdam?
                                    </p>
                                </div>
                                <div className="text-right">Raised: 24-02-2025, 17:20:00</div>
                            </div>
                        </div>
                    </div>
                    {/* <DataTableComponent data={rowData} columns={columns} createPage="create" /> */}
                </div>
            </div>
        </div>
    );
};

export default MerchantSupport;
