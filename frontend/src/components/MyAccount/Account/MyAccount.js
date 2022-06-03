import "./MyAccount.scss";
import AccountNav from "../AccountNav/AccountNav";

function MyAccount() {
  return (
    <div className="container my-account">
      <div className="row ">
        <AccountNav />
      </div>
    </div>
  );
}

export default MyAccount;
