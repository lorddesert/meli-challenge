import './Home.css'
import { Header } from './Header'
import { Outlet } from "react-router-dom";

export function Home() {

  return (
    <>
      <Header />
      <main>
        <h1>Super venta libre</h1>
        <Outlet />
      </main>
    </>
  )
}
