import { Link } from '@inertiajs/react'

export default function BaseLayout({ children }) {
  return (
    <>
        <header className="bg-blue-600 text-white p-4">
            <div className="container mx-auto">
                <h1 className="text-2xl font-bold">My Awesome Store</h1>
            </div>
        </header>
        <main className="container mx-auto mt-8 p-4">
            { children }
        </main>
    </>
  )
}
