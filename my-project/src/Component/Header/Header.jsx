import React, { Component } from 'react';
import banner from '../Img/banner.jpg'; 
import './Header.css';
class Header extends Component {
    render() {
        return (
            <div id = "Header">
                <img src={banner} id = 'banner' alt=''/>
                <ul class='nav'>
                    <li className='active'>
                        <a href='http://localhost:3000/home' title='Trang chủ tuyển sinh'>Trang chủ</a>
                    </li>
                    <li>
                        <a  title='Thông báo'>Thông báo</a>
                        <ul>
                            <li>
                                <a title="Thông tin Tuyển sinh Đại học năm 2020">
                                    Thông tin Tuyển sinh Đại học năm 2020</a>
                            </li>
                            <li>
                                <a  title="TB điểm chuẩn Đại học 2020">
                                    TB điểm chuẩn Đại học 2020</a>
                            </li>
                            <li>
                                <a title="QUY TRÌNH ĐĂNG KÝ">
                                    QUY TRÌNH ĐĂNG KÝ</a>    
                            </li>
                            <li>
                                <a  title="THỦ TỤC NHẬP HỌC">
                                    THỦ TỤC NHẬP HỌC</a>     
                            </li>
                            <li>
                                <a  title="HỌC PHÍ 2020 - 2021">
                                    HỌC PHÍ 2020 - 2021</a>       
                            </li>
                            <li>
                                <a  title="CHÍNH SÁCH ƯU TIÊN">
                                    CHÍNH SÁCH ƯU TIÊN</a>   
                            </li>
                            <li>
                                <a title="Thi tuyển ngành Kiến trúc">
                                    Thi tuyển ngành Kiến trúc</a> 
                            </li>
                            <li>
                                <a  title="Đối tượng Tuyển sinh">
                                    Đối tượng Tuyển sinh</a>
                            </li>
                            <li>
                                <a  title="Chỉ tiêu Tuyển Sinh">
                                    Chỉ tiêu Tuyển Sinh</a> 
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a  title="Ngành nghề đào tạo">Ngành nghề đào tạo</a>
                        <ul>
                            <li><a  title="Sau Đại học">Sau Đại học</a> </li>
                            <li><a  title="Đại học">Đại học</a> </li>
                            <li><a  title="Cao đẳng">Cao đẳng</a> </li>
                            <li><a  title="Cao đẳng Nghề">Cao đẳng Nghề</a> </li>
                            <li><a  title="Liên thông">Liên thông</a> </li>
                            <li><a  title="Chương trình Quốc tế">Chương trình Quốc tế</a> </li>
                            <li><a  title="Chương trình Du học">Chương trình Du học</a> </li>
                            <li><a  title="Đào tạo Từ xa &amp; Bằng 2">Đào tạo Từ xa &amp; Bằng 2</a> </li>
                        </ul>
                    </li>
                    <li>
                        <a  title="Tin tức tuyển sinh">Tin tức tuyển sinh</a>
                    </li>
                    <li>
                        <a  title="Học bổng">Học bổng</a>
                    </li>
                    <li>
                        <a  target="_blank" title="Hoạt động sinh viên">Hoạt động sinh viên</a>
                    </li>
                    <li>
                        <a href ="http://localhost:4200/login"  target="_blank" title="Login">Login</a>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Header;