import { motion } from 'framer-motion'

export default function hibbett() {
    return (
        <>
            <motion.div whileInView={{}}>
                <div className="h-[10vh] bg-red-200">
                    <div className="container mx-auto">
                        <div className="text-2xl font-semibold text-gray-100"></div>
                    </div>
                </div>
            </motion.div>
            <div className="container mx-auto">
                <div>
                    <form action="submit">
                        <div className="mb-2">
                            <p className="font-semibold">Name</p>
                            <motion.input
                                whileFocus={{ scale: 1.05, rotate: 1, x: -15 }}
                                className="px-4 py-2 border rounded-lg"
                                type="text"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
