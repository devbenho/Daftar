export const Header = () => {
    return (
        <>
        {/* Container */}
            <header className="mx-auto h-96 flex justify-center items-center px-6 py-6 pt-8 bg-brand-500 overflow-y-hidden">
                {/* NavBar */}
                <nav className="ml-14 flex items-start justify-center gap-8 text-brand-50 bg-brand-300 py-[32px] px-[16px]">
                    {/* Navbar Links */}
                    <a href="www.google.com">Home</a>
                    <a href="www.google.com">Subscriptions</a>
                    <a href="www.google.com">Courses</a>
                    <a href="www.google.com">About</a>
                    <a href="www.google.com">Contact Us</a>
                    {/* Navbar Buttons */}
                    <div className="flex">
                        <button>Login</button>
                        <button>Sign Up</button>
                    </div>
                </nav>
            </header>
        </>
    )
}