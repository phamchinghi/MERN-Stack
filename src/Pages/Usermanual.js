import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Post from './Post'

class Usermanual extends Component {
    mot_camnang = (props) => {
        return <div className='mot_vieclam'>
            <div className='hang'>
                <div className='cot1'>
                    <i className="fas fa-thumbtack" style={{ backgroundColor: 'yellow', padding: '15px 20px', borderRadius: '6px', fontSize: '27px' }}></i>
                </div>
                <div className='cot2'>
                    <i class="fas fa-folder-open"></i> CẨM NANG SỬ DỤNG<br></br>
                    <h3><Link to="">{props.tieude}</Link></h3>
                </div>
                <div className='cot3'>
                    <button className='thoigian'>
                        <i class="fas fa-calendar"></i> 6 THÁNG TRƯỚC
                    </button>
                </div>
            </div>
            <div>
                <img src="http://file.freshfoods.vn/global/288f7cbeabbc4be212ad.jpg" alt="" width={'100%'} /> <br />
                <h4 style={{ fontWeight: '400' }}>{props.noidung}</h4>
            </div>
            <div style={{ paddingTop: '10px' }}>
                <Link to='' className='button'>Xem thêm...</Link>
            </div>
            <hr style={{ marginTop: '30px' }} />
        </div >
    }
    render() {
        return (
            <div>
                <h1 style={{ textAlign: 'center', paddingTop: '10px' }}>CẨM NANG SỬ DỤNG</h1>
                <hr />
                <div className='row'>
                    <div className='trai'>
                        <this.mot_camnang tieude='GIỮA TÂM BÃO AN TOÀN VỆ SINH THỰC PHẨM: THỊT BÒ MỸ MUA Ở ĐÂU LÀ ĐẢM BẢO ?' noidung='Mách bạn địa chỉ mua thịt bò mỹ nhập khẩu chất lượng trên cả tuyệt vời mà mức giá không hề đau ví chút nào. Nhanh tay nào!' />
                        <this.mot_camnang tieude='GIỮA TÂM BÃO AN TOÀN VỆ SINH THỰC PHẨM: THỊT BÒ MỸ MUA Ở ĐÂU LÀ ĐẢM BẢO ?' noidung='Mách bạn địa chỉ mua thịt bò mỹ nhập khẩu chất lượng trên cả tuyệt vời mà mức giá không hề đau ví chút nào. Nhanh tay nào!' />
                        <this.mot_camnang tieude='GIỮA TÂM BÃO AN TOÀN VỆ SINH THỰC PHẨM: THỊT BÒ MỸ MUA Ở ĐÂU LÀ ĐẢM BẢO ?' noidung='Mách bạn địa chỉ mua thịt bò mỹ nhập khẩu chất lượng trên cả tuyệt vời mà mức giá không hề đau ví chút nào. Nhanh tay nào!' />
                        <this.mot_camnang tieude='GIỮA TÂM BÃO AN TOÀN VỆ SINH THỰC PHẨM: THỊT BÒ MỸ MUA Ở ĐÂU LÀ ĐẢM BẢO ?' noidung='Mách bạn địa chỉ mua thịt bò mỹ nhập khẩu chất lượng trên cả tuyệt vời mà mức giá không hề đau ví chút nào. Nhanh tay nào!' />
                        <this.mot_camnang tieude='GIỮA TÂM BÃO AN TOÀN VỆ SINH THỰC PHẨM: THỊT BÒ MỸ MUA Ở ĐÂU LÀ ĐẢM BẢO ?' noidung='Mách bạn địa chỉ mua thịt bò mỹ nhập khẩu chất lượng trên cả tuyệt vời mà mức giá không hề đau ví chút nào. Nhanh tay nào!' />
                        <this.mot_camnang tieude='GIỮA TÂM BÃO AN TOÀN VỆ SINH THỰC PHẨM: THỊT BÒ MỸ MUA Ở ĐÂU LÀ ĐẢM BẢO ?' noidung='Mách bạn địa chỉ mua thịt bò mỹ nhập khẩu chất lượng trên cả tuyệt vời mà mức giá không hề đau ví chút nào. Nhanh tay nào!' />
                        <this.mot_camnang tieude='GIỮA TÂM BÃO AN TOÀN VỆ SINH THỰC PHẨM: THỊT BÒ MỸ MUA Ở ĐÂU LÀ ĐẢM BẢO ?' noidung='Mách bạn địa chỉ mua thịt bò mỹ nhập khẩu chất lượng trên cả tuyệt vời mà mức giá không hề đau ví chút nào. Nhanh tay nào!' />
                        <this.mot_camnang tieude='GIỮA TÂM BÃO AN TOÀN VỆ SINH THỰC PHẨM: THỊT BÒ MỸ MUA Ở ĐÂU LÀ ĐẢM BẢO ?' noidung='Mách bạn địa chỉ mua thịt bò mỹ nhập khẩu chất lượng trên cả tuyệt vời mà mức giá không hề đau ví chút nào. Nhanh tay nào!' />
                        <this.mot_camnang tieude='GIỮA TÂM BÃO AN TOÀN VỆ SINH THỰC PHẨM: THỊT BÒ MỸ MUA Ở ĐÂU LÀ ĐẢM BẢO ?' noidung='Mách bạn địa chỉ mua thịt bò mỹ nhập khẩu chất lượng trên cả tuyệt vời mà mức giá không hề đau ví chút nào. Nhanh tay nào!' />
                        <this.mot_camnang tieude='GIỮA TÂM BÃO AN TOÀN VỆ SINH THỰC PHẨM: THỊT BÒ MỸ MUA Ở ĐÂU LÀ ĐẢM BẢO ?' noidung='Mách bạn địa chỉ mua thịt bò mỹ nhập khẩu chất lượng trên cả tuyệt vời mà mức giá không hề đau ví chút nào. Nhanh tay nào!' />
                    </div>
                    <div className='phai'>
                        <Post />
                    </div>
                </div>
            </div>
        );
    }
}

export default Usermanual;