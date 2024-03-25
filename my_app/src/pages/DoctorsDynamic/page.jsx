import {Link} from "react-router-dom";
import DrawerNavigation from "../../Components/Drawer/page";
import doctor from '../../assets/doctor.png';

export default function DoctorsDynamic()
{
    const dummyData = [
        {
            id: 1,
            image: doctor,
            name: "Doctor One",
            Department: "Orthopodic",
            qualification: "MBBS, MBSC",
            specialization: "asd , asd, asd, asd",
            fees: "1000",
            dateTime: "November,05,2023",
            time: [
                {
                    id: 1,
                    timeOne: "7.45 AM"
                },
                {
                    id: 2,
                    timeOne: "7.45 AM"
                },
                {
                    id: 3,
                    timeOne: "7.45 AM"
                },
                {
                    id: 4,
                    timeOne: "7.45 AM"
                },
                {
                    id: 5,
                    timeOne: "7.45 AM"
                },
                {
                    id: 6,
                    timeOne: "7.45 AM"
                },
            ]
        }
    ]
    return (
        <div className="px-2 ">
            <div className="shadow-lg bg-white flex items-center justify-between h-[60px] w-full rounded-lg px-5 mt-5">
                <div>
                    <h1 className="text-sky-500 text-lg font-semibold">Admin Dashboard</h1>
                </div>
                <div>
                    <DrawerNavigation />
                </div>
            </div>
            <div className="mt-5  px-2 h-full">
                {
                    dummyData.map((e) =>
                    {
                        return (
                            <div className="w-[80%] mx-auto h-full">
                                <div className="w-full mx-auto h-full flex items-center justify-start pb-2 shadow-lg rounded-3xl shadow-gray-300 lg:flex-row flex-col">
                                    <div className="lg:w-[20%] w-full flex items-center justify-center">
                                        <img src={e.image} alt="" />
                                    </div>
                                    <div className="flex flex-col items-start justify-start gap-1">
                                        <p className="text-xl font-semibold">Dr.{e.name}</p>
                                        <p className="textlg font-semibold">{e.Department}</p>
                                        <p><strong className="font-semibold">Qualifications:-</strong>{e.qualification}</p>
                                        <p><strong className="font-semibold">Specialization:-</strong>{e.specialization}</p>
                                        <div className="flex items-center justify-start gap-3 mt-4">
                                            <div className="w-[100px] h-[30px] p-1 bg-gray-400 text-white flex items-center justify-center rounded-3xl shadow-lg">
                                                <p>Rs.{e.fees}</p>
                                            </div>
                                            <Link to={'/Doctors'}>
                                                <div className="w-[100px] h-[30px] p-1 bg-green-400 text-white flex items-center justify-center rounded-3xl shadow-lg">
                                                    <p>Doctors</p>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="grid lg:grid-cols-2 grid-col-1 gap-4 place-items-center">
                                    <div className="w-[70%] h-full flex flex-col mt-10 border border-gray-200 rounded-lg p-2">
                                        <div className="flex items-center justify-between lg:flex-row flex-col">
                                            <div className="w-full flex items-center justify-start gap-3">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                                                </svg>
                                                <p className="text-lg text-slate-400 font-semibold">{e.dateTime}</p>
                                            </div>

                                            <div className="bg-sky-400 w-[70px] h-[35px] flex items-center justify-center text-white rounded-lg">
                                                <p>Sunday</p>
                                            </div>
                                        </div>
                                        <div className="h-1 bg-slate-100 w-[80%] mx-auto mt-2">

                                        </div>
                                        <div className="border border-slate-100 w-[80%] mx-wuto grid lg:grid-cols-3 h-full place-items-center">
                                            <div className="w-[100px] h-[20px] bg-orange-800 text-white mt-2 rounded-lg flex items-center justify-center gap-2">
                                                <div className="w-[10px] h-[10px] rounded-full bg-white"></div>
                                                <p>7.30AM</p>
                                            </div>
                                            <div className="w-[100px] h-[20px] bg-orange-800 text-white mt-2 rounded-lg flex items-center justify-center gap-2">
                                                <div className="w-[10px] h-[10px] rounded-full bg-white"></div>
                                                <p>7.30AM</p>
                                            </div>
                                            <div className="w-[100px] h-[20px] bg-orange-800 text-white mt-2 rounded-lg flex items-center justify-center gap-2">
                                                <div className="w-[10px] h-[10px] rounded-full bg-white"></div>
                                                <p>7.30AM</p>
                                            </div>
                                            <div className="w-[100px] h-[20px] bg-orange-800 text-white mt-2 rounded-lg flex items-center justify-center gap-2">
                                                <div className="w-[10px] h-[10px] rounded-full bg-white"></div>
                                                <p>7.30AM</p>
                                            </div>
                                            <div className="w-[100px] h-[20px] bg-orange-800 text-white mt-2 rounded-lg flex items-center justify-center gap-2">
                                                <div className="w-[10px] h-[10px] rounded-full bg-white"></div>
                                                <p>7.30AM</p>
                                            </div>
                                            <div className="w-[100px] h-[20px] bg-white text-orange-800 mt-2 rounded-lg flex items-center justify-center gap-2 border border-orange-800">
                                                <div className="w-[10px] h-[10px] rounded-full bg-orange-800"></div>
                                                <p>7.30AM</p>
                                            </div>
                                            <div className="w-[100px] h-[20px] bg-orange-800 text-white mt-2 rounded-lg flex items-center justify-center gap-2">
                                                <div className="w-[10px] h-[10px] rounded-full bg-white"></div>
                                                <p>7.30AM</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-[70%] h-full flex flex-col mt-10 border border-gray-200 rounded-lg p-2">
                                        <div className="flex items-center justify-between lg:flex-row flex-col">
                                            <div className="w-full flex items-center justify-start gap-3">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                                                </svg>
                                                <p className="text-lg text-slate-400 font-semibold">{e.dateTime}</p>
                                            </div>

                                            <div className="bg-sky-400 w-[70px] h-[35px] flex items-center justify-center text-white rounded-lg">
                                                <p>Sunday</p>
                                            </div>
                                        </div>
                                        <div className="h-1 bg-slate-100 w-[80%] mx-auto mt-2">

                                        </div>
                                        <div className="border border-slate-100 w-[80%] mx-wuto grid lg:grid-cols-3 h-full place-items-center">
                                            <div className="w-[100px] h-[20px] bg-orange-800 text-white mt-2 rounded-lg flex items-center justify-center gap-2">
                                                <div className="w-[10px] h-[10px] rounded-full bg-white"></div>
                                                <p>7.30AM</p>
                                            </div>
                                            <div className="w-[100px] h-[20px] bg-orange-800 text-white mt-2 rounded-lg flex items-center justify-center gap-2">
                                                <div className="w-[10px] h-[10px] rounded-full bg-white"></div>
                                                <p>7.30AM</p>
                                            </div>
                                            <div className="w-[100px] h-[20px] bg-orange-800 text-white mt-2 rounded-lg flex items-center justify-center gap-2">
                                                <div className="w-[10px] h-[10px] rounded-full bg-white"></div>
                                                <p>7.30AM</p>
                                            </div>
                                            <div className="w-[100px] h-[20px] bg-orange-800 text-white mt-2 rounded-lg flex items-center justify-center gap-2">
                                                <div className="w-[10px] h-[10px] rounded-full bg-white"></div>
                                                <p>7.30AM</p>
                                            </div>
                                            <div className="w-[100px] h-[20px] bg-orange-800 text-white mt-2 rounded-lg flex items-center justify-center gap-2">
                                                <div className="w-[10px] h-[10px] rounded-full bg-white"></div>
                                                <p>7.30AM</p>
                                            </div>
                                            <div className="w-[100px] h-[20px] bg-white text-orange-800 mt-2 rounded-lg flex items-center justify-center gap-2 border border-orange-800">
                                                <div className="w-[10px] h-[10px] rounded-full bg-orange-800"></div>
                                                <p>7.30AM</p>
                                            </div>
                                            <div className="w-[100px] h-[20px] bg-orange-800 text-white mt-2 rounded-lg flex items-center justify-center gap-2">
                                                <div className="w-[10px] h-[10px] rounded-full bg-white"></div>
                                                <p>7.30AM</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-[70%] h-full flex flex-col mt-10 border border-gray-200 rounded-lg p-2">
                                        <div className="flex items-center justify-between lg:flex-row flex-col" >
                                            <div className="w-full flex items-center justify-start gap-3">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                                                </svg>
                                                <p className="text-lg text-slate-400 font-semibold">{e.dateTime}</p>
                                            </div>

                                            <div className="bg-sky-400 w-[70px] h-[35px] flex items-center justify-center text-white rounded-lg">
                                                <p>Sunday</p>
                                            </div>
                                        </div>
                                        <div className="h-1 bg-slate-100 w-[80%] mx-auto mt-2">

                                        </div>
                                        <div className="border border-slate-100 w-[80%] mx-wuto grid lg:grid-cols-3 h-full place-items-center">
                                            <div className="w-[100px] h-[20px] bg-orange-800 text-white mt-2 rounded-lg flex items-center justify-center gap-2">
                                                <div className="w-[10px] h-[10px] rounded-full bg-white"></div>
                                                <p>7.30AM</p>
                                            </div>
                                            <div className="w-[100px] h-[20px] bg-orange-800 text-white mt-2 rounded-lg flex items-center justify-center gap-2">
                                                <div className="w-[10px] h-[10px] rounded-full bg-white"></div>
                                                <p>7.30AM</p>
                                            </div>
                                            <div className="w-[100px] h-[20px] bg-orange-800 text-white mt-2 rounded-lg flex items-center justify-center gap-2">
                                                <div className="w-[10px] h-[10px] rounded-full bg-white"></div>
                                                <p>7.30AM</p>
                                            </div>
                                            <div className="w-[100px] h-[20px] bg-orange-800 text-white mt-2 rounded-lg flex items-center justify-center gap-2">
                                                <div className="w-[10px] h-[10px] rounded-full bg-white"></div>
                                                <p>7.30AM</p>
                                            </div>
                                            <div className="w-[100px] h-[20px] bg-orange-800 text-white mt-2 rounded-lg flex items-center justify-center gap-2">
                                                <div className="w-[10px] h-[10px] rounded-full bg-white"></div>
                                                <p>7.30AM</p>
                                            </div>
                                            <div className="w-[100px] h-[20px] bg-white text-orange-800 mt-2 rounded-lg flex items-center justify-center gap-2 border border-orange-800">
                                                <div className="w-[10px] h-[10px] rounded-full bg-orange-800"></div>
                                                <p>7.30AM</p>
                                            </div>
                                            <div className="w-[100px] h-[20px] bg-orange-800 text-white mt-2 rounded-lg flex items-center justify-center gap-2">
                                                <div className="w-[10px] h-[10px] rounded-full bg-white"></div>
                                                <p>7.30AM</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-[70%] h-full flex flex-col mt-10 border border-gray-200 rounded-lg p-2">
                                        <div className="flex items-center justify-between lg:flex-row flex-col">
                                            <div className="w-full flex items-center justify-start gap-3">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                                                </svg>
                                                <p className="text-lg text-slate-400 font-semibold">{e.dateTime}</p>
                                            </div>

                                            <div className="bg-sky-400 w-[70px] h-[35px] flex items-center justify-center text-white rounded-lg">
                                                <p>Sunday</p>
                                            </div>
                                        </div>
                                        <div className="h-1 bg-slate-100 w-[80%] mx-auto mt-2">

                                        </div>
                                        <div className="border border-slate-100 w-[80%] mx-wuto grid lg:grid-cols-3 h-full place-items-center">
                                            <div className="w-[100px] h-[20px] bg-orange-800 text-white mt-2 rounded-lg flex items-center justify-center gap-2">
                                                <div className="w-[10px] h-[10px] rounded-full bg-white"></div>
                                                <p>7.30AM</p>
                                            </div>
                                            <div className="w-[100px] h-[20px] bg-orange-800 text-white mt-2 rounded-lg flex items-center justify-center gap-2">
                                                <div className="w-[10px] h-[10px] rounded-full bg-white"></div>
                                                <p>7.30AM</p>
                                            </div>
                                            <div className="w-[100px] h-[20px] bg-orange-800 text-white mt-2 rounded-lg flex items-center justify-center gap-2">
                                                <div className="w-[10px] h-[10px] rounded-full bg-white"></div>
                                                <p>7.30AM</p>
                                            </div>
                                            <div className="w-[100px] h-[20px] bg-orange-800 text-white mt-2 rounded-lg flex items-center justify-center gap-2">
                                                <div className="w-[10px] h-[10px] rounded-full bg-white"></div>
                                                <p>7.30AM</p>
                                            </div>
                                            <div className="w-[100px] h-[20px] bg-orange-800 text-white mt-2 rounded-lg flex items-center justify-center gap-2">
                                                <div className="w-[10px] h-[10px] rounded-full bg-white"></div>
                                                <p>7.30AM</p>
                                            </div>
                                            <div className="w-[100px] h-[20px] bg-white text-orange-800 mt-2 rounded-lg flex items-center justify-center gap-2 border border-orange-800">
                                                <div className="w-[10px] h-[10px] rounded-full bg-orange-800"></div>
                                                <p>7.30AM</p>
                                            </div>
                                            <div className="w-[100px] h-[20px] bg-orange-800 text-white mt-2 rounded-lg flex items-center justify-center gap-2">
                                                <div className="w-[10px] h-[10px] rounded-full bg-white"></div>
                                                <p>7.30AM</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-[70%] h-full flex flex-col mt-10 border border-gray-200 rounded-lg p-2">
                                        <div className="flex items-center justify-between lg:flex-row flex-col">
                                            <div className="w-full flex items-center justify-start gap-3">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                                                </svg>
                                                <p className="text-lg text-slate-400 font-semibold">{e.dateTime}</p>
                                            </div>

                                            <div className="bg-sky-400 w-[70px] h-[35px] flex items-center justify-center text-white rounded-lg">
                                                <p>Sunday</p>
                                            </div>
                                        </div>
                                        <div className="h-1 bg-slate-100 w-[80%] mx-auto mt-2">

                                        </div>
                                        <div className="border border-slate-100 w-[80%] mx-wuto grid lg:grid-cols-3 h-full place-items-center">
                                            <div className="w-[100px] h-[20px] bg-orange-800 text-white mt-2 rounded-lg flex items-center justify-center gap-2">
                                                <div className="w-[10px] h-[10px] rounded-full bg-white"></div>
                                                <p>7.30AM</p>
                                            </div>
                                            <div className="w-[100px] h-[20px] bg-orange-800 text-white mt-2 rounded-lg flex items-center justify-center gap-2">
                                                <div className="w-[10px] h-[10px] rounded-full bg-white"></div>
                                                <p>7.30AM</p>
                                            </div>
                                            <div className="w-[100px] h-[20px] bg-orange-800 text-white mt-2 rounded-lg flex items-center justify-center gap-2">
                                                <div className="w-[10px] h-[10px] rounded-full bg-white"></div>
                                                <p>7.30AM</p>
                                            </div>
                                            <div className="w-[100px] h-[20px] bg-orange-800 text-white mt-2 rounded-lg flex items-center justify-center gap-2">
                                                <div className="w-[10px] h-[10px] rounded-full bg-white"></div>
                                                <p>7.30AM</p>
                                            </div>
                                            <div className="w-[100px] h-[20px] bg-orange-800 text-white mt-2 rounded-lg flex items-center justify-center gap-2">
                                                <div className="w-[10px] h-[10px] rounded-full bg-white"></div>
                                                <p>7.30AM</p>
                                            </div>
                                            <div className="w-[100px] h-[20px] bg-white text-orange-800 mt-2 rounded-lg flex items-center justify-center gap-2 border border-orange-800">
                                                <div className="w-[10px] h-[10px] rounded-full bg-orange-800"></div>
                                                <p>7.30AM</p>
                                            </div>
                                            <div className="w-[100px] h-[20px] bg-orange-800 text-white mt-2 rounded-lg flex items-center justify-center gap-2">
                                                <div className="w-[10px] h-[10px] rounded-full bg-white"></div>
                                                <p>7.30AM</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-[70%] h-full flex flex-col mt-10 border border-gray-200 rounded-lg p-2">
                                        <div className="flex items-center justify-between lg:flex-row flex-col">
                                            <div className="w-full flex items-center justify-start gap-3">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                                                </svg>
                                                <p className="text-lg text-slate-400 font-semibold">{e.dateTime}</p>
                                            </div>

                                            <div className="bg-sky-400 w-[70px] h-[35px] flex items-center justify-center text-white rounded-lg">
                                                <p>Sunday</p>
                                            </div>
                                        </div>
                                        <div className="h-1 bg-slate-100 w-[80%] mx-auto mt-2">

                                        </div>
                                        <div className="border border-slate-100 w-[80%] mx-wuto grid lg:grid-cols-3 h-full place-items-center">
                                            <div className="w-[100px] h-[20px] bg-orange-800 text-white mt-2 rounded-lg flex items-center justify-center gap-2">
                                                <div className="w-[10px] h-[10px] rounded-full bg-white"></div>
                                                <p>7.30AM</p>
                                            </div>
                                            <div className="w-[100px] h-[20px] bg-orange-800 text-white mt-2 rounded-lg flex items-center justify-center gap-2">
                                                <div className="w-[10px] h-[10px] rounded-full bg-white"></div>
                                                <p>7.30AM</p>
                                            </div>
                                            <div className="w-[100px] h-[20px] bg-orange-800 text-white mt-2 rounded-lg flex items-center justify-center gap-2">
                                                <div className="w-[10px] h-[10px] rounded-full bg-white"></div>
                                                <p>7.30AM</p>
                                            </div>
                                            <div className="w-[100px] h-[20px] bg-orange-800 text-white mt-2 rounded-lg flex items-center justify-center gap-2">
                                                <div className="w-[10px] h-[10px] rounded-full bg-white"></div>
                                                <p>7.30AM</p>
                                            </div>
                                            <div className="w-[100px] h-[20px] bg-orange-800 text-white mt-2 rounded-lg flex items-center justify-center gap-2">
                                                <div className="w-[10px] h-[10px] rounded-full bg-white"></div>
                                                <p>7.30AM</p>
                                            </div>
                                            <div className="w-[100px] h-[20px] bg-white text-orange-800 mt-2 rounded-lg flex items-center justify-center gap-2 border border-orange-800">
                                                <div className="w-[10px] h-[10px] rounded-full bg-orange-800"></div>
                                                <p>7.30AM</p>
                                            </div>
                                            <div className="w-[100px] h-[20px] bg-orange-800 text-white mt-2 rounded-lg flex items-center justify-center gap-2">
                                                <div className="w-[10px] h-[10px] rounded-full bg-white"></div>
                                                <p>7.30AM</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}