import Head from 'next/head'

export default function Home() {
    return (
        <div className="bg-white">
            <Head>
                <meta charSet="UTF-8"/>
                <title>SaranYe &#x1FAF0; Wedding</title>
                <link rel="icon" href="/favicon.ico" />
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
                <link href="https://fonts.googleapis.com/css2?family=MonteCarlo&display=swap" rel="stylesheet"/>
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
                      rel="stylesheet" />
            </Head>
            <main>
                {/* Hero section */}
                <div className="pt-8 overflow-hidden sm:pt-12 lg:relative lg:py-48">
                    <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl lg:grid lg:grid-cols-2 lg:gap-24">
                        <div>
                            <div className="">
                                <div>
                                    <a href="#" className="inline-flex space-x-4">
                                        <span className="rounded bg-rose-50 px-2.5 py-1 text-xs font-semibold text-rose-500 tracking-wide uppercase">
                                          What's new?
                                        </span>
                                    </a>
                                </div>
                                <div className="mt-6 sm:max-w-xl">
                                    <div className="">
                                        <p className="font-monte-carlo tracking-wider text-7xl font-extrabold text-gray-900 tracking-light">
                                            Saransh
                                        </p>
                                        <p className="text-center font-monte-carlo font-bold text-6xl text-transparent bg-clip-text bg-gradient-to-br from-pink-200 to-rose-600">weds</p>
                                        <h1 className="text-right font-monte-carlo tracking-wider text-7xl font-extrabold text-gray-900 tracking-light">
                                            Yesha
                                        </h1>
                                        <a
                                            href="https://docs.google.com/forms/d/e/1FAIpQLSdXLAQko1ezpwAElq0L_Vh3wjMc_vvz-IlT2z0tZ8aqQOttsQ/viewform?usp=sf_link"
                                            className="text-center my-5 block w-1/2 rounded-md border border-transparent py-3 bg-rose-500 text-base font-medium text-white shadow hover:bg-rose-600 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2 sm:px-10"
                                        >
                                            RSVP
                                        </a>
                                    </div>
                                </div>
                                <div className="mt-6">
                                    <div className="inline-flex items-center divide-x divide-gray-300">
                                        <div className="flex-shrink-0 flex pr-5">
                                            <a className="flex items-center space-x-2"
                                                href="https://www.google.com/maps/dir/39.7648441,-89.6910212/VYOM+-+Luxurious+Wedding+Venue,+Kukas,+Rajasthan+303101,+India/@2.0262478,-93.815843,3z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x396da521f67ab9fd:0x140441591a45d4de!2m2!1d75.9097044!2d27.0507142">
                                                <span className="text-rose-500 material-icons">place</span>
                                                <span>Kukas, Rajasthan 303101, India.</span>
                                            </a>
                                        </div>
                                        <div className="min-w-0 flex-1 pl-5 py-1 text-sm text-gray-500 sm:py-3">
                                            <a className="flex items-center space-x-2"
                                               href="https://calendar.google.com/event?action=TEMPLATE&amp;tmeid=MjFtZTFlZWcyajlyOWE3YjMybjFjOWNtZmwgcHJhc2FkY2hpbndhbDVAbQ&amp;tmsrc=prasadchinwal5%40gmail.com"
                                               >
                                                <span className="text-rose-500 material-icons">event</span>
                                                <span className="font-medium text-gray-900">April 22, 2022</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="sm:mx-auto sm:max-w-3xl sm:px-6">
                        <div className="py-12 sm:relative sm:mt-12 sm:py-16 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                            <div className="hidden sm:block">
                                <div className="absolute inset-y-0 left-1/2 w-screen bg-gray-50 rounded-l-3xl lg:left-80 lg:right-0 lg:w-full" />
                                <svg
                                    className="absolute top-8 right-1/2 -mr-3 lg:m-0 lg:left-0"
                                    width={404}
                                    height={392}
                                    fill="none"
                                    viewBox="0 0 404 392"
                                >
                                    <defs>
                                        <pattern
                                            id="837c3e70-6c3a-44e6-8854-cc48c737b659"
                                            x={0}
                                            y={0}
                                            width={20}
                                            height={20}
                                            patternUnits="userSpaceOnUse"
                                        >
                                            <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                                        </pattern>
                                    </defs>
                                    <rect width={404} height={392} fill="url(#837c3e70-6c3a-44e6-8854-cc48c737b659)" />
                                </svg>
                            </div>
                            <div className="relative pl-4 -mr-40 sm:mx-auto sm:max-w-3xl sm:px-0 lg:max-w-none lg:h-full lg:pl-12">
                                <img
                                    className="w-full rounded-md shadow-xl ring-1 ring-black ring-opacity-5 lg:h-full lg:w-auto lg:max-w-none aspect-auto"
                                    src="https://images.unsplash.com/photo-1542042161784-26ab9e041e89?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                                    alt="Wedding"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA section */}
                {/*<div className="relative mt-24 sm:mt-32 sm:py-16">*/}
                {/*    <div aria-hidden="true" className="hidden sm:block">*/}
                {/*        <div className="absolute inset-y-0 left-0 w-1/2 bg-gray-50 rounded-r-3xl" />*/}
                {/*        <svg className="absolute top-8 left-1/2 -ml-3" width={404} height={392} fill="none" viewBox="0 0 404 392">*/}
                {/*            <defs>*/}
                {/*                <pattern*/}
                {/*                    id="8228f071-bcee-4ec8-905a-2a059a2cc4fb"*/}
                {/*                    x={0} y={0} width={20}*/}
                {/*                    height={20}*/}
                {/*                    patternUnits="userSpaceOnUse"*/}
                {/*                >*/}
                {/*                    <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />*/}
                {/*                </pattern>*/}
                {/*            </defs>*/}
                {/*            <rect width={404} height={392} fill="url(#8228f071-bcee-4ec8-905a-2a059a2cc4fb)" />*/}
                {/*        </svg>*/}
                {/*    </div>*/}
                {/*    <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">*/}
                {/*        <div className="relative rounded-2xl px-6 py-10 bg-rose-500 overflow-hidden shadow-xl sm:px-12 sm:py-20">*/}
                {/*            <div aria-hidden="true" className="absolute inset-0 -mt-72 sm:-mt-32 md:mt-0">*/}
                {/*                <svg*/}
                {/*                    className="absolute inset-0 h-full w-full"*/}
                {/*                    preserveAspectRatio="xMidYMid slice"*/}
                {/*                    xmlns="http://www.w3.org/2000/svg"*/}
                {/*                    fill="none"*/}
                {/*                    viewBox="0 0 1463 360"*/}
                {/*                >*/}
                {/*                    <path*/}
                {/*                        className="text-rose-400 text-opacity-40"*/}
                {/*                        fill="currentColor"*/}
                {/*                        d="M-82.673 72l1761.849 472.086-134.327 501.315-1761.85-472.086z"*/}
                {/*                    />*/}
                {/*                    <path*/}
                {/*                        className="text-rose-600 text-opacity-40"*/}
                {/*                        fill="currentColor"*/}
                {/*                        d="M-217.088 544.086L1544.761 72l134.327 501.316-1761.849 472.086z"*/}
                {/*                    />*/}
                {/*                </svg>*/}
                {/*            </div>*/}
                {/*            <div className="relative">*/}
                {/*                <div className="sm:text-center">*/}
                {/*                    <h2 className="text-3xl font-extrabold text-white tracking-tight sm:text-4xl">*/}
                {/*                        Get notified when we&rsquo;re launching.*/}
                {/*                    </h2>*/}
                {/*                    <p className="mt-6 mx-auto max-w-2xl text-lg text-rose-100">*/}
                {/*                        Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum urna sed consectetur neque*/}
                {/*                        tristique pellentesque.*/}
                {/*                    </p>*/}
                {/*                </div>*/}

                {/*                <div className="sm:text-center mt-4 sm:mt-0 sm:ml-3">*/}
                {/*                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSdXLAQko1ezpwAElq0L_Vh3wjMc_vvz-IlT2z0tZ8aqQOttsQ/viewform?usp=sf_link"*/}
                {/*                        className="mx-auto block w-1/2 rounded-md border border-transparent my-3 px-5 py-3 bg-gray-900 text-base font-medium text-white shadow hover:bg-black focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-rose-500 sm:px-10"*/}
                {/*                    >*/}
                {/*                        RSVP*/}
                {/*                    </a>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </main>
        </div>
    )
}
