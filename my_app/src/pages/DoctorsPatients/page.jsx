
import {Pagination} from 'antd';
import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import PatientDrawer from '../../Components/PatientDrawrr/patient.navigation';
import doctor from '../../assets/doctor.png';


export default function DoctorsPatients()
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
                "http://localhost:3000/api/v1/blogs/getall-blogs"
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


    return (
        <div className="px-2">
            <div className="shadow-lg bg-white flex items-center justify-between h-[60px] w-full rounded-lg px-5 mt-5">
                <div>
                    <h1 className="text-sky-500 text-lg font-semibold">Patient Dashboard</h1>
                </div>
                <div>
                    <PatientDrawer />
                </div>
            </div>
            <div className="mt-5 shadow-lg rounded-lg px-2 h-[80vh]">
                <div className="flex items-start justify-start flex-col gap-1">
                    <h1 className="text-2xl font-semibold text-slate-400">Doctors List</h1>
                </div>
                <div className="flex items-center justify-between mt-10 gap-5" >
                    <Link to={'/Booking'}>
                        <button className="flex items-center justify-center gap-2 bg-sky-500 text-white p-2 rounded-lg shadow-lg mt-16">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
                            Add Booking
                        </button>
                    </Link>
                </div>
                <div className="mt-10 h-full">
                    <div class="relative overflow-x-auto">
                        <table class="w-full text-sm text-center rtl:text-right text-gray-500 dark:text-gray-400  mx-auto">
                            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" class="px-6 py-3">
                                        DOCTOR IMAGE
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        DOCTOR NAME
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        DEPARTMENT
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        MOBILE
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        EMAIL
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        ACTION
                                    </th>
                                </tr>
                            </thead>
                            <tbody>


                                {newdata.data.map((e) =>
                                {
                                    return (
                                        <tr class="bg-white border-b " key={e.id}>
                                            <td class="px-6 py-4">
                                                <div className='flex items-center justify-center'>
                                                    <img src={doctor} alt="" className='w-[150px] h-[100px]' />
                                                </div>
                                            </td>

                                            <td class="px-6 py-4">
                                                {e.name}
                                            </td>
                                            <td class="px-6 py-4">
                                                {e.department}
                                            </td>
                                            <td class="px-6 py-4">
                                                {e.mobile}
                                            </td>
                                            <td class="px-6 py-4 ">
                                                <div className="bg-green-700 text-white  rounded-lg flex items-center justify-center">
                                                    <p className='w-full'>{e.email}</p>
                                                </div>
                                            </td>
                                            <td class="px-6 py-4 ">
                                                <Link to={'/Booking'}>
                                                    <div className='flex items-center justify-center gap-2 hover:cursor-pointer text-green-400 font-semibold mt-5'>
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                                        </svg>
                                                        Book
                                                    </div>
                                                </Link>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                    <div className='mt-10 flex justify-center items-center '>
                        <Pagination defaultCurrent={1} total={50} />
                    </div>
                </div>
            </div>
        </div>
    )
}