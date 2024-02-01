import Particles from '@/app/components/Particles';
import Navbar from '@/app/components/UI/Navbar/Navbar';
import { LinkType } from './types/LinkTypes';
import Main from '@/app/components/UI/Main';

export default function Home() {
    const links: Array<LinkType> = [
        { link: 'home', icon: 'home' },
        { link: 'about', icon: 'person' },
        { link: 'skills', icon: 'skills' },
        { link: 'projects', icon: 'projects' },
        { link: 'contact', icon: 'contact' }];

    return (
        <main className="wrapper w-full min-h-screen flex flex-col items-center h-fit bg-zinc-900">
            <div className={'fixed z-10 w-full h-full'}>
                <Particles />
            </div>

            <Navbar options={links} />

            <Main />
        </main>
    );
}
