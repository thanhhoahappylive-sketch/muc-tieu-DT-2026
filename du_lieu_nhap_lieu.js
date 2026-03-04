/**
 * DỮ LIỆU NHẬP LIÊU BÁO CÁO DOANH THU
 * Hàng tháng bạn chỉ cần cập nhật số liệu vào các biến dưới đây.
 */

const dashboardData = {
  // 1. TỔNG HỢP MỤC TIÊU (Dùng cho Summary Cards và Bảng chính)
  summary: {
    tong_cong: { value: "701.118.000đ", change: "+27,67%", isUp: true },
    dau_tu: { value: "523.290.000đ", change: "+28,77%", isUp: true },
    kinh_doanh: { value: "33.936.000đ", change: "+43,11%", isUp: true },
    ptbt: { value: "141.892.000đ", change: "+19,16%", isUp: true }
  },

  // 2. DỮ LIỆU BIỂU ĐỒ YOY (12 THÁNG)
  // Cập nhật số liệu thực tế tháng mới vào mảng 2026. Tháng chưa có để 'null'
  yoy: {
    tong: {
      data2025: [458351000, 559236000, 874170000, 689627000, 696090000, 628545000, 721775000, 998328000, 874379000, 711081000, 695932000, 791889000],
      data2026: [634175000, 549181000, null, null, null, null, null, null, null, null, null, null]
    },
    dauTu: {
      data2025: [312212000, 381191000, 689678000, 479554000, 499578000, 453575000, 559130000, 771969000, 673785000, 559604000, 559453000, 535031000],
      data2026: [439873000, 406389000, null, null, null, null, null, null, null, null, null, null]
    },
    kinhDoanh: {
      data2025: [54005000, 56370000, 57681000, 53241000, 50727000, 38085000, 38496000, 44063000, 49771000, 48591000, 36414000, 43621000],
      data2026: [29912000, 23714000, null, null, null, null, null, null, null, null, null, null]
    },
    ptbt: {
      data2025: [90417000, 120311000, 124794000, 155214000, 142353000, 136250000, 121963000, 176327000, 149746000, 102028000, 100016000, 211351000],
      data2026: [160306000, 119078000, null, null, null, null, null, null, null, null, null, null]
    }
  },

  // 3. DỮ LIỆU TỶ TRỌNG (PIE CHART)
  // [ĐT, KD, PTBT, Khác]
  pieData: [523290000, 33936000, 141892000, 2000000],

  // 4. CHI TIẾT TỪNG ĐẦU SÁCH
  bookDetails: {
    dt: [
      { "stt": 1, "ten_hang": "Ngày Đòi Nợ", "top": 1, "tb_3t": 89, "thang_truoc": 100, "nam_truoc": 54, "muc_tieu": 125, "doanh_thu": 37375000 },
      { "stt": 2, "ten_hang": "Cách thức kinh doanh và đầu cơ cổ phiếu!", "top": 1, "tb_3t": 84, "thang_truoc": 100, "nam_truoc": 33, "muc_tieu": 110, "doanh_thu": 38390000 },
      { "stt": 3, "ten_hang": "Tuyệt Kỹ Giao dịch bằng đồ thị nến Nhật", "top": 1, "tb_3t": 70, "thang_truoc": 73, "nam_truoc": 101, "muc_tieu": 90, "doanh_thu": 44910000 },
      { "stt": 4, "ten_hang": "Làm giàu từ chứng khoán bằng phương pháp VSA chính gốc", "top": 1, "tb_3t": 74, "thang_truoc": 76, "nam_truoc": 58, "muc_tieu": 80, "doanh_thu": 39920000 },
      { "stt": 5, "ten_hang": "Bộ sách Làm Giàu Từ Chứng Khoán", "top": 1, "tb_3t": 70, "thang_truoc": 71, "nam_truoc": 61, "muc_tieu": 80, "doanh_thu": 56000000 },
      { "stt": 6, "ten_hang": "Phù thủy giao dịch chứng khoán", "top": 1, "tb_3t": 43, "thang_truoc": 44, "nam_truoc": 6, "muc_tieu": 55, "doanh_thu": 27445000 },
      { "stt": 7, "ten_hang": "Damn Right! - Viên mãn bí ẩn về tỷ phú Charlie Munger", "top": 1, "tb_3t": 34, "thang_truoc": 33, "nam_truoc": 6, "muc_tieu": 40, "doanh_thu": 11960000 },
      { "stt": 8, "ten_hang": "Basic Economics: Kinh tế học cơ bản", "top": 2, "tb_3t": 32, "thang_truoc": 33, "nam_truoc": 40, "muc_tieu": 40, "doanh_thu": 22760000 },
      { "stt": 9, "ten_hang": "The Simple Path to Wealth", "top": 2, "tb_3t": 30, "thang_truoc": 41, "nam_truoc": 12, "muc_tieu": 35, "doanh_thu": 10465000 },
      { "stt": 10, "ten_hang": "Wyckoff 2.0", "top": 1, "tb_3t": 29, "thang_truoc": 20, "nam_truoc": 23, "muc_tieu": 30, "doanh_thu": 14970000 },
      { "stt": 11, "ten_hang": "Kỹ thuật giao dịch để Kiếm tiền hàng ngày", "top": 1, "tb_3t": 35, "thang_truoc": 26, "nam_truoc": 76, "muc_tieu": 30, "doanh_thu": 8940000 },
      { "stt": 12, "ten_hang": "Điều Quan Trọng Nhất", "top": 2, "tb_3t": 23, "thang_truoc": 15, "nam_truoc": 26, "muc_tieu": 30, "doanh_thu": 8970000 },
      { "stt": 13, "ten_hang": "Fibonacci Trading", "top": 2, "tb_3t": 27, "thang_truoc": 30, "nam_truoc": 26, "muc_tieu": 30, "doanh_thu": 8970000 },
      { "stt": 14, "ten_hang": "Hướng Dẫn Giao Dịch Theo Sóng Elliot - Bản mới", "top": 1, "tb_3t": 28, "thang_truoc": 22, "nam_truoc": 24, "muc_tieu": 25, "doanh_thu": 11725000 },
      { "stt": 15, "ten_hang": "Bộ sách Bách khoa toàn thư về các mẫu hình biểu đồ", "top": 2, "tb_3t": 16, "thang_truoc": 19, "nam_truoc": 189, "muc_tieu": 25, "doanh_thu": 37425000 },
      { "stt": 16, "ten_hang": "Người đàn ông đánh bại mọi thị trường", "top": 2, "tb_3t": 20, "thang_truoc": 9, "nam_truoc": 12, "muc_tieu": 20, "doanh_thu": 6980000 },
      { "stt": 17, "ten_hang": "Các phương pháp giao dịch ngắn hạn hiệu quả trên thị trường Forex", "top": 2, "tb_3t": 21, "thang_truoc": 12, "nam_truoc": 54, "muc_tieu": 20, "doanh_thu": 5980000 },
      { "stt": 18, "ten_hang": "Trend Following", "top": 2, "tb_3t": 19, "thang_truoc": 14, "nam_truoc": 28, "muc_tieu": 20, "doanh_thu": 11980000 },
      { "stt": 19, "ten_hang": "Cách kiếm lợi nhuận 18.000% từ thị trường chứng khoán", "top": 2, "tb_3t": 88, "thang_truoc": 15, "nam_truoc": 12, "muc_tieu": 20, "doanh_thu": 9980000 },
      { "stt": 20, "ten_hang": "Hệ thống giao dịch Ichimoku Charts", "top": 2, "tb_3t": 20, "thang_truoc": 14, "nam_truoc": 13, "muc_tieu": 15, "doanh_thu": 4950000 },
      { "stt": 21, "ten_hang": "Bộ sách giao dịch theo Wyckoff", "top": 2, "tb_3t": 21, "thang_truoc": 13, "nam_truoc": 13, "muc_tieu": 15, "doanh_thu": 14970000 },
      { "stt": 22, "ten_hang": "Nghệ thuật đầu tư Dhandho", "top": 2, "tb_3t": 15, "thang_truoc": 11, "nam_truoc": 9, "muc_tieu": 15, "doanh_thu": 3570000 },
      { "stt": 23, "ten_hang": "The Art and Science of Technical Analysis", "top": 2, "tb_3t": 12, "thang_truoc": 7, "nam_truoc": 14, "muc_tieu": 12, "doanh_thu": 6828000 },
      { "stt": 24, "ten_hang": "Super Trader, Expanded Edition", "top": 2, "tb_3t": 8, "thang_truoc": 7, "nam_truoc": 27, "muc_tieu": 10, "doanh_thu": 3990000 },
      { "stt": 25, "ten_hang": "Phân tích mẫu hình biểu đồ", "top": 2, "tb_3t": 3, "thang_truoc": 1, "nam_truoc": 40, "muc_tieu": 5, "doanh_thu": 1740000 },
      { "stt": 26, "ten_hang": "Lạc Quan Tếu", "top": "-", "tb_3t": 5, "thang_truoc": 6, "nam_truoc": 25, "muc_tieu": 5, "doanh_thu": 1495000 },
      { "stt": 27, "ten_hang": "Bollinger on Bollinger Bands", "top": "-", "tb_3t": 9, "thang_truoc": 10, "nam_truoc": 22, "muc_tieu": 5, "doanh_thu": 1745000 },
      { "stt": 28, "ten_hang": "Các phù thủy chứng khoán ẩn danh", "top": "-", "tb_3t": 6, "thang_truoc": 7, "nam_truoc": 13, "muc_tieu": 5, "doanh_thu": 2845000 },
      { "stt": 30, "ten_hang": "Những sự thật và ngụy biện trong kinh tế học", "top": "-", "tb_3t": 8, "thang_truoc": 3, "nam_truoc": 0, "muc_tieu": 5, "doanh_thu": 1995000 },
      { "stt": 31, "ten_hang": "Lột xác để trở thành nhà đầu tư giá trị", "top": "-", "tb_3t": 7, "thang_truoc": 8, "nam_truoc": 5, "muc_tieu": 5, "doanh_thu": 1340000 },
      { "stt": 32, "ten_hang": "Kỹ thuật giao dịch NÂNG CAO", "top": "-", "tb_3t": 6, "thang_truoc": 7, "nam_truoc": 6, "muc_tieu": 5, "doanh_thu": 1795000 },
      { "stt": 33, "ten_hang": "Bộ Sách Giao Dịch Để Kiếm Tiền Hàng Ngày", "top": "-", "tb_3t": 4, "thang_truoc": 3, "nam_truoc": 4, "muc_tieu": 5, "doanh_thu": 3285000 },
      { "stt": 34, "ten_hang": "Blockchain: Bước ngoặt lịch sử hay chỉ là bong bóng?", "top": "-", "tb_3t": 2, "thang_truoc": null, "nam_truoc": 12, "muc_tieu": 5, "doanh_thu": 1945000 },
      { "stt": 38, "ten_hang": "Bộ Sách Nhập Môn Kungfu Chứng khoán 2.0", "top": "-", "tb_3t": 3, "thang_truoc": 2, "nam_truoc": 1, "muc_tieu": 3, "doanh_thu": 6201000 },
      { "stt": 42, "ten_hang": "Bộ Sách Nhập Môn Kungfu Chứng khoán", "top": "-", "tb_3t": 1, "thang_truoc": null, "nam_truoc": null, "muc_tieu": 3, "doanh_thu": 4494000 },
      { "stt": 43, "ten_hang": "Bộ sách - Giải pháp ESG", "top": "-", "tb_3t": 2, "thang_truoc": 4, "nam_truoc": null, "muc_tieu": 2, "doanh_thu": 1996000 },
      { "stt": 44, "ten_hang": "Nguyên tắc Môi trường, Xã hội và Quản trị (ESG)", "top": "-", "tb_3t": 2, "thang_truoc": 2, "nam_truoc": null, "muc_tieu": 2, "doanh_thu": 998000 },
      { "stt": 45, "ten_hang": "Bộ sách Phân tích kỹ thuật kiếm tiền mọi thị trường", "top": "-", "tb_3t": 2, "thang_truoc": 1, "nam_truoc": null, "muc_tieu": 2, "doanh_thu": 5190000 },
      { "stt": 46, "ten_hang": "Bộ sách Đầu tư giá trị từ A đến Z", "top": "-", "tb_3t": 2, "thang_truoc": 2, "nam_truoc": null, "muc_tieu": 2, "doanh_thu": 2308000 },
      { "stt": 47, "ten_hang": "Phương pháp định lượng trong tài chính ESG", "top": "-", "tb_3t": 2, "thang_truoc": 2, "nam_truoc": null, "muc_tieu": 2, "doanh_thu": 998000 },
      { "stt": 48, "ten_hang": "Bộ sách Tinh hoa chứng khoán", "top": "-", "tb_3t": 1, "thang_truoc": null, "nam_truoc": null, "muc_tieu": 1, "doanh_thu": 2653000 },
      { "stt": 49, "ten_hang": "Bộ sách Phân tích kỹ thuật thực chiến", "top": "-", "tb_3t": 1, "thang_truoc": null, "nam_truoc": null, "muc_tieu": 1, "doanh_thu": 1499000 },
      { "stt": 50, "ten_hang": "Bộ sách Giao dịch theo xu hướng đánh bại thị trường", "top": "-", "tb_3t": 1, "thang_truoc": null, "nam_truoc": 1, "muc_tieu": 1, "doanh_thu": 1199000 },
      { "stt": 51, "ten_hang": "Bộ sách Phân tích kỹ thuật cơ bản 2024", "top": "-", "tb_3t": null, "thang_truoc": null, "nam_truoc": null, "muc_tieu": 1, "doanh_thu": 2495000 },
      { "stt": 53, "ten_hang": "Bộ Sách Tuyệt Đỉnh Kungfu Chứng khoán 2023", "top": "-", "tb_3t": null, "thang_truoc": null, "nam_truoc": null, "muc_tieu": 1, "doanh_thu": 9963000 },
      { "stt": 54, "ten_hang": "Bộ sách Trí tuệ tỷ đô của các bậc thầy đầu tư", "top": "-", "tb_3t": 1, "thang_truoc": 1, "nam_truoc": null, "muc_tieu": 1, "doanh_thu": 1246000 },
      { "stt": 55, "ten_hang": "Bộ Sách Phân Tích Kỹ Thuật Toàn Diện 2023", "top": "-", "tb_3t": null, "thang_truoc": null, "nam_truoc": 2, "muc_tieu": 1, "doanh_thu": 5968000 },
      { "stt": 56, "ten_hang": "Bộ Sách Đầu Tư Hiệu Quả Trong Thị Trường Forex", "top": "-", "tb_3t": null, "thang_truoc": null, "nam_truoc": 1, "muc_tieu": 1, "doanh_thu": 3082000 },
      { "stt": 57, "ten_hang": "Bộ sách Đầu tư giá trị toàn tập 2023", "top": "-", "tb_3t": null, "thang_truoc": null, "nam_truoc": null, "muc_tieu": 1, "doanh_thu": 3567000 }
    ],
    kd: [
      { "stt": 1, "ten_hang": "Siêu Cò", "top": 1, "tb_3t": 28, "thang_truoc": 20, "nam_truoc": 42, "muc_tieu": 30, "doanh_thu": 7470000 },
      { "stt": 2, "ten_hang": "Marketing giỏi phải kiếm được tiền", "top": 1, "tb_3t": 15, "thang_truoc": 10, "nam_truoc": 48, "muc_tieu": 20, "doanh_thu": 5980000 },
      { "stt": 3, "ten_hang": "Bộ sách Di Sản Alan Phan", "top": 1, "tb_3t": 14, "thang_truoc": 11, "nam_truoc": 22, "muc_tieu": 15, "doanh_thu": 7740000 },
      { "stt": 4, "ten_hang": "Linh hồn của tiền", "top": 1, "tb_3t": 10, "thang_truoc": 7, "nam_truoc": 10, "muc_tieu": 10, "doanh_thu": 2490000 },
      { "stt": 5, "ten_hang": "Thuật lãnh đạo nơi công sở", "top": 1, "tb_3t": 5, "thang_truoc": null, "nam_truoc": 3, "muc_tieu": 3, "doanh_thu": 747000 },
      { "stt": 6, "ten_hang": "Lãnh đạo là ngôn ngữ", "top": 1, "tb_3t": 2, "thang_truoc": 1, "nam_truoc": 1, "muc_tieu": 3, "doanh_thu": 1047000 },
      { "stt": 7, "ten_hang": "Xoay chuyển con tàu", "top": 1, "tb_3t": 2, "thang_truoc": 2, "nam_truoc": 1, "muc_tieu": 3, "doanh_thu": 897000 },
      { "stt": 8, "ten_hang": "Nuốt cá lớn", "top": 1, "tb_3t": 2, "thang_truoc": 2, "nam_truoc": 3, "muc_tieu": 3, "doanh_thu": 507000 },
      { "stt": 9, "ten_hang": "Nước Cờ Lớn", "top": 1, "tb_3t": 2, "thang_truoc": 3, "nam_truoc": 4, "muc_tieu": 3, "doanh_thu": 897000 },
      { "stt": 10, "ten_hang": "Siêu sao nơi công sở", "top": "-", "tb_3t": 3, "thang_truoc": null, "nam_truoc": null, "muc_tieu": 3, "doanh_thu": 747000 },
      { "stt": 11, "ten_hang": "Dành tặng doanh nhân Việt", "top": 1, "tb_3t": 5, "thang_truoc": 4, "nam_truoc": 11, "muc_tieu": 3, "doanh_thu": 597000 },
      { "stt": 12, "ten_hang": "Hệ thống bán hàng đỉnh cao", "top": 1, "tb_3t": 2, "thang_truoc": 2, "nam_truoc": 5, "muc_tieu": 1, "doanh_thu": 328000 },
      { "stt": 13, "ten_hang": "Bộ sách Khởi sự - Khởi nghiệp", "top": 2, "tb_3t": 3, "thang_truoc": 3, "nam_truoc": 2, "muc_tieu": 1, "doanh_thu": 953000 },
      { "stt": 14, "ten_hang": "Bộ sách Marketing - Bán Hàng", "top": 2, "tb_3t": 1, "thang_truoc": null, "nam_truoc": 5, "muc_tieu": 1, "doanh_thu": 627000 },
      { "stt": 15, "ten_hang": "Bộ sách Kinh doanh bất bại", "top": "-", "tb_3t": 2, "thang_truoc": 1, "nam_truoc": 2, "muc_tieu": 1, "doanh_thu": 598000 },
      { "stt": 16, "ten_hang": "Combo sách Góc Nhìn Alan", "top": "-", "tb_3t": 2, "thang_truoc": 2, "nam_truoc": 2, "muc_tieu": 1, "doanh_thu": 368000 },
      { "stt": 18, "ten_hang": "Cải tiến trước - Phát kiến sau", "top": "-", "tb_3t": 2, "thang_truoc": null, "nam_truoc": 1, "muc_tieu": 1, "doanh_thu": 299000 },
      { "stt": 19, "ten_hang": "Bộ sách ÁT CHỦ BÀI công sở", "top": "-", "tb_3t": 3, "thang_truoc": null, "nam_truoc": 1, "muc_tieu": 1, "doanh_thu": 498000 },
      { "stt": 20, "ten_hang": "Bộ sách Làm Chủ Đồng Tiền", "top": "-", "tb_3t": 1, "thang_truoc": 1, "nam_truoc": 1, "muc_tieu": 1, "doanh_thu": 498000 },
      { "stt": 21, "ten_hang": "Bộ sách Lãnh Đạo Bằng Ngôn Ngữ", "top": "-", "tb_3t": 1, "thang_truoc": null, "nam_truoc": null, "muc_tieu": 1, "doanh_thu": 648000 }
    ],
    ptbt: [
      { "stt": 1, "ten_hang": "Bí mật của Phan Thiên Ân", "top": 1, "tb_3t": 140, "thang_truoc": 65, "nam_truoc": 118, "muc_tieu": 110, "doanh_thu": 75900000 },
      { "stt": 2, "ten_hang": "Trở nên phi thường", "top": 1, "tb_3t": 73, "thang_truoc": 63, "nam_truoc": 82, "muc_tieu": 70, "doanh_thu": 24430000 },
      { "stt": 3, "ten_hang": "Phá bỏ thói quen", "top": 1, "tb_3t": 65, "thang_truoc": 45, "nam_truoc": 95, "muc_tieu": 65, "doanh_thu": 19435000 },
      { "stt": 4, "ten_hang": "Bạn là nhà giả dược", "top": 1, "tb_3t": 56, "thang_truoc": 47, "nam_truoc": 37, "muc_tieu": 55, "doanh_thu": 19195000 },
      { "stt": 5, "ten_hang": "Tiền Bạc Và Luật Hấp Dẫn", "top": 1, "tb_3t": 25, "thang_truoc": 12, "nam_truoc": null, "muc_tieu": 20, "doanh_thu": 4980000 },
      { "stt": 6, "ten_hang": "Vòng Xoáy", "top": 1, "tb_3t": 26, "thang_truoc": 11, "nam_truoc": null, "muc_tieu": 25, "doanh_thu": 6225000 },
      { "stt": 7, "ten_hang": "Tiny Habits: Thói quen tí hon", "top": 1, "tb_3t": 19, "thang_truoc": 16, "nam_truoc": 11, "muc_tieu": 20, "doanh_thu": 5980000 },
      { "stt": 8, "ten_hang": "Sức mạnh kỳ diệu của ý định", "top": 1, "tb_3t": 16, "thang_truoc": 12, "nam_truoc": null, "muc_tieu": 15, "doanh_thu": 3735000 },
      { "stt": 9, "ten_hang": "Từ Tâm Trí đến Vật Chất", "top": 1, "tb_3t": 18, "thang_truoc": 14, "nam_truoc": 14, "muc_tieu": 20, "doanh_thu": 5980000 },
      { "stt": 10, "ten_hang": "Yêu Cầu Đúng, Nhận Đủ", "top": 1, "tb_3t": 12, "thang_truoc": 5, "nam_truoc": null, "muc_tieu": 15, "doanh_thu": 3735000 },
      { "stt": 11, "ten_hang": "Sức Mạnh Kỳ Diệu Của Cảm Xúc", "top": 1, "tb_3t": 16, "thang_truoc": 15, "nam_truoc": null, "muc_tieu": 15, "doanh_thu": 3735000 },
      { "stt": 12, "ten_hang": "Sổ tay thực hành 66 Ngày", "top": "-", "tb_3t": 19, "thang_truoc": 8, "nam_truoc": 6, "muc_tieu": 10, "doanh_thu": 890000 },
      { "stt": 13, "ten_hang": "Bộ sách sức mạnh tâm thức", "top": "-", "tb_3t": 12, "thang_truoc": 14, "nam_truoc": 15, "muc_tieu": 10, "doanh_thu": 12960000 },
      { "stt": 14, "ten_hang": "101 Lời khuyên tài chính cá nhân", "top": 2, "tb_3t": 8, "thang_truoc": 8, "nam_truoc": 11, "muc_tieu": 8, "doanh_thu": 2392000 },
      { "stt": 15, "ten_hang": "Thiết kế cuộc đời thịnh vượng", "top": 2, "tb_3t": 10, "thang_truoc": 11, "nam_truoc": 19, "muc_tieu": 10, "doanh_thu": 2990000 },
      { "stt": 16, "ten_hang": "Hiện Thực Hóa Khát Vọng", "top": 2, "tb_3t": 8, "thang_truoc": 8, "nam_truoc": null, "muc_tieu": 10, "doanh_thu": 2490000 },
      { "stt": 17, "ten_hang": "Tuyển tập các câu châm ngôn", "top": "-", "tb_3t": 9, "thang_truoc": 6, "nam_truoc": 10, "muc_tieu": 10, "doanh_thu": 690000 },
      { "stt": 18, "ten_hang": "Thoát khỏi vòng xoáy trì hoãn", "top": 2, "tb_3t": 5, "thang_truoc": 2, "nam_truoc": 7, "muc_tieu": 5, "doanh_thu": 1495000 },
      { "stt": 19, "ten_hang": "Làm Chủ Tuổi 20", "top": 2, "tb_3t": 8, "thang_truoc": 11, "nam_truoc": 7, "muc_tieu": 10, "doanh_thu": 1980000 },
      { "stt": 20, "ten_hang": "Bộ sách Luật Hấp Dẫn", "top": 2, "tb_3t": 13, "thang_truoc": 4, "nam_truoc": null, "muc_tieu": 5, "doanh_thu": 7470000 },
      { "stt": 21, "ten_hang": "Bộ sách Thay thói quen", "top": "-", "tb_3t": 7, "thang_truoc": 3, "nam_truoc": 1, "muc_tieu": 3, "doanh_thu": 474000 },
      { "stt": 22, "ten_hang": "396 lời khuyên về Đầu Tư", "top": "-", "tb_3t": 3, "thang_truoc": 4, "nam_truoc": null, "muc_tieu": 3, "doanh_thu": 387000 },
      { "stt": 23, "ten_hang": "Sổ tay thực hành 6x66 Ngày", "top": "-", "tb_3t": 2, "thang_truoc": 2, "nam_truoc": null, "muc_tieu": 3, "doanh_thu": 1200000 },
      { "stt": 24, "ten_hang": "Bộ sách Nâng cấp bản thân", "top": "-", "tb_3t": 1, "thang_truoc": 1, "nam_truoc": null, "muc_tieu": 2, "doanh_thu": 1196000 },
      { "stt": 25, "ten_hang": "396 lời khuyên về Kinh Doanh", "top": "-", "tb_3t": 5, "thang_truoc": null, "nam_truoc": 23, "muc_tieu": 1, "doanh_thu": 129000 },
      { "stt": 26, "ten_hang": "396 lời khuyên về PTBT", "top": "-", "tb_3t": null, "thang_truoc": null, "nam_truoc": 2, "muc_tieu": 1, "doanh_thu": 129000 }
    ]
  }
};
