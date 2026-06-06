# TaskList React — Ứng dụng Quản lý Công việc

> **Bài kiểm tra môn CSE391 — Năm 2024**
> Sinh viên: **Nguyễn Sơn Tùng** — MSSV: **2451160848** — Lớp: **K66KTPM2**

---

## Giới thiệu

**TaskList React** là ứng dụng quản lý công việc (Task Management) được xây dựng bằng **React 19** và **Vite 8**. Ứng dụng cho phép người dùng thực hiện các thao tác CRUD (Thêm, Sửa, Xóa) trên danh sách công việc, kèm theo quản lý mức độ ưu tiên và trạng thái hoàn thành.

### Tính năng chính

| Tính năng | Mô tả |
|---|---|
| **Thêm Task** | Tạo công việc mới với tên và mức ưu tiên |
| **Sửa Task** | Chỉnh sửa tên, mức ưu tiên của công việc |
| **Xóa Task** | Xóa công việc khỏi danh sách |
| **Mức ưu tiên** | 3 cấp độ: `High` (Cao), `Medium` (Trung bình), `Low` (Thấp) |
| **Thanh tiến trình** | Hiển thị trạng thái hoàn thành dạng vòng tròn (Progress Circle) |
| **Trạng thái** | 3 trạng thái: `To Do`, `In Progress`, `Done` |
| **Validation** | Kiểm tra tên task không để trống, giới hạn 100 ký tự |

---

## Công nghệ sử dụng

| Công nghệ | Phiên bản | Mô tả |
|---|---|---|
| [React](https://react.dev/) | `^19.2.6` | Thư viện xây dựng giao diện người dùng |
| [Vite](https://vite.dev/) | `^8.0.12` | Build tool nhanh cho phát triển web |
| [Bootstrap](https://getbootstrap.com/) | `5.x` | Framework CSS cho layout & components |
| [ESLint](https://eslint.org/) | `^10.3.0` | Công cụ kiểm tra chất lượng mã nguồn |
| JavaScript (ES Modules) | ES2022+ | Ngôn ngữ lập trình chính |

---

## Cấu trúc thư mục

```
CSE391_Ktra_NguyenSonTung_2451160848_K66KTPM2/
├── EXAM2024.Minhhoa/                # Thư mục dự án chính
│   ├── public/                      # Tài nguyên tĩnh
│   │   ├── favicon.svg              # Icon trang web
│   │   └── icons.svg                # Bộ icon SVG
│   ├── src/                         # Mã nguồn chính
│   │   ├── assets/                  # Tài nguyên (CSS, hình ảnh)
│   │   │   ├── css/
│   │   │   │   ├── bootstrap.min.css  # Bootstrap CSS
│   │   │   │   └── style.css          # Custom CSS (modal, priority, progress)
│   │   │   ├── hero.png             # Hình ảnh minh họa
│   │   │   ├── react.svg            # React logo
│   │   │   └── vite.svg             # Vite logo
│   │   ├── components/              # React Components
│   │   │   ├── TaskCard.jsx         # Component hiển thị 1 task
│   │   │   └── TaskModal.jsx        # Component modal thêm/sửa task
│   │   ├── constants/               # Hằng số
│   │   │   └── taskConstants.js     # Định nghĩa PRIORITIES, STATUSES
│   │   ├── data/                    # Dữ liệu mẫu
│   │   │   └── data.json            # Danh sách task mặc định
│   │   ├── App.jsx                  # Component gốc (quản lý state)
│   │   ├── App.css                  # CSS cho App
│   │   └── main.jsx                 # Entry point (render React)
│   ├── index.html                   # HTML gốc
│   ├── package.json                 # Cấu hình npm & dependencies
│   ├── vite.config.js               # Cấu hình Vite
│   ├── eslint.config.js             # Cấu hình ESLint
│   └── .gitignore                   # Danh sách file Git bỏ qua
└── README.md                        # File hướng dẫn (file này)
```

---

## Yêu cầu hệ thống

Trước khi cài đặt, đảm bảo máy tính đã cài đặt:

- **Node.js** >= 18.0.0 — [Tải Node.js](https://nodejs.org/)
- **npm** >= 9.0.0 (đi kèm với Node.js)
- **Git** (tuỳ chọn) — [Tải Git](https://git-scm.com/)

Kiểm tra phiên bản đã cài:

```bash
node --version    # Ví dụ: v20.x.x
npm --version     # Ví dụ: 10.x.x
```

---

## Hướng dẫn cài đặt & chạy dự án

### Bước 1: Clone repository

```bash
git clone https://github.com/Stung1406/CSE391_Ktra_NguyenSonTung_2451160848_K66KTPM2.git
```

### Bước 2: Di chuyển vào thư mục dự án

```bash
cd CSE391_Ktra_NguyenSonTung_2451160848_K66KTPM2/EXAM2024.Minhhoa
```

### Bước 3: Cài đặt dependencies

```bash
npm install
```

### Bước 4: Chạy ứng dụng (chế độ phát triển)

```bash
npm run dev
```

Ứng dụng sẽ chạy tại: **http://localhost:5173** (mặc định)

### Bước 5 (tuỳ chọn): Build cho production

```bash
npm run build
```

Kết quả build sẽ nằm trong thư mục `dist/`.

### Bước 6 (tuỳ chọn): Xem bản build production

```bash
npm run preview
```

---

## Các lệnh có sẵn

| Lệnh | Mô tả |
|---|---|
| `npm run dev` | Chạy server phát triển với HMR (Hot Module Replacement) |
| `npm run build` | Build ứng dụng cho production |
| `npm run preview` | Xem trước bản build production |
| `npm run lint` | Kiểm tra lỗi mã nguồn với ESLint |

---

## Kiến trúc ứng dụng

### Luồng dữ liệu (Data Flow)

```
data.json (dữ liệu mẫu)
    │
    ▼
App.jsx (State Management)
    │
    ├──► TaskCard.jsx (Hiển thị từng task)
    │       • Tên task, mức ưu tiên, trạng thái
    │       • Progress circle
    │       • Nút Sửa / Xóa
    │
    └──► TaskModal.jsx (Form thêm/sửa)
            • Input tên task (có validation)
            • Chọn mức ưu tiên (High/Medium/Low)
            • Nút Add / Save
```

### Quản lý State

- **`tasks`**: Mảng các task, khởi tạo từ `data.json`
- **`modal`**: Trạng thái modal (`null` | `{ type: 'add' }` | `{ type: 'edit', task }`)
- **`nextId`**: ID tự tăng cho task mới

---

## Giao diện

### Màu sắc chính

| Thành phần | Mã màu | Mô tả |
|---|---|---|
| Primary | `#7c3aed` | Nút Add, Progress bar |
| High Priority | `#ef4444` / `#ff6b6b` | Độ ưu tiên cao |
| Medium Priority | `#f59e0b` / `#ffc107` | Độ ưu tiên trung bình |
| Low Priority | `#22c55e` | Độ ưu tiên thấp |
| Background | `#f3f4f6` | Nền trang |
| Edit Button | `#e0e7ff` | Nền nút sửa |
| Delete Button | `#fee2e2` | Nền nút xóa |

### Responsive Design

Ứng dụng sử dụng Bootstrap Grid System với layout responsive cho nhiều kích thước màn hình.

---

## Dữ liệu mẫu

Ứng dụng được khởi tạo với 3 task mẫu:

```json
[
  { "id": 1, "name": "Go to gym",     "priority": "High",   "status": "To Do" },
  { "id": 2, "name": "Read a book",   "priority": "Low",    "status": "Done" },
  { "id": 3, "name": "Go to market",  "priority": "Medium", "status": "In Progress" }
]
```

---

## Kiểm tra mã nguồn (Linting)

Dự án sử dụng ESLint với các plugin:

- **`eslint-plugin-react-hooks`** — Kiểm tra quy tắc React Hooks
- **`eslint-plugin-react-refresh`** — Hỗ trợ React Fast Refresh

Chạy lệnh kiểm tra:

```bash
npm run lint
```

---

## Lưu ý

- Dữ liệu được lưu trữ trong **state** (bộ nhớ tạm), sẽ mất khi reload trang.
- Ứng dụng sử dụng **Bootstrap CSS** được nhúng trực tiếp (không qua CDN).
- Không sử dụng backend/database — đây là ứng dụng **client-side** thuần túy.

---

## Thông tin sinh viên

| Thông tin | Chi tiết |
|---|---|
| **Họ và tên** | Nguyễn Sơn Tùng |
| **MSSV** | 2451160848 |
| **Lớp** | K66KTPM2 |
| **Môn học** | CSE391 |
| **Năm** | 2024 |

---

## License

Dự án này được thực hiện cho mục đích học tập tại trường đại học.
