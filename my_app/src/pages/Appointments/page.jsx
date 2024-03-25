import {Pagination} from 'antd';
import React from 'react';
import DrawerNavigation from "../../Components/Drawer/page";

export default function Appointments()
{
    const dummyDatas = [
        {
            id: 1,
            titleOne: "0001",
            titleTwo: "2023-02-24",
            titleThree: "KPDEV",
            titleFour: "kpdev@gmail.com",
            titleFive: "07711223344",
            titleSix: "Booked",
            titleSeven: "View"
        },
        {
            id: 2,
            titleOne: "0001",
            titleTwo: "2023-02-24",
            titleThree: "KPDEV",
            titleFour: "kpdev@gmail.com",
            titleFive: "07711223344",
            titleSix: "Booked",
            titleSeven: "View"
        },
        {
            id: 3,
            titleOne: "0001",
            titleTwo: "2023-02-24",
            titleThree: "KPDEV",
            titleFour: "kpdev@gmail.com",
            titleFive: "07711223344",
            titleSix: "Booked",
            titleSeven: "View"
        },
        {
            id: 4,
            titleOne: "0001",
            titleTwo: "2023-02-24",
            titleThree: "KPDEV",
            titleFour: "kpdev@gmail.com",
            titleFive: "07711223344",
            titleSix: "Booked",
            titleSeven: "View"
        },
        {
            id: 5,
            titleOne: "0001",
            titleTwo: "2023-02-24",
            titleThree: "KPDEV",
            titleFour: "kpdev@gmail.com",
            titleFive: "07711223344",
            titleSix: "Booked",
            titleSeven: "View"
        },
        {
            id: 6,
            titleOne: "0001",
            titleTwo: "2023-02-24",
            titleThree: "KPDEV",
            titleFour: "kpdev@gmail.com",
            titleFive: "07711223344",
            titleSix: "Booked",
            titleSeven: "View"
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
                    <h1 className="text-2xl font-semibold text-slate-400">Appointments</h1>
                    <p className="text-lg font-semibold text-slate-600">Select your appointments date and appointment type </p>
                </div>
                <div className='mt-10'>
                    <div className="relative overflow-x-auto">
                        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        APT.NO
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        APT.DATE
                                    </th>
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
                                        STATUS
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
                                                    {e.titleOne}
                                                </th>
                                                <td class="px-6 py-4">
                                                    {e.titleTwo}
                                                </td>
                                                <td class="px-6 py-4">
                                                    {e.titleThree}
                                                </td>
                                                <td class="px-6 py-4">
                                                    {e.titleFour}
                                                </td>
                                                <td class="px-6 py-4">
                                                    {e.titleFive}
                                                </td>
                                                <td class="px-6 py-4">
                                                    <div className='bg-sky-700 text-white w-16 flex items-center justify-center p-1 rounded-lg'>
                                                        {e.titleSix}
                                                    </div>
                                                </td>
                                                <td class="px-6 py-4 flex items-center justify-start gap-1 text-green-600">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                                    </svg>
                                                    {e.titleSeven}
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