import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {toast} from 'react-toastify';
import DrawerNavigation from '../../Components/Drawer/page';


const EditDoctors = () =>
{

    const {id} = useParams();


    const [name, setName] = useState("");
    const [department, setDepartment] = useState("");
    const [mobile, setMobile] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const [gender, setGender] = useState("")
    const [designation, setDesignation] = useState("")
    const [qualification, setQualification] = useState("")
    const [experiance, setExperince] = useState("")
    const [specialization, setSpecialization] = useState("")
    const [Bio, setBio] = useState("")

    useEffect(() =>
    {
        axios.get(`http://localhost:3000/api/v1/blogs/getone-blog/${id}`)
            .then(() =>
            {
                toast.success("This is your doctor");
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
            if (!name || !department || !mobile || !email || !password || !gender || !designation || !qualification || !experiance || !specialization || !Bio)
            {
                toast.error("Fields are empty!");
            } else
            {
                axios.put(`http://localhost:3000/api/v1/blogs/update-blog/${id}`, {
                    name, department, mobile, email, password, gender, designation, qualification, specialization, experiance, Bio
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
        <div>
            <div className="shadow-lg bg-white flex items-center justify-between h-[60px] w-full rounded-lg px-5 mt-5">
                <div>
                    <h1 className="text-sky-500 text-lg font-semibold">Admin Dashboard</h1>
                </div>
                <div>
                    <DrawerNavigation />
                </div>
            </div>

            <div className='w-[85%] mx-auto h-screen flex items-center justify-center '>


                <form action="" className='w-full' onSubmit={update}>
                    <div className='felx flex-col w-full'>
                        <div className='flex lg:flex-row flex-col gap-4 items-center justify-center'>
                            <div className="flex flex-col lg:w-[50%] w-full">
                                <label htmlFor="" className='text-lg font-semibold'>Select Department:-</label>
                                <select className="select select-bordered w-full" value={department} onChange={(e) =>
                                {
                                    setDepartment(e.target.value)
                                }}>
                                    <option disabled selected defaultValue={""} value={""}>Choose?</option>
                                    <option value={"Nuerolodgy"}>Nuerolodgy</option>
                                    <option value={"Orthopedic"}>Orthopedic</option>
                                    <option value={"Dental"}>Dental</option>
                                    <option value={"ENT"}>ENT</option>
                                </select>
                            </div>
                        </div>
                        <div className='flex lg:flex-row flex-col gap-4 items-center justify-center mt-5'>
                            <div className="flex flex-col lg:w-[50%] w-full">
                                <label htmlFor="" className='text-lg font-semibold'>Name:-</label>
                                <input type="text" className="input input-bordered w-full" required value={name} onChange={(e) =>
                                {
                                    setName(e.target.value)
                                }} />
                            </div>
                            <div className="flex flex-col lg:w-[50%] w-full">
                                <label htmlFor="" className='text-lg font-semibold'>Phone Number:-</label>
                                <input type="text" className="input input-bordered w-full" required value={mobile} onChange={(e) =>
                                {
                                    setMobile(e.target.value)
                                }} />
                            </div>
                        </div>
                        <div className='flex lg:flex-row flex-col gap-4 items-center justify-center mt-5'>
                            <div className="flex flex-col lg:w-[50%] w-full">
                                <label htmlFor="" className='text-lg font-semibold'>Email:-</label>
                                <input type="email" className="input input-bordered w-full" required value={email} onChange={(e) =>
                                {
                                    setEmail(e.target.value)
                                }} />
                            </div>
                            <div className="flex flex-col lg:w-[50%] w-full">
                                <label htmlFor="" className='text-lg font-semibold'>Password:-</label>
                                <input type="password" className="input input-bordered w-full" required value={password} onChange={(e) =>
                                {
                                    setPassword(e.target.value)
                                }} />
                            </div>
                        </div>
                        <div className='flex lg:flex-row flex-col gap-4 items-center justify-center mt-5'>
                            <div className="flex flex-col lg:w-[50%] w-full">
                                <label htmlFor="" className='text-lg font-semibold'>Select Gender:-</label>
                                <select className="select select-bordered w-full " value={gender} onChange={(e) =>
                                {
                                    setGender(e.target.value)
                                }}>
                                    <option disabled selected defaultValue={""} value={""}>Choose?</option>
                                    <option value={"Male"}>Male</option>
                                    <option value={"Female"}>Female</option>
                                    <option value={"Others"}>Others</option>
                                </select>
                            </div>
                            <div className="flex flex-col lg:w-[50%] w-full">
                                <label htmlFor="" className='text-lg font-semibold'>Designation:-</label>
                                <input type="text" className="input input-bordered w-full" required value={designation} onChange={(e) =>
                                {
                                    setDesignation(e.target.value)
                                }} />
                            </div>
                        </div>
                        <hr className="mt-5" />
                        <p className="mt-4 text-slate-400 font-semibold text-lg">Education Section</p>
                        <div className='flex lg:flex-row flex-col gap-4 items-center justify-center mt-5'>
                            <div className="flex flex-col lg:w-[50%] w-full">
                                <label htmlFor="" className='text-lg font-semibold'>Qualifications:-</label>
                                <input type="text" className="input input-bordered w-full" required value={qualification} onChange={(e) =>
                                {
                                    setQualification(e.target.value)
                                }} />
                            </div>
                            <div className="flex flex-col lg:w-[50%] w-full">
                                <label htmlFor="" className='text-lg font-semibold'>Experiance:-</label>
                                <input type="text" className="input input-bordered w-full" required value={experiance} onChange={(e) =>
                                {
                                    setExperince(e.target.value)
                                }} />
                            </div>
                        </div>
                        <div className='flex lg:flex-row flex-col gap-4 items-center justify-center mt-5'>
                            <div className="flex flex-col lg:w-[50%] w-full">
                                <label htmlFor="" className='text-lg font-semibold'>Specialization:- (MAX 1000 Characters)</label>
                                <textarea className="textarea textarea-bordered" placeholder="Bio" required value={specialization} onChange={(e) =>
                                {
                                    setSpecialization(e.target.value)
                                }}></textarea>
                            </div>
                            <div className="flex flex-col lg:w-[50%] w-full">
                                <label htmlFor="" className='text-lg font-semibold'>Bio:- (MAX 1000 Characters)</label>
                                <textarea className="textarea textarea-bordered" placeholder="Bio" required value={Bio} onChange={(e) =>
                                {
                                    setBio(e.target.value)
                                }}></textarea>
                            </div>
                        </div>

                    </div>
                    <button className="btn btn-active btn-primary mt-4" type='submit'>Submit</button>
                </form>

            </div>
        </div>
    );
};
export default EditDoctors;