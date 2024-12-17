import React from 'react';
import backgroundImage from '../assets/image/1.jpg';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header Section */}
      <header className="relative bg-cover bg-center h-64" style={{ backgroundImage: `url(${backgroundImage})`, }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl text-white font-bold">Бидэнтэй холбогдох</h1>
        </div>
      </header>

      {/* Contact Information Section */}
      <main className="container mx-auto px-4 py-12">
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6 text-center">Бидэнтэй холбогдоорой!</h2>
          <p className="text-lg text-gray-700 mb-4">
            Хэрэв танд асуулт, лавлагаа байгаа бол бидэнтэй дараах холбоо барих аргуудаар холбогдоно уу.
          </p>

          {/* Contact Information */}
          <section className="space-y-4">
            <div className="flex items-center">
              <span className="text-2xl text-blue-600 mr-4">📞</span>
              <p className="text-lg">Утас: +123-456-7890</p>
            </div>

            <div className="flex items-center">
              <span className="text-2xl text-blue-600 mr-4">✉️</span>
              <p className="text-lg">Email: contact@fenster.com</p>
            </div>

            <div className="flex items-center">
              <span className="text-2xl text-blue-600 mr-4">📍</span>
              <p className="text-lg">Хаяг: Юнайтед оффис, Хан-Уул дүүрэг, Чингисийн өргөн чөлөө, Улаанбаатар 17042, Монгол Улс</p>
            </div>

            <div className="flex items-center">
              <span className="text-2xl text-blue-600 mr-4">🌐</span>
              <p className="text-lg">Website: www.fenster.mn</p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Contact;
