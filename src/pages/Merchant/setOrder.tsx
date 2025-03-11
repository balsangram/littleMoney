import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPageTitle } from "../../store/themeConfigSlice";
import { Smartphone, Laptop, Tv, CheckCircle, XCircle } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion"; // Import Framer Motion

const rowData = [
    {
        id: 1,
        name: "Priya Verma",
        phone: "9876543210",
        category: "Mobile",
        brand: "Samsung",
        model: "Galaxy S22",
        loanAmount: 50000,
        tenure: "12 months",
        action: "emi",
        productPrice: 60000,
    },
    {
        id: 2,
        name: "Amit Sharma",
        phone: "8765432109",
        category: "Laptop",
        brand: "Dell",
        model: "Inspiron 15",
        loanAmount: 40000,
        tenure: "24 months",
        action: "add",
        productPrice: 45000,
    },
    {
        id: 3,
        name: "Rohit Singh",
        phone: "7654321098",
        category: "TV",
        brand: "Sony",
        model: "Bravia 55 inch",
        loanAmount: 60000,
        tenure: "6 months",
        action: "Rejected",
        productPrice: 70000,
    },
];

const getCategoryIcon = (category) => {
    switch (category) {
        case "Mobile":
            return <Smartphone className="w-5 h-5 text-blue-500" />;
        case "Laptop":
            return <Laptop className="w-5 h-5 text-green-500" />;
        case "TV":
            return <Tv className="w-5 h-5 text-yellow-500" />;
        default:
            return null;
    }
};

const SetOrders = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setPageTitle("Orders"));
    }, [dispatch]);

    const groupedOrders = {
        pending: rowData.filter((o) => o.action === "add"),
        approved: rowData.filter((o) => o.action === "emi"),
        rejected: rowData.filter((o) => o.action === "Rejected"),
    };

    return (
        <div className="p-6 min-h-screen bg-gradient-to-r  to-indigo-100">
            {/* Breadcrumb Navigation */}
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

            {/* Kanban Board Layout */}
            <motion.div
                className="grid md:grid-cols-3 gap-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                {Object.values(groupedOrders).map((orders, index) => (
                    <motion.div
                        key={index}
                        className="bg-white p-4 shadow-lg rounded-lg border"
                        initial={{ y: -50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: index * 0.2, duration: 0.6, ease: "easeOut" }}
                    >
                        <ul className="space-y-3">
                            {orders.map((order) => (
                                <motion.li
                                    key={order.id}
                                    className="p-4 bg-gray-100 rounded-md shadow-sm"
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ type: "spring", stiffness: 120 }}
                                >
                                    {/* Category Icon & Name */}
                                    <div className="flex items-center gap-2 mb-2">
                                        {getCategoryIcon(order.category)}
                                        <span className="font-medium">{order.name}</span>
                                    </div>

                                    {/* Order Details */}
                                    <p className="text-gray-600 text-sm">
                                        <strong>Brand:</strong> {order.brand}
                                    </p>
                                    <p className="text-gray-600 text-sm">
                                        <strong>Model:</strong> {order.model}
                                    </p>
                                    <p className="text-gray-600 text-sm">
                                        <strong>Loan Amount:</strong> ₹{order.loanAmount}
                                    </p>
                                    <p className="text-gray-600 text-sm">
                                        <strong>Tenure:</strong> {order.tenure}
                                    </p>

                                    {/* Action Buttons */}
                                    <div className="mt-3">
                                        {order.action === "add" ? (
                                            <NavLink to="/merchant/setcustomer/add-product-details">
                                                <motion.button
                                                    className="w-full flex items-center justify-center gap-2 bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition"
                                                    whileHover={{ scale: 1.05 }}
                                                    whileTap={{ scale: 0.95 }}
                                                >
                                                    <CheckCircle className="w-5 h-5" />
                                                    Add Product Details
                                                </motion.button>
                                            </NavLink>
                                        ) : order.action === "emi" ? (
                                            <NavLink to="/merchant/customers/view-emi-details">
                                                <motion.button
                                                    className="w-full flex items-center justify-center gap-2 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
                                                    whileHover={{ scale: 1.05 }}
                                                    whileTap={{ scale: 0.95 }}
                                                >
                                                    <CheckCircle className="w-5 h-5" />
                                                    View EMI Details
                                                </motion.button>
                                            </NavLink>
                                        ) : (
                                            <motion.button
                                                className="w-full flex items-center justify-center gap-2 bg-red-500 text-white py-2 rounded-lg cursor-not-allowed"
                                                whileHover={{ scale: 1.05 }}
                                            >
                                                <XCircle className="w-5 h-5" />
                                                Rejected
                                            </motion.button>
                                        )}
                                    </div>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default SetOrders;