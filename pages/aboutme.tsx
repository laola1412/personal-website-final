import { motion } from 'framer-motion'

export default function aboutme() {
    return (
        <>
            <motion.div
                className="container p-4 mx-auto text-gray-700 page-vertical-center"
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                exit={{ opacity: 0 }}
            >
                <div className="grid mb-24 tracking-wide text-center justify-self-center">
                    <p className="mb-4 text-6xl font-medium">About Me</p>
                    <p className="text-2xl">Vita, Experiences & Roadmap </p>
                </div>
                <div className="grid grid-cols-4 gap-8 text-gray-100">
                    <div className="h-full overflow-hidden border-2 border-gray-200 rounded-lg border-opacity-60 hover:cursor-pointer">
                        <img
                            className="object-cover object-center w-full lg:h-48 md:h-24"
                            src="https://assets.simpleviewinc.com/simpleview/image/fetch/c_fill,h_632,q_75,w_640/https://assets.simpleviewinc.com/simpleview/image/upload/crm/johnstoncounty/Hibbett-Sports---2-2000x1500-72dpi_7229DE23-5056-B3A8-497239E54F6241AD-7229dab35056b3a_7229ecbd-5056-b3a8-491bd5682a7a9ad7.jpg"
                            alt=""
                        />
                        <div className="p-6 bg-red-500">
                            <h1 className="mb-1 text-sm font-semibold underline">Stock Analysis</h1>
                            <h1 className="mb-3 text-2xl font-semibold">Hibbett Inc.</h1>
                            <p className="mb-3 leading-relaxed">
                                In this stock analysis, I took a closer look at Hibbett. The company
                                has a lot of catalysts and is priced in with low expectations.
                            </p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    )
}
