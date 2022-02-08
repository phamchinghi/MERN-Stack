import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './css/Post_css.css'

class Post extends Component {
    baiviet = (props) => {
        return <div className='baiviet'>
            <Link to=''><i class="fas fa-chevron-right"></i> {props.tenbv}</Link>
        </div>
    }
    render() {
        return (
            <div>
                <h3>Bài viết mới :</h3>
                <hr className='hr_lienhe' /> <br></br>
                <this.baiviet tenbv='CÔNG BỐ SP XỐT THỊT NƯỚNG YAKINIKU NO TARE MILD' />
                <this.baiviet tenbv='CÔNG BỐ SP XỐT THỊT NƯỚNG YAKINIKU NO TARE HOT' />
                <this.baiviet tenbv='CÔNG BỐ SP XỐT THỊT NƯỚNG UMAKUCHI' />
                <this.baiviet tenbv='CÔNG BỐ SP XỐT THỊT NƯỚNG NGỌT YAKINIKU R19' />
                <this.baiviet tenbv='CÔNG BỐ SP XỐT THỊT NƯỚNG CAY VỪA YAKINIKU R19' />
                <this.baiviet tenbv='CÔNG BỐ SP SÚP LẨU CHANKO XÌ DẦU' />
                <this.baiviet tenbv='CÔNG BỐ SP SÚP LẨU CHANKO MISO' />
                <this.baiviet tenbv='CÔNG BỐ SP SÚP LẨU CÀ RI' />
                <this.baiviet tenbv='CÔNG BỐ SP SỐT THỊT NƯỚNG ASSARI' />
                <this.baiviet tenbv='CÔNG BỐ SP SỐT BBQ HƯƠNG VỊ TRUYỀN THỐNG' />
                <h3 style={{ marginTop: '60px' }}>Liên hệ phân phối :</h3>
                <hr className='hr_lienhe' /> <br></br>
                <img src="http://freshfoods.vn/images/contact-freshfoods.png" alt="" width={'100%'} />
            </div>
        );
    }
}

export default Post;