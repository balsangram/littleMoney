import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPageTitle } from "../../store/themeConfigSlice";
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const rowData = [
    { id: 1, name: "Priya Verma", phone: "9876543210", Category: "Mobile", Brand: "Samsung", Model: "Galaxy S22", Amount: 75000, "Loan Amount": 50000, Tenure: "12 months", action: "emi" },
    { id: 2, name: "Amit Sharma", phone: "8765432109", Category: "Laptop", Brand: "Dell", Model: "Inspiron 15", Amount: 60000, "Loan Amount": 40000, Tenure: "24 months", action: "add" },
    { id: 3, name: "Rohit Singh", phone: "7654321098", Category: "TV", Brand: "Sony", Model: "Bravia 55 inch", Amount: 85000, "Loan Amount": 60000, Tenure: "6 months", action: "Rejected" },
    { id: 4, name: "Neha Gupta", phone: "6543210987", Category: "Gadgets", Brand: "Apple", Model: "iPad Air", Amount: 50000, "Loan Amount": 30000, Tenure: "3 months", action: "emi" },
    // { id: 6, name: "Vikram Patil", phone: "5432109876", Category: "Mobile", Brand: "OnePlus", Model: "OnePlus 11", Amount: 58000, "Loan Amount": 35000, Tenure: "12 months", action: "Processed" },
    // { id: 7, name: "Vikram Patil", phone: "5432109876", Category: "Mobile", Brand: "OnePlus", Model: "OnePlus 11", Amount: 58000, "Loan Amount": 35000, Tenure: "12 months", action: "Processed" },
    // { id: 8, name: "Vikram Patil", phone: "5432109876", Category: "Mobile", Brand: "OnePlus", Model: "OnePlus 11", Amount: 58000, "Loan Amount": 35000, Tenure: "12 months", action: "Processed" },
    // { id: 9, name: "Vikram Patil", phone: "5432109876", Category: "Mobile", Brand: "OnePlus", Model: "OnePlus 11", Amount: 58000, "Loan Amount": 35000, Tenure: "12 months", action: "Processed" },

];

const Orders = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setPageTitle("Orders"));
    }, [dispatch]);

    return (
        <div className="p-6 min-h-screen bg-gradient-to-r from-blue-50 to-indigo-100">
            {/* Breadcrumb */}
            <nav className="mb-6">
                <ul className="flex items-center space-x-2 text-gray-600 text-sm">
                    <li>
                        <Link to="/merchant" className="hover:text-blue-600 font-medium">
                            Dashboard
                        </Link>
                    </li>
                    <li className="text-gray-400">/</li>
                    <li className="text-blue-600 font-semibold">Orders</li>
                </ul>
            </nav>

            {/* Orders Grid */}
            <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                {rowData.map((order, index) => (
                    <motion.div
                        key={order.id}
                        className="bg-white p-6 shadow-lg rounded-2xl border border-gray-200"
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
                        whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
                    >
                        {/* Order Details */}
                        <h3 className="text-lg font-bold text-gray-800 mb-2">{order.name}</h3>
                        <p className="text-gray-600 text-sm">📞 {order.phone}</p>
                        <p className="text-gray-600 text-sm">📌 {order.Category} - {order.Brand} ({order.Model})</p>
                        <p className="text-gray-700 font-semibold mt-2">💰 Amount: ₹{order.Amount.toLocaleString()}</p>
                        <p className="text-gray-700 font-semibold">🏦 Loan Amount: ₹{order["Loan Amount"].toLocaleString()}</p>
                        <p className="text-gray-500">⏳ Tenure: {order.Tenure}</p>

                        {/* Action Buttons */}
                        <div className="mt-4">
                            {order.action === "add" ? (
                                <NavLink to="/merchant/orders/add-product-details">
                                    <motion.button
                                        className="w-full flex items-center justify-center bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                         Add Product Details
                                    </motion.button>
                                </NavLink>
                            ) : order.action === "emi" ? (
                                <NavLink to="/merchant/orders/view-emi-details">
                                    <motion.button
                                        className="w-full flex items-center justify-center bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                         QR Code Generated
                                    </motion.button>
                                </NavLink>
                            ) : (
                                <motion.button
                                    className="w-full flex items-center justify-center bg-red-500 text-white py-2 rounded-lg cursor-not-allowed"
                                    whileHover={{ scale: 1.05 }}
                                >
                                     Rejected
                                </motion.button>
                            )}
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default Orders;