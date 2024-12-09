import React, { useState } from 'react';

const InputPart = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setError('Please check your email');
        } else {
            setError('');
        }
    };

    return (
        <div className='w-full h-[345px] bg-[#575988] flex items-center justify-between px-[80px]'>
            <div>
                <div className='text-white font-raleway text-2xl font-bold leading-[48px]'>Get early access today</div>
                <div className='max-w-[533px] text-[#C0C0C0] text-sm tracking-widest pt-4'>It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you.</div>
            </div>
            <div className='w-full max-w-[480px]'>
                <form onSubmit={handleSubmit} className='flex flex-col gap-4  text-[#C0C0C0] text-sm'>
                    <input
                        type="text"
                        value={email}
                        onChange={handleChange}
                        placeholder="email@example.com"
                        className='p-2 border border-gray-300 rounded'
                    />
                    {error && <p className='text-white'>{error}</p>}
                    <button type="submit" className='p-2 bg-[#2F65F8] text-white rounded-[3.1px] drop-shadow-[2px_3px_6px_rgba(7,4,59,0.16)] w-[200px] text-sm font-bold hover:bg-[#6C9BFF]'>
                        Get Started For Free
                    </button>
                </form>
            </div>
        </div>
    );
};

export default InputPart;