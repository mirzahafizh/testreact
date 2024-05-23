import React from 'react';
import Image from '../assets/Gambar WhatsApp 2024-05-18 pukul 12.39.50_ad9af164.jpg'; // Ubah path sesuai dengan lokasi gambar Anda
import Footer from '../components/footer'; // Pastikan path-nya sesuai dengan struktur proyek Anda
import Navbar from '../components/navbar'; // Pastikan path-nya sesuai dengan struktur proyek Anda

// Data proyek Anda
const projects = [
  {
    id: 1,
    title: "Project 1",
    description: "Deskripsi proyek 1",
    image: "path/gambar-proyek-1.jpg",
  },
  {
    id: 2,
    title: "Project 2",
    description: "Deskripsi proyek 2",
    image: "path/gambar-proyek-2.jpg",
  },
  {
    id: 3,
    title: "Project 3",
    description: "Deskripsi proyek 3",
    image: "path/gambar-proyek-3.jpg",
  },
  // Tambahkan proyek lainnya sesuai kebutuhan
];
  // Fungsi penanganan acara untuk mengarahkan ke halaman detail proyek
  const handleClickProject = (projectId) => {
    history.push(`/projects/${projectId}`); // Ganti dengan path yang sesuai dengan struktur proyek Anda
  };
function Home() {
  return (
    <div className='bg-gray-100 h-screen font-mono'>
      <Navbar />
      <h1 className='font-bold px-8 pt-8 mt-16 text-xl'>Welcome To My Page</h1>
      <div className="container flex-grow gap-8 mx-auto p-8 flex items-center mt-[-80px]">
        <p className="w-2/4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore eaque perferendis, quia pariatur possimus obcaecati illum fugit adipisci quas nemo neque expedita minima quos, eius natus nulla temporibus illo ab.</p>
        <div className="w-2/4 justify-center items-center mx-auto flex">
          <img src={Image} alt="Foto Profil" className="h-60 w-90 shadow-lg shadow-gray-500" /> {/* Gunakan variabel Image untuk menampilkan gambar */}
        </div>
      </div>
      <div className='w-full  px-8 mt-[-80px]'>
        <button className='w-40 h-12 rounded-md bg-gray-300 px-8 hover:bg-gray-700 hover:text-white shadow-lg'>Learn More</button>
      </div>

      {/* Kartu proyek */}
      <div className="container mx-auto mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8 w-full">
        {projects.map(project => (
          <div key={project.id} className="bg-white rounded-lg shadow-md p-4 cursor-pointer hover:scale-110 transition-transform duration-300" onClick={() => handleClickProject(project.id)}>
            <img src={project.image} alt={project.title} className="w-full h-40 object-cover mb-4 rounded-md" />
            <h2 className="text-xl font-semibold">{project.title}</h2>
            <p className="text-gray-600">{project.description}</p>
          </div>
        ))}
      </div>
    <Footer />

    </div>

  );
}

export default Home;
