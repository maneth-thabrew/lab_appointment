import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {Link, useParams} from 'react-router-dom';
import {toast} from 'react-toastify';
import DrawerNavigation from '../../Components/Drawer/page';


const EditModal = () =>
{

    const {id} = useParams();


    const [name, setName] = useState("");
    const [description, setDescription] = useState("");

    useEffect(() =>
    {
        axios.get(`http://localhost:3000/api/v2/departments/getone-department/${id}`)
            .then(() =>
            {
                toast.success(`This is ${id} Department`);
            })
            .catch(() =>
            {
                toast.error("There isn't user with that id");
            });
    }, [id]);

    const update = () =>
    {
        try
        {
            if (!name || !description)
            {
                toast.error("Fields are empty!");
            } else
            {
                axios.put(`http://localhost:3000/api/v2/departments/update-department/${id}`, {
                    name, description,
                }).then((response) =>
                {
                    if (response.status === 200)
                    {
                        toast.success("Data updated successfully");
                    } else
                    {
                        toast.error("Data not updated successfully");
                    }
                });
            }
        } catch (error)
        {
            toast.error("Something went wrong");
        }
    };

    return (
        <>
            <div className="shadow-lg bg-white flex items-center justify-between h-[60px] w-full rounded-lg px-5 mt-5">
                <div>
                    <h1 className="text-sky-500 text-lg font-semibold">Admin Dashboard</h1>
                </div>
                <div>
                    <DrawerNavigation />
                </div>
            </div>

            <div className="flex items-start justify-start flex-col gap-1 w-[85%] mx-auto mt-24">
                <h1 className="text-2xl font-semibold text-slate-400">Edit Department Page</h1>
                <Link to={'/Departments'}>
                    <button className="flex items-center justify-center gap-2 bg-sky-500 text-white p-2 rounded-lg shadow-lg mt-12">

                        All Departments
                    </button>
                </Link>
            </div>


            <div className='w-[85%] mx-auto mt-16'>
                <form action="" className='w-full' onSubmit={update}>
                    <div className='felx flex-col w-full'>
                        <div className='flex flex-col gap-1 mt-4' >
                            <label htmlFor="" className='text-lg font-semibold'>Department Name:-</label>
                            <input type="text" placeholder="Type here" className="input input-bordered w-full" value={name} onChange={(e) =>
                            {
                                setName(e.target.value)
                            }} />
                        </div>
                        <div className='flex flex-col gap-1 mt-4'>
                            <label htmlFor="" className='text-lg font-semibold'>Department Description:-</label>
                            <textarea className="textarea textarea-bordered h-40" placeholder="Bio" value={description} onChange={(e) =>
                            {
                                setDescription(e.target.value)
                            }}></textarea>
                        </div>
                    </div>
                    <button className="btn btn-active btn-primary mt-4" type='submit'>Submit</button>
                </form>
            </div>
        </>
    );
};
export default EditModal;