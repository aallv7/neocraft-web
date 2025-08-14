import Image from "next/image";
import Layout from '@/components/Layout';
import Link from 'next/link';

export default function Home() {
  return (
    <Layout>
        <Image 
                src="/img/title.png" 
                alt="" 
                width={640}
                height={360}
                />
        <section className="flex flex-col gap-4 bg-gray-800 rounded-lg w-[80%] text-center text-wrap justify-center p-8" id="title">
          <h1 className="text-4xl font-bold">
            Selamat datang di laman NeoCraft
          </h1>
          <p>
            NeoCraft adalah server Survival Multiplayer yang menyajikan survival dan sistem ekonomi. 
            Kamu dapat melakukan apa sajadi server ini. 
            Bangun base bersama temanmu, hancurkan base orang lain, mulai peperangan, apapun dan kapanpun! 
            Imajinasimu (dan spesifikasi server) adalah batasnya!
          </p>
          <Link href="/#join" className="py-1 mx-[20%] bg-gray-900 rounded-xl border-2 font-bold text-xl delay-150 duration-300 ease-in-out hover:text-blue-300 hover:bg-gray-700 hover:scale-105">Bergabung Sekarang</Link>
        </section>
        <section className="flex flex-col gap-4 bg-gray-800 rounded-lg w-[80%] text-center text-wrap justify-center p-8" id="join">
          <h1 className="text-4xl font-bold">
            IP dan Port
          </h1>
          <div className="flex flex-col gap-4 place-content-center">
            <h2>
              IP: <b>mc.neocraft.my.id</b> <br />
              <i>Jika tidak bisa, gunakan:</i> <b>mc.neocraft.my.id:25575</b>
            </h2>
            <h2>
              Port: <b>25575</b>
            </h2>
          </div>
        </section>
    </Layout>
  );
}
