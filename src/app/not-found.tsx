import Layout from '@/components/Layout';

export default function Home() {
  return (
    <Layout>
        <h1 className="text-8xl font-bold">404</h1>
        <p>Laman tidak ditemukan.</p>
        <a href="/" className="delay-150 duration-300 underline hover:text-blue-400 hover:underline-offset-2">Kembali ke Beranda</a>
    </Layout>
  );
}
