import {Drawer} from 'antd';
import React, {useState} from 'react';
import {Link} from 'react-router-dom';

const PatientDrawer = () =>
{
    const [showSubMenu3, setShowSubMenu3] = useState(false);
    const toggleSubMenu = (submenu) =>
    {
        switch (submenu)
        {

            case 3:
                setShowSubMenu3(!showSubMenu3);
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
                            L<span className="text-blue-600">A</span>B
                        </h1>
                    </div>

                    <div className='w-[85%] mx-auto '>
                        <button></button>
                    </div>

                    <ul className="mt-6">
                        <li >
                            <Link
                                to="/Dashboard"
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
                            <Link to={'/MyAppointments'}>
                                <button
                                    className="flex items-center w-full px-6 py-3 text-black hover:bg-gray-800 hover:text-white focus:outline-none">
                                    <span className="text-lg mr-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                                        </svg>
                                    </span>
                                    My Appointments
                                </button>
                            </Link>
                        </li>
                        {/* Add more menu items with submenus below */}
                        <Link to={"/DoctorsPatients"}>
                            <button className="flex items-center w-full px-6 py-3 text-black hover:bg-gray-800 hover:text-white focus:outline-none">
                                <span className="text-lg mr-3">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-6 h-6"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
                                        />
                                    </svg>
                                </span>
                                Doctors
                            </button>
                        </Link>

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
                                Reports
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
                                            to="/Reports"
                                            className="block px-6 py-3 text-black hover:bg-gray-800 hover:text-white">
                                            Lab Reports
                                        </Link>
                                    </li>
                                </ul>
                            )}
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

export default PatientDrawer;