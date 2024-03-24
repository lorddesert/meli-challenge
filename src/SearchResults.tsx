import { SetStateAction, useEffect, useState } from "react"
import { Category, Item, RootObject } from "./types"
import { Result } from "./Result"
import { json, useLoaderData } from "react-router-dom"

export function SearchResults() {
  const [searchResults, setSearchResults] = useState([])
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  const data = useLoaderData()

  console.log(data)

  //       setSearchResults(data.items.slice(0, 4))
  //       //@ts-ignore
  //       setCategories(data.categories)
  //       setLoading(false)

  // useEffect(() => {
  //   const searchParams = new URLSearchParams(window.location.search)
  //   const searchQuery = searchParams.get('search')

  //   fetch(`http://localhost:3000/api/items?q=${searchQuery}`)
  //     .then(res => res.json())
  //     .then((data: RootObject) => {
  //       //@ts-ignore
  //       setSearchResults(data.items.slice(0, 4))
  //       //@ts-ignore
  //       setCategories(data.categories)
  //       setLoading(false)
  //     })
  //     .catch(err => {
  //       setLoading(false)
  //       setError(err)
  //     })
  // }, [])

  if (error) {
    return (
      <main>
        <h2>There was an error in the search</h2>
      </main>
    )
  }

  if (loading)
    return (
      <>
        <div className="loader"></div>
        <pre>{JSON.stringify(data)}</pre>
      </>
    )

  return (
    <>
      <main>
        <ul className="breadcrumb">
          {categories.map((cat: Category) => <li key={`cat-${cat.id}`}>
            <a href="#">{cat.name}</a>
          </li>)
          }
        </ul>

        <ul className="results-list">
          {searchResults.map(result => <li className="result-container">
            <Result item={result} />
          </li>)
          }
        </ul>
      </main>
    </>
  )
}