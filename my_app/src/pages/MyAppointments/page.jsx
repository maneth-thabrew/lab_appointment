import {Pagination} from 'antd';
import axios from 'axios';
import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {toast} from 'react-toastify';
import PatientDrawer from "../../Components/PatientDrawrr/patient.navigation";
import ViewAppointments from '../../Components/ViewAppointments/ViewAppointments';
import Payment from '../../Components/payement';

export default function MyAppointments()
{
    const [newdata, setNewData] = useState({message: "", data: []});
    useEffect(() =>
    {
        datas();
    }, []);

    const datas = async () =>
    {
        try
        {
            const response = await fetch(
                "http://localhost:3000/api/v3/bookings/getall-bookings"
            );

            if (!response.ok)
            {
                throw new Error("Network response was not ok");
            }

            const data = await response.json();
            console.log(data);
            setNewData(data);
        } catch (error)
        {
            console.error("Error fetching data:", error.message);

        }
    };

    const handleDelete = (id) =>
    {
        try
        {
            axios.delete(`http://localhost:3000/api/v3/bookings/delete-booking/${id}`)
                .then(() =>
                {

                    toast.success("Deleted successfully");

                }).catch((error) =>
                {
                    toast.error("Something went wrong");
                    console.log(error);
                })
        } catch (error)
        {
            toast.error("Something went wrong");
            console.log(error)
        }
        window.location.reload();

    };

    return (
        <div className="px-2">
            <div className="shadow-lg bg-white flex items-center justify-between h-[60px] w-full rounded-lg px-5 mt-5">
                <div>
                    <h1 className="text-black text-lg font-semibold">Patient Dashboard</h1>
                </div>
                <div>
                    <PatientDrawer />
                </div>
            </div>
            <div className="mt-10 px-2">
                <div className="flex flex-col gap-1">
                    <h1 className="text-2xl font-semibold text-slate-400">Appointments</h1>
                    <Link to={'/Booking'}>
                        <button className="flex items-center justify-center gap-2 bg-black text-white p-2 rounded-lg shadow-lg mt-16">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
                            Add Booking
                        </button>
                    </Link>
                </div>
                <div className="relative overflow-x-auto mt-10">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    NAME
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    EMAIL
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    ADDRESS
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    MOBILE
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    DOCTOR NAME
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    DEPARTMENT
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    ACTION
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                newdata.data.map((e) =>
                                {
                                    return (
                                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                {e.name}
                                            </th>
                                            <td className="px-6 py-4">
                                                {e.email}
                                            </td>
                                            <td className="px-6 py-4">
                                                {e.address}
                                            </td>
                                            <td className="px-6 py-4">
                                                {e.mobile}
                                            </td>
                                            <td className="px-6 py-4">
                                                {e.doctorName}
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className='w-[100px] h-[30px] bg-black text-white flex items-center justify-center rounded-lg'>
                                                    {e.department}
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 flex items-center justify-start  text-red-600 hover:cursor-pointer gap-5" onClick={() =>
                                            {
                                                handleDelete(e._id)
                                            }}>
                                                <div className='flex items-center justify-center gap-2'>
                                                    <ViewAppointments />
                                                    CANCEL
                                                </div>

                                            </td>
                                            <td className="px-6 py-4 flex items-center justify-start  text-sky-600 hover:cursor-pointer gap-5">
                                                <div className='flex items-center justify-center gap-2'>
                                                    <Payment />
                                                </div>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                    <div className='mt-10 flex justify-center items-center '>
                        <Pagination defaultCurrent={1} total={50} />
                    </div>
                </div>
            </div>
        </div>
    )
}