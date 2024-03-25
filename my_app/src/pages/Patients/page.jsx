import {Pagination} from 'antd';
import React from 'react';
import DrawerNavigation from "../../Components/Drawer/page";
import ModalComponents from '../../Components/modal/modal';

export default function Patients()
{
    const dummyDatas = [
        {
            id: 1,
            name: "kp dev",
            email: "kpdev@gmail.com",
            mobile: "0772495702",
        },
        {
            id: 2,
            name: "kp dev",
            email: "kpdev@gmail.com",
            mobile: "0772495702",
        },
        {
            id: 3,
            name: "kp dev",
            email: "kpdev@gmail.com",
            mobile: "0772495702",
        },
        {
            id: 4,
            name: "kp dev",
            email: "kpdev@gmail.com",
            mobile: "0772495702",
        },
    ]
    return (
        <div className="px-2">
            <div className="shadow-lg bg-white flex items-center justify-between h-[60px] w-full rounded-lg px-5 mt-5">
                <div>
                    <h1 className="text-sky-500 text-lg font-semibold">Admin Dashboard</h1>
                </div>
                <div>
                    <DrawerNavigation />
                </div>
            </div>
            <div className="px-5 mt-20 shadow-lg rounded-2xl h-[80vh]">
                <div className="flex flex-col gap-1">
                    <h1 className="text-2xl font-semibold text-slate-400">Patients List</h1>
                </div>
                <div className="flex items-center justify-between mt-10 gap-5" >
                    <p >Search Patients......</p>
                    <ModalComponents />
                </div>
                <div className='mt-10'>
                    <div className="relative overflow-x-auto">
                        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 lg:w-[70%] mx-auto">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        PATIENT NAME
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        EMAIL
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        PHONE
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        ACTION
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    dummyDatas.map((e) =>
                                    {
                                        return (
                                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    {e.name}
                                                </th>
                                                <td class="px-6 py-4">
                                                    {e.email}
                                                </td>
                                                <td class="px-6 py-4">
                                                    {e.mobile}
                                                </td>
                                                <td class="px-6 py-4 ">
                                                    <div className='bg-black rounded-lg text-white flex gap-2 w-[200px] items-center justify-center hover:cursor-pointer'>
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25M9 16.5v.75m3-3v3M15 12v5.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                                                        </svg>
                                                        <p>View Appointments</p>
                                                    </div>
                                                </td>
                                                <td class="px-6 py-4">
                                                    {e.titleFive}
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
        </div>
    )
}