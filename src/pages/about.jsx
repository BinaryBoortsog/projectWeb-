import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header Section */}
      <header className="bg-blue-600 text-white py-8">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold">Бидний тухай</h1>
          <p className="text-lg mt-2">Бид хэн бэ?</p>
        </div>
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
