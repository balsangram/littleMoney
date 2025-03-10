import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setPageTitle } from '../../../store/themeConfigSlice';
import IconSend from '../../Icon/IconSend';
import Right from '../../../../src/assets/right.jpg';
import Logo from '../../../assets/logo/logo.png';
import Swal from 'sweetalert2';
import LoanEligibility from '../../../assets/LoanEligibility.gif';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { Input, Select } from '@mantine/core';
import QR from '../../../assets/QR/Loan-Apply.png';
import { FaBoxOpen, FaPlus } from 'react-icons/fa';
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel } from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';

// Alert for loan eligibility
const showAlert = async () => {
    Swal.fire({
        title: 'Great!',
        html: '<span style="color:#28a745;">We are happy to inform you that you are eligible for a loan.</span>',
        imageUrl: LoanEligibility,
        imageWidth: 224,
        imageHeight: 'auto',
        imageAlt: 'Custom image',
        padding: '2em',
        customClass: {
            popup: 'sweet-alerts',
            confirmButton: 'swal-button-success',
        },
    });
};

// Type definitions for form values
type FormValues = {
    category: string;
    company: string;
    model: string;
    price: string;
    phone: number;
    'reciever-name': string;
};

type FormData = {
    category: string;
    brand: string;
    model: string;
    loanAmount: string;
    eligibleloanAmount: number;
    requireloanAmount: string;
    tenure: string;
    emi: string;
    serialNo: string;
};

type Errors = {
    category: string;
    brand: string;
    model: string;
    loanAmount: string;
    requireloanAmount: string;
    tenure: string;
    emi: string;
    serialNo: string;
};

const LoanApplyForm = () => {
    const [btnColor, setBtnColor] = useState('rgb(33 150 243)');
    const [btn1, setBtn1] = useState('Check Eligibility');
    const [icon1, setIcon1] = useState(<IconSend className="ltr:mr-2 rtl:ml-2 shrink-0" />);
    const [icon2, setIcon2] = useState(<IconSend className="ltr:mr-2 rtl:ml-2 shrink-0" />);
    const [btn2, setBtn2] = useState('Submit');
    const [loanColor, setloanColor] = useState('rgb(33 150 243)');
    const [showSuccess, setShowSuccess] = useState(false);
    const [showValue, setShowValue] = useState(false);
    const [showForm, setShowForm] = useState(false);
    const [showQR, setShowQR] = useState(false);
    const [details, setDetails] = useState({ name: '', phone: '' });
    const [copied, setCopied] = useState(false);
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState<FormData>({
        category: '',
        brand: '',
        model: '',
        loanAmount: '',
        eligibleloanAmount: 15000,
        requireloanAmount: '',
        tenure: '',
        emi: '',
        serialNo: '',
    });
    const [errors, setErrors] = useState<Errors>({
        category: '',
        brand: '',
        model: '',
        loanAmount: '',
        requireloanAmount: '',
        tenure: '',
        emi: '',
        serialNo: '',
    });

    const tenureOptions: Record<string, number> = {
        '3 months': 12500,
        '6 months': 10852,
        '12 months': 7891,
        '24 months': 5532,
    };

    const rowData = [
        { id: 1, Category: 'Mobile', Brand: 'Samsung', Model: 'Galaxy S22' },
        { id: 2, Category: 'Laptop', Brand: 'Apple', Model: 'MacBook Pro M2' },
        { id: 3, Category: 'TV', Brand: 'Sony', Model: 'Bravia XR A95K' },
        { id: 4, Category: 'Tablet', Brand: 'Microsoft', Model: 'Surface Pro 9' },
        { id: 5, Category: 'Smartwatch', Brand: 'Garmin', Model: 'Fenix 7' },
        { id: 6, Category: 'Camera', Brand: 'Canon', Model: 'EOS R5' },
        { id: 7, Category: 'Headphones', Brand: 'Bose', Model: 'QuietComfort Ultra' },
        { id: 8, Category: 'Gaming Console', Brand: 'Sony', Model: 'PlayStation 5' },
        { id: 9, Category: 'Smart Speaker', Brand: 'Amazon', Model: 'Echo Studio' },
        { id: 10, Category: 'Drone', Brand: 'DJI', Model: 'Mavic 3 Pro' },
    ];

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setPageTitle('Loan Request'));
    }, [dispatch]);

    const handleClick = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setShowSuccess(true);
            setBtnColor('green');
            setBtn1('Eligible');
            setIcon1(<img src={Right} alt="Right" className="w-5 h-5" />);
            setTimeout(() => {
                setShowValue(true);
                setShowForm(true);
            }, 1000);
        }, 3000);
    };

    const finalClick = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setShowQR(true);
            setloanColor('green');
            setBtn2('Submitted');
            setIcon2(<img src={Right} alt="Right" className="w-5 h-5" />);
        }, 3000);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
        setErrors({ ...errors, [id]: '' });
    };

    const handleTenureChange = (selectedTenure: string) => {
        const emiValues: Record<string, number> = {
            '3 months': 12500,
            '6 months': 10852,
            '12 months': 7891,
            '24 months': 5532,
        };
        // console.log({
        //     inTenure: selectedTenure
        // });
        

        setFormData({
            ...formData,
            tenure: selectedTenure,
            emi: emiValues[selectedTenure]?.toString() || '',
        });

        setErrors((prev) => ({
            ...prev, 
            tenure: '',
        }))
    };


    const validateForm = () => {
        let isValid = true;
        const newErrors = { ...errors };

        if (!formData.category) {
            newErrors.category = 'Category is required';
            isValid = false;
        }
        if (!formData.brand) {
            newErrors.brand = 'Brand is required';
            isValid = false;
        }
        if (!formData.model) {
            newErrors.model = 'Model is required';
            isValid = false;
        }
        if (!formData.loanAmount) {
            newErrors.loanAmount = 'Product price is required';
            isValid = false;
        }
        if (!formData.requireloanAmount) {
            newErrors.requireloanAmount = 'Required loan amount is required';
            isValid = false;
        }
        if (Number(formData.requireloanAmount) < 1000) {
            newErrors.requireloanAmount = 'Minimum loan amount required: ₹1000.';
            isValid = false;
        }
        if ( Number(formData.requireloanAmount) > formData.eligibleloanAmount){
            newErrors.requireloanAmount = 'Requested loan amount must not exceed the eligible loan limit.';
            isValid = false ;
        }

        if ( Number(formData.requireloanAmount) > Number(formData.loanAmount)){
            newErrors.requireloanAmount = 'Requested loan amount cannot exceed the eligible product amount.';
            isValid = false ;
        }
        if ( (Number(formData.requireloanAmount) > formData.eligibleloanAmount) && (Number(formData.requireloanAmount) > Number(formData.loanAmount))) {
            newErrors.requireloanAmount = 'Requested loan amount cannot exceed the eligible or available loan limit.';
            isValid = false ;
        }
        if (!formData.tenure) {
            newErrors.tenure = 'Tenure is required';
            isValid = false;
        }
        if (!formData.emi) {
            newErrors.emi = 'EMI is required';
            isValid = false;
        }
        if (!formData.serialNo) {
            newErrors.serialNo = 'Serial number is required';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };
    const handleFormSubmission = (e: React.FormEvent) => {
        e.preventDefault();
        if (!validateForm()) {
            return;
        }
        // const requiredLoan = Number(formData.requireloanAmount);
        // const eligibleAmount = formData.eligibleloanAmount;
        // const loanAmount = Number(formData.loanAmount);
        // const minAmount = 1000;

        // if (requiredLoan > eligibleAmount && requiredLoan > loanAmount) {
        //     Swal.fire({
        //         title: 'Requested loan amount cannot exceed the eligible or available loan limit.',
        //         icon: 'error',
        //         toast: true,
        //         position: 'top-right',
        //         showConfirmButton: false,
        //         timer: 3000,
        //         showCloseButton: true,
        //     });
        //     return;
        // }

        // if (requiredLoan > loanAmount) {
        //     Swal.fire({
        //         title: 'Requested loan amount cannot exceed the eligible product amount.',
        //         icon: 'error',
        //         toast: true,
        //         position: 'top-right',
        //         showConfirmButton: false,
        //         timer: 3000,
        //         showCloseButton: true,
        //     });
        //     return;
        // }

        // if (requiredLoan > eligibleAmount) {
        //     Swal.fire({
        //         title: 'Requested loan amount must not exceed the eligible loan limit.',
        //         icon: 'error',
        //         toast: true,
        //         position: 'top-right',
        //         showConfirmButton: false,
        //         timer: 3000,
        //         showCloseButton: true,
        //     });
        //     return;
        // }

        // if (requiredLoan < minAmount) {
        //     Swal.fire({
        //         title: 'Minimum loan amount required: ₹1000.',
        //         icon: 'error',
        //         toast: true,
        //         position: 'top-right',
        //         showConfirmButton: false,
        //         timer: 3000,
        //         showCloseButton: true,
        //     });
        //     return;
        // }

        Swal.fire({
            title: 'Product details added successfully!',
            icon: 'success',
            toast: true,
            position: 'top-right',
            showConfirmButton: false,
            timer: 3000,
            showCloseButton: true,
        });

        console.log('Submitted Data:', formData);
    };

    return (
        <div className="flex flex-col items-center justify-center m-1">
            <div className="xl:w-96 w-full justify-center content-center">
                <div className="panel mb-5">
                    <div className="flex items-center justify-center my-4 text-black dark:text-white shrink-0">
                        <img src={Logo} className="w-20" alt="Logo" />
                    </div>
                    <label htmlFor="reciever-name">Name (as per PAN)</label>
                    <input
                        id="reciever-name"
                        type="text"
                        className="form-input flex-1 mb-2"
                        placeholder="Enter Name"
                        onChange={(e) => setDetails({ ...details, name: e.target.value })}
                    />
                    <label htmlFor="phone">Phone number</label>
                    <input
                        id="phone"
                        type="number"
                        className="form-input flex-1"
                        placeholder="Enter Phone number"
                        onChange={(e) => setDetails({ ...details, phone: e.target.value })}
                    />
                     <div className="grid xl:grid-cols-1 lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4 mt-4">
                        <button
                            type="submit"
                            className="btn btn-info w-full gap-2"
                            style={{ backgroundColor: btnColor }}
                            onClick={handleClick}
                            disabled={loading}
                        >
                            {loading ? <span className="animate-spin border-2 border-white border-l-transparent rounded-full w-5 h-5 ltr:mr-4 rtl:ml-4 inline-block align-middle"></span> : icon1}
                            {btn1}
                        </button>
                    </div>
                </div>
                {/* <div className="panel">
                    <div className="grid xl:grid-cols-1 lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4">
                        <button
                            type="submit"
                            className="btn btn-info w-full gap-2"
                            style={{ backgroundColor: btnColor }}
                            onClick={handleClick}
                            disabled={loading}
                        >
                            {loading ? <span className="animate-spin border-2 border-white border-l-transparent rounded-full w-5 h-5 ltr:mr-4 rtl:ml-4 inline-block align-middle"></span> : icon1}
                            {btn1}
                        </button>
                    </div>
                </div> */}
                {showSuccess && (
                    <div className="mt-6 p-6 bg-white shadow-lg shadow-indigo-500/50 rounded-lg text-center">
                        <h3 className="text-green-600 font-bold text-2xl py-2">Congratulations! </h3>
                        <p className="text-gray-700 text-lg">
                            You are eligible for a loan of up to <span className="font-semibold text-blue-600">₹15,000</span>.
                        </p>
                    </div>
                )}
            </div>
            <div className="m-4 w-full">
                <Accordion style={{ border: 'none' }}>
                    {/* {showValue && (
                        
                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>Customer Details</AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel style={{padding:"0" }}>
                                <div className="my-6 p-6 bg-white shadow-lg shadow-indigo-500/50 rounded-lg">
                                    <p className="my-2">
                                        <span className="">Name:</span> {details.name}
                                    </p>
                                    <p className="my-2">
                                        <span className="">Phone Number:</span> {details.phone}
                                    </p>
                                    <p className="my-2">
                                        <span className="">Eligibility:</span> ₹15,000
                                    </p>
                                </div>
                            </AccordionItemPanel>
                        </AccordionItem>
                    )} */}

                    {showForm && (
                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>Product Details</AccordionItemButton>
                            </AccordionItemHeading>
                            
                            <AccordionItemPanel style={{padding:"0" }}>
                                
                                <div className="mx-auto p-6 bg-white shadow-lg rounded-lg">
                                <h3 className="text-2xl font-semibold mt-4 text-gray-800 mb-4">   Customer Details </h3>
                             
                                <p className="my-2 text-lg">
                                        <span className="text-xl">Name : </span> {details.name}
                                    </p>
                                    <p className="my-2 text-lg">
                                        <span className="text-xl">Phone Number : </span> {details.phone}
                                    </p>
                                    <p className="my-2 text-lg">
                                        <span className="text-xl">Eligibility : </span> ₹15,000
                                    </p>
                                    <h3 className="text-2xl font-semibold mt-4 text-gray-800 mb-4">Product Details</h3>
                                    <form className="space-y-4" onSubmit={handleFormSubmission}>
                                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                                            <div>
                                                <label htmlFor="category">Category</label>
                                                <select id="category"  className={`form-input w-full ${errors.category ? 'border-red-500' : ''}`} value={formData.category} onChange={handleChange} 
                                                // required
                                                >
                                                    <option value="">--Select Category--</option>
                                                    {rowData.map((item) => (
                                                        <option key={item.id} value={item.Category}>
                                                            {item.Category}
                                                        </option>
                                                    ))}
                                                </select>
                                                {errors.category && <span className="text-red-500">{errors.category}</span>}
                                            </div>
                                            <div>
                                                <label htmlFor="brand">Brand</label>
                                                <select id="brand"  className={`form-input w-full ${errors.brand ? 'border-red-500' : ''}`} value={formData.brand} onChange={handleChange} 
                                                // required
                                                >
                                                    <option value="">--Select Brand--</option>
                                                    {rowData.map((item) => (
                                                        <option key={item.id} value={item.Brand}>
                                                            {item.Brand}
                                                        </option>
                                                    ))}
                                                </select>
                                                {errors.brand && <span className="text-red-500">{errors.brand}</span>}
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                                            <div>
                                                <label htmlFor="model">Model</label>
                                                <select id="model"  className={`form-input w-full ${errors.model ? 'border-red-500' : ''}`}
                                                 value={formData.model} onChange={handleChange} 
                                                // required
                                                >
                                                    <option value="">--Select Model--</option>
                                                    {rowData.map((item) => (
                                                        <option key={item.id} value={item.Model}>
                                                            {item.Model}
                                                        </option>
                                                    ))}
                                                </select>
                                                {errors.model && <span className="text-red-500">{errors.model}</span>}
                                            </div>
                                            <div>
                                                <label htmlFor="loanAmount">Product Price</label>
                                                <input
                                                    type="number"
                                                    id="loanAmount"
                                                    value={formData.loanAmount}
                                                    onChange={handleChange}
                                                    placeholder="Product Price..."
                                                    className={`form-input w-full ${errors.loanAmount ? 'border-red-500' : ''}`}
                                                    // required
                                                />
                                                {errors.loanAmount && <span className="text-red-500">{errors.loanAmount}</span>}
                                            </div>
                                            <div>
                                                <label htmlFor="serialNo">Serial Number</label>
                                                <input
                                                    type="number"
                                                    id="serialNo"
                                                    value={formData.serialNo}
                                                    onChange={handleChange}
                                                    placeholder="Serial Number..."
                                                    className={`form-input w-full ${errors.serialNo ? 'border-red-500' : ''}`}
                                                    // required
                                                />
                                                {errors.serialNo && <span className="text-red-500">{errors.serialNo}</span>}
                                            </div>
                                        </div>
                                        <h2 className="text-2xl">Loan Details</h2>
                                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                                            <div>
                                                <label htmlFor="requireloanAmount">
                                                    Required Loan Amount <span className="text-gray-500">(Minimum ₹1000)</span>
                                                </label>
                                                <input
                                                    type="number"
                                                    id="requireloanAmount"
                                                    value={formData.requireloanAmount}
                                                    onChange={handleChange}
                                                    placeholder="Loan Amount..."
                                                    className={`form-input w-full ${errors.requireloanAmount ? 'border-red-500' : ''}`}
                                                    // required
                                                />
                                                {errors.requireloanAmount && <span className="text-red-500">{errors.requireloanAmount}</span>}
                                            </div>
                                            <div>
                                                <label className="text-base mt-8 text-green-500" htmlFor="eligibleloanAmount">Eligible Loan Amount ₹ {formData.eligibleloanAmount}</label>
                                                {/* <p className="p-2 bg-gray-200 pl-5 rounded-md">{formData.eligibleloanAmount}</p> */}
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-gray-700 font-medium">Tenure</label>
                                                <div className="flex flex-wrap gap-4 mt-2">
                                                    {Object.keys(tenureOptions).map((option) => (
                                                        <label key={option} className="flex items-center space-x-2">
                                                            <input
                                                                type="radio"
                                                                name="tenure"
                                                                value={option}
                                                                checked={formData.tenure === option}
                                                                onChange={() => {
                                                                    
                                                                    console.log({
                                                                        logged: option
                                                                    });
                                                                    
                                                                    handleTenureChange(option)
                                                                }}
                                                                className="form-radio text-blue-600"
                                                            />
                                                            <span>{option}</span>
                                                        </label>
                                                    ))}
                                                </div>
                                                {errors.tenure && <span className="text-red-500">{errors.tenure}</span>}
                                                {formData.tenure && <p className="mt-3 text-green-600 font-semibold">Your approx. EMI for the selected tenure is ₹ {formData.emi}</p>}
                                            </div>
                                        </div>
                                        <button type="submit" onClick={finalClick} className="btn btn-primary mt-6 w-full lg:w-auto">
                                            Submit
                                        </button>
                                    </form>
                                </div>
                            </AccordionItemPanel>
                        </AccordionItem>
                    )}

                    {showQR && (
                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>Scan to Process</AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <div className="flex flex-wrap md:flex-row   flex-col justify-center gap-5 md:gap-28 items-center">
                                    <div className="flex justify-center items-center mt-9">
                                        <img src={QR} alt="Loan Apply QR Code" className="w-48 h-48 object-contain" />
                                    </div>
                                    <div className="text-lg">OR</div>
                                    <div>
                                        <div className="flex flex-col items-center space-y-3">
                                            <button onClick={() => navigator.clipboard.writeText('#')} className="flex gap-2 px-4 py-2 rounded-lg border gray-indigo-600 hover:bg-gray-100 transition">
                                                <img height={10} width={20} src="/src/assets/icons/copy.png" alt="Copy" />
                                                Copy Link
                                            </button>
                                            <button onClick={() => navigator.clipboard.writeText('#')} className="flex gap-2 px-4 py-2 rounded-lg border gray-indigo-600 hover:bg-gray-100 transition">
                                                <img height={10} width={20} src="/assets/images/icon/share.png" alt="Share" />
                                                Share Link
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </AccordionItemPanel>
                        </AccordionItem>
                    )}
                </Accordion>
            </div>
        </div>
    );
};

export default LoanApplyForm;