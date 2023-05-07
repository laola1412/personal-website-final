import { motion } from 'framer-motion'

export default function aboutme() {
    return (
        <>
            <motion.div
                animate={{ opacity: 1, transition: { duration: 0.4 } }}
                initial={{ opacity: 0 }}
                exit={{ opacity: 0 }}
            >
                <section className="text-gray-700 bg-orange-100">
                    <div className="container grid px-8 py-24 mx-auto tracking-wide">
                        <p className="mb-4 text-6xl font-medium">About Me</p>
                        <p className="text-2xl">Vita, Experiences & Certificates </p>
                    </div>
                </section>
                <section className="text-gray-700">
                    <div className="container px-8 py-24 mx-auto ">
                        <div className="flex">
                            <div className="pt-2 pr-12 text-lg text-right text-gray-500 border-r-2 border-gray-200 basis-1/5">
                                <p>currently</p>
                                <p className="">-</p>
                                <p>03/2023</p>
                            </div>
                            <div className="pt-2 pl-12 basis-4/5">
                                <h2 className="pb-6 text-4xl font-bold">
                                    Master of Science Economics
                                </h2>
                                <p className="pb-20 text-lg text-gray-500">TU Dortmund</p>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="pt-2 pr-12 text-lg text-right text-gray-500 border-r-2 border-gray-200 basis-1/5">
                                <p>currently</p>
                                <p className="">-</p>
                                <p>10/2021</p>
                            </div>
                            <div className="pt-2 pl-12 basis-4/5">
                                <h2 className="pb-6 text-4xl font-bold">
                                    Bachelor of Science Applied Computer Science
                                </h2>
                                <p className="pb-20 text-lg text-gray-500">TU Dortmund</p>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="pt-2 pr-12 text-lg text-right text-gray-500 border-r-2 border-gray-200 basis-1/5">
                                <p>03/2023</p>
                                <p className="">-</p>
                                <p>10/2019</p>
                            </div>
                            <div className="pt-2 pl-12 basis-4/5">
                                <h2 className="pb-6 text-4xl font-bold">
                                    Bachelor of Science Economics
                                </h2>
                                <p className="pb-20 text-lg text-gray-500">TU Dortmund</p>
                            </div>
                        </div>

                        <div className="flex">
                            <div className="pt-2 pr-12 text-lg text-right text-gray-500 border-r-2 border-gray-200 basis-1/5">
                                <p>08/2018</p>
                                <p className="">-</p>
                                <p>08/2010</p>
                            </div>
                            <div className="pt-2 pl-12 basis-4/5">
                                <h2 className="pb-6 text-4xl font-bold">Abitur</h2>
                                <p className="pb-20 text-lg text-gray-500">Mariengymnasium Werl</p>
                            </div>
                        </div>
                    </div>
                </section>
            </motion.div>
        </>
    )
}
