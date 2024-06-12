import Link from 'next/link';
import './navbar.css';

export default function Navbar() {
    return (
        <div className="flex flex-col items-center justify-between" style={{
            position: 'absolute',
            alignItems: 'center',
            width: '100%',
            top: '32px',
            right: '0%'
        }}>
            <nav className='items-center justify-center gap-x-4 text-3xl'>
                <Link href="/" className='px-5'>Home</Link>
                {/* <Link href="/roadmap" className='px-5'>Roadmap</Link> */}
                <Link href="/wiki" className='px-5'>Wiki</Link>
                <Link href="/changelog" className='px-5'>Changelog</Link>
                <a href="https://adamjr.xyz" className='px-5' target="_blank">Community</a>
                <a href="/new_worlds" className='px-5'>New Worlds</a>
            </nav>
        </div>
    );
}