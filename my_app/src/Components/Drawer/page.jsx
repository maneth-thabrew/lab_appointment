import {Drawer} from 'antd';
import React, {useState} from 'react';
import {Link} from 'react-router-dom';

const DrawerNavigation = () =>
{
    const [showSubMenu1, setShowSubMenu1] = useState(false);

    const [showSubMenu3, setShowSubMenu3] = useState(false);
    const [showSubMenu4, setShowSubMenu4] = useState(false);
    const [showSubMenu5, setShowSubMenu5] = useState(false);
    const toggleSubMenu = (submenu) =>
    {
        switch (submenu)
        {
            case 1:
                setShowSubMenu1(!showSubMenu1);
                break;

            case 3:
                setShowSubMenu3(!showSubMenu3);
                break;
            case 4:
                setShowSubMenu4(!showSubMenu4);
                break;
            case 5:
                setShowSubMenu5(!showSubMenu5);
                break;
            default:
                break;
        }
    };
    const [open, setOpen] = useState(false);

    const showDrawer = () =>
    {
        setOpen(true);
    };

    const onClose = () =>
    {
        setOpen(false);
    };

    return (
        <>
            <div type="primary" onClick={showDrawer}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                </svg>

            </div>
            <Drawer onClose={onClose} open={open}>
                <div className=" text-black w-full min-h-screen">
                    <div >
                        <h1 className="text-2xl font-bold">
                            A<span className="text-blue-600">B</span>C
                        </h1>
                    </div>

                    <ul className="mt-6">
                        <li >
                            <Link
                                to="/Home"
                                className="flex items-center px-6 py-3 text-black hover:bg-gray-800 hover:text-white">
                                <span className="text-lg mr-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                                    </svg>
                                </span>
                                Dashboard
                            </Link>
                        </li>
                        <li>
                            <button
                                onClick={() => toggleSubMenu(1)}
                                className="flex items-center w-full px-6 py-3 text-black hover:bg-gray-800 hover:text-white focus:outline-none">
                                <span className="text-lg mr-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                                    </svg>

                                </span>
                                Appointments
                                <span className="ml-auto">
                                    {showSubMenu1 ? (
                                        <i className="fas fa-chevron-up"></i>
                                    ) : (
                                        <i className="fas fa-chevron-down"></i>
                                    )}
                                </span>
                            </button>
                            {showSubMenu1 && (
                                <ul className="pl-9">
                                    <li>
                                        <Link
                                            to="/CreatAppointments"
                                            className="block px-6 py-3 text-black hover:bg-gray-800 hover:text-white">
                                            Creat a Appointment
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/Appointments"
                                            className="block px-6 py-3 text-black hover:bg-gray-800 hover:text-white">
                                            View Appointments
                                        </Link>
                                    </li>
                                </ul>
                            )}
                        </li>
                        {/* Add more menu items with submenus below */}

                        {/* Menu 3 */}
                        <li>
                            <button
                                onClick={() => toggleSubMenu(3)}
                                className="flex items-center w-full px-6 py-3 text-black hover:bg-gray-800 hover:text-white focus:outline-none">
                                <span className="text-lg mr-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                                    </svg>
                                </span>
                                Doctors
                                <span className="ml-auto">
                                    {showSubMenu3 ? (
                                        <i className="fas fa-chevron-up"></i>
                                    ) : (
                                        <i className="fas fa-chevron-down"></i>
                                    )}
                                </span>
                            </button>
                            {showSubMenu3 && (
                                <ul className="pl-9">
                                    <li>
                                        <Link
                                            to="/AddDoctors"
                                            className="block px-6 py-3 text-black hover:bg-gray-800 hover:text-white">
                                            Add Doctors
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/Doctors"
                                            className="block px-6 py-3 text-black hover:bg-gray-800 hover:text-white">
                                            View Doctors
                                        </Link>
                                    </li>
                                </ul>
                            )}
                        </li>
                        <li>
                            <button
                                onClick={() => toggleSubMenu(5)}
                                className="flex items-center w-full px-6 py-3 text-black hover:bg-gray-800 hover:text-white focus:outline-none">
                                <span className="text-lg mr-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                                    </svg>
                                </span>
                                Patients
                                <span className="ml-auto">
                                    {showSubMenu5 ? (
                                        <i className="fas fa-chevron-up"></i>
                                    ) : (
                                        <i className="fas fa-chevron-down"></i>
                                    )}
                                </span>
                            </button>
                            {showSubMenu5 && (
                                <ul className="pl-9">
                                    <li>
                                        <Link
                                            to="/Patients"
                                            className="block px-6 py-3 text-black hover:bg-gray-800 hover:text-white">
                                            View Patients
                                        </Link>
                                    </li>
                                </ul>
                            )}
                        </li>
                        {/* Menu 4*/}
                        <li>
                            <Link
                                to="/Departments"
                                className="flex items-center px-6 py-3 text-black hover:bg-gray-800 hover:text-white">
                                <span className="text-lg mr-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" />
                                    </svg>
                                </span>
                                Departments
                            </Link>
                        </li>
                        {/* Menu 5*/}
                        <li>
                            <Link
                                to="/dashboard/helpcenter"
                                className="flex items-center px-6 py-3 text-black hover:bg-gray-800 hover:text-white">
                                <span className="text-lg mr-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.559.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.894.149c-.424.07-.764.383-.929.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.398.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.272-.806.108-1.204-.165-.397-.506-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894Z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                    </svg>
                                </span>
                                Settings
                            </Link>
                        </li>
                        {/* Menu 6*/}

                        <li>
                            <Link
                                to="/"
                                className="flex items-center px-6 py-3 text-black hover:bg-gray-800 hover:text-white">
                                <span className="text-lg mr-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15" />
                                    </svg>
                                </span>
                                Log Out
                            </Link>
                        </li>
                    </ul>

                </div>
            </Drawer>
        </>
    );
};

export default DrawerNavigation;