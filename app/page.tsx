import Particles from '@/app/components/Particles';
import Navbar from '@/app/components/UI/Navbar/Navbar';
import Main from '@/app/components/Pages/Main';
import Skills from '@/app/components/Pages/Skills';
import Projects from '@/app/components/Pages/Projects';
import { links } from '@/app/global-data';

export default function Home() {
    return (
        <main className="flex h-fit min-h-screen w-full max-w-full flex-col items-center overflow-y-auto overflow-x-hidden bg-zinc-900">
            <div className={'fixed z-10 h-full w-full'}>
                <Particles />
            </div>

            <Navbar options={links} />

            <Main />

            <Skills />

            <Projects />
        </main>
    );
}
