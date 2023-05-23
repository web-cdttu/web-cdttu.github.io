export const MENU = <any>[
  {
    path: '/',
    label: 'TRANG CHỦ'
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
        path: 'bac-tu-si',
        label: 'BẬC TU SĨ',
      },
      {
        path: 'bac-chuc-viec',
        label: 'BẬC CHỨC VIỆC',
      },
      {
        path: 'bac-chuc-sac-khoa-muc',
        label: 'BẬC CHỨC SẮC KHOA MỤC',
      },
      {
        path: 'thong-bao-giang-vien',
        label: 'THÔNG BÁO GIẢNG VIÊN',
      }
    ]
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
        label: 'QUÝ CHẾ',
      }
    ]
  },
  {
    path: '/dao-tao',
    label: 'ĐÀO TẠO',
    children: [
      {
        path: 'tu-si',
        label: 'TU SĨ',
      },
      {
        path: 'chuc-viec',
        label: 'CHỨC VIỆC',
      },
      {
        path: 'chuc-sac-khoa-muc',
        label: 'CHỨC SẮC KHOA MỤC',
      },
      {
        path: 'tra-cuu-van-bang-bang-diem',
        label: 'TRA CỨU VĂN BẢN - BẢN ĐIỂM',
      }
    ]
  }
]
