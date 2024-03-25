import {useState} from "react";
import {toast} from "react-toastify";
import PatientDrawer from "../../Components/PatientDrawrr/patient.navigation";

export default function BookingPatients()
{
    const [name, setName] = useState("");
    const [department, setDepartment] = useState("");
    const [mobile, setMobile] = useState("");
    const [email, setEmail] = useState("");
    const [doctorName, setDoctorName] = useState("")
    const [address, setAddress] = useState("")
    const handleSubmit = async () =>
    {
        try
        {
            if (!name || !department || !mobile || !email || !doctorName || !address)
            {
                toast.error("Feilds Are Empty!")
            } else
            {
                await fetch("http://localhost:3000/api/v3/bookings/save-bookings", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        name,
                        department,
                        mobile,
                        email,
                        address,
                        doctorName,
                    }),
                }).then((result) =>
                {
                    if (result.ok)
                    {
                        toast.success("Data Added successfully");
                        window.location.href("../Doctors/page.jsx")
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
        <div>
            <div className="shadow-lg bg-white flex items-center justify-between h-[60px] w-full rounded-lg px-5 mt-5">
                <div>
                    <h1 className="text-sky-500 text-lg font-semibold">Patient Dashboard</h1>
                </div>
                <div>
                    <PatientDrawer />
                </div>
            </div>
            <div className="flex flex-col gap-1 w-[85%] mx-auto mt-10">
                <h1 className="text-2xl font-semibold text-slate-400">Reserve Your Booking</h1>
            </div>
            <div className="w-full mx-auto lg:w-[85%] mt-10">
                <form action="" className='w-full' onSubmit={handleSubmit}>
                    <div className='felx flex-col w-full'>
                        <div className='flex lg:flex-row flex-col gap-4 items-center justify-center'>
                            <div className="flex flex-col lg:w-[50%] w-full">
                                <label htmlFor="" className='text-lg font-semibold'>Select Department:-</label>
                                <select className="select select-bordered w-full" value={department} onChange={(e) =>
                                {
                                    setDepartment(e.target.value)
                                }}>
                                    <option disabled selected defaultValue={""} value={""}>Choose?</option>
                                    <option value={"Nuerology"}>Nuerolodgy</option>
                                    <option value={"Orthopedic"}>Orthopedic</option>
                                    <option value={"Dental"}>Dental</option>
                                    <option value={"ENT"}>ENT</option>
                                </select>
                            </div>
                            <div className="flex flex-col lg:w-[50%] w-full">
                                <label htmlFor="" className='text-lg font-semibold'>Name:-</label>
                                <input type="text" className="input input-bordered w-full" required value={name} onChange={(e) =>
                                {
                                    setName(e.target.value)
                                }} />
                            </div>
                        </div>
                        <div className='flex lg:flex-row flex-col gap-4 items-center justify-center mt-5'>
                            <div className="flex flex-col lg:w-[50%] w-full">
                                <label htmlFor="" className='text-lg font-semibold'>Address:- </label>
                                <textarea className="textarea textarea-bordered" placeholder="Bio" required value={address} onChange={(e) =>
                                {
                                    setAddress(e.target.value)
                                }}></textarea>
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
                                <label htmlFor="" className='text-lg font-semibold'>Doctor Name:-</label>
                                <input type="text" className="input input-bordered w-full" required value={doctorName} onChange={(e) =>
                                {
                                    setDoctorName(e.target.value)
                                }} />
                            </div>
                        </div>


                    </div>
                    <button className="btn btn-active btn-primary mt-4" type='submit'>Submit</button>
                </form>
            </div>
        </div>
    )
}