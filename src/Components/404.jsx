const NotFound = () => {
    return (
        <div>
            <section className="bg-white dark:bg-[#1d232a]">
                <div className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
                    <div className="mx-auto max-w-screen-sm text-center">
                        <h1 className="text-primary-600 dark:text-primary-500 mb-4 text-7xl font-extrabold tracking-tight lg:text-9xl">
                            404
                        </h1>
                        <p className="mb-4 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl dark:text-white">
                            این صفحه رو پیدا نکردیم
                        </p>
                        <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
                            ما این صفحه را به دقت پیدا نکردیم و میتونی با استفاده از دکمه زیر برگردی به صفحه اصلی
                        </p>
                        <a
                            href="/"
                            className="bg-primary-600 hover:bg-primary-800 focus:ring-primary-300 dark:focus:ring-primary-900 my-4 inline-flex rounded-lg px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4"
                        >
                            برگشت به صفحه اصلی
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default NotFound;
