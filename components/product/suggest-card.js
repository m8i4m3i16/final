import React from 'react'

export default function suggestCard() {
  return (
    <>
      {/* 隨機商品 */}
      <h3 className="text-center my-5">你可能喜歡的商品⋯</h3>

      <div className="container-with-button">
        <button className="btn-arrow-circle">
          <i class="bi bi-chevron-left"></i>
        </button>
        {/* 可能會喜歡的商品 -- 卡片 */}
        {/* <div className="card-container">
    <div className="wrap">
      <div className="img-card">
        <div className="tag">Hot</div>
      </div>
      <div className="card-bottom">
        <div className="card-title">GULL - MANTIS DRY 鞋套式短蛙鞋</div>
        <div className="discount-price-wrap">
          <div className="discount-price">NT$390</div>
          <div className="o-price  text-decoration-line-through">
            NT$400
          </div>
        </div>
      </div>
    </div> 
     */}
        <div className="card-container">
          <div className="wrap">
            <div className="tag">Hot</div>
            <img src="..." className="card-img-top" alt="..." />

            <div className="card-bottom card-body">
              <div className="card-title">GULL - MANTIS DRY 鞋套式短蛙鞋</div>
              <div className="discount-price-wrap">
                <div className="discount-price">NT$390</div>
                <div className="o-price  text-decoration-line-through">
                  NT$400
                </div>
              </div>
            </div>
          </div>

          <div className="wrap">
            <div className="img-card">
              <div className="tag">Hot</div>
            </div>
            <div className="card-bottom">
              <div className="card-title">GULL - MANTIS DRY 鞋套式短蛙鞋</div>
              <div className="discount-price-wrap">
                <div className="discount-price">NT$390</div>
                <div className="o-price  text-decoration-line-through">
                  NT$400
                </div>
              </div>
            </div>
          </div>

          <div className="wrap">
            <div className="img-card">
              <div className="tag">Hot</div>
            </div>
            <div className="card-bottom">
              <div className="card-title">GULL - MANTIS DRY 鞋套式短蛙鞋</div>
              <div className="discount-price-wrap">
                <div className="discount-price">NT$390</div>
                <div className="o-price  text-decoration-line-through">
                  NT$400
                </div>
              </div>
            </div>
          </div>
        </div>

        <button className="btn-arrow-circle">
          <i class="bi bi-chevron-right"></i>
        </button>
      </div>

      <style jsx>{`
      {/* 推薦商品 */}
        .container-with-button {
          display: flex;
          justify-content: center;
          align-items: center;
          
        .btn-arrow-circle {
          margin: 0 20px;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background-color: #f5f5f5;
          font-size: 16px;
        }
        .btn-left {
          margin-right: 10px;
        }
        .card-container {
          display: flex;
          justify-content: space-between;
        }
        .wrap-card {
          position: relative;
        }

        .tag {
          position: absolute;
          top: 20;
          left: 20;
          background-color: var(--red, #dc5151);
          color: white; 
          padding: 5px 10px; 
          border-radius: 5px; 
        }
        {/* .wrap {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin: 0 15px;
        }
        
        .tag {
          font-feature-settings: 'clig' off, 'liga' off;
          font-family: Inter, sans-serif;
          justify-content: center;
          border-radius: 4px;
          background-color: #cf4242;
          aspect-ratio: 3.09;
          color: #fff;
          letter-spacing: 0.8px;
          padding: 2px 10px;
        } */}
        .img {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 30px;
          box-shadow: 2px 4px 6.1px 0px rgba(20, 35, 56, 0.4);
        }
        .card-bottom {
          display: flex;
          width: 100%;
          flex-direction: column;
          padding: 12px;
        }
        .card-title {
          color: var(--neutral-07100, #141718);
          text-align: center;
          font-feature-settings: 'clig' off, 'liga' off;
          letter-spacing: 0.8px;
          font: 500 16px Inter, sans-serif;
        }
        .discount-price-wrap {
          justify-content: center;
          align-self: center;
          display: flex;
          margin-top: 12px;
          gap: 12px;
          white-space: nowrap;
        }
        .discount-price {
          color: var(--red, #dc5151);
          font-feature-settings: 'clig' off, 'liga' off;
          flex-grow: 1;
          font: 500 16px Inter, sans-serif;
        }
        .o-price {
          justify-content: center;
          color: var(--gray, #858585);
          margin: auto 0;
          padding: 2px 8px 2px 3px;
          font: 400 14px Arial, sans-serif;
        }
      `}</style>
    </>
  )
}
