import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import CategoryView from "./CategoryView";

function DetailPage({ cart, setCart }) {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [quantity, setQuantity] = useState(0);

  console.log(cart);
  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(`http://localhost:5000/sanpham/${id}`)
        .then((res) => {
          console.log(res.data);
          setProduct(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchData();
  }, [id]);

  const addToCart = (product, quantity) => {
    let cart2 = [...cart];

    let sanpham = cart2.find((item) => product._id === item._id);
    if (sanpham) {
      sanpham.soluong = quantity;
    } else {
      sanpham = {
        ...product,
        soluong: quantity,
      };
      cart2.push(sanpham);
    }
    console.log({ sanpham, cart2 });

    setCart(cart2);
  };

  return (
    <div className="container">
      <div className="container">
        <div className="row">
          <div className="col">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/">Home</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Chi tiết
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>

      <div style={{ display: "flex" }}>
        {/* -- Category -- */}
        <CategoryView />
        {/* -- Category -- */}
        {/* {DetailProduct} */}

        <div>
          <div className="row">
            {/* <!-- Image --> */}
            <div className="col-12 col-lg-6">
              <div className="card bg-light mb-3">
                <div className="card-body">
                  <img
                    className="img-fluid"
                    src={product.hinhanhSP}
                    alt=""
                    width={400}
                    height={400}
                  />
                </div>
              </div>
            </div>

            {/* <!-- Add to cart --> */}
            <div className="col-12 col-lg-6 add_to_cart_block">
              <div className="card bg-light mb-3">
                <div className="card-body">
                  <h2 style={{ color: "green" }}>{product.tensp}</h2>
                  <div style={{ padding: "10px" }}>
                    <h5>
                      Giá sản phẩm:{" "}
                      <b>{parseInt(product.giasp).toLocaleString()} VNĐ</b>
                    </h5>
                  </div>
                  <div>
                    <div className="form-group">
                      <label>Số lượng :</label>

                      <div className="input-group mb-3">
                        <div className="input-group-prepend">
                          <button
                            type="button"
                            onClick={() =>
                              setQuantity((p) => (p > 0 ? p - 1 : p))
                            }
                            className="quantity-left-minus btn btn-danger btn-number"
                            data-type="minus"
                            data-field=""
                          >
                            <i className="fa fa-minus"></i>
                          </button>
                        </div>

                        <input
                          type="number"
                          className="form-control"
                          id="quantity"
                          name="quantity"
                          min="1"
                          max="50"
                          readOnly
                          value={quantity}
                        />

                        <div className="input-group-append">
                          <button
                            onClick={() => setQuantity((p) => p + 1)}
                            type="button"
                            className="quantity-right-plus btn btn-success btn-number"
                            data-type="plus"
                            data-field=""
                          >
                            <i className="fa fa-plus"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() => addToCart(product, quantity)}
                      className="btn btn-success btn-lg btn-block text-uppercase"
                    >
                      <i className="fa fa-shopping-cart"></i> Thêm vào giỏ
                    </button>
                    <a
                      href="/"
                      className="btn btn-primary btn-lg btn-block text-uppercase"
                    >
                      <i className="fa fa-shopping-cart"></i> Mua ngay
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            {/* <!-- Description --> */}
            <div className="col-12">
              <div className="card border-light mb-3">
                <div className="card-header bg-success text-white text-uppercase">
                  <i className="fa fa-align-justify"></i> Mô tả
                </div>
                <div className="card-body">
                  <p className="card-text">{product.motasp}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default DetailPage;