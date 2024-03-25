import {useState} from "react";
import {toast} from "react-toastify";
import DrawerNavigation from "../../Components/Drawer/page";


export default function AddDoctors()
{
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

    const handleSubmit = async () =>
    {
        try
        {
            if (!name || !department || !mobile || !email || !password || !gender || !designation || !qualification || !experiance || !specialization || !Bio)
            {
                toast.error("Feilds Are Empty!")
            } else
            {
                await fetch("http://localhost:3000/api/v1/blogs/save-blog", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        name,
                        department,
                        mobile,
                        email,
                        password,
                        gender,
                        designation,
                        qualification,
                        experiance,
                        specialization,
                        Bio
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
        <div className="px-2">
            <div className="shadow-lg bg-white flex items-center justify-between h-[60px] w-full rounded-lg px-5 mt-5">
                <div>
                    <h1 className="text-sky-500 text-lg font-semibold">Admin Dashboard</h1>
                </div>
                <div>
                    <DrawerNavigation />
                </div>
            </div>
            <div className="px-2 mt-5 h-full ">
                <div className="flex flex-col gap-1">
                    <h1 className="text-2xl font-semibold text-slate-400">Add Doctors</h1>
                    <p className="text-lg font-semibold text-slate-600">Add doctors usiing theri departments.. </p>
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
        </div>
    )
}