import Head from 'next/head';

export default function NewWorlds() {
    return (
        <>
            <Head>
                <title>New Stars - New Worlds</title>
            </Head>
            <iframe src="/new_worlds/WebGL/index.html" style={{ height: '100vh', width: '100vw' }}></iframe>
        </>
    );
}