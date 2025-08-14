import Image from "next/image";
import Layout from '@/components/Layout';

export default function Home() {
  return (
    <Layout>
      <h1 className="text-4xl font-bold">Syarat & Ketentuan</h1>
      <section className="flex flex-col gap-4 bg-gray-800 rounded-lg w-[80%] text-center text-wrap justify-center p-8" id="title">
          <h2 className="text-2xl font-bold">Ketentuan Komunitas</h2>
          <ol className="flex flex-col gap-2 items-start p-8 text-lg list-decimal">
            <li>Mohon berperilaku sopan.</li>
            <li>Dilarang mengirim ataupun membicarakan hal-hal yang melanggar asusila.</li>
            <i></i>
            <li>Patuhi tim Administrator dan Moderator kami.</li>
            <li>Dilarang spam atau promosi diri.</li>
          </ol>
        </section>

        <section className="flex flex-col gap-4 bg-gray-800 rounded-lg w-[80%] text-center text-wrap justify-center p-8" id="title">
          <h2 className="text-2xl font-bold">Ketentuan Server</h2>
          <ol className="flex flex-col gap-2 items-start p-8 text-lg list-decimal">
            <li>Dilarang metode duplikasi <i>ingame item</i> apapun.</li>
            <li>Dilarang melakukan segala sesuatu yang menyebabkan gangguan pada server.</li>
            <li>Dilarang melakukan segala sesuatu yang membuat pemain lain tidak bisa memasuki server.</li>
          </ol>
        </section>
    </Layout>
  );
}
