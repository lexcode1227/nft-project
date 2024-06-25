import React from 'react'

const Dashboard = () => {
  return (
    <main className="p-2">
        <section className="flex justify-between items-center">
            <img alt="" className="size-12"/>
            <nav className="flex justify-center gap-5">
                <button className="py-3 px-5 font-bold rounded bg-blue-500 border-blue-500 border text-white hover:bg-white hover:text-blue-500 hover:border-blue-800 hover:border" onClick={handleLogout}>Salir</button>
            </nav>
        </section>
        <section className="flex flex-col justify-between items-center gap-5 mt-20">
            <h1 className="text-4xl font-bold">Bienvenido <span className="text-4xl font-bold text-blue-500">User123</span> al Dashboard</h1>
            <h2 className="text-xl font-semibold">Esta es un ruta protegida</h2>
        </section>
    </main> 
  )
}

export default Dashboard