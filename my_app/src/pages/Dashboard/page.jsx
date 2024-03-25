import {Badge, Calendar} from 'antd';
import PatientDrawer from '../../Components/PatientDrawrr/patient.navigation';

export default function Dashboard()
{
    const dummyData = [
        {
            id: 1,
            title: "Recent Lab Reports",
            count: "9",
            icons: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605" />
            </svg>
        },
        {
            id: 2,
            title: "Upcomming Appointments",
            count: "2",
            icons: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
            </svg>
        },
        {
            id: 3,
            title: "Reports results",
            count: "Good",
            icons: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
            </svg>
        }
    ];

    const labData = [
        {
            id: 1,
            date: "11/01/09",
            type: "Wet Mount",
            result: "Normal"
        },
        {
            id: 2,
            date: "11/01/09",
            type: "Wet Mount",
            result: "Normal"
        },
        {
            id: 3,
            date: "11/01/09",
            type: "Wet Mount",
            result: "Normal"
        },
        {
            id: 4,
            date: "11/01/09",
            type: "Wet Mount",
            result: "Normal"
        },
        {
            id: 5,
            date: "11/01/09",
            type: "Wet Mount",
            result: "Normal"
        },
        {
            id: 6,
            date: "11/01/09",
            type: "Wet Mount",
            result: "Normal"
        },
        {
            id: 7,
            date: "11/01/09",
            type: "Wet Mount",
            result: "Normal"
        },
        {
            id: 8,
            date: "11/01/09",
            type: "Wet Mount",
            result: "Normal"
        },
        {
            id: 9,
            date: "11/01/09",
            type: "Wet Mount",
            result: "Normal"
        },
        {
            id: 10,
            date: "11/01/09",
            type: "Wet Mount",
            result: "Normal"
        },

    ];


    const getListData = (value) =>
    {
        let listData;
        switch (value.date())
        {
            case 8:
                listData = [
                    {
                        type: 'warning',
                        content: 'This is warning event.',
                    },
                    {
                        type: 'success',
                        content: 'This is usual event.',
                    },
                ];
                break;
            case 10:
                listData = [
                    {
                        type: 'warning',
                        content: 'This is warning event.',
                    },
                    {
                        type: 'success',
                        content: 'This is usual event.',
                    },
                    {
                        type: 'error',
                        content: 'This is error event.',
                    },
                ];
                break;
            case 15:
                listData = [
                    {
                        type: 'warning',
                        content: 'This is warning event',
                    },
                    {
                        type: 'success',
                        content: 'This is very long usual event......',
                    },
                    {
                        type: 'error',
                        content: 'This is error event 1.',
                    },
                    {
                        type: 'error',
                        content: 'This is error event 2.',
                    },
                    {
                        type: 'error',
                        content: 'This is error event 3.',
                    },
                    {
                        type: 'error',
                        content: 'This is error event 4.',
                    },
                ];
                break;
            default:
        }
        return listData || [];
    };
    const getMonthData = (value) =>
    {
        if (value.month() === 8)
        {
            return 1394;
        }
    };
    const monthCellRender = (value) =>
    {
        const num = getMonthData(value);
        return num ? (
            <div className="notes-month">
                <section>{num}</section>
                <span>Backlog number</span>
            </div>
        ) : null;
    };
    const dateCellRender = (value) =>
    {
        const listData = getListData(value);
        return (
            <ul className="events">
                {listData.map((item) => (
                    <li key={item.content}>
                        <Badge status={item.type} text={item.content} />
                    </li>
                ))}
            </ul>
        );
    };
    const cellRender = (current, info) =>
    {
        if (info.type === 'date') return dateCellRender(current);
        if (info.type === 'month') return monthCellRender(current);
        return info.originNode;
    };
    return (
        <div className="px-2">
            <div className="shadow-lg bg-white flex items-center justify-between h-[60px] w-full rounded-lg px-5 mt-5">
                <div>
                    <h1 className="text-sky-500 text-lg font-semibold">Patient Dashboard</h1>
                </div>
                <div>
                    <PatientDrawer />
                </div>
            </div>
            <div className='px-2 h-full mt-10'>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 place-items-center'>
                    {
                        dummyData.map((e) =>
                        {
                            return (
                                <div key={e.id} className='w-[100%] h-[80px] rounded-xl shadow-lg border border-slate-300 flex items-center justify-between p-2'>
                                    <div className='flex flex-col gap-1'>
                                        <h1 className='text-gray-600 text-2xl'>{e.count}</h1>
                                        <p className='font-semibold text-indigo-600'>{e.title}</p>
                                    </div>
                                    <div className='text-2xl'>
                                        <i className='text-2xl text-orange-600'>{e.icons}</i>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className='flex items-start justify-center lg:flex-row flex-col gap-4 mt-10'>
                    <div className='grid grid-cols-1 place-items-center lg:w-[50%] w-full border border-slate-200 rounded-3xl'>
                        <h1 className='font-semibold text-2xl'>Recent Lap reports</h1>
                        {
                            labData.map((e) =>
                            {
                                return (
                                    <div key={e.id} className='flex items-center justify-evenly w-full gap-2 mt-5 pb-2'>
                                        <p className='font-semibold text-gray-300'>{e.date}</p>
                                        <p className='font-semibold'>{e.type}</p>
                                        <p className='flex items-center justify-center gap-3'><div className='w-[9px] h-[9px] rounded-full bg-green-700'>
                                        </div>{e.result}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className='lg:w-[50%] w-full'>
                        <h2 className='text-center text-2xl font-semibold'>Appointments Dates</h2>
                        <Calendar cellRender={cellRender} />
                    </div>
                </div>
            </div>
        </div>
    )
}