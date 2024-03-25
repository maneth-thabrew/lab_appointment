import {Dialog, Transition} from '@headlessui/react';
import {XMarkIcon} from '@heroicons/react/24/outline';
import {Fragment, useState} from 'react';
import {Link} from "react-router-dom";

export default function SideBarNew()
{
    const [open, setOpen] = useState(false);
    const [showSubMenu1, setShowSubMenu1] = useState(false);
    const [showSubMenu2, setShowSubMenu2] = useState(false);
    const [showSubMenu3, setShowSubMenu3] = useState(false);
    const [showSubMenu4, setShowSubMenu4] = useState(false);

    const toggleSubMenu = (submenu) =>
    {
        switch (submenu)
        {
            case 1:
                setShowSubMenu1(!showSubMenu1);
                break;
            case 2:
                setShowSubMenu2(!showSubMenu2);
                break;
            case 3:
                setShowSubMenu3(!showSubMenu3);
                break;
            case 4:
                setShowSubMenu4(!showSubMenu4);
                break;
            default:
                break;
        }
    };

    return (

        <div>
            <button onClick={() =>
            {
                setOpen(true)
            }}>Click</button>
            <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={setOpen}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-in-out duration-500"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in-out duration-500"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-hidden">
                        <div className="absolute inset-0 overflow-hidden">
                            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                                <Transition.Child
                                    as={Fragment}
                                    enter="transform transition ease-in-out duration-500 sm:duration-700"
                                    enterFrom="translate-x-full"
                                    enterTo="translate-x-0"
                                    leave="transform transition ease-in-out duration-500 sm:duration-700"
                                    leaveFrom="translate-x-0"
                                    leaveTo="translate-x-full"
                                >
                                    <Dialog.Panel className="pointer-events-auto relative w-screen max-w-md">
                                        <Transition.Child
                                            as={Fragment}
                                            enter="ease-in-out duration-500"
                                            enterFrom="opacity-0"
                                            enterTo="opacity-100"
                                            leave="ease-in-out duration-500"
                                            leaveFrom="opacity-100"
                                            leaveTo="opacity-0"
                                        >
                                            <div className="absolute left-0 top-0 -ml-8 flex pr-2 pt-4 sm:-ml-10 sm:pr-4">
                                                <button
                                                    type="button"
                                                    className="relative rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                                                    onClick={() => setOpen(false)}
                                                >
                                                    <span className="absolute -inset-2.5" />
                                                    <span className="sr-only">Close panel</span>
                                                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                                </button>
                                            </div>
                                        </Transition.Child>
                                        <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                                            <div className="px-4 sm:px-6">
                                                <Dialog.Title className="text-base font-semibold leading-6 text-gray-900">
                                                    Panel title
                                                </Dialog.Title>
                                            </div>
                                            <div className="relative mt-6 flex-1 px-4 sm:px-6">
                                                <div className="bg-gray-900 text-white w-full">
                                                    <div className="py-6 pl-6 pr-4 bg-gray-800">
                                                        <h1 className="text-2xl font-bold">
                                                            C<span className="text-blue-600">R</span>M
                                                        </h1>
                                                    </div>

                                                    <ul className="mt-6">
                                                        <li>
                                                            <Link
                                                                to="/Home"
                                                                className="flex items-center px-6 py-3 text-gray-400 hover:bg-gray-800 hover:text-white">
                                                                <span className="text-lg mr-3">
                                                                    <i className="fas fa-tachometer-alt"></i>
                                                                </span>
                                                                Dashboard
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <button
                                                                onClick={() => toggleSubMenu(1)}
                                                                className="flex items-center w-full px-6 py-3 text-gray-400 hover:bg-gray-800 hover:text-white focus:outline-none">
                                                                <span className="text-lg mr-3">
                                                                    <i className="fas fa-users"></i>
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
                                                                            to="/dashboard/lead/add-new-lead"
                                                                            className="block px-6 py-3 text-gray-400 hover:bg-gray-800 hover:text-white">
                                                                            Creat a Appointment
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link
                                                                            to="/dashboard/lead/manage-lead"
                                                                            className="block px-6 py-3 text-gray-400 hover:bg-gray-800 hover:text-white">
                                                                            View Appointments
                                                                        </Link>
                                                                    </li>
                                                                </ul>
                                                            )}
                                                        </li>
                                                        {/* Add more menu items with submenus below */}
                                                        {/* Menu 2 */}
                                                        <li>
                                                            <button
                                                                onClick={() => toggleSubMenu(2)}
                                                                className="flex items-center w-full px-6 py-3 text-gray-400 hover:bg-gray-800 hover:text-white focus:outline-none">
                                                                <span className="text-lg mr-3">
                                                                    <i className="fas fa-tasks"></i>
                                                                </span>
                                                                Tasks
                                                                <span className="ml-auto">
                                                                    {showSubMenu2 ? (
                                                                        <i className="fas fa-chevron-up"></i>
                                                                    ) : (
                                                                        <i className="fas fa-chevron-down"></i>
                                                                    )}
                                                                </span>
                                                            </button>
                                                            {showSubMenu2 && (
                                                                <ul className="pl-9">
                                                                    <li>
                                                                        <Link
                                                                            to="/dashboard/tasks/asign-tasks"
                                                                            className="block px-6 py-3 text-gray-400 hover:bg-gray-800 hover:text-white">
                                                                            Assign Tasks
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link
                                                                            to="/dashboard/tasks/view-assigned-tasks"
                                                                            className="block px-6 py-3 text-gray-400 hover:bg-gray-800 hover:text-white">
                                                                            View Assigned Tasks
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link
                                                                            to="/dashboard/tasks/my-tasks"
                                                                            className="block px-6 py-3 text-gray-400 hover:bg-gray-800 hover:text-white">
                                                                            My Tasks
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link
                                                                            to="/dashboard/tasks/task-history"
                                                                            className="block px-6 py-3 text-gray-400 hover:bg-gray-800 hover:text-white">
                                                                            Task History
                                                                        </Link>
                                                                    </li>
                                                                </ul>
                                                            )}
                                                        </li>
                                                        {/* Menu 3 */}
                                                        <li>
                                                            <button
                                                                onClick={() => toggleSubMenu(3)}
                                                                className="flex items-center w-full px-6 py-3 text-gray-400 hover:bg-gray-800 hover:text-white focus:outline-none">
                                                                <span className="text-lg mr-3">
                                                                    <i className="fas fa-truck"></i>
                                                                </span>
                                                                People
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
                                                                            to="/dashboard/drivers/driver-list"
                                                                            className="block px-6 py-3 text-gray-400 hover:bg-gray-800 hover:text-white">
                                                                            Doctors
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link
                                                                            to="/dashboard/drivers/driver-payment"
                                                                            className="block px-6 py-3 text-gray-400 hover:bg-gray-800 hover:text-white">
                                                                            Patients
                                                                        </Link>
                                                                    </li>
                                                                </ul>
                                                            )}
                                                        </li>

                                                        {/* Menu 4*/}
                                                        <li>
                                                            <Link
                                                                to="/dashboard/reports"
                                                                className="flex items-center px-6 py-3 text-gray-400 hover:bg-gray-800 hover:text-white">
                                                                <span className="text-lg mr-3">
                                                                    <i className="fas fa-tachometer-alt"></i>
                                                                </span>
                                                                Reports
                                                            </Link>
                                                        </li>
                                                        {/* Menu 5*/}
                                                        <li>
                                                            <Link
                                                                to="/dashboard/helpcenter"
                                                                className="flex items-center px-6 py-3 text-gray-400 hover:bg-gray-800 hover:text-white">
                                                                <span className="text-lg mr-3">
                                                                    <i className="fas fa-tachometer-alt"></i>
                                                                </span>
                                                                Help & Support
                                                            </Link>
                                                        </li>
                                                        {/* Menu 6*/}
                                                        <li>
                                                            <Link
                                                                to="/"
                                                                className="flex items-center px-6 py-3 text-gray-400 hover:bg-gray-800 hover:text-white">
                                                                <span className="text-lg mr-3">
                                                                    <i className="fas fa-tachometer-alt"></i>
                                                                </span>
                                                                Dashboard
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </Dialog.Panel>
                                </Transition.Child>
                            </div>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>
        </div>
    )
}
