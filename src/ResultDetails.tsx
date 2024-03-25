import { useLoaderData, useNavigation } from "react-router-dom";
import { Loader } from "./Loader";
import { ItemByID } from "./types";

export function ResultDetails() {
  const { item } = useLoaderData() as { item: ItemByID}
  const navigation = useNavigation()

  if (navigation.state === "loading") {
    return <Loader /> 
  }  
  
  const formatter = new Intl.NumberFormat('es-AR', {
    currency: 'ARS',
    maximumFractionDigits: 0
  })

  console.log(item)

  const price = formatter.format(item.price.amount)

function NoDescription() {
  return <p style={{ opacity: "0.7" }}>El producto aun no tiene descripción.</p>
}

  return (
    <article className="result-details">
      <main>
        <img src={item.picture.url} alt={`${item.title}`} />
        <div className="main-info">
          <p className="stats">{item.condition} - {item.sold_quantity} vendidos</p>
          <h3>{item.title}</h3>
          {/* TODO: Should be in teh correct ARS currency format */}
          <p className="price">
            <span className="price-icon">$</span>
            {price}
            </p>
          <button className="primary-button">Comprar</button>
        </div>
      </main>
      <footer>
        <h2>Descripción del producto</h2>
        <p className="description">{item.description || <NoDescription />}
        </p>
      </footer>
    </article>
  )
}