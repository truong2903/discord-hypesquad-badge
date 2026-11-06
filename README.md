# 🌟 DISCORD HYPESQUAD 1-CLICK CLAIMER

Công cụ hỗ trợ nhận, đổi nhà và gỡ huy hiệu **Discord HypeSquad** (Bravery 💜, Brilliance 🧡, Balance 🩵) nhanh nhất, an toàn và dễ sử dụng nhất.

---

## 🚀 Cách Dùng Siêu Tốc (Dành Cho Mọi Người Trong Server)

### 📌 3 Bước Thực Hiện Trong 15 Giây:

1. **Bước 1:** Mở Discord trên trình duyệt web tại [discord.com/app](https://discord.com/app) và đăng nhập.
2. **Bước 2:** Bấm phím **`F12`** (hoặc `Ctrl + Shift + I`), chuyển sang tab **Console**.
   > *Lưu ý: Nếu Discord cảnh báo không cho dán, chỉ cần gõ chữ `allow pasting` rồi ấn `Enter`.*
3. **Bước 3:** Sao chép toàn bộ code trong file [`one_click_script.js`](./one_click_script.js), dán vào Console rồi nhấn **`Enter`**.

Ngay lập tức, một bảng chọn màu sắc sẽ hiện ra giữa màn hình Discord:
- 💜 **House of Bravery**
- 🧡 **House of Brilliance**
- 🩵 **House of Balance**
- ❌ **Gỡ huy hiệu**

👉 **Bạn chỉ cần dùng chuột bấm vào nút nhà mình thích**, hệ thống sẽ tự động kích hoạt và hiện thông báo thành công. Nhấn **F5** để xem huy hiệu mới trên trang cá nhân!

---

## 📂 Các File Trong Dự Án

| File | Mô Tả |
| :--- | :--- |
| **`index.html`** | Trang giao diện web mở bằng trình duyệt: có nút **"Sao chép mã 1-click"** tiện lợi để gửi cho bạn bè hoặc thành viên server. |
| **`one_click_script.js`** | Mã JavaScript tự động tìm Token và vẽ bảng chọn popup trực tiếp trên Discord Web. |
| **`main.py`** | Script Python dự phòng chạy qua Terminal (dành cho ai muốn chạy bằng Python CLI). |
| **`requirements.txt`** | Thư viện hỗ trợ cho Python script (`requests`). |

---

## 🔒 Tại Sao Phương Pháp Này An Toàn?
1. **Không lộ Token:** Script chạy trực tiếp ngay trong trình duyệt của bạn, tự động kết nối API của Discord mà không gửi dữ liệu ra bất kỳ máy chủ bên thứ 3 nào.
2. **Không cần cài đặt phần mềm:** Không cần cài Python hay nodejs, bất kỳ ai dùng máy tính có trình duyệt đều làm được ngay.
