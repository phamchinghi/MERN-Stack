import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './css/News_css.css'
import Post from './Post'

export default class News extends Component {
    mot_vieclam = (props) => {
        return <div className='mot_vieclam'>
            <div className='hang'>
                <div className='cot1'>
                    <i className="fas fa-thumbtack" style={{ backgroundColor: 'yellow', padding: '15px 20px', borderRadius: '6px', fontSize: '27px' }}></i>
                </div>
                <div className='cot2'>
                    <i class="fas fa-folder-open"></i> Tin tức <br></br>
                    <h3><Link to="">{props.tieude}</Link></h3>
                </div>
                <div className='cot3'>
                    <button className='thoigian'>
                        <i class="fas fa-calendar"></i> 6 THÁNG TRƯỚC
                    </button>
                </div>
            </div>
            <div style={{ paddingTop: '10px' }}>
                <Link to='' className='button'>Xem thêm...</Link>
            </div>
            <hr style={{ marginTop: '30px' }} />
        </div>
    }
    baiviet = (props) => {
        return <div className='baiviet'>
            <Link to=''><i class="fas fa-chevron-right"></i> {props.tenbv}</Link>
        </div>
    }
    render() {
        return <div>
            <h1 style={{ textAlign: 'center', paddingTop: '10px' }}>TIN TỨC</h1>
            <hr />
            <div className='row'>
                <div className='trai'>
                    <this.mot_vieclam tieude='CÔNG BỐ SP XỐT THỊT NƯỚNG YAKINIKU NO TARE MILD' />
                    <this.mot_vieclam tieude='CÔNG BỐ SP XỐT THỊT NƯỚNG YAKINIKU NO TARE HOT' />
                    <this.mot_vieclam tieude='CÔNG BỐ SP XỐT THỊT NƯỚNG UMAKUCHI' />
                    <this.mot_vieclam tieude='CÔNG BỐ SP XỐT THỊT NƯỚNG NGỌT YAKINIKU R19' />
                    <this.mot_vieclam tieude='CÔNG BỐ SP XỐT THỊT NƯỚNG CAY VỪA YAKINIKU R19' />
                    <this.mot_vieclam tieude='CÔNG BỐ SP SÚP LẨU CHANKO XÌ DẦU' />
                    <this.mot_vieclam tieude='CÔNG BỐ SP SÚP LẨU CHANKO MISO' />
                    <this.mot_vieclam tieude='CÔNG BỐ SP SÚP LẨU CÀ RI' />
                    <this.mot_vieclam tieude='CÔNG BỐ SP SỐT THỊT NƯỚNG ASSARI' />
                    <this.mot_vieclam tieude='CÔNG BỐ SP SỐT BBQ HƯƠNG VỊ TRUYỀN THỐNG' />
                </div>
                <div className='phai'>
                    <Post />
                </div>
            </div>


        </div>;
    }
}
