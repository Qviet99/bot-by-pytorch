import React, { Component } from 'react';
import './Content.css';
import image from '../Img/livestream1.jpg';
import image2 from '../Img/xettuyenhocba5.gif';
import image3 from '../Img/xettuyenthang.gif';
import image4 from '../Img/XETKQTHI-THPT.jpg';
import image5 from '../Img/tracuutrungtuyenDH2020.gif';
import image6 from '../Img/trac-nghiem-huong-nghiep.jpg';
import image7 from '../Img/bannerluyenthiDH.jpg';
import image8 from '../Img/videobutton.gif';
import image10 from '../Img/ndcb.jpg';
import image9 from '../Img/thithu.gif';
import image11 from '../Img/dtqt-vn-3.jpg';
import image12 from '../Img/thutucnhaphoc.jpg';
import image13 from '../Img/FAQ-banner.gif';
import image14 from '../Img/duongdaynong.jpg';
import image15 from '../Img/ico_hoidap_le.jpg';
import image16 from '../Img/ico_hoidap.jpg';
import image17 from '../Img/ico_hoidap_datch.jpg';
import './tagbox.css';
import image18 from '../Img/tuyensinh2.gif';
import image19 from '../Img/kitucxa.jpg';
import image20 from '../Img/CSVC.jpg';
import './main.css';
import image21 from '../Img/nganhnghe_footer.jpg';
import image22 from '../Img/icon-new.gif';
import image23 from '../Img/more2.jpg';
import image24 from '../Img/xemtatca.jpg';
class Content extends Component {
    render() {
        return (
            <div id='Content'>
                <div className = 'bannerads'>
                    <div className="ads" >
                    <a ><img src={image} id='livestream1' alt=''/></a>
                    </div>
                    <a><img src={image2} alt='' title='Xét tuyển học bạ trực tuyến'/></a>
                    <a><img src={image3} alt='' title='Xét tuyển tuyển thẳng vào Đại học'/></a>                   
                    <a ><img src={image4} alt='' title='Xét kết quả thi THPT trực tuyến'/></a>                    
                    <a><img src={image5} alt='' title='Tra cứu kết quả trúng tuyển năm 2020'/></a>                    
                    <a><img src={image6} alt='' title='Trắc nghiệm hướng nghiệp'/></a>                    
                    <a><img src={image7} alt='' title='Luyện thi đại học'/></a>                    
                    <a><img src={image8} alt='' title='Đăng ký thi thử sơ tuyển'/></a>                   
                    <a><img src={image9} alt='' title='Thi thử sơ tuyển'/></a>                   
                    <a><img width="206px" height="76px" src={image10} alt='' title='Những điều cần biết'/></a>                   
                    <a ><img width="206px" height="109px" src={image11} alt='' title='CMU'/></a>                 
                    <a><img src={image12} alt='' title='thủ tục nhập học'/></a>              
                    <a><img src={image13} alt='' title='Câu hỏi thường gặp'/></a>                    
                    <div id='tuvan'> 
                        <h1 className='title'> Tư vấn tuyển sinh </h1>
                        <img width="202px" height="140px" src={image14} id='img14' alt=''/>
                    </div>
                    <div id='menucauhoi'>
                        <div id='case'>
                            <h1 className='title'>
                                <img src={image16} alt=''/>
                                Câu hỏi tư vấn
                            </h1>
                        </div>
                        <ul>
                            <h4 className='le'>
                                <img src={image15} alt=''/>
                                <a className='cauhoi' title='Cho e hỏi'>Cho em hỏi</a>
                            </h4>
                            <h4 className='chan'>
                                <img src={image15} alt=''/>
                                <a className='cauhoi'  title='Thiết kế'>Thiết kế</a>
                            </h4>
                            <h4 className='le'>
                                <img src={image15} alt=''/>
                                <a className='cauhoi' title='Đăng kí xét tuển học bạ 2019'>Đăng kí xét tuyển học bạ 2019</a>
                            </h4>
                            <h4 className='chan'>
                                <img src={image15} alt=''/>
                                <a className='cauhoi'  title='Hỏi đáp'>Hỏi đáp</a>
                            </h4>
                            <h4 className='le'>
                                <img src={image15} alt=''/>
                                <a className='cauhoi'  title='Xét học bạ'>Xét học bạ</a>
                            </h4>
                        </ul>
                        <div className='viewall'>
                            <a  title='xem tất cả'>Xem tất cả&gt;&gt;</a>
                        </div>
                        <div className='cauhoi'>
                            <div className='datcauhoi'>
                                <img src={image17} alt=''/>
                                <a  title='đặt câu hỏi'>Đặt câu hỏi</a>
                            </div>
                        </div>
                    </div>
                    <div className='boxtag'>
                        <div className='titletag'>
                            TỪ KHÓA TÌM KIẾM
                        </div>
                        <div className='tag'>
                            <span className='item'>
                                <a  title="tuyển sinh" class="tag1">tuyển sinh </a>
                            </span>
                            <span className='item'>
                                <a  title="thông tin tuyển sinh" class="tag5">thông tin tuyển sinh</a>
                            </span>
                            <span className='item'>
                            <a  title="tuyển sinh 2018" class="tag5"> tuyển sinh 2018</a>
                            </span>
                            <span className='item'>
                            <a  title="tuyển sinh 2019" class="tag6"> tuyển sinh 2019</a>
                            </span>
                            <span className='item'>
                            <a  title="tuyển sinh 2020" class="tag2"> tuyển sinh 2020</a>
                            </span>
                            <span className='item'>
                            <a  title="tuyển sinh đại học duy tân" class="tag2"> tuyển sinh đại học duy tân</a>
                            </span>
                            <span className='item'>
                            <a  title="tuyển sinh duy tân" class="tag6"> tuyển sinh duy tân</a>
                            </span>
                            <span className='item'>
                            <a  title="Đại học ngành kiến trúc Đà Nẵng tuyển sinh 2018" class="tag1"> Đại học ngành kiến trúc Đà Nẵng tuyển sinh 2018</a> 
                            </span>
                            <span className='item'>
                            <a  title="Đại học ngành kiến trúc Đà Nẵng tuyển sinh 2020" class="tag6"> Đại học ngành kiến trúc Đà Nẵng tuyển sinh 2020</a>
                            </span>
                            <span className='item'>
                            <a  title="học bổng" class="tag4"> học bổng</a>  
                            </span>
                            <span className='item'>
                            <a  title="đại học duy tân" class="tag2"> đại học duy tân</a> 
                            </span>
                        </div>
                    </div>
                    <div className='boxcounter'>
                        <div className='title'>
                            Thống kê
                        </div>
                        <div className='counter'>
                            <table border='0' cellPadding='0' cellSpacing='0' width='100%'>
                                <tbody>
                                    <tr>
                                        <td width='130px'>
                                            Số người online:
                                        </td>
                                        <td>2145</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Truy cập trong ngày:
                                        </td>
                                        <td>
                                            1689
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Truy cập trong tuần:
                                        </td>
                                        <td>
                                            49031
                                        </td>
                                    </tr><tr>
                                        <td>
                                            Tổng số lượt truy cập:
                                        </td>
                                        <td>                                            
                                            <span>
                                                3543036
                                            </span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className = 'main'>
                    <div className='thongbao'>
                        <div id='boxleft'>
                            <h4 className='title'>
                                <a title='Thông tin tuyển sinh 2020'>
                                    Thông tin Tuyển sinh Đại học 2020
                                </a>
                            </h4>
                            <p className='noidung'>
                                <a title='Thông tin tuyển sinh'>
                                    <img width='178px' height='95px' src={image18} alt=''/>
                                </a>
                            </p>
                        </div>
                        <div id='boxcenter'>
                            <h4 className='title'>
                                <a target='_blank' title='Ký túc xá Duy Tân'>
                                    KÝ TÚC XÁ
                                    
                                </a>
                            </h4>
                            <p className='noidung'>
                                <a target='_blank' title='Ký túc xá DTU'>
                                    <img width='178px' height='95px' src={image19} alt=''/> 
                                </a>
                            </p>
                        </div>
                        <div id='boxright'>
                            <h4 className='title'>
                                <a target='_blank' title='Tham quan DTU'>
                                    Tham quan DTU
                                    
                                </a>
                            </h4>
                            <p className='noidung'>
                                <a target='_blank' title='Tham quan Duy tân'>
                                    <img width='178px' height='95px' src={image20} alt=''/>
                                </a>
                            </p>
                        </div>
                    </div>
                    <a>.................................................................................................................................................    </a>
                    <img src={image21} alt="TS DTU"></img>
                    <div id='hedaotao'>
                        <div className='row1'>
                            <div className='box lbox'>
                                <div className='title'>
                                    <div id='left'> </div>
                                    <div id='right'> </div>
                                    <div id='center'>ĐẠI HỌC</div>
                                </div>
                                <ul className='khoahoc'>
                                    <li>
                                        <a title="ĐH Duy Tân công bố điểm TRÚNG TUYỂN theo kết quả thi THPT năm 2020">
                                            ĐH Duy Tân công bố điểm TRÚNG TUYỂN theo kết quả thi THPT năm 2020</a>
                                            
                                    </li>
                                    <li>
                                        <a title="Đại học Duy Tân công bố điểm sàn xét tuyển theo kết quả thi THPT năm 2020">
                                            Đại học Duy Tân công bố điểm sàn xét tuyển theo kết quả thi THPT năm 2020</a>
                                            
                                    </li>
                                    <li>
                                        <a title="Thông báo V/v điều chỉnh kế hoạch thi Vẽ Mỹ thuật (có cập nhật)">
                                            Thông báo V/v điều chỉnh kế hoạch thi Vẽ Mỹ thuật (có cập nhật)</a>
                                            
                                    </li>
                                    <li>
                                        <a title="Thông báo điều kiện nhập học theo phương thức xét học bạ">
                                            Thông báo điều kiện nhập học theo phương thức xét học bạ</a>

                                    </li>
                                    <li>
                                        <a title="Hướng dẫn Nhập học  tại ĐẠI HỌC DUY TÂN cho Tân sinh viên Khóa 2020 (K26)">
                                            Hướng dẫn Nhập học  tại ĐẠI HỌC DUY TÂN cho Tân sinh viên Khóa 2020 (K26)</a>
                                          
                                    </li>
                                    <li>
                                        <a title="Hướng dẫn Đăng ký &amp; Nhập học TRỰC TUYẾN">
                                            Hướng dẫn Đăng ký &amp; Nhập học TRỰC TUYẾN</a>
                                     
                                    </li>
                                </ul>
                                <a title='xem tiếp'>
                                <img class="more" src={image23} alt="more"/>
                                </a>
                            </div>
                            <div className='box rbox'>
                                <div className='title'>
                                    <div id='left'> </div>
                                    <div id='right'> </div>
                                    <div id='center'> SAU ĐẠI HỌC</div>
                                </div>
                                <ul className='khoahoc'>
                                    <li>                                        
                                        <a title="Lịch Ôn tập Cao học đợt 1 năm 2020"> Lịch Ôn tập Cao học đợt 1 năm 2020</a>
                                                                              
                                    </li>
                                    <li>
                                        <a title="Thông báo Tuyển sinh Cao học Đợt 1 năm 2020"> Thông báo Tuyển sinh Cao học Đợt 1 năm 2020</a>
                                        
                                    </li>
                                    <li>
                                        <a title="TB Tuyển sinh đào tạo trình độ Tiến Sĩ năm 2020"> TB Tuyển sinh đào tạo trình độ Tiến Sĩ năm 2020</a>
                                       
                                    </li>
                                    <li>
                                        <a title="Danh sách Miễn thi Ngoại ngữ Kỳ thi đầu vào cao học đợt 2/2019"> Danh sách Miễn thi Ngoại ngữ Kỳ thi đầu vào cao học đợt 2/2019</a>
                                        
                                    </li>
                                    <li>
                                        <a title="Đề cương ôn tập môn Tài chính Ngân hàng thi tuyển Cao học đợt 2/2019"> Đề cương ôn tập môn Tài chính Ngân hàng thi tuyển Cao học đợt 2/2019</a>
                                        
                                    </li>
                                    <li>
                                        <a title="Đề cương ôn tập môn Quản trị Kinh doanh thi tuyển Cao học đợt 2/2019"> Đề cương ôn tập môn Quản trị Kinh doanh thi tuyển Cao học đợt 2/2019</a>
                                        
                                    </li>
                                </ul>
                                <a title='xem tiếp'>
                                <img class="more" src={image23} alt="more"/>
                                </a>
                            </div>
                        </div>
                        <div className='row1'>
                            <div className='box lbox'>
                                <div className='title'>
                                    <div id='left'> </div>
                                    <div id='right'> </div>
                                    <div id='center'>CHƯƠNG TRÌNH QUỐC TẾ</div>
                                </div>
                                <ul className='khoahoc'>
                                    <li>
                                        <a title="CMU - Chương trình Công Nghệ Thông tin số 1 đến từ Mỹ">
                                            CMU - Chương trình Công Nghệ Thông tin số 1 đến từ Mỹ</a>
                                            
                                    </li>
                                    <li>
                                        <a title="PSU - Chương trình Tiên tiến Khối ngành Kinh tế Đẳng cấp nhất Việt Nam đến từ Mỹ">
                                            PSU - Chương trình Tiên tiến Khối ngành Kinh tế Đẳng cấp nhất Việt Nam đến từ Mỹ</a>
                                            
                                    </li>
                                    <li>
                                        <a title="CSU - Chương trình Tiên tiến Xây dựng và Kiến trúc Duy nhất tại Miền Trung">
                                            CSU - Chương trình Tiên tiến Xây dựng và Kiến trúc Duy nhất tại Miền Trung</a>
                                            
                                    </li>
                                    <li>
                                        <a title="Chương trình tiên tiến ngành Quản trị kinh doanh & Kế toán đẳng cấp nhất Việt Nam đến từ Hoa Kỳ">
                                            Chương trình tiên tiến ngành Quản trị kinh doanh & Kế toán đẳng cấp nhất Việt Nam đến từ Hoa Kỳ</a>
                                            
                                    </li>
                                    <li>
                                        <a title="Chương trình Quốc tế - Học phí Việt Nam">
                                        Chương trình Quốc tế - Học phí Việt Nam</a>
                                            
                                    </li>
                                    <li>
                                        <a title="Carnegie Mellon - ngôi trường của những học giả Nobel">
                                            Carnegie Mellon - ngôi trường của những học giả Nobel</a>
                                            
                                    </li>
                                </ul>
                                <a title='xem tiếp'>
                                <img class="more" src={image23} alt="more"/>
                                </a>
                            </div>
                            <div className='box rbox'>
                                <div className='title'>
                                    <div id='left'> </div>
                                    <div id='right'> </div>
                                    <div id='center'> DU HỌC & DU HỌC NƯỚC NGOÀI</div>
                                </div>
                                <ul className='khoahoc'>
                                    <li>                                        
                                        <a title="Chương trình Liên kết Du học Hoa kỳ (MC 2+2)"> Chương trình Liên kết Du học Hoa kỳ (MC 2+2)</a>
                                                                              
                                    </li>
                                    <li>
                                        <a title="Chương trình Liên kết Du học Sau Đại học tại Singapore" > Chương trình Liên kết Du học Sau Đại học tại Singapore</a>
                                        
                                    </li>
                                    <li>
                                        <a title="Chương trình Liên kết Du học Singapore 1+1"> Chương trình Liên kết Du học Singapore 1+1</a>
                                        
                                    </li>
                                    <li>
                                        <a title="Chương trình Liên kết Du học Hoa kỳ (ASU 2+2)"> Chương trình Liên kết Du học Hoa kỳ (ASU 2+2)</a>
                                        
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='row1'>
                            <div className='box lbox'>
                                <div className='title'>
                                    <div id='left'> </div>
                                    <div id='right'> </div>
                                    <div id='center'>HỆ BẰNG 2, TỪ XA & VỪA LÀM VỪA HỌC</div>
                                </div>
                                <ul className='khoahoc'>
                                    <li>
                                        <a title="Thông báo Tuyển sinh Đại học hệ Văn bằng thứ 2 chính quy - năm 2020">
                                            Thông báo Tuyển sinh Đại học hệ Văn bằng thứ 2 chính quy - năm 2020</a>
                                            
                                    </li>
                                    <li>
                                        <a title="Thông báo Tuyển sinh Cử nhân Đại học Trực tuyến (Hệ từ xa) năm 20200">
                                            Thông báo Tuyển sinh Cử nhân Đại học Trực tuyến (Hệ từ xa) năm 2020</a>
                                            
                                    </li>
                                    <li>
                                        <a title="Thông báo Tuyển sinh Đại học hệ Văn bằng thứ 2 chính quy - năm 2019">
                                            Thông báo Tuyển sinh Đại học hệ Văn bằng thứ 2 chính quy - năm 2019</a>
                                
                                    </li>
                                    <li>
                                        <a title="Thông báo Tuyển sinh Cử nhân Đại học Trực tuyến (Hệ từ xa) năm 2019">
                                            Thông báo Tuyển sinh Cử nhân Đại học Trực tuyến (Hệ từ xa) năm 2019
                                            </a>
                                        
                                    </li>
                                    <li>
                                        <a title="Tuyển sinh chương trình Đại học Văn bằng 2 hệ chính quy đợt tháng 10 năm 2018">
                                            Tuyển sinh chương trình Đại học Văn bằng 2 hệ chính quy đợt tháng 10 năm 2018
                                            </a>
                                            
                                    </li>
                                    <li>
                                        <a  title="THÔNG BÁO TUYỂN SINH VĂN BẰNG 2 CHÍNH QUY NĂM 2018">
                                            THÔNG BÁO TUYỂN SINH VĂN BẰNG 2 CHÍNH QUY NĂM 2018</a>
                                       
                                    </li>
                                </ul>
                                <a title='xem tiếp'>
                                <img class="more" src={image23} alt="more"/>
                                </a>
                            </div>
                            <div className='box rbox'>
                                <div className='title'>
                                    <div id='left'> </div>
                                    <div id='right'> </div>
                                    <div id='center'> LIÊN THÔNG ĐẠI HỌC</div>
                                </div>
                                <ul className='khoahoc'>
                                    <li>                                        
                                        <a title="Kết quả thi tuyển sinh Liên thông đợt 1 năm 2020 - môn Hoá phân tích "> Kết quả thi tuyển sinh Liên thông đợt 1 năm 2020 - môn Hoá phân tích </a>
                                                        
                                    </li>
                                    <li>
                                        <a title="Kết quả thi tuyển sinh Liên thông đợt 1 năm 2020 - Môn Toán "> Kết quả thi tuyển sinh Liên thông đợt 1 năm 2020 - Môn Toán </a>
                                        
                                    </li>
                                    <li>
                                        <a title="Kết quả thi tuyển sinh Liên thông đợt 1 năm 2020 - Môn Chuyên ngành "> Kết quả thi tuyển sinh Liên thông đợt 1 năm 2020 - Môn Chuyên ngành </a>
                                        
                                    </li>
                                    <li>
                                        <a  title="Lịch ôn thi Liên thông đợt 1/2020"> Lịch ôn thi Liên thông đợt 1/2020</a>
                                        
                                    </li>
                                    <li>
                                        <a title="Thông báo V/v điều chỉnh kế hoạch tuyển sinh Liên thông và thi Vẽ Mỹ thuật (có cập nhật)"> Thông báo V/v điều chỉnh kế hoạch tuyển sinh Liên thông và thi Vẽ Mỹ thuật (có cập nhật)</a>
                                        
                                    </li>
                                    <li>
                                        <a title="Thông báo V/v điều chỉnh kế hoạch tuyển sinh liên thông và thi Vẽ Mỹ thuật"> Thông báo V/v điều chỉnh kế hoạch tuyển sinh liên thông và thi Vẽ Mỹ thuật</a>
                                    
                                    </li>
                                </ul>
                                <a title='xem tiếp'>
                                <img class="more" src={image23} alt="more"/>
                                </a>
                            </div>                            
                        </div>                                           
                        <div className='row1'>
                            <div className='box lbox'>
                                <div className='title'>
                                    <div id='left'> </div>
                                    <div id='right'> </div>
                                    <div id='center'>CÁC CHƯƠNG TRÌNH KHÁC</div>
                                </div>
                                <ul className='khoahoc'>
                                    <li>
                                        <a  title="Tuyển sinh Du học mùa Hè Mỹ 2019">
                                                Tuyển sinh Du học mùa Hè Mỹ 2019</a>
                                            
                                    </li>
                                    <li>
                                        <a  title="Tuyển sinh Du học Đài Loan (Vừa học vừa làm)">
                                                Tuyển sinh Du học Đài Loan (Vừa học vừa làm)</a>
                                            
                                    </li>
                                </ul>
                            </div>
                            <img src={image21} alt='tuyển sinh' width='560px'/>
                            <div className='tintuc'>
                                <h2 id='tintucts'>
                                    Tin tức Tuyển sinh 2020
                                </h2>
                                <ul className='noidung'>
                                    <li>
                                    <a  title="Nam sinh mê thể thao đạt 27,25/30 điểm là tân sinh viên Đại học Duy Tân">
                                        Nam sinh mê thể thao đạt 27,25/30 điểm là tân sinh viên Đại học Duy Tân</a>
                                    <em>
                                        (02/10/2020 08:11:57)
                                    </em>
                                    </li>
                                    <li>
                                    <a  title="Học sinh giỏi cấp thành phố tuyển thẳng vào ĐH Duy Tân">
                                        Học sinh giỏi cấp thành phố tuyển thẳng vào ĐH Duy Tân</a>
                                    <em>
                                        (17/09/2020 03:15:02)
                                    </em>
                                    </li>
                                    <li>
                                    <a  title="Duy Tân đạt kiểm định ABET của Mỹ, chương trình Công nghệ KT Điện-Điện tử">
                                        Duy Tân đạt kiểm định ABET của Mỹ, chương trình Công nghệ KT Điện-Điện tử</a>
                                    <em>
                                        (17/09/2020 02:30:39)
                                    </em>
                                    </li>
                                    <li>
                                    <a  title="ĐH Duy Tân tuyển sinh ngành học mới ngôn ngữ Hàn Quốc năm 2020 ">
                                        ĐH Duy Tân tuyển sinh ngành học mới ngôn ngữ Hàn Quốc năm 2020 </a>
                                    <em>
                                        (31/07/2020 01:31:55)
                                    </em>
                                    </li>
                                    <li>
                                    <a  title="216 SV Y khoa ĐH Duy Tân hoàn thành Thực tập tại BV T.Ư Huế ">
                                        216 SV Y khoa ĐH Duy Tân hoàn thành Thực tập tại BV T.Ư Huế </a>
                                    <em>
                                        (30/07/2020 02:56:33)
                                    </em>
                                    </li>
                                </ul>
                                <a  title='xem tiếp'>
                                <img class="more" src={image24} alt="more"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Content;