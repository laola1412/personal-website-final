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
            <div className="container mx-auto p-4">
                <h1 className="font-bold text-3xl mb-12">Hibbett Aktienanalyse</h1>
                <h2 className="font-semibold text-xl mb-4">The Narrative</h2>
                <p className="text-gray-600 mb-8">Qui do et occaecat aliqua eiusmod ex labore aliqua sunt Lorem sit deserunt non eu. Nulla deserunt labore eu nulla officia esse irure minim excepteur ad. Nulla enim qui consequat occaecat laboris nulla duis labore. Commodo in cillum pariatur cillum ut. Aliqua aliquip ex duis amet magna proident dolor cupidatat qui. Et magna Lorem minim esse officia reprehenderit qui consectetur consequat aliqua eiusmod id pariatur proident. Occaecat nulla ullamco ut pariatur fugiat consectetur.</p>
                <h2 className="font-semibold text-xl mb-4">The Operating History</h2>
                <p className="text-gray-600 mb-8">Dolor cupidatat in esse non incididunt enim commodo consequat incididunt laborum. Magna aliquip veniam magna labore. Nisi qui non id est sunt. Duis sunt labore do consequat. Qui aliquip ut fugiat id do proident sunt.</p>
                <h2 className="font-semibold text-xl mb-4">Ownership Analysis</h2>
                <p className="text-gray-600 mb-8">Dolor cupidatat in esse non incididunt enim commodo consequat incididunt laborum. Magna aliquip veniam magna labore. Nisi qui non id est sunt. Duis sunt labore do consequat. Qui aliquip ut fugiat id do proident sunt.</p>
                <h2 className="font-semibold text-xl mb-4">Market Expectations</h2>
                <p className="text-gray-600 mb-8">Dolor cupidatat in esse non incididunt enim commodo consequat incididunt laborum. Magna aliquip veniam magna labore. Nisi qui non id est sunt. Duis sunt labore do consequat. Qui aliquip ut fugiat id do proident sunt.</p>
                <h2 className="font-semibold text-xl mb-4">Other Considerations & Risks</h2>
                <p className="text-gray-600 mb-8">Dolor cupidatat in esse non incididunt enim commodo consequat incididunt laborum. Magna aliquip veniam magna labore. Nisi qui non id est sunt. Duis sunt labore do consequat. Qui aliquip ut fugiat id do proident sunt.</p>
                <h2 className="font-semibold text-xl mb-4">Valuation Comps</h2>
                <p className="text-gray-600 mb-8">Dolor cupidatat in esse non incididunt enim commodo consequat incididunt laborum. Magna aliquip veniam magna labore. Nisi qui non id est sunt. Duis sunt labore do consequat. Qui aliquip ut fugiat id do proident sunt.</p>
            </div>
        </>
    )
}
