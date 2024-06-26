export const MENU = <any>[
  {
    path: '/',
    label: 'TRANG CHỦ'
  },
  {
    path: '/gioi-thieu',
    label: 'GIỚI THIỆU',
    children: [
      {
        path: 'luoc-su',
        label: 'LƯỢC SỬ',
      },
      {
        path: 'chuc-nang-nhiem-vu',
        label: 'CHỨC NĂNG NHIỆM VỤ',
      },
      {
        path: 'cac-phong-ban-chuc-nang',
        label: 'CÁC PHÒNG BAN CHỨC NĂNG',
      },
      {
        path: 'vien-truong',
        label: 'VIỆN TRƯỞNG',
      },
      {
        path: 'giang-vien',
        label: 'GIẢNG VIÊN',
      },
      {
        path: 'quy-che',
        label: 'QUY CHẾ',
      }
    ]
  },
  {
    path: '/dao-tao',
    label: 'ĐÀO TẠO',
    children: [
      {
        path: 'tu-si-khoa-muc',
        label: 'TU SĨ KHOA MỤC',
      },
      {
        path: 'chuc-viec-khoa-muc',
        label: 'CHỨC VIỆC KHOA MỤC',
      },
      {
        path: 'chuc-sac-khoa-muc',
        label: 'CHỨC SẮC KHOA MỤC',
      },
      {
        path: 'tra-cuu-van-bang-bang-diem',
        label: 'TRA CỨU VĂN BẰNG - BẢNG ĐIỂM',
      },
      {
        path: 'diem-danh',
        label: 'ĐIỂM DANH',
      }
    ]
  },
  {
    path: '/tin-tuc',
    label: 'TIN TỨC',
    children: [
      {
        path: '',
        label: 'TIN TỨC',
      },
      {
        path: 'su-kien',
        label: 'SỰ KIỆN',
      }
    ]
  },
  {
    path: '/thong-bao',
    label: 'THÔNG BÁO',
    children: [
      {
        path: 'tu-si-khoa-muc',
        label: 'BẬC TU SĨ KHOA MỤC',
      },
      {
        path: 'chuc-viec-khoa-muc',
        label: 'BẬC CHỨC VIỆC KHOA MỤC',
      },
      {
        path: 'chuc-sac-khoa-muc',
        label: 'BẬC CHỨC SẮC KHOA MỤC',
      },
      {
        path: 'giang-vien',
        label: 'THÔNG BÁO GIẢNG VIÊN',
      }
    ]
  }
]
