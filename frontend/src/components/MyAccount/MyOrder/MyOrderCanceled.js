import "./MyOrder.scss";
import AccountOrderNav from "./MyOrderNav/MyOrderNav";
import OrderCanceled from "./OrderCanceled/OrderCanceled";
// import OrderOrdered from "./OrderOrdered/OrderOrdered";
// import OrderCanceled from "./OrderCanceled/OrderCanceled";

function MyOrderCanceled() {
  return (
    <div className="order-process col-8">
      <AccountOrderNav />
      <OrderCanceled />
      {/* <Routes>
      <Route path="/shipping" element={<OrderShipping />} />
        <Route path="/ordered" element={<OrderOrdered />} />
        <Route path="/canceled" element={<OrderCanceled />} />
      </Routes> */}
    </div>
  );
}

export default MyOrderCanceled;
