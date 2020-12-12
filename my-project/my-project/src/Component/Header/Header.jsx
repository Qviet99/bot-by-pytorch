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
                        <a href='http://localhost:3000/' title='Trang chủ tuyển sinh'>Trang chủ</a>
                    </li>
                    <li>
                        <a href='http://duytan.edu.vn/tuyen-sinh/Page/ViewProcDetail.aspx?idthongbao=37' title='Thông báo'>Thông báo</a>
                        <ul>
                            <li>
                                <a href="http://duytan.edu.vn/tuyen-sinh/Page/ViewProcDetail.aspx?idthongbao=37" title="Thông tin Tuyển sinh Đại học năm 2020">
                                    Thông tin Tuyển sinh Đại học năm 2020</a>
                            </li>
                            <li>
                                <a href="http://duytan.edu.vn/tuyen-sinh/Page/ViewProcDetail.aspx?idthongbao=40" title="TB điểm chuẩn Đại học 2020">
                                    TB điểm chuẩn Đại học 2020</a>
                            </li>
                            <li>
                                <a href="http://duytan.edu.vn/tuyen-sinh/Page/ViewProcDetail.aspx?idthongbao=15" title="QUY TRÌNH ĐĂNG KÝ">
                                    QUY TRÌNH ĐĂNG KÝ</a>    
                            </li>
                            <li>
                                <a href="http://duytan.edu.vn/tuyen-sinh/Page/ViewProcDetail.aspx?idthongbao=13 " title="THỦ TỤC NHẬP HỌC">
                                    THỦ TỤC NHẬP HỌC</a>     
                            </li>
                            <li>
                                <a href="http://duytan.edu.vn/tuyen-sinh/Page/ViewProcDetail.aspx?idthongbao=23" title="HỌC PHÍ 2020 - 2021">
                                    HỌC PHÍ 2020 - 2021</a>       
                            </li>
                            <li>
                                <a href="http://duytan.edu.vn/tuyen-sinh/Page/ViewProcDetail.aspx?idthongbao=20" title="CHÍNH SÁCH ƯU TIÊN">
                                    CHÍNH SÁCH ƯU TIÊN</a>   
                            </li>
                            <li>
                                <a href="http://duytan.edu.vn/tuyen-sinh/Page/ViewProcDetail.aspx?idthongbao=29" title="Thi tuyển ngành Kiến trúc">
                                    Thi tuyển ngành Kiến trúc</a> 
                            </li>
                            <li>
                                <a href="http://duytan.edu.vn/tuyen-sinh/Page/ViewProcDetail.aspx?idthongbao=11" title="Đối tượng Tuyển sinh">
                                    Đối tượng Tuyển sinh</a>
                            </li>
                            <li>
                                <a href="http://duytan.edu.vn/tuyen-sinh/Page/ViewProcDetail.aspx?idthongbao=16" title="Chỉ tiêu Tuyển Sinh">
                                    Chỉ tiêu Tuyển Sinh</a> 
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="http://duytan.edu.vn/tuyen-sinh/Page/EducationViewAll.aspx" title="Ngành nghề đào tạo">Ngành nghề đào tạo</a>
                        <ul>
                            <li><a href="http://duytan.edu.vn/tuyen-sinh/Page/EducationViewAll.aspx?idlevel=1" title="Sau Đại học">Sau Đại học</a> </li>
                            <li><a href="http://duytan.edu.vn/tuyen-sinh/Page/EducationViewAll.aspx?idlevel=2" title="Đại học">Đại học</a> </li>
                            <li><a href="http://duytan.edu.vn/tuyen-sinh/Page/EducationViewAll.aspx?idlevel=3" title="Cao đẳng">Cao đẳng</a> </li>
                            <li><a href="http://duytan.edu.vn/tuyen-sinh/Page/EducationViewAll.aspx?idlevel=0" title="Cao đẳng Nghề">Cao đẳng Nghề</a> </li>
                            <li><a href="http://duytan.edu.vn/tuyen-sinh/Page/EducationViewAll.aspx?idlevel=7" title="Liên thông">Liên thông</a> </li>
                            <li><a href="http://duytan.edu.vn/tuyen-sinh/Page/EducationViewAll.aspx?idlevel=4" title="Chương trình Quốc tế">Chương trình Quốc tế</a> </li>
                            <li><a href="http://duytan.edu.vn/tuyen-sinh/Page/EducationViewAll.aspx?idlevel=8" title="Chương trình Du học">Chương trình Du học</a> </li>
                            <li><a href="http://duytan.edu.vn/tuyen-sinh/Page/EducationViewAll.aspx?idlevel=6" title="Đào tạo Từ xa &amp; Bằng 2">Đào tạo Từ xa &amp; Bằng 2</a> </li>
                        </ul>
                    </li>
                    <li>
                        <a href="http://duytan.edu.vn/tuyen-sinh/Page/ArticleView.aspx" title="Tin tức tuyển sinh">Tin tức tuyển sinh</a>
                    </li>
                    <li>
                        <a href="http://duytan.edu.vn/tuyen-sinh/Page/SchollashipViewDetail.aspx" title="Học bổng">Học bổng</a>
                    </li>
                    <li>
                        <a href="http://duytan.edu.vn/tuyen-sinh/Page/Gallery/home" target="_blank" title="Hoạt động sinh viên">Hoạt động sinh viên</a>
                    </li>
                    <li>
                        <a href="http://duytan.edu.vn/gioi-thieu//" target="_blank" title="Đôi nét về Duy Tân">Đôi nét về Duy Tân</a>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Header;