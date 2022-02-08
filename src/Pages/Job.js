import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Post from './Post'

export default class Job extends Component {
    mot_tintuc = (props) => {
        return <div className='mot_vieclam'>
            <div className='hang'>
                <div className='cot1'>
                    <i className="fas fa-thumbtack" style={{ backgroundColor: 'yellow', padding: '15px 20px', borderRadius: '6px', fontSize: '27px' }}></i>
                </div>
                <div className='cot2'>
                    <i class="fas fa-folder-open"></i> CƠ HỘI VIỆC LÀM<br></br>
                    <h3><Link to="">{props.tieude}</Link></h3>
                </div>
                <div className='cot3'>
                    <button className='thoigian'>
                        <i class="fas fa-calendar"></i> 6 THÁNG TRƯỚC
                    </button>
                </div>
            </div>
            <div>
                <h4>{props.tieude}</h4>
            </div>
            <div style={{ paddingTop: '10px' }}>
                <Link to='' className='button'>Xem thêm...</Link>
            </div>
            <hr style={{ marginTop: '30px' }} />
        </div>
    }
    render() {
        return <div>
            <h1 style={{ textAlign: 'center', paddingTop: '10px' }}>VIỆC LÀM</h1>
            <hr />
            <div className='row'>
                <div className='trai'>
                    <this.mot_tintuc tieude='HÀ NỘI - LONG BIÊN: TUYỂN DỤNG CHUYÊN VIÊN KINH DOANH' />
                    <this.mot_tintuc tieude='CHI NHÁNH HỒ CHÍ MINH - NHÂN VIÊN KINH DOANH' />
                    <this.mot_tintuc tieude='HÀ NỘI - LONG BIÊN: GIÁM ĐỐC KINH DOANH' />
                    <this.mot_tintuc tieude='HÀ NỘI - LONG BIÊN: TRƯỞNG PHÒNG HÀNH CHÍNH NHÂN SỰ' />
                    <this.mot_tintuc tieude='HÀ NỘI - LONG BIÊN: NHÂN VIÊN KỸ THUẬT Ô TÔ' />
                    <this.mot_tintuc tieude='HÀ NỘI - LONG BIÊN: TRƯỞNG PHÒNG KHO VẬN' />
                    <this.mot_tintuc tieude='NGHỆ AN - VINH: NHÂN VIÊN KINH DOANH' />
                    <this.mot_tintuc tieude='Nghệ An - Vinh: Trưởng phòng Kinh doanh' />
                    <this.mot_tintuc tieude='NGHỆ AN - VINH: GIÁM SÁT KINH DOANH' />
                    <this.mot_tintuc tieude='HÀ NỘI - LONG BIÊN: NHÂN VIÊN CONTENT MARKETING' />
                </div>
                <div className='phai'>
                    <Post />
                </div>
            </div>
        </div>;
    }
}
