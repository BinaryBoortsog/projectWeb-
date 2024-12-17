import React from 'react';

const Contact = () => {
    return (
        <div className="p-6 max-w-lg mx-auto">
            <h1 className="text-2xl font-bold mb-4">Холбоо барих</h1>
            <form className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700" htmlFor="name">
                        Нэр
                    </label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700" htmlFor="email">
                        И-мэйл
                    </label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700" htmlFor="message">
                        Зурвас
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        required
                        rows="4"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
                >
                    Илгээх
                </button>
            </form>
        </div>
    );
};

export default Contact;
