import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './css/Homepage_css.css'
import clip from './img_video/tranh_khuyet.mp4'

export class Homepage extends Component {
  item = (props) => {
    return <div className="img-container">
      <div className='thanhngang'>
        <h3>{props.tieude}</h3>
        <h4>{props.noidung}</h4>
      </div>
      <Link to={props.duongdantoi}><img src={props.duongdan} alt="" /></Link>
    </div>
  }
  render() {
    return <div style={{ width: "100%" }}>
      <div>
        <video id="background-video" muted loop autoPlay controls width={"100%"}>
          <source src={clip} type="video/mp4" />
          <source src={clip} type="video/ogg" />
        </video>
      </div>
      <div className='item'>
        <this.item tieude='Khuyến mãi' noidung='Thông tin khuyến mãi' duongdan='https://vivicorp.com/images/nang-cap-2019/chinh%20sach%20khuyen%20mai.jpeg' duongdantoi='/tintuc' />
        <this.item tieude='Cẩm nang sử dụng' noidung='Thực đơn cuối tuần' duongdan='https://cdn.tgdd.vn/Files/2020/12/16/1314124/thuc-an-nhanh-la-gi-an-thuc-an-nhanh-co-tot-hay-khong-202012161146006756.jpg' duongdantoi='/cangnangsudung' />
        <this.item tieude='Giao hàng nhanh' noidung='Với các chi nhánh phủ khắp' duongdan='https://jobsgo.vn/blog/wp-content/uploads/2019/09/nhan-vien-giao-hang.png' duongdantoi='/lienhe' />
      </div>
    </div>;
  }
}

export default Homepage;

