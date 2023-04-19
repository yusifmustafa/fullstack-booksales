import React, { useContext } from "react";
import { BounceLoader } from "react-spinners";
import { ProductContext } from "../context/ProductContextProvider";

const Spinner = () => {
  const context = useContext(ProductContext);
  const { loading } = context;
  return (
    <>
      {loading && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <BounceLoader loading={loading} color="#C05621" size={100} />
        </div>
      )}
    </>
  );
};
export default Spinner;
