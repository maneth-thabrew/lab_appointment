import {Modal} from 'antd';
import axios from 'axios';
import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {toast} from 'react-toastify';

const Register = () =>
{
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const handleSubmit = (event) =>
    {
        event.preventDefault();

        axios.post('http://localhost:3000/register', {name, email, password})
            .then(result =>
            {
                console.log(result);
                if (result.data === "Already registered")
                {
                    alert("E-mail already registered! Please Login to proceed.");
                    navigate('/Login');
                }
                else
                {
                    toast.success("Registered successfully! Please Login to proceed.")
                    window.location.reload();
                }

            })
            .catch(err => console.log(err));
    }
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () =>
    {
        setIsModalOpen(true);
    };
    const handleOk = () =>
    {
        setIsModalOpen(false);
    };
    const handleCancel = () =>
    {
        setIsModalOpen(false);
    };
    return (
        <>
            <button onClick={showModal} className='w-full bg-black text-white h-full rounded-lg'>
                Register Here
            </button>
            <Modal title="Register" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <div>
                    <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
                        <div className="mb-5">
                            <label forHtml="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
                            <input type="name" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="KPDEV" required value={name} onChange={(e) =>
                            {
                                setName(e.target.value)
                            }} />
                        </div>
                        <div className="mb-5">
                            <label forHtml="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                            <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="kpdev@gmail.com" required value={email} onChange={(e) =>
                            {
                                setEmail(e.target.value)
                            }} />
                        </div>
                        {/* <div className="mb-5">
                            <label forHtml="age" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Age</label>
                            <input type="age" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                        </div>
                        <div className="mb-5">
                            <label forHtml="date" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Birthday</label>
                            <Space direction="vertical" size={12}>
                                <DatePicker onChange={onChange} needConfirm />
                            </Space>
                        </div>
                        <div className='mb-5'>
                            <label forHtml="select" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Gender</label>
                            <select className="select select-bordered w-full ">
                                <option disabled selected>Choose?</option>
                                <option>Male</option>
                                <option>Female</option>
                                <option>Others</option>
                            </select>
                        </div> */}
                        <div className="mb-5">
                            <label forHtml="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                            <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required value={password} onChange={(e) =>
                            {
                                setPassword(e.target.value)
                            }} />
                        </div>

                        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                    </form>
                </div>
            </Modal>
        </>
    );
};
export default Register;