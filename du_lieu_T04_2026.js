/**
 * DỮ LIỆU BÁO CÁO MỤC TIÊU DOANH THU T04/2026
 * Dữ liệu lịch sử: Từ Excel + CSV (đã xác minh)
 * Mục tiêu: CHỜ CẬP NHẬT — nhập vào các trường null bên dưới
 */

const dashboardData = {

  // ================================================================
  //  MỤC TIÊU — NHẬP SỐ LIỆU VÀO ĐÂY
  //  Sau khi nhập xong, tất cả biểu đồ và bảng sẽ tự cập nhật
  // ================================================================
  targets: {
    dt:   626248000,
    kd:   54011000,
    ptbt: 183973000,
    khac: 2000000,
  },

  // ================================================================
  //  MỤC TIÊU THEO NGÀY — NHẬP VÀO ĐÂY (30 ngày, tháng 4)
  //  Mỗi phần tử: { ngay, thu, tong, dt, kd, ptbt, khac, campaign }
  //  campaign: null hoặc "Flash Sale 4.4", "Mid-month Push", ...
  //  Để null = chưa phân bổ, dashboard sẽ hiện "Chờ nhập"
  // ================================================================
  dailyTargets: null,

  // ================================================================
  //  DỮ LIỆU LỊCH SỬ (ĐÃ CÓ SẴN — KHÔNG CẦN SỬA)
  // ================================================================

  // So sánh: TB 3 tháng, tháng trước (T3.2026), cùng kỳ (T4.2025)
  comparison: {
    tb3t: {
      dt: 482841938, kd: 33006084, ptbt: 148177049, tong: 670539667
    },
    thang_truoc: {
      dt: 607221814, kd: 45641253, ptbt: 166044147, tong: 834367000
    },
    cung_ky: {
      dt: 479554000, kd: 53241000, ptbt: 155214000, khac: 1618000, tong: 689627000
    }
  },

  // % Tăng trưởng YoY (T1-T3)
  growthPct: {
    labels: ["T1", "T2", "T3"],
    values: [38.4, -2.9, -5.9]
  },

  // YTD Q1
  ytd: {
    ytd2025: {
      dt: 1383081000, kd: 168056000,
      ptbt: 335552000, khac: 5068000
    },
    ytd2026: {
      dt: 1438930814, kd: 98203253,
      ptbt: 443584147, khac: 19543786
    }
  },

  // YoY 12 tháng
  yoy: {
    tong: {
      data2025: [458351000, 559236000, 874170000, 689627000, 696090000, 628545000, 721775000, 998328000, 874379000, 711081000, 695932000, 791889000],
      data2026: [634175000, 543077000, 834367000, null, null, null, null, null, null, null, null, null]
    },
    dauTu: {
      data2025: [312212000, 381191000, 689678000, 479554000, 499578000, 453575000, 559130000, 771969000, 673785000, 559604000, 559453000, 535031000],
      data2026: [439873000, 401431000, 597626814, null, null, null, null, null, null, null, null, null]
    },
    kinhDoanh: {
      data2025: [54005000, 56370000, 57681000, 53241000, 50727000, 38085000, 38496000, 44063000, 49771000, 48591000, 36414000, 43621000],
      data2026: [29912000, 23465000, 44826253, null, null, null, null, null, null, null, null, null]
    },
    ptbt: {
      data2025: [90417000, 120341000, 124794000, 155214000, 142353000, 136250000, 121963000, 176327000, 149746000, 102028000, 100016000, 211351000],
      data2026: [160306000, 118181000, 165097147, null, null, null, null, null, null, null, null, null]
    }
  },

  // Q2/2025 (tham chiếu)
  quarterly: {
    q2_2025: {"dt": [479554000, 499578000, 453575000], "kd": [53241000, 50727000, 38085000], "ptbt": [155214000, 142353000, 136250000], "khac": [1618000, 3432000, 635000], "tong": [689627000, 696090000, 628545000]}
  },

  // Căn cứ đặt mục tiêu
  methodology: [
    { icon: "📅", title: "Ngày thường (T2-T6)", desc: "DT TB ~20-25tr/ngày. Tham chiếu TB T3.2026: ~27tr/ngày" },
    { icon: "🌙", title: "Cuối tuần (T7-CN)", desc: "DT giảm ~20% vs ngày thường (~16-20tr/ngày)" },
    { icon: "⚡", title: "Flash Sale 4/4", desc: "Kỳ vọng gấp 2-3x (~50-75tr). Ref: DT 3/3 = 53tr, 25/3 = 45tr" },
    { icon: "📈", title: "Mid-month Push (15/4)", desc: "Kỳ vọng gấp 1.5x (~35-40tr). Ref: DT 15/3 = 37tr" },
    { icon: "💰", title: "Pre-salary Push (25/4)", desc: "Kỳ vọng gấp 1.5-2x (~40-50tr). Ref: DT 25/3 = 45tr, 27/3 = 43tr" },
    { icon: "📊", title: "Tỷ trọng nhóm", desc: "Tham chiếu T3.2026: ĐT ~73%, PTBT ~20%, KD ~5%, Khác ~2%" },
    { icon: "🔄", title: "Tham chiếu cùng kỳ", desc: "T4.2025: 689.627.000đ (TB ~23tr/ngày) | T3.2026: 823.010.000đ (TB ~27tr/ngày)" }
  ],

  // Nguồn dữ liệu
  dataSources: [
    { period: "T1-T12.2025 + T1-T2.2026", source: "CSV \"DL 2024-2026\" — shipped orders, phân nhóm ĐT/KD/PTBT/Khác" },
    { period: "T3.2026", source: "Orders \"orders_31_03_2026\" — loại 226 đơn hủy, scale khớp 823.010.000đ" },
    { period: "SL bán theo sách", source: "Tổng SL từ tất cả kênh (HL, TK, SP, LZ, TIK)" },
    { period: "TB 3T", source: "Trung bình SL bán T1+T2+T3.2026 / 3" },
    { period: "Tháng trước", source: "SL bán tháng 3.2026" },
    { period: "Năm trước", source: "SL bán tháng 4.2025 (cùng kỳ)" }
  ],

  // Chi tiết từng đầu sách (muc_tieu_sl & muc_tieu_dt = null → chờ nhập)
  bookDetails: {
    dt: [
      { stt: 1, ten_hang: "Bộ sách Làm Giàu Từ Chứng Khoán", top: 1, tb_3t: 98, thang_truoc: 147, nam_truoc: 69, gia_tien: 700000, muc_tieu_sl: 120, muc_tieu_dt: 84000000 },
      { stt: 2, ten_hang: "Cách thức kinh doanh và đầu cơ cổ phiếu!", top: 1, tb_3t: 104, thang_truoc: 132, nam_truoc: 40, gia_tien: 349000, muc_tieu_sl: 130, muc_tieu_dt: 45370000 },
      { stt: 3, ten_hang: "Tuyệt kỹ Giao dịch bằng đồ thị nến Nhật", top: 1, tb_3t: 86, thang_truoc: 120, nam_truoc: 83, gia_tien: 499000, muc_tieu_sl: 120, muc_tieu_dt: 59880000 },
      { stt: 4, ten_hang: "Ngày Đòi Nợ", top: 1, tb_3t: 110, thang_truoc: 117, nam_truoc: 72, gia_tien: 299000, muc_tieu_sl: 130, muc_tieu_dt: 38870000 },
      { stt: 5, ten_hang: "Làm giàu từ chứng khoán bằng phương pháp VSA chính gốc: Nghiên cứu chuyên sâu về cách giao dịch của Wyckoff", top: 1, tb_3t: 88, thang_truoc: 111, nam_truoc: 36, gia_tien: 499000, muc_tieu_sl: 100, muc_tieu_dt: 49900000 },
      { stt: 6, ten_hang: "Phù thuỷ giao dịch chứng khoán", top: 1, tb_3t: 53, thang_truoc: 73, nam_truoc: 0, gia_tien: 499000, muc_tieu_sl: 80, muc_tieu_dt: 39920000 },
      { stt: 7, ten_hang: "Damn Right! - Vén màn bí ẩn về tỷ phú Charlie Munger", top: 2, tb_3t: 48, thang_truoc: 65, nam_truoc: 10, gia_tien: 299000, muc_tieu_sl: 75, muc_tieu_dt: 22425000 },
      { stt: 8, ten_hang: "Điều Quan Trọng Nhất", top: 2, tb_3t: 34, thang_truoc: 51, nam_truoc: 45, gia_tien: 299000, muc_tieu_sl: 65, muc_tieu_dt: 19435000 },
      { stt: 9, ten_hang: "Basic Economics: Kinh tế học cơ bản, a bờ cờ, kinh tế học nhập môn cho nhà đầu tư", top: 2, tb_3t: 36, thang_truoc: 42, nam_truoc: 38, gia_tien: 569000, muc_tieu_sl: 45, muc_tieu_dt: 25605000 },
      { stt: 10, ten_hang: "The Simple Path to Wealth - Con đường đi đến sự giàu có", top: 2, tb_3t: 38, thang_truoc: 41, nam_truoc: 7, gia_tien: 299000, muc_tieu_sl: 45, muc_tieu_dt: 13455000 },
      { stt: 11, ten_hang: "Kỹ thuật giao dịch để Kiếm tiền hàng ngày trên thị trường chứng khoán", top: 2, tb_3t: 32, thang_truoc: 39, nam_truoc: 77, gia_tien: 298000, muc_tieu_sl: 45, muc_tieu_dt: 13410000 },
      { stt: 12, ten_hang: "Fibonacci Trading", top: 2, tb_3t: 31, thang_truoc: 39, nam_truoc: 35, gia_tien: 299000, muc_tieu_sl: 45, muc_tieu_dt: 13455000 },
      { stt: 13, ten_hang: "Bộ sách giao dịch theo Wyckoff - Làm giàu từ chứng khoán bằng phương pháp VSA chính gốc (Gồm 2 cuốn)", top: 2, tb_3t: 23, thang_truoc: 35, nam_truoc: 27, gia_tien: 998000, muc_tieu_sl: 35, muc_tieu_dt: 34930000 },
      { stt: 14, ten_hang: "Wyckoff 2.0: Tìm hiểu chuyên sâu về cấu trúc, hồ sơ khối lượng và dòng chảy lệnh trên thị trường", top: 2, tb_3t: 27, thang_truoc: 26, nam_truoc: 12, gia_tien: 499000, muc_tieu_sl: 25, muc_tieu_dt: 12475000 },
      { stt: 15, ten_hang: "Hệ thống giao dịch Ichimoku Charts", top: 2, tb_3t: 21, thang_truoc: 25, nam_truoc: 14, gia_tien: 330000, muc_tieu_sl: 25, muc_tieu_dt: 8250000 },
      { stt: 16, ten_hang: "Các phương pháp giao dịch ngắn hạn hiệu quả trên thị trường Forex", top: 3, tb_3t: 18, thang_truoc: 18, nam_truoc: 48, gia_tien: 299000, muc_tieu_sl: 20, muc_tieu_dt: 5980000 },
      { stt: 17, ten_hang: "Trend Following - Cách thức để kiếm được vận may lớn và giàu có trong các thị trường Bò, Gấu và các sự kiện Thiên nga đen", top: 3, tb_3t: 17, thang_truoc: 15, nam_truoc: 20, gia_tien: 599000, muc_tieu_sl: 20, muc_tieu_dt: 11980000 },
      { stt: 18, ten_hang: "Cách kiếm lợi nhuận 18.000% từ thị trường chứng khoán", top: 3, tb_3t: 14, thang_truoc: 15, nam_truoc: 17, gia_tien: 499000, muc_tieu_sl: 20, muc_tieu_dt: 9980000 },
      { stt: 19, ten_hang: "Bộ sách Bách khoa toàn thư về các mẫu hình biểu đồ (Gồm 3 cuốn)", top: 3, tb_3t: 14, thang_truoc: 15, nam_truoc: 65, gia_tien: 1497000, muc_tieu_sl: 20, muc_tieu_dt: 29940000 },
      { stt: 20, ten_hang: "Người đàn ông đánh bại mọi thị trường", top: 3, tb_3t: 18, thang_truoc: 14, nam_truoc: 18, gia_tien: 349000, muc_tieu_sl: 35, muc_tieu_dt: 12215000 },
      { stt: 21, ten_hang: "Nghệ thuật đầu tư Dhandho", top: 3, tb_3t: 12, thang_truoc: 13, nam_truoc: 12, gia_tien: 238000, muc_tieu_sl: 15, muc_tieu_dt: 3570000 },
      { stt: 22, ten_hang: "Hướng Dẫn Giao Dịch Theo Sóng Elliott - Bản mới", top: 2, tb_3t: 30, thang_truoc: 34, nam_truoc: 29, gia_tien: 469000, muc_tieu_sl: 30, muc_tieu_dt: 14070000 },
      { stt: 23, ten_hang: "The Art and Science of Technical Analysis - Phân tích kỹ thuật: Sự kết hợp giữa KHOA HỌC và NGHỆ THUẬT trong đầu tư chứng khoán", top: 3, tb_3t: 11, thang_truoc: 10, nam_truoc: 20, gia_tien: 569000, muc_tieu_sl: 10, muc_tieu_dt: 5690000 },
      { stt: 24, ten_hang: "Bollinger on Bollinger Bands - Đọc vị biến động thị trường", top: 3, tb_3t: 7, thang_truoc: 8, nam_truoc: 11, gia_tien: 349000, muc_tieu_sl: 7, muc_tieu_dt: 2443000 },
      { stt: 25, ten_hang: "Lột xác để trở thành nhà đầu tư giá trị", top: 3, tb_3t: 8, thang_truoc: 7, nam_truoc: 4, gia_tien: 268000, muc_tieu_sl: 7, muc_tieu_dt: 1876000 },
      { stt: 26, ten_hang: "Bộ Sách Giao Dịch Để Kiếm Tiền Hàng Ngày Từ Cơ Bản Đến Nâng Cao (Gồm 2 cuốn)", top: 3, tb_3t: 5, thang_truoc: 7, nam_truoc: 5, gia_tien: 657000, muc_tieu_sl: 7, muc_tieu_dt: 4599000 },
      { stt: 27, ten_hang: "Kỹ thuật giao dịch NÂNG CAO để kiếm tiền hàng ngày trên thị trường chứng khoán", top: 3, tb_3t: 7, thang_truoc: 6, nam_truoc: 6, gia_tien: 359000, muc_tieu_sl: 6, muc_tieu_dt: 2154000 },
      { stt: 28, ten_hang: "Tư duy giao dịch theo xu hướng - Trend Following Mindset", top: 3, tb_3t: 6, thang_truoc: 6, nam_truoc: 11, gia_tien: 359000, muc_tieu_sl: 6, muc_tieu_dt: 2154000 },
      { stt: 29, ten_hang: "Super Trader, Expanded Edition - Thiết lập dòng tiền bền vững trong các thời điểm đỉnh và đáy của thị trường", top: 3, tb_3t: 6, thang_truoc: 5, nam_truoc: 10, gia_tien: 399000, muc_tieu_sl: 15, muc_tieu_dt: 5985000 },
      { stt: 30, ten_hang: "Những sự thật và ngụy biện trong kinh tế học", top: 3, tb_3t: 5, thang_truoc: 5, nam_truoc: 0, gia_tien: 399000, muc_tieu_sl: 5, muc_tieu_dt: 1995000 },
      { stt: 31, ten_hang: "Bộ Sách Nhập Môn Kungfu Chứng khoán 2.0 (Gồm 5 cuốn)", top: 3, tb_3t: 3, thang_truoc: 5, nam_truoc: 6, gia_tien: 2067000, muc_tieu_sl: 3, muc_tieu_dt: 6201000 },
      { stt: 32, ten_hang: "Các phù thủy chứng khoán ẩn danh", top: 3, tb_3t: 4, thang_truoc: 3, nam_truoc: 6, gia_tien: 569000, muc_tieu_sl: 4, muc_tieu_dt: 2276000 },
      { stt: 33, ten_hang: "Nguyên tắc Môi trường, Xã hội và Quản trị (ESG) trong kinh doanh bền vững", top: 3, tb_3t: 2, thang_truoc: 3, nam_truoc: 0, gia_tien: 499000, muc_tieu_sl: 4, muc_tieu_dt: 1996000 },
      { stt: 34, ten_hang: "Bộ sách Giao dịch theo xu hướng đánh bại thị trường (Gồm 3 cuốn)", top: 3, tb_3t: 1, thang_truoc: 3, nam_truoc: 2, gia_tien: 1199000, muc_tieu_sl: 4, muc_tieu_dt: 4796000 },
      { stt: 35, ten_hang: "Lạc Quan Tếu", top: 3, tb_3t: 5, thang_truoc: 2, nam_truoc: 5, gia_tien: 299000, muc_tieu_sl: 2, muc_tieu_dt: 598000 },
      { stt: 36, ten_hang: "Bộ sách Phân tích kỹ thuật toàn diện kiếm tiền trên mọi thị trường (Gồm 7 cuốn)", top: 3, tb_3t: 1, thang_truoc: 2, nam_truoc: 0, gia_tien: 2595000, muc_tieu_sl: 3, muc_tieu_dt: 7785000 },
      { stt: 37, ten_hang: "Bộ sách - Giải pháp ESG: Kết nối tư duy quản trị và dữ liệu định lượng (Gồm 2 cuốn)", top: 3, tb_3t: 2, thang_truoc: 1, nam_truoc: 0, gia_tien: 998000, muc_tieu_sl: 1, muc_tieu_dt: 998000 },
      { stt: 38, ten_hang: "Phân tích mẫu hình biểu đồ", top: 3, tb_3t: 2, thang_truoc: 1, nam_truoc: 31, gia_tien: 348000, muc_tieu_sl: 1, muc_tieu_dt: 348000 },
      { stt: 39, ten_hang: "Phương pháp định lượng trong tài chính ESG", top: 3, tb_3t: 1, thang_truoc: 1, nam_truoc: 0, gia_tien: 499000, muc_tieu_sl: 1, muc_tieu_dt: 499000 },
      { stt: 40, ten_hang: "Tài Chính Cá Nhân Dành Cho Người Việt Nam", top: 3, tb_3t: 1, thang_truoc: 1, nam_truoc: 1, gia_tien: 200000, muc_tieu_sl: 1, muc_tieu_dt: 200000 },
      { stt: 41, ten_hang: "Bộ sách Phân tích kỹ thuật thực chiến đánh bại thị trường (Gồm 4 cuốn)", top: 3, tb_3t: 1, thang_truoc: 1, nam_truoc: 1, gia_tien: 1499000, muc_tieu_sl: 1, muc_tieu_dt: 1499000 },
      { stt: 42, ten_hang: "Bộ sách Đầu tư giá trị từ A đến Z (Gồm 4 cuốn)", top: 3, tb_3t: 1, thang_truoc: 1, nam_truoc: 1, gia_tien: 1154000, muc_tieu_sl: 1, muc_tieu_dt: 1154000 },
      { stt: 43, ten_hang: "Bộ Sách Nhập Môn Kungfu Chứng khoán (Gồm 4 cuốn)", top: 3, tb_3t: 0, thang_truoc: 1, nam_truoc: 1, gia_tien: 1498000, muc_tieu_sl: 1, muc_tieu_dt: 1498000 },
      { stt: 44, ten_hang: "Blockchain: Bước ngoặt lịch sử hay chỉ là bong bóng?", top: 3, tb_3t: 1, thang_truoc: 0, nam_truoc: 3, gia_tien: 389000, muc_tieu_sl: 1, muc_tieu_dt: 389000 },
      { stt: 45, ten_hang: "Nhà đầu tư thành công", top: 3, tb_3t: 0, thang_truoc: 0, nam_truoc: 4, gia_tien: 299000, muc_tieu_sl: null, muc_tieu_dt: null },
      { stt: 46, ten_hang: "Những bậc thầy đầu tư theo đà tăng trưởng", top: 3, tb_3t: 0, thang_truoc: 0, nam_truoc: 6, gia_tien: 299000, muc_tieu_sl: null, muc_tieu_dt: null },
      { stt: 47, ten_hang: "Bộ sách Trí tuệ tỷ đô của các bậc thầy đầu tư 2022 (Gồm 4 cuốn)", top: 3, tb_3t: 0, thang_truoc: 0, nam_truoc: 0, gia_tien: 1246000, muc_tieu_sl: null, muc_tieu_dt: null },
      { stt: 48, ten_hang: "Phương pháp quản trị vốn trong đầu tư chứng khoán", top: 3, tb_3t: 0, thang_truoc: 0, nam_truoc: 4, gia_tien: 348000, muc_tieu_sl: null, muc_tieu_dt: null },
      { stt: 49, ten_hang: "Tài chính phi tập trung (Nâng cao)", top: 3, tb_3t: 0, thang_truoc: 0, nam_truoc: 0, gia_tien: 335000, muc_tieu_sl: null, muc_tieu_dt: null },
      { stt: 50, ten_hang: "Bộ sách Tinh hoa chứng khoán - Đầu tư hiệu quả trong mọi thị trường (Gồm 8 cuốn)", top: 3, tb_3t: 0, thang_truoc: 0, nam_truoc: 0, gia_tien: 2653000, muc_tieu_sl: null, muc_tieu_dt: null },
      { stt: 51, ten_hang: "Tài chính phi tập trung (Cơ bản)", top: 3, tb_3t: 0, thang_truoc: 0, nam_truoc: 1, gia_tien: 335000, muc_tieu_sl: null, muc_tieu_dt: null }
    ],
    kd: [
      { stt: 1, ten_hang: "Siêu Cò", top: 1, tb_3t: 26, thang_truoc: 30, nam_truoc: 38, gia_tien: 249000, muc_tieu_sl: 35, muc_tieu_dt: 8715000 },
      { stt: 2, ten_hang: "Những bài chưa xuất bản", top: 1, tb_3t: 11, thang_truoc: 26, nam_truoc: 2, gia_tien: 169000, muc_tieu_sl: 20, muc_tieu_dt: 3380000 },
      { stt: 3, ten_hang: "Bộ sách Di Sản Alan Phan", top: 1, tb_3t: 14, thang_truoc: 20, nam_truoc: 26, gia_tien: 516000, muc_tieu_sl: 25, muc_tieu_dt: 12900000 },
      { stt: 4, ten_hang: "Linh hồn của tiền", top: 1, tb_3t: 12, thang_truoc: 18, nam_truoc: 12, gia_tien: 249000, muc_tieu_sl: 20, muc_tieu_dt: 4980000 },
      { stt: 5, ten_hang: "Dành tặng doanh nhân Việt trong thế trận toàn cầu", top: 1, tb_3t: 6, thang_truoc: 9, nam_truoc: 8, gia_tien: 199000, muc_tieu_sl: 10, muc_tieu_dt: 1990000 },
      { stt: 6, ten_hang: "Marketing giỏi phải kiếm được tiền", top: 1, tb_3t: 10, thang_truoc: 8, nam_truoc: 58, gia_tien: 299000, muc_tieu_sl: 15, muc_tieu_dt: 4485000 },
      { stt: 7, ten_hang: "Bộ sách Khởi sự - Khởi nghiệp - Làm giàu (Gồm 7 cuốn)", top: 1, tb_3t: 4, thang_truoc: 7, nam_truoc: 1, gia_tien: 953000, muc_tieu_sl: 7, muc_tieu_dt: 6671000 },
      { stt: 8, ten_hang: "Hệ thống bán hàng đỉnh cao", top: 1, tb_3t: 3, thang_truoc: 7, nam_truoc: 2, gia_tien: 328000, muc_tieu_sl: 10, muc_tieu_dt: 3280000 },
      { stt: 9, ten_hang: "Thuật lãnh đạo nơi công sở", top: 2, tb_3t: 3, thang_truoc: 3, nam_truoc: 3, gia_tien: 249000, muc_tieu_sl: 3, muc_tieu_dt: 747000 },
      { stt: 10, ten_hang: "Xoay chuyển con tàu", top: 2, tb_3t: 2, thang_truoc: 3, nam_truoc: 3, gia_tien: 299000, muc_tieu_sl: 3, muc_tieu_dt: 897000 },
      { stt: 11, ten_hang: "Combo sách Góc Nhìn Alan (Gồm 2 cuốn)", top: 2, tb_3t: 2, thang_truoc: 2, nam_truoc: 3, gia_tien: 368000, muc_tieu_sl: 3, muc_tieu_dt: 1104000 },
      { stt: 12, ten_hang: "Cách đưa bạn trở thành siêu sao nơi công sở", top: 2, tb_3t: 1, thang_truoc: 2, nam_truoc: 5, gia_tien: 249000, muc_tieu_sl: 3, muc_tieu_dt: 747000 },
      { stt: 13, ten_hang: "Nuốt Cá Lớn", top: 2, tb_3t: 2, thang_truoc: 1, nam_truoc: 4, gia_tien: 299000, muc_tieu_sl: 2, muc_tieu_dt: 598000 },
      { stt: 14, ten_hang: "Bộ sách Kinh doanh bất bại (Gồm 2 cuốn)", top: 2, tb_3t: 1, thang_truoc: 1, nam_truoc: 0, gia_tien: 598000, muc_tieu_sl: 1, muc_tieu_dt: 598000 },
      { stt: 15, ten_hang: "Bộ sách Marketing - Bán Hàng Đỉnh Cao (Gồm 2 cuốn)", top: 2, tb_3t: 1, thang_truoc: 1, nam_truoc: 0, gia_tien: 627000, muc_tieu_sl: 1, muc_tieu_dt: 627000 },
      { stt: 16, ten_hang: "Bộ sách Kết Nối và Làm Chủ Đồng Tiền (Gồm 2 cuốn)", top: 2, tb_3t: 1, thang_truoc: 1, nam_truoc: 0, gia_tien: 498000, muc_tieu_sl: 1, muc_tieu_dt: 498000 },
      { stt: 17, ten_hang: "Bộ sách trở thành ÁT CHỦ BÀI công sở (Gồm 2 cuốn)", top: 2, tb_3t: 1, thang_truoc: 0, nam_truoc: 1, gia_tien: 498000, muc_tieu_sl: 1, muc_tieu_dt: 498000 },
      { stt: 18, ten_hang: "Lãnh đạo là ngôn ngữ", top: 2, tb_3t: 1, thang_truoc: 0, nam_truoc: 0, gia_tien: 349000, muc_tieu_sl: 1, muc_tieu_dt: 349000 },
      { stt: 22, ten_hang: "Cải tiến trước - Phát kiến sau", top: 2, tb_3t: 0, thang_truoc: 0, nam_truoc: 1, gia_tien: 299000, muc_tieu_sl: 1, muc_tieu_dt: 299000 },
      { stt: 23, ten_hang: "Bộ sách Nghệ Thuật Lãnh Đạo Bằng Ngôn Ngữ (Gồm 2 cuốn)", top: 2, tb_3t: 0, thang_truoc: 0, nam_truoc: 0, gia_tien: 648000, muc_tieu_sl: 1, muc_tieu_dt: 648000 }
    ],
    ptbt: [
      { stt: 1, ten_hang: "Bí mật của Phan Thiên Ân", top: 1, tb_3t: 118, thang_truoc: 133, nam_truoc: 88, gia_tien: 69000, muc_tieu_sl: 140, muc_tieu_dt: 9660000 },
      { stt: 2, ten_hang: "Trở nên phi thường", top: 1, tb_3t: 79, thang_truoc: 95, nam_truoc: 100, gia_tien: 349000, muc_tieu_sl: 100, muc_tieu_dt: 34900000 },
      { stt: 3, ten_hang: "Bạn là Nhà Giả Dược: Khai phá sức mạnh của tiềm thức", top: 1, tb_3t: 65, thang_truoc: 84, nam_truoc: 39, gia_tien: 349000, muc_tieu_sl: 90, muc_tieu_dt: 31410000 },
      { stt: 4, ten_hang: "Phá bỏ thói quen, đánh thức chính mình", top: 1, tb_3t: 60, thang_truoc: 68, nam_truoc: 68, gia_tien: 299000, muc_tieu_sl: 70, muc_tieu_dt: 20930000 },
      { stt: 5, ten_hang: "Từ Tâm trí đến Vật chất", top: 2, tb_3t: 26, thang_truoc: 46, nam_truoc: 89, gia_tien: 299000, muc_tieu_sl: 50, muc_tieu_dt: 14950000 },
      { stt: 6, ten_hang: "Thiết kế cuộc đời thịnh vượng", top: 3, tb_3t: 13, thang_truoc: 19, nam_truoc: 21, gia_tien: 299000, muc_tieu_sl: 25, muc_tieu_dt: 7475000 },
      { stt: 7, ten_hang: "Tiny Habits: Thói quen tí hon - Tiềm năng khổng lồ", top: 3, tb_3t: 18, thang_truoc: 16, nam_truoc: 17, gia_tien: 299000, muc_tieu_sl: 20, muc_tieu_dt: 5980000 },
      { stt: 8, ten_hang: "Sức Mạnh Kỳ Diệu Của Cảm Xúc", top: 3, tb_3t: 16, thang_truoc: 15, nam_truoc: 0, gia_tien: 249000, muc_tieu_sl: 20, muc_tieu_dt: 4980000 },
      { stt: 9, ten_hang: "Bộ sách sức mạnh tâm thức (Gồm 4 cuốn)", top: 3, tb_3t: 13, thang_truoc: 15, nam_truoc: 21, gia_tien: 1296000, muc_tieu_sl: 15, muc_tieu_dt: 19440000 },
      { stt: 10, ten_hang: "Poor Richard's Almanack - Tuyển tập các câu châm ngôn và thành ngữ, và một bản phác họa ngắn về cuộc đời của Benjamin Franklin", top: 3, tb_3t: 9, thang_truoc: 15, nam_truoc: 12, gia_tien: 69000, muc_tieu_sl: 15, muc_tieu_dt: 1035000 },
      { stt: 11, ten_hang: "Tiền Bạc Và Luật Hấp Dẫn", top: 2, tb_3t: 22, thang_truoc: 14, nam_truoc: 0, gia_tien: 249000, muc_tieu_sl: 15, muc_tieu_dt: 3735000 },
      { stt: 12, ten_hang: "101 Lời khuyên tài chính cá nhân từ Thái Phạm", top: 3, tb_3t: 9, thang_truoc: 9, nam_truoc: 11, gia_tien: 299000, muc_tieu_sl: 15, muc_tieu_dt: 4485000 },
      { stt: 13, ten_hang: "Vòng Xoáy", top: 3, tb_3t: 16, thang_truoc: 8, nam_truoc: 0, gia_tien: 249000, muc_tieu_sl: 10, muc_tieu_dt: 2490000 },
      { stt: 14, ten_hang: "Yêu Cầu Đúng, Nhận Đủ", top: 3, tb_3t: 10, thang_truoc: 8, nam_truoc: 0, gia_tien: 249000, muc_tieu_sl: 10, muc_tieu_dt: 2490000 },
      { stt: 15, ten_hang: "Hiện Thực Hóa Khát Vọng", top: 3, tb_3t: 8, thang_truoc: 8, nam_truoc: 0, gia_tien: 249000, muc_tieu_sl: 10, muc_tieu_dt: 2490000 },
      { stt: 16, ten_hang: "Bộ sách Thay thói quen - Đổi vận mệnh (Gồm 2 cuốn)", top: 3, tb_3t: 5, thang_truoc: 6, nam_truoc: 1, gia_tien: 158000, muc_tieu_sl: 5, muc_tieu_dt: 790000 },
      { stt: 17, ten_hang: "Bắt đầu để chiến thắng - Thoát khỏi vùng xoáy trì hoãn, khơi dậy lửa sáng tạo!", top: 3, tb_3t: 4, thang_truoc: 5, nam_truoc: 6, gia_tien: 299000, muc_tieu_sl: 5, muc_tieu_dt: 1495000 },
      { stt: 18, ten_hang: "Sức Mạnh Kỳ Diệu Của Ý Định Có Chủ Đích", top: 3, tb_3t: 12, thang_truoc: 4, nam_truoc: 0, gia_tien: 249000, muc_tieu_sl: 10, muc_tieu_dt: 2490000 },
      { stt: 19, ten_hang: "Sổ tay thực hành 66 Ngày Thử Thách", top: 3, tb_3t: 9, thang_truoc: 4, nam_truoc: 10, gia_tien: 89000, muc_tieu_sl: 4, muc_tieu_dt: 356000 },
      { stt: 20, ten_hang: "Làm Chủ Tuổi 20", top: 3, tb_3t: 7, thang_truoc: 4, nam_truoc: 11, gia_tien: 198000, muc_tieu_sl: 4, muc_tieu_dt: 792000 },
      { stt: 21, ten_hang: "Bộ sách Luật Hấp Dẫn - Sức Mạnh Thay Đổi Cuộc Đời (Gồm 6 cuốn)", top: 3, tb_3t: 4, thang_truoc: 3, nam_truoc: 0, gia_tien: 1494000, muc_tieu_sl: 5, muc_tieu_dt: 7470000 },
      { stt: 22, ten_hang: "Bộ sách 396 Lời khuyên khai thông trí tuệ nâng tầm tư duy (Gồm 3 cuốn)", top: 3, tb_3t: 1, thang_truoc: 3, nam_truoc: 0, gia_tien: 387000, muc_tieu_sl: 3, muc_tieu_dt: 1161000 },
      { stt: 23, ten_hang: "396 lời khuyên đắt giá về Đầu Tư", top: 3, tb_3t: 2, thang_truoc: 2, nam_truoc: 0, gia_tien: 129000, muc_tieu_sl: 3, muc_tieu_dt: 387000 },
      { stt: 24, ten_hang: "Sổ tay thực hành 6×66 Ngày Thử Thách", top: 3, tb_3t: 2, thang_truoc: 2, nam_truoc: 2, gia_tien: 400000, muc_tieu_sl: 3, muc_tieu_dt: 1200000 },
      { stt: 25, ten_hang: "Bộ sách Nâng cấp bản thân - Kiến tạo hạnh phúc (Gồm 2 cuốn)", top: 3, tb_3t: 1, thang_truoc: 1, nam_truoc: 0, gia_tien: 598000, muc_tieu_sl: 1, muc_tieu_dt: 598000 },
      { stt: 26, ten_hang: "Bộ sách Thiết Kế Cuộc Đời Thịnh Vượng (Gồm 4 cuốn)", top: 3, tb_3t: 1, thang_truoc: 0, nam_truoc: 1, gia_tien: 655000, muc_tieu_sl: 1, muc_tieu_dt: 655000 },
      { stt: 27, ten_hang: "396 lời khuyên đắt giá Phát Triển Bản Thân", top: 3, tb_3t: 0, thang_truoc: 0, nam_truoc: 1, gia_tien: 129000, muc_tieu_sl: 1, muc_tieu_dt: 129000 },
      { stt: 28, ten_hang: "Combo sách 10 cuốn Bí mật của Phan Thiên Ân (Gồm 10 cuốn)", top: 3, tb_3t: 0, thang_truoc: 0, nam_truoc: 0, gia_tien: 690000, muc_tieu_sl: null, muc_tieu_dt: null }
    ]
  }
};
