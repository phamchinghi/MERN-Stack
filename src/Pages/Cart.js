import React, { Component } from 'react';

export default class Cart extends Component {
    render() {
        return <div id='haha' style={{ backgroundColor: 'pink' }}>
            <h1 style={{ textAlign: 'center', paddingTop: '10px' }}>GIỎ HÀNG</h1>
            <hr />
            <div className='header' style={{ backgroundColor: 'orange' }}>
                <h5>hihi</h5>
            </div>
            <div className='header' style={{ backgroundColor: 'blue' }}>
                <h5>hihi</h5>
            </div>
            {/* công thức tạo React Element => React.createElement(type,props,children,...) */}

            {/* tạo Element bằng react */}
            <button className="btn" onClick={() => {
                React.createElement('h1', {
                    id: 'heading',
                    title: 'heading',
                }, 'hello mọi người')
            }}>Click me!</button>

            {/* tạo element bằng DOM ( document ) */}
            <button onClick={() => {
                const heading = document.createElement('h1')
                heading.id = 'heading'
                heading.title = 'heading'
                heading.innerText = 'Hello mọi người'

                // tạo theo thứ tự của nó. class header thứ thứ tự
                // const header = document.getElementsByClassName('header')[1]
                // header.appendChild(heading)

                // chỉ tạo cho thằng đầu tiên
                // document.querySelector(".header").appendChild(heading)
            }}>Click me!</button>
        </div>;
    }
}
