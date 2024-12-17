import React from 'react';
import backgroundImage from '../assets/image/3.png'; // Import the image properly

const About = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Header Section */}
      <header
        className="relative bg-cover bg-center bg-no-repeat text-white"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <div className="absolute inset-0 flex flex-col justify-center items-center">
          <h1 className="text-4xl md:text-5xl font-bold">Бидний тухай</h1>
        </div>
        {/* Set height dynamically for different screen sizes */}
        <div className="h-[300px] md:h-[500px] lg:h-[660px] w-full"></div>
      </header>

      {/* Main Content Section */}
      <main className="container mx-auto py-10 px-4">
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800">Бидний зорилго</h2>
          <p className="mt-4 text-gray-700">
            Үйлчлүүлэгчидэд хэрэгтэй, найдвартай бүтээгдэхүүн хүргэх.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800">Бидний түүх</h2>
          <p className="mt-4 text-gray-700">
            "Фенстер Монгол" ХХК нь 2013 оноос эхлэн хэрэглэгчдэд Герман улсын Veka брендийн хуванцар хүрээтэй цонх хаалга, 
            Alutech брендийн металл хүрээтэй цонх хаалга, шилэн фасад, Sibalux, Сиал брендийн хөнгөн цагаан металл фасадыг
            нийлүүлж байна. Манай хуванцар цонхны үйлдвэр нь TSE, ISO9001, CE, EAC стандартад нийцсэн бүрэн автомат тоног 
            төхөөрөмжөөр өдөрт 200-250 ширхэг цонх үйлдвэрлэх хүчин чадалтай ба 10 жилийн түршлагатай хамт олон ОХУ, Герман
            улсад үйлдвэрлэсэн анкер бэхэлгээ, уур ус тусгаарлагч, хөөс зэрэг чанартай материалыг ашиглан, стандартын дагуу
            цонхыг угсарч, суурилуулж баталгаат хугацаанд засвар үйлчилгээг бүрэн хариуцаж ажилладгаараа давуу талтай.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800">Манай хамт олон</h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Team Member 1 */}
            <div className="bg-white rounded-lg shadow p-4 text-center">
              <img
                src="/images/team1.jpg"
                alt="Team Member 1"
                className="w-32 h-32 mx-auto rounded-full"
              />
              <h3 className="mt-4 text-lg font-medium">нэр оруулах</h3>
              <p className="text-sm text-gray-500">албан тушаал</p>
            </div>

            {/* Team Member 2 */}
            <div className="bg-white rounded-lg shadow p-4 text-center">
              <img
                src="/images/team2.jpg"
                alt="Team Member 2"
                className="w-32 h-32 mx-auto rounded-full"
              />
              <h3 className="mt-4 text-lg font-medium">нэр оруулах</h3>
              <p className="text-sm text-gray-500">албан тушаал</p>
            </div>

            {/* Team Member 3 */}
            <div className="bg-white rounded-lg shadow p-4 text-center">
              <img
                src="/images/team3.jpg"
                alt="Team Member 3"
                className="w-32 h-32 mx-auto rounded-full"
              />
              <h3 className="mt-4 text-lg font-medium">нэр оруулах</h3>
              <p className="text-sm text-gray-500">албан тушаал</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800">Бидний үнэт зүйл</h2>
          <ul className="mt-4 space-y-2">
            <li className="text-gray-700">✔ Үйлчлүүлэгчдийн сэтгэл ханамж.</li>
            <li className="text-gray-700">✔ Чанартай бүтээгдэхүүн.</li>
            <li className="text-gray-700">✔ өөрийг оруулах.</li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default About;
