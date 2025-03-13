import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setPageTitle } from '../../store/themeConfigSlice';
import { Link } from 'react-router-dom';
import { IoIosArrowDropright, IoIosArrowDropdown } from 'react-icons/io';
import { IoMdArrowDropdownCircle } from 'react-icons/io';
import { IoMdArrowDroprightCircle } from 'react-icons/io';

// Import your components
import ViewProductDetails from '../../components/order_status/ViewProductDetails';
import EmiDetails from '../../components/order_status/EmiDetails';
import InvoiceDetails from '../../components/order_status/InvoiceDetails';
import RemarkDetails from '../../components/order_status/RemarkDetails';
import UTRDetails from '../../components/order_status/UTRDetails';

const rowData = [
    { id: 1, status: 'QR Generated', dateTime: '2025-03-12 10:30 AM', name: 'Priya Verma', phone: '9876543210' },
    { id: 2, status: 'Processed', dateTime: '2025-03-12 11:00 AM', name: 'Amit Sharma', phone: '8765432109' },
    { id: 3, status: 'Completed', dateTime: '2025-03-12 12:15 PM', name: 'Rohit Singh', phone: '7654321098' },
    { id: 4, status: 'On Hold', dateTime: '2025-03-12 01:30 PM', name: 'Neha Gupta', phone: '6543210987' },
    { id: 5, status: 'Settled', dateTime: '2025-03-12 02:45 PM', name: 'Vikram Patil', phone: '5432109876' },
    { id: 6, status: 'Rejected', dateTime: '2025-03-12 03:20 PM', name: 'Rajesh Nair', phone: '4321098765' },
];

// ✅ Create a functional component to manage collapsibility
const AccordionContent = ({ status }: { status: string }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const toggleExpand = () => setIsExpanded(!isExpanded);

    return (
        <div>
            {status === 'QR Generated' && <ViewProductDetails />}

            {status === 'Processed' && (
                <>
                    <EmiDetails />
                    <button className="text-blue-500 font-semibold mt-2 px-4 py-2 text-lg flex items-center gap-2" onClick={toggleExpand}>
                        {isExpanded ?<> <IoMdArrowDropdownCircle className="text-2xl" /><button className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 transition duration-300">Hide details</button></> :<> <IoMdArrowDroprightCircle className="text-2xl" /><button className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 transition duration-300">View more</button> </>}
                        {/* {isExpanded ? <button className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 transition duration-300">Hide details</button> : <button className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 transition duration-300">View more</button> } */}
                    </button>
                    {isExpanded && <ViewProductDetails />}
                </>
            )}

            {status === 'Completed' && (
                <>
                    <InvoiceDetails />
                    <button className="text-blue-500 font-semibold mt-2 px-4 py-2 text-lg flex items-center gap-2" onClick={toggleExpand}>
                    {isExpanded ?<> <IoMdArrowDropdownCircle className="text-2xl" /><button className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 transition duration-300">Hide details</button></> :<> <IoMdArrowDroprightCircle className="text-2xl" /><button className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 transition duration-300">View more</button> </>}
                    </button>
                    {isExpanded && (
                        <>
                            <EmiDetails />
                            <ViewProductDetails />
                        </>
                    )}
                </>
            )}

            {status === 'On Hold' && (
                <>
                    <RemarkDetails />
                    <button className="text-blue-500 font-semibold mt-2 px-4 py-2 text-lg flex items-center gap-2" onClick={toggleExpand}>
                    {isExpanded ?<> <IoMdArrowDropdownCircle className="text-2xl" /><button className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 transition duration-300">Hide details</button></> :<> <IoMdArrowDroprightCircle className="text-2xl" /><button className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 transition duration-300">View more</button> </>}
                    </button>

                    {isExpanded && (
                        <>
                            <EmiDetails />
                            <ViewProductDetails />
                        </>
                    )}
                </>
            )}

            {status === 'Settled' && (
                <>
                    <UTRDetails />
                    <button className="text-blue-500 font-semibold mt-2 px-4 py-2 text-lg flex items-center gap-2" onClick={toggleExpand}>
                    {isExpanded ?<> <IoMdArrowDropdownCircle className="text-2xl" /><button className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 transition duration-300">Hide details</button></> :<> <IoMdArrowDroprightCircle className="text-2xl" /><button className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 transition duration-300">View more</button> </>}
                    </button>
                    {isExpanded && (
                        <>
                            <InvoiceDetails />
                            <EmiDetails />
                            <ViewProductDetails />
                        </>
                    )}
                </>
            )}

            {status === 'Rejected' && <p className="text-red-500 font-semibold">Loan not approved!!</p>}
        </div>
    );
};

const Orders = () => {
    const dispatch = useDispatch();
    const [expandedRow, setExpandedRow] = useState<number | null>(null);

    useEffect(() => {
        dispatch(setPageTitle('Orders'));
    }, [dispatch]);

    const toggleRow = (id: number) => {
        setExpandedRow(expandedRow === id ? null : id);
    };

    const getStatusButton = (status: string) => {
        let btnClass = 'btn btn-outline-primary btn-sm rounded-full'; // Default color
        if (status === 'Completed') btnClass = 'btn btn-outline-success btn-sm rounded-full';
        else if (status === 'Rejected') btnClass = 'btn btn-outline-danger btn-sm rounded-full';
        else if (status === 'On Hold') btnClass = 'btn btn-outline-warning btn-sm rounded-full';

        return (
            <button type="button" className={btnClass} disabled={status === 'Rejected'}>
                {status}
            </button>
        );
    };

    const columns = [
        { accessor: 'id', title: 'ID', sortable: true },
        { accessor: 'status', title: 'Status', sortable: true, render: ({ status }: { status: string }) => getStatusButton(status) },
        { accessor: 'dateTime', title: 'Date & Time', sortable: true },
        { accessor: 'name', title: 'Name', sortable: true },
        { accessor: 'phone', title: 'Phone', sortable: true },
        {
            accessor: 'details',
            title: 'Details',
            sortable: false,
            render: ({ id }: { id: number }) => (
                <button onClick={() => toggleRow(id)} className="text-xl focus:outline-none">
                    {expandedRow === id ? <IoIosArrowDropdown /> : <IoIosArrowDropright />}
                </button>
            ),
        },
    ];

    return (
        <div>
            <ul className="flex space-x-2 rtl:space-x-reverse">
                <li>
                    <Link to="/merchant" className="text-primary hover:underline">
                        Dashboard
                    </Link>
                </li>
                <li className="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2">
                    <span>Orders</span>
                </li>
            </ul>
            <div>
                <table className="w-full border-collapse border border-gray-200">
                    <thead>
                        <tr>
                            {columns.map((col) => (
                                <th key={col.accessor} className="border border-gray-300 p-2">
                                    {col.title}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {rowData.map((row) => (
                            <React.Fragment key={row.id}>
                                <tr className="border border-gray-300">
                                    {columns.map((col) => (
                                        <td key={col.accessor} className="border border-gray-300 p-2">
                                            {col.render ? col.render(row) : row[col.accessor as keyof typeof row]}
                                        </td>
                                    ))}
                                </tr>
                                {expandedRow === row.id && (
                                    <tr>
                                        <td colSpan={columns.length} className="border border-gray-300 p-2">
                                            <AccordionContent status={row.status} />
                                        </td>
                                    </tr>
                                )}
                            </React.Fragment>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Orders;
