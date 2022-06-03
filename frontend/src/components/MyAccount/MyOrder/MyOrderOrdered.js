import "./MyOrder.scss";
import AccountOrderNav from "./MyOrderNav/MyOrderNav";
import OrderOrdered from "./OrderOrdered/OrderOrdered";
// import OrderOrdered from "./OrderOrdered/OrderOrdered";
// import OrderCanceled from "./OrderCanceled/OrderCanceled";

function MyOrderOrdered() {
  return (
    <div className="order-process col-8">
      <AccountOrderNav />
      <OrderOrdered />
      {/* <Routes>
      <Route path="/shipping" element={<OrderShipping />} />
        <Route path="/ordered" element={<OrderOrdered />} />
        <Route path="/canceled" element={<OrderCanceled />} />
      </Routes> */}
    </div>
  );
}

export default MyOrderOrdered;
