import {Input, Modal} from 'antd';
import React, {useState} from 'react';
const {Search} = Input;


const ModalComponents = () =>
{
    const [open, setOpen] = useState(false);
    return (
        <>
            <div onClick={() => setOpen(true)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
            </div>
            <Modal
                centered
                open={open}
                onOk={() => setOpen(false)}
                onCancel={() => setOpen(false)}
                width={1000}
            >
                <div className='mt-10'>
                    <Search placeholder="input search text" style={{width: "100%"}} />
                </div>
            </Modal>
        </>
    );
};
export default ModalComponents;