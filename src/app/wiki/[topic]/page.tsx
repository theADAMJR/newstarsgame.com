'use client';
import Link from 'next/link';
import { Menu, MenuItem, Sidebar, SubMenu } from 'react-pro-sidebar';
import { useParams, usePathname } from 'next/navigation';
import { marked } from 'marked';
import '../../changelog/changelog.css';

const topics = [
    'Welcome',
    'Clan',
    'Colony',
    'Combat',
    'Diplomacy',
    'Fleet',
    'Planet',
    'Population',
    'Resource',
    'Star',
    'Starbase',
    'Subjects',
    'War',
    'World',
];

export default function Home() {
    const { topic } = useParams();
    const topicMarkdown = require(`./md/${topic.toLowerCase()}.md`).default;

    return (
        <main className='min-h-screen'>
            <div className='flex justify-center items-center float-right'>
                <div dangerouslySetInnerHTML={{ __html: marked(topicMarkdown) }} />
            </div>
            <Sidebar className='min-h-screen float-left'>
                <Menu>
                    {/* <SubMenu label="Resources">
                    <MenuItem> Pie charts </MenuItem>
                    <MenuItem> Line charts </MenuItem>
                </SubMenu> */}
                    {topics.map(topic => (
                        <Link href={`/wiki/${topic.toLowerCase()}`}>
                            <MenuItem>{topic}</MenuItem>
                        </Link>
                    ))}
                </Menu>
            </Sidebar>
        </main>
    );
}