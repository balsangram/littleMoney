import React from 'react';

const MerchantSettings = () => {
    return (
        <div>
            <div className="bg-white dark:bg-gray-900 shadow-lg rounded-lg p-6 text-center w-64 m-10">
                <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2">Available Points</h3>
                <button className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white font-semibold py-2 px-4 rounded-md">400</button>
                <br />
                <button className="bg-blue-800 rounded-lg p-4 text-white mt-4 cursor-not-allowed hover:opacity-45" disabled>
                    Redeem
                </button>
            </div>
            <div className="bg-white dark:bg-gray-900 shadow-lg rounded-lg p-6 text-left max-w-full  m-10">
                <h3>NOTE</h3>
                <p>* Points will be updated 1st of every month.</p>
                <p>* Minimum 500 points required to redeem.</p>
            </div>

            <div className="p-6 m-10">
                <h1 className="text-3xl font-bold ">History</h1>
                <table className="table table-bordered ">
                    <thead className="table-light">
                        <tr>
                            <th>TXN ID</th>
                            <th>Points</th>
                            <th>Category</th>
                            <th>TXN Date</th>
                            <th>TXN By</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>#123</td>
                            <td>+50</td>
                            <td>Monthly Credit</td>
                            <td>01/01/2025</td>
                            <td>Admin</td>
                        </tr>
                        <tr>
                            <td>#456</td>
                            <td>+100</td>
                            <td>Bonus</td>
                            <td>01/01/2025</td>
                            <td>Admin</td>
                        </tr>
                        <tr>
                            <td>#789</td>
                            <td>-500</td>
                            <td>Redeemed</td>
                            <td>01/01/2025</td>
                            <td>Merchant</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MerchantSettings;
