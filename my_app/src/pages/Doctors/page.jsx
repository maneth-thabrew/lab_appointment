
import {Pagination} from 'antd';
import axios from 'axios';
import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {toast} from 'react-toastify';
import DrawerNavigation from "../../Components/Drawer/page";
import ModalComponents from "../../Components/modal/modal";
import doctor from '../../assets/doctor.png';


export default function Doctors()
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


    const handleDelete = (id) =>
    {
        try
        {
            axios.delete(`http://localhost:3000/api/v1/blogs/delete-blog/${id}`)
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
                    <h1 className="text-sky-500 text-lg font-semibold">Admin Dashboard</h1>
                </div>
                <div>
                    <DrawerNavigation />
                </div>
            </div>
            <div className="mt-5 shadow-lg rounded-lg px-2 h-[80vh]">
                <div className="flex items-start justify-start flex-col gap-1">
                    <h1 className="text-2xl font-semibold text-slate-400">Doctors List</h1>
                </div>
                <div className="flex items-center justify-between mt-10 gap-5" >
                    <p >Search Doctors......</p>
                    <ModalComponents />
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
                                                <div className='flex items-center justify-center gap-2 hover:cursor-pointer text-red-500 font-semibold' onClick={() =>
                                                {
                                                    handleDelete(e._id)
                                                }}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                                    </svg>
                                                    DELETE
                                                </div>
                                                <Link to={`/EditDoctor/${e._id}`}>
                                                    <div className='flex items-center justify-center gap-2 hover:cursor-pointer text-green-400 font-semibold mt-5'>
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                                        </svg>
                                                        EDIT
                                                    </div>
                                                </Link>
                                                <div className='flex items-center justify-center gap-2 hover:cursor-pointer text-green-400 font-semibold mt-5'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                                    </svg>
                                                    Book
                                                </div>

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