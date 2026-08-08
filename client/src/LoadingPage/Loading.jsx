import "./Loading.css";

function Loading() {
  return (
    <div className="loader-container">
      <span className="loader"></span>
      <div className="loader-content">
        <h2 className="loader-title">
          <span className="title-firstletter">Q</span>uickCart
        </h2>
        <p className="loader-subtitle">Your Shopping Starts Here.</p>
      </div>
    </div>
  );
}

export default Loading;
