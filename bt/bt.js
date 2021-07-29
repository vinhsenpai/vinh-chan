const info=document.querySelector('div.in4')

const pic=document.createElement('img')
pic.src="https://salt.tikicdn.com/cache/w444/ts/product/fc/c4/05/8f045d329b30a206f77d1916acdbea9c.jpg"

const tensach=document.createElement('h1')
tensach.innerText="MÁU - Albert Ludd"

const tomtat=document.createElement('h2')
tomtat.innerText="1.Nội dung tác phẩm"

const tt1=document.createElement('p')
tt1.innerText="Albert Ludd là một người đàn ông kinh khủng và đê tiện. Ông ta đặt biệt danh cho con mình bằng những từ ngữ gớm ghiếc, đầy mỉa mai; đổ nước xốt lên mặt vợ chỉ vì một chuyện nhỏ mà ông ta không hài lòng; công khai tằng tịu với nhiều ả đĩ điếm – lạm dụng và lợi dụng các bệnh nhân của mình để thoả mãn nhục dục.Cho đến một ngày, cảnh sát phát hiện thân thể đẫm máu của ông ta ngay trên giường ngủ. Và Monica Ludd, cô con gái đã công khai chống lại cha mình giữa đám đông bị rơi vào mối nghi ngờ vì những chứng cứ khó giải thích.Bằng các chi tiết truyện chặt chẽ và lối viết đánh lừa, Maggie Gee đã thành công mang đến một cú twist kinh hoàng sau những tình tiết đầy góc khuất, đưa độc giả đi từ bất ngờ này đến sững sờ khác. “Máu” là câu chuyện phần nào thay lời những đứa trẻ lớn lên trong gia đình đầy bạo lực và tổn thương mà chỉ có chúng mới hiểu “tuổi trẻ dữ dội” đó thực sự đã trải qua như thế nào.Lấy bối cảnh nước Anh đầy bức bối trong thực trạng Brexit, khủng bố bạo loạn xảy ra như cơm bữa, “Máu” còn là dòng ngỏ về bạo lực và cách chấm dứt bạo lực, phần nào phản ánh góc nhìn chính trị của tác giả trong xã hội châu Âu đầy biến động."

const tacgia=document.createElement('h2')
tacgia.innerText="2.Tác giả"

const tt2=document.createElement('p')
tt2.innerText="Maggie Gee (sinh năm 1948): là nhà văn người Anh. Bà là nữ Chủ tịch đầu tiên của Hiệp hội văn học Hoàng gia (RSL, nhiệm kỳ 2004-2008). Bà là giáo sư về Viết sáng tạo tại Đại học Bath Spa và kiến thức về tiểu thuyết thế kỷ 20, 21. Hiện bà đang sống tại Anh cùng với chồng.ính đến nay, Maggie Gee đã có 15 tác phẩm, trong đó là 13 tiểu thuyết và nhận được nhiều lời khen ngợi. Tác phẩm của bà đã được dịch ra 15 thứ tiếng. “Máu” là cuốn tiểu thuyết mới nhất, xuất bản năm 2019."

info.appendChild(tensach)
info.appendChild(pic)
info.appendChild(tomtat)
info.appendChild(tt1)
info.appendChild(tacgia)
info.appendChild(tt2)

tensach.className="tensach"
tomtat.className="tomtat"
tacgia.className="tacgia"
tt1.className="tt"
tt2.className="tt"
pic.className="img"

