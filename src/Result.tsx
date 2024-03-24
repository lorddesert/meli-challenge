import { Item } from "./types";

export function Result({ item }: { item: Item }) {
  return (
    <a className="result" href={`/items/${item.id}`}>
      <img src={item.thumbnail} alt={`${item.title}`} />
      <div>
        <h2 className="price">{item.price}</h2>
        <h3 className="title">{item.title}</h3>
      </div>
    </a>
  )
}