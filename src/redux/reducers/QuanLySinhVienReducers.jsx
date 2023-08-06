const stateDefault = {
  mangSinhVien: [
    {
      maSV: 1,
      hoTen: "Nguyễn Văn A",
      soDienThoai: "0938070591",
      email: "vanA@gmail.com",
    },
  ],
};

export const QuanLySinhVienReducers = (state = stateDefault, action) => {
  switch (action.type) {
    case "THEM_SINH_VIEN":
      {
        const mangSVUpdate = [...state.mangSinhVien, action.sinhVien];
        state.mangSinhVien = mangSVUpdate;
        return { ...state };
      }
      break;
    default: {
      return { ...state };
    }
  }
};
