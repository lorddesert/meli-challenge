import './Home.css'

function Home() {

  return (
    <>
      <header>
        <h1>Super Libre Mercado</h1>
        <form onSubmit={() => { alert('Searched...')}}>
          <label htmlFor="search">Caja de busqueda</label>
          <div className="search-bar">
            <input type="submit" value="" />
            <button>🔎</button>
          </div>
        </form>
      </header>
      <main className="search-results">
        <h2>Resultado de la búsqueda</h2>
        <div className="breadcrumb"></div>
        <ul>
          {/* List of result items */}
        </ul>
      </main>
    </>
  )
}

export default Home
