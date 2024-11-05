export default function Footer() {
    return (
        <footer className="bg-emerald-900 base-font mt-auto">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <a
                        href="/"
                        className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
                    >
                        <img
                            src="/nutrify-icon.png"
                            className="h-8"
                            alt="Flowbite Logo"
                        />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
                            Nutrify
                        </span>
                    </a>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-white">
                        <li>
                            <a href="#" className="hover:underline m-2">
                                About
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline m-2">
                                Privacy Policy
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline m-2">
                                Licensing
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline m-2">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
                <span className="block text-sm sm:text-center text-slate-200 mt-10">
                    © 2023 {" "}
                    <a href="/" className="hover:underline">
                        Nutrify™
                    </a>
                    . All Rights Reserved.
                </span>
            </div>
        </footer>
    );
}
