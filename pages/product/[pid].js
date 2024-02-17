import { useState } from 'react'
import Stars from '@/components/product/star/star'
import Carousel from '@/components/product/carousel'

export default function Detail() {
  const [isSwitchOn, setIsSwitchOn] = useState(false)

  const handleSwitchToggle = () => {
    setIsSwitchOn(!isSwitchOn)
  }
  return (
    <>
      {/* 輪播 */}
      <div className="row mt-5 mx-2">
        <div className="col-sm-7">
          <div className="position-sticky" style={{ top: '2rem' }}>
            <Carousel />
          </div>
        </div>

        <div className="col-sm-5">
          <h3>男士防寒衣</h3>
          <Stars />
          <h6>4.0分 | 8則評價</h6>

          <h6 className="note-text">NT$24,000</h6>
          <p className="text-decoration-line-through">NT$28,000</p>
          <p className="product-desc">
            穿上 Nike Air Force 1 PLT.AF.ORM. 用經典好穿的 AF1 風格脫穎而出。
            優雅版型搭配加厚中底，為籃球鞋系列注入傲嬌新風貌。
          </p>
          <hr />

          {/* 顏色 下拉選單 */}
          {/* <div className="dropdown">
            <button
              className="btn btn-selected dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              選擇顏色
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <li>
                <a className="dropdown-item" href="#">
                  選項 1
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  選項 2
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  選項 3
                </a>
              </li>
            </ul>
          </div> */}
          <span className="btn-color">顏色</span>
          <button type="button" className="btn btn-md">
            紅
          </button>
          <button type="button" className="btn btn-md">
            藍
          </button>
          <button type="button" className="btn btn-md">
            綠
          </button>
          <br />
          {/* 尺寸 bottom */}
          <span className="btn-size">尺寸</span>
          <button type="button" className="btn btn-md">
            F
          </button>
          <button type="button" className="btn btn-md">
            S
          </button>
          <button type="button" className="btn btn-md">
            M
          </button>
          <button type="button" className="btn btn-md">
            L
          </button>
          <button type="button" className="btn btn-md">
            XL
          </button>

          {/* 選擇數量 */}
          <div>
            <button type="button" className="btn btn-circle">
              -
            </button>
            <span className="mx-3">數量</span>
            <button type="button" className="btn btn-circle">
              +
            </button>
          </div>

          {/* 加入購物車 */}
          <button
            className="btn btn-secondary w-100 mb-3 my-3"
            style={{ fontWeight: 'bold', color: 'white' }}
          >
            加入購物車 <i class="bi bi-cart4"></i>
          </button>
          {/* 加入最愛 */}
          <button className="btn btn-outline-primary w-100">
            <i class="bi bi-suit-heart"></i> 加入最愛
          </button>

          {/* 注意事項 */}
          <div className="product-info my-5">
            <div
              className="accordion accordion-flush"
              id="accordionFlushExample"
            >
              <div className="accordion-item">
                <h4 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    aria-expanded="false"
                    data-bs-target="#panelsStayOpen-collapseOne"
                    aria-controls="panelsStayOpen-collapseOne"
                  >
                    尺寸與版型
                  </button>
                </h4>
                <div
                  id="panelsStayOpen-collapseOne"
                  className="accordion-collapse collapse"
                >
                  <div className="accordion-body px-1">
                    <ul>
                      <li>版型較大，建議訂購小半號</li>
                      <li>尺寸：尺寸指南</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseTwo"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseTwo"
                  >
                    免費寄送及退貨
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseTwo"
                  className="accordion-collapse collapse"
                >
                  <div className="accordion-body px-1">
                    <p>訂單金額滿新臺幣 4,500 元即享免費標準運送服務</p>
                    <p>
                      臺北市:標準運送的商品可於 2-5 個工作天內送達
                      快遞運送的商品可於 2-3 個工作天內送達
                    </p>
                    <p>
                      其它縣市: 標準運送的商品可於 3-6 個工作天內送達
                      快遞運送的商品可於 3-5 個工作天內送達
                    </p>
                    <p>訂單皆於星期一至星期五之間處理與寄送 (國定假日除外)</p>
                    <p>會員享免費退貨服務免費退貨。退貨政策例外情況。</p>
                  </div>
                </div>
              </div>

              {/* <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseThree"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseThree"
                  >
                    評價(370){'  '}
                    <span className="star">&#9733;</span>
                    <span className="star">&#9733;</span>
                    <span className="star">&#9733;</span>
                    <span className="star">&#9733;</span>
                    <span className="star">&#9733;</span>
                  </button>
                </h2>

                <div
                  id="panelsStayOpen-collapseThree"
                  className="accordion-collapse collapse"
                >
                  <div className="accordion-body px-1">
                    <div className="commet">
                      <div className="rating">
                        <span className="star">&#9733;</span>
                        <span className="star">&#9733;</span>
                        <span className="star">&#9733;</span>
                        <span className="star">&#9733;</span>
                        <span className="star">&#9733;</span>
                      </div>
                      <p>great shoes overall Ella579458843 - 2023年6月19日</p>
                      <p>
                        overall one of my favorite shoes at the moment. go with
                        any of my outfits, i can wear sweatpants with them or to
                        a nice dinner with a dress. the only “problem” i have
                        with them is that they’re difficult to break into even
                        if you half size up, it took me a while to break into
                        them. but overall i recommend these shoes if you just
                        want some great shoes for any occasion.... 更多
                      </p>
                    </div>
                  </div>
                </div> */}
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>

      <br />
      <br />
      <hr />

      {/* 轉換按鈕 -- 商品介紹/評價 */}
      <div className="form-check form-switch d-flex justify-content-end">
        <input
          className="form-check-input"
          type="checkbox"
          id="flexSwitchCheckDefault"
          checked={isSwitchOn}
          onChange={handleSwitchToggle}
        />
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
          {isSwitchOn ? '顧客評價' : '商品細節'}
        </label>
      </div>
      {isSwitchOn && (
        <div>
          {/* 顯示顧客評價 */}
          <h3 className="text-center my-2">顧客評價</h3>
          <div class="container">
            <form>
              <div className="form-group">
                <label className="mx-2" for="exampleFormControlTextarea1">
                  來為 --- 評價吧～
                </label>
                <Stars />
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  placeholder="請撰寫您的評價"
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn btn-primary  d-flex btn-comment"
              >
                送出評價
              </button>
            </form>
          </div>
          {/* 用戶評價 */}
          <div className="circle-container">
            <div>
              <img src="user.jpg" alt="User Photo" class="circle-image" />
            </div>
          </div>
        </div>
      )}
      {!isSwitchOn && (
        <div>
          {/* 顯示商品細節 */}
          <h3 className="text-center my-2">商品介紹</h3>

          {/* 商品介紹 */}
          <div className="row mt-2 mx-2">
            <div className="col-sm-12">
              <img
                className="w-100  my-5 "
                src="/images/product/detail/info-1.webp"
              />
              <p className="text-center my-5 font-weight-light fs-4">
                鞋面採用車縫皮革裝飾片，全面提升經典指標性、耐久性和支撐力。
              </p>
              <img
                className="w-100  my-5 "
                src="/images/product/detail/info-2.webp"
              />
              <p className="text-center my-5 font-weight-light fs-4">
                低筒版型，造型俐落簡練。
              </p>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .btn-md:hover,
        .btn-outline-primary:hover,
        .btn-circle:hover {
          background-color: #265475;
          color: #fff;
        }
        .btn-comment {
          background-color: #265475;
          margin: 18px auto;
          border-radius: 100px;
          padding: 10px 20px;
        }
        .btn-color {
          margin: 5px 0;
        }
        .btn-size {
          margin: 5px 0;
        }
        .btn-circle {
          margin: 5px 0;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background-color: #f5f5f5;
          font-size: 16px;
        }
        .circle-container {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          overflow: hidden;
          position: relative;
          background-color: #f5f5f5;
        }
        .circle-image {
          width: 100%;
          height: auto;
          display: block;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      `}</style>
    </>
  )
}
