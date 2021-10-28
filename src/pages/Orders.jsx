import Card from "../components/Card";
import React from "react";
import axios from "axios";
//import AppContext from "../context";

function Orders() {
  //const { onAddToFavorite, onAddToCart } = React.useContext(AppContext);
  const [orders, setOrders] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          "https://614c78ba59e92d00176ad282.mockapi.io/orders"
        );
        setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []));
        setIsLoading(false);
      } catch (error) {
        alert("Ошибка при запросе заказов!");
        console.error(error);
      }
    })();
  }, []);
  // async function fetchData() { data.reduce((prev, obj) => [...prev, obj.items], [])
  // ...const {data} = await... "https://zakladkam.net/zakladki");
  // }
  //  fetchData(); более рациональный способ!!! data.reduce((prev, obj) => [...prev, obj.items], [])

  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1>Мои заказы</h1>
      </div>

      <div className="d-flex flex-wrap">
        {orders.map((item, index) => (
          <Card key={index} loading={isLoading} {...item} />
        ))}
      </div>
    </div>
  );
}

export default Orders;
