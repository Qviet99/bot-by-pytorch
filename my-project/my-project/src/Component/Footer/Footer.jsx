import React, { Component } from 'react';
import './Footer.css';
class Footer extends Component {
    render() {
        return (
            <div id='Footer'>
                <a href='http://duytan.edu.vn/' id='logodtu' target='_blank' title='Đại học Duy Tân'>ĐẠI HỌC DUY TÂN</a>
                <ul>
                    <li>
                        <a href="http://localhost:3000/" title="Trang chủ">Trang chủ</a>
                    </li>
                    <li>
                        <a href="http://csv.duytan.edu.vn" target="_blank" title="Cựu sinh viên">Cựu sinh viên</a>
                    </li>
                    <li>
                        <a href="http://duytan.edu.vn/tuyen-sinh/Page/EnrollOlder.aspx" target='_blank' title="Tham khảo tuyển sinh">Tham khảo TS 2019</a>
                    </li>
                    <li>    
                        <a href="http://duytan.edu.vn/tuyen-sinh/Page/ContactDTU.aspx" target='_blank' title="Liên hệ">Liên hệ</a>
                    </li>
                    <li>
                        <a href="http://duytan.edu.vn/tuyen-sinh/Themes/popup/bando-final.gif" target='_blank' title="Sơ đồ đường đi DTU">Sơ đồ đường đi DTU</a>
                    </li>
                </ul>
                <span className='lienhe'>
                    <span>Ban tuyển sinh đại học Duy Tân</span>
                    <br/> ĐC: 254(182 số cũ) Nguyễn Văn Linh - TP.Đà Nẵng
                    <br/> Email: <a href='mailto:tuyensinh@duytan.edu.vn'>tuyensinh@duytan.edu.vn</a>
                    <br/> ĐT: 02363.650403 - 02363.653561
                    <br/> DĐ: 0905.294.390 - 0905.294.391 - 1900.2252
                    <br/> © <a href='http://duytan.edu.vn/' target='_blank' title='Đại học Duy Tân'>ĐẠI HỌC DUY TÂN</a>
                </span>
            </div>
        );
    }
}

export default Footer;