import React, { Component } from "react";
import { connect } from "react-redux";

class FormSinhVien extends Component {
  state = {
    value: {
      maSV: "",
      hoTen: "",
      email: "",
      soDienThoai: "",
    },
    errors: {
      maSV: "",
      hoTen: "",
      email: "",
      soDienThoai: "",
    },
  };

  handleChange = (e) => {
    let tagInput = e.target;
    let { name, value, type, pattern } = tagInput;

    let errorMessage = "";
    //Kiểm tra text
    if (value.trim() === "") {
      errorMessage = name + "Không được bỏ trống";
    }

    //Kiểm tra email
    if (type === "email") {
      const regex = new RegExp(pattern);
      if (!regex.test(value)) {
        errorMessage = name + "Không đúng định dạng";
      }
    }
    if (name === "soDienThoai") {
      const regex = new RegExp(pattern);
      if (!regex.test(value)) {
        errorMessage = name + "Không đúng định dạng";
      }
    }

    let values = { ...this.state.values, [name]: value };
    let errors = { ...this.state.errors, [name]: errorMessage };
    this.setState(
      {
        values: values,
        errors: errors,
      },
      () => {
        console.log(this.state);
      },
    );
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.themSinhVien(this.state);
  };

  render() {
    return (
      <div className="container">
        <div className="card text-left">
          <div className="card-deader bg-dark text-white">
            <h3>Thông tin sinh viên</h3>
          </div>
          <div className="card-body">
            <form onSubmit={this.handleSubmit}>
              <div className="row">
                <div className="form-group col-6">
                  <span>Mã SV</span>
                  <input
                    className="form-control"
                    name="maSV"
                    value={this.state.value.maSV}
                    onChange={this.handleChange}
                  />
                  <p className="text-danger">{this.state.errors.maSV}</p>
                </div>
                <div className="form-group col-6">
                  <span>Họ tên</span>
                  <input
                    className="form-control"
                    name="hoTen"
                    value={this.state.value.hoTen}
                    onChange={this.handleChange}
                  />
                  <p className="text-danger">{this.state.errors.hoTen}</p>
                </div>
              </div>
              <div className="row">
                <div className="form-group col-6">
                  <span>Số điện thoại</span>
                  <input
                    type="text"
                    pattern="^(0|[1-9][0-9]*)$"
                    className="form-control"
                    name="soDienThoai"
                    value={this.state.value.soDienThoai}
                    onChange={this.handleChange}
                  />
                  <p className="text-danger">{this.state.errors.soDienThoai}</p>
                </div>
                <div className="form-group col-6">
                  <span>Email</span>
                  <input
                    type="email"
                    pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
                    className="form-control"
                    name="email"
                    value={this.state.value.email}
                    onChange={this.handleChange}
                  />
                  <p className="text-danger">{this.state.errors.email}</p>
                </div>
              </div>
            </form>
            <div className="row">
              <div className="col-md-12 text-right">
                <button type="submit" className="btn btn-success">
                  Thêm sinh viên
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    themSinhVien: (sinhVien) => {
      const action = {
        type: "THEM_SINH_VIEN",
        sinhVien,
      };
      dispatch(action);
    },
  };
};

export default connect(null, mapDispatchToProps)(FormSinhVien);
