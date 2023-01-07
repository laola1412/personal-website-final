import { motion } from 'framer-motion'
import Link from 'next/link'

export default function projects() {
    let projects = [
        {
            type: "Stock Analysis",
            name: "Hibbett",
            info: "Stock analysis about Hibett Inc., a sport retailer in the United States",
            image: "https://i1.adis.ws/i/hibbett/store1452-01-storefront?w=820&h=460&sm=S"
        },
        {
            type: "Machine Learning",
            name: "Covid19",
            info: "Predicting Covid19-Fatality Pre-Infection",
            image: "https://ane4bf-datap1.s3-eu-west-1.amazonaws.com/wmocms/s3fs-public/styles/featured_media_detail/public/advanced_page/featured_media/coronavirus-banner.jpg?Q5nNiocqqI30_Jy2.RwhGYpwU7fNVCAp&itok=REf-9mAr"
        },
        {
            type: "Machine Learning",
            name: "Bankruptcy Prediction",
            info: "Stock analysis about Hibett Inc., a sport retailer in the United States",
            image: "https://www.investopedia.com/thmb/kdQfMYf-xRIjEJp868r7oBF8P7Y=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/bankruptcy-broker-brokerage-firm-56a0911b3df78cafdaa2cad4.jpg"
        },
        {
            type: "Programming",
            name: "Hibbett",
            info: "Stock analysis about Hibett Inc., a sport retailer in the United States",
            image: "https://i1.adis.ws/i/hibbett/store1452-01-storefront?w=820&h=460&sm=S"
        }
     ]

    return (
        <>
            <motion.div
                className="container p-4 mx-auto text-gray-700 page-vertical-center"
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                exit={{ opacity: 0 }}
            >
                <div className="grid mb-24 tracking-wide text-center justify-self-center">
                    <p className="mb-4 text-6xl font-medium">Projects</p>
                    <p className="text-2xl">A collection of projects I have completed</p>
                </div>
                <div className="grid grid-cols-1 gap-8 text-gray-100 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
                    {projects.map(x => { return (
                        <Link href="/projects/hibbett">
                            <motion.div
                                whileHover={{ scale: 1.05, rotate: 1, y: -30 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <div className={` h-full overflow-hidden border-2 border-gray-200 rounded-lg group border-opacity-60  hover:ring-4 hover:ring-offset-4 hover:cursor-pointer ${x.type == "Machine Learning" ? "hover:ring-purple-500" : (x.type == "Stock Analysis" ? "hover:ring-red-500" : (x.type == "Programming" ? "hover:ring-orange-500" : "hover:ring-red-500"))}`}>
                                    <img
                                        className="object-cover object-center w-full lg:h-48 md:h-24"
                                        src={x.image}
                                        alt=""
                                    />
                                    <div className={`p-8 h-[250px] ${x.type == "Machine Learning" ? "bg-purple-500" : (x.type == "Stock Analysis" ? "bg-red-500" : (x.type == "Programming" ? "bg-orange-500" : "bg-red-500"))}`}>
                                        <h1 className="mb-1 text-sm font-semibold underline">
                                        {x.type}
                                        </h1>
                                        <h1 className="mb-3 text-2xl font-semibold">{x.name}</h1>
                                        <p className="mb-3 leading-relaxed">
                                            {x.info}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </Link>
                    )})}
                </div>
            </motion.div>
        </>
    )
}
