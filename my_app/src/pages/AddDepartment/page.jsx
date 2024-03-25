import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {toast} from 'react-toastify';
import DrawerNavigation from '../../Components/Drawer/page';

const AddDepoartment = () =>
{
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = async () =>
    {
        try
        {
            if (!name || !description)
            {
                toast.error("Feilds Are Empty!")
            } else
            {
                await fetch("http://localhost:3000/api/v2/departments/save-departments", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        name, description
                    }),
                }).then((result) =>
                {
                    if (result.ok)
                    {
                        toast.success("Data Added successfully");
                        window.location.href("../Departments")
                    }
                });
            }
        } catch (error)
        {
            toast.error("Something went wrong")
            console.log(error);
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
                <h1 className="text-2xl font-semibold text-slate-400">Adding Department Page</h1>
                <Link to={'/Departments'}>
                    <button className="flex items-center justify-center gap-2 bg-sky-500 text-white p-2 rounded-lg shadow-lg mt-12">

                        All Departments
                    </button>
                </Link>
            </div>

            <div className='w-[85%] mx-auto h-full flex items-center justify-center mt-10'>
                <form action="" className='w-full' onSubmit={handleSubmit}>

                    <div className='felx flex-col w-full'>
                        <div className='flex flex-col gap-1 mt-4' >
                            <label htmlFor="" className='text-lg font-semibold'>Department Name:-</label>
                            <input type="text" placeholder="Type here" className="input input-bordered w-full " required value={name} onChange={(e) =>
                            {
                                setName(e.target.value)
                            }} />
                        </div>
                        <div className='flex flex-col gap-1 mt-4'>
                            <label htmlFor="" className='text-lg font-semibold'>Department Description:-</label>
                            <textarea className="textarea textarea-bordered h-40" placeholder="Bio" required value={description} onChange={(e) =>
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
export default AddDepoartment;