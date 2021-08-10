import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {
  dataCarosel = [
    {
      title: 'Xưởng sản xuất',
      text: ` Hệ thống phân phối gạch men và vật liệu xây dựng, trang trí nội thất của công ty Ngọc Lâm
    với đội xe và bốc xếp chuyên nghiệp phục vụ khách hàng đến chân công trình, với đội ngũ nhân
    viên cung ứng giàu kinh nghiệm và am hiểu vật liệu xây dựng.Mặt hàng kinh doanh có hơn 300
    nhóm hàng vật liệu xây dựng như gạch men, sơn, thiết bị vệ sinh, vật liệu trang trí nội
    ngoại thất hoàn hảo… với hơn 3000 mặt hàng chi tiết theo nhóm hàng kinh doanh.`,
      img: '/assets/about-us/crs-1.jpg'
    },
    {
      title: 'Vật Liệu Xây Dựng Ngọc Lâm',
      text: `Các sản phẩm mà công ty chúng tôi sản xuất và phân phối từ Gạch,
       cát, đá, xi măng, sắt, thép, gạch men, thiết bị xây dựng, dụng cụ thi công…
        Công ty được sáng lập bởi các cổ đông có nhiều năm kinh nghiệm trong lĩnh vực thiết kế kiến trúc,
         thi công xây dựng và cung cấp VLXD & TT NNT hàng đầu tại Đà Nẵng, Hội An, Quảng Nam, Quy Nhơn và
          các tỉnh thành khu vực Miền Trung, Tây Nguyên.`,
      img: '/assets/about-us/crs-2.png'
    }
  ];
  cards = [
    {
    name: 'Alison Fletcher',
    position: 'CEO & Founder',
    avt: '/assets/about-us/avt1.jpg'
  },
  {
    name: 'White Grey',
    position: 'Secretary',
    avt: '/assets/about-us/avt2.jpg'
  },
  {
    name: 'Joe Wilson',
    position: 'Accountant',
    avt: '/assets/about-us/avt3.jpg'
  },
  {
    name: 'Kevin Smith',
    position: 'Manager',
    avt: '/assets/about-us/avt4.jpg'
  },
  ];
  effect = 'scrollx';

  constructor() { }

  ngOnInit(): void {
  }
}
