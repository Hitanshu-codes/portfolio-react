import { Link } from 'react-router-dom';
import DecryptedText from '../components/decryptedtext.js';
import usePageTitle from '../components/usepagetitle.js';

export default function NotFound() {
    usePageTitle('Page not found');

    return (
        <section className="mx-auto flex min-h-[70vh] max-w-3xl flex-col items-center justify-center px-6 text-center">
            <p className="font-display text-7xl font-bold text-red-600 sm:text-9xl">
                <DecryptedText text="404" animateOn="view" sequential speed={80} />
            </p>
            <h1 className="mt-4 font-display text-2xl font-bold text-white sm:text-3xl">Maximum effort, zero page.</h1>
            <p className="mt-3 text-stone-400">Even Deadpool couldn't find what you were looking for.</p>
            <Link
                to="/"
                className="mt-8 rounded-full bg-red-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-red-700"
            >
                Back to home
            </Link>
        </section>
    );
}
