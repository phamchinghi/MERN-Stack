import React, { Component } from 'react';
import './css/Contact_css.css'

export class Contactpage extends Component {
    render() {
        return <div>
            <h1 style={{ textAlign: 'center', paddingTop: '10px' }}>LIÊN HỆ</h1>
            <hr />
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62801.75722723492!2d106.29552487277496!3d10.333095230873734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310aa50af072f20b%3A0x694be7921cd6e4ee!2zVGjhu5tpIFPGoW4sIENow6J1IFRow6BuaCwgVGnhu4FuIEdpYW5nLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1644079786466!5m2!1svi!2s" width={'100%'} height={800} style={{ border: 0 }} allowFullScreen loading="lazy" />
            <h3>LIÊN HỆ :</h3>
            <hr className='hr_lienhe' /> <br></br>
            <div className="form">
                <form action id="form1">
                    <label htmlFor="name">Họ và tên :</label>
                    <input type="text" id="name" name="name" placeholder="Họ tên" /><br />
                    <label htmlFor="phone">Số điện thoại :</label>
                    <input type="text" id="phone" name="phone" placeholder="Số điện thoại" /><br />
                    <label htmlFor="email">Địa chỉ mail :</label>
                    <input type="text" id="email" name="email" placeholder="Địa chỉ Email" /><br />
                    <label htmlFor="content">Nội dung :</label>
                    <input type="text" id="content" name="content" placeholder="Nội dung..." /><br />
                    <button>Gửi yêu cầu</button>
                </form>
            </div>
        </div>;
    }
}

export default Contactpage;
