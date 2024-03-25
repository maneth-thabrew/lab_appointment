import {Modal} from 'antd';
import React, {useState} from 'react';
import {FaAmazonPay} from "react-icons/fa";
import {toast} from 'react-toastify';
import bankCard from '../assets/BBL-Contactless-Visa-Card-Infinite.jpg';

const Payment = () =>
{
    const [open, setOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);

    const [name, setName] = useState("");
    const [cardNumber, setCardNumber] = useState("")
    const [cardCvv, setCardCvv] = useState("")

    const handleSubmit = async () =>
    {
        try
        {
            if (!name || !cardNumber || !cardCvv)
            {
                toast.error("Feilds Are Empty!")
            } else
            {
                await fetch("http://localhost:3000/api/v4/payments/save-payment", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        name, cardNumber, cardCvv
                    }),
                }).then((result) =>
                {
                    toast.success("Payement Successfully")
                });
            }
        } catch (error)
        {
            toast.error("Something went wrong")
            console.log(error);
        }
    };

    const showModal = () =>
    {
        setOpen(true);
    };
    const handleOk = () =>
    {
        setConfirmLoading(true);
        setTimeout(() =>
        {
            setOpen(false);
            setConfirmLoading(false);
        }, 2000);
    };
    const handleCancel = () =>
    {
        console.log('Clicked cancel button');
        setOpen(false);
    };
    return (
        <>
            <div type="primary" onClick={showModal} className='flex items-center justify-center gap-2'>
                <FaAmazonPay className='text-xl' />
                <p className='text-sky-400 text-xl'>PAY</p>
            </div>
            <Modal
                title="Payment Section"
                width={1000}
                open={open}
                onOk={handleOk}
                confirmLoading={confirmLoading}
                onCancel={handleCancel}
            >
                <div className='flex items-center justify-between'>
                    <div className='w-[50%]'>
                        <img src={bankCard} alt="" className='w-full' />
                    </div>
                    <div className='w-[50%]'>
                        <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
                            <div className="mb-5">
                                <label for="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Cardholder Name</label>
                                <input type="text" id="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required value={name} onChange={(e) =>
                                {
                                    setName(e.target.value)
                                }} />
                            </div>
                            <div className="mb-5">
                                <label for="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Card Number</label>
                                <input type="text" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required value={cardNumber} onChange={(e) =>
                                {
                                    setCardNumber(e.target.value)
                                }} />
                            </div>
                            <div className="mb-5">
                                <label for="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Card CVV</label>
                                <input type="text" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required value={cardCvv} onChange={(e) =>
                                {
                                    setCardCvv(e.target.value)
                                }} />
                            </div>
                            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">PAY NOW</button>
                        </form>
                    </div>
                </div>
            </Modal>
        </>
    );
};
export default Payment;