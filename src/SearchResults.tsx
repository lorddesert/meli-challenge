import { Category, RootObject } from "./types"
import { Result } from "./Result"
import { useLoaderData, useNavigation } from "react-router-dom"
import { Loader } from "./Loader"

export function SearchResults() {
  const data = useLoaderData() as RootObject

  const searchResults = data.items
  const categories = data.categories
  const navigate = useNavigation()

  if (navigate.state === "loading")
    return <Loader />

  return (
    <div className="search-results-main">
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
    </div>
  )
}