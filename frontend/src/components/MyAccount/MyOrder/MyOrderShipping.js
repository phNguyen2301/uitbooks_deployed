import "./MyOrder.scss";
import AccountOrderNav from "./MyOrderNav/MyOrderNav";
import OrderShipping from "./OrderShipping/OrderShipping";
// import OrderOrdered from "./OrderOrdered/OrderOrdered";
// import OrderCanceled from "./OrderCanceled/OrderCanceled";

function MyOrderShipping() {
  return (
    <div className="order-process col-8">
      <AccountOrderNav />
      <OrderShipping />
      {/* <Routes>
      <Route path="/shipping" element={<OrderShipping />} />
        <Route path="/ordered" element={<OrderOrdered />} />
        <Route path="/canceled" element={<OrderCanceled />} />
      </Routes> */}
    </div>
  );
}

export default MyOrderShipping;
