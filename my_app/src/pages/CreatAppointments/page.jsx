import {Pagination} from 'antd';
import {Link} from 'react-router-dom';
import DrawerNavigation from "../../Components/Drawer/page";

export default function CreateAppointment()
{
    const dummyDatas = [
        {
            id: 1,
            dName: "Doctor One",
            designation: "Orthopodic",
            booking: "booking"
        },
        {
            id: 2,
            dName: "Doctor Two",
            designation: "Orthopodic",
            booking: "booking"
        },
        {
            id: 3,
            dName: "Doctor Three",
            designation: "Orthopodic",
            booking: "booking"
        },
        {
            id: 4,
            dName: "Doctor Four",
            designation: "Orthopodic",
            booking: "booking"
        },
        {
            id: 5,
            dName: "Doctor Five",
            designation: "Orthopodic",
            booking: "booking"
        },
        {
            id: 6,
            dName: "Doctor Six",
            designation: "Orthopodic",
            booking: "booking"
        },
    ]
    return (
        <div className="px-2">
            <div className="shadow-lg bg-white flex items-center justify-between h-[60px] w-full rounded-lg px-5 mt-5">
                <div>
                    <h1 className="text-black text-lg font-semibold">Admin Dashboard</h1>
                </div>
                <div>
                    <DrawerNavigation />
                </div>
            </div>
            <div className="mt-5 shadow-lg rounded-lg px-2 h-[80vh]">
                <div className="flex items-start justify-start flex-col gap-1">
                    <h1 className="text-2xl font-semibold text-slate-400">Create Appointments</h1>
                </div>
                <div className="mt-10">
                    <div class="relative overflow-x-auto">
                        <table class="w-full text-sm text-center rtl:text-right text-gray-500 dark:text-gray-400 lg:w-[70%] mx-auto">
                            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" class="px-6 py-3">
                                        DOCTOR NAME
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        DESIGNATION
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        BOOK APPOINTMENTS
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
                                                    {e.dName}
                                                </th>
                                                <td class="px-6 py-4">
                                                    {e.designation}
                                                </td>
                                                <td class="px-6 py-4 flex items-center justify-center">
                                                    <Link to={'/DoctorsDynamic'}>
                                                        <div className="bg-sky-700 text-white w-16 rounded-lg flex items-center justify-center">
                                                            {e.booking}
                                                        </div>
                                                    </Link>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
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