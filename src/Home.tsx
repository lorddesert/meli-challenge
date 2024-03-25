import './Home.css'
import { Header } from './Header'
import { Outlet, useNavigation } from "react-router-dom";
import { Loader } from './Loader';

export function Home() {
  const navigation = useNavigation()

  if (navigation.state === "loading")
    return (
        <>
          <Header />
          <main>
            <h1>Super venta libre</h1>
            <Loader/>
          </main>
        </>
      )
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
