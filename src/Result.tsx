import { Link } from "react-router-dom";
import { Item } from "./types";

export function Result({ item }: { item: Item }) {

  const ARSPesos = Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
    maximumFractionDigits: 0
});

  const price = ARSPesos.format(item.price)
  return (
    <Link className="result" to={`/items/${item.id}`}>
      <img src={item.thumbnail} alt={`${item.title}`} />
      <div>
        <h3 className="price">{price}</h3>
        <p className="title">{item.title}</p>
      </div>
    </Link>
  )
}