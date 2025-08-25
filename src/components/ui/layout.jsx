import Navbar from './navbar'

export default function Layout({ children }) {
    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-white text-gray-900 p-6 mt-16">{children}</main>
        </>
    )
}