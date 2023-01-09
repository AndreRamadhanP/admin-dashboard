/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// Images

export default function data() {
  return {
    columns: [
      { Header: "nama peneliti", accessor: "peneliti", width: "30%", align: "left" },
      { Header: "alamat", accessor: "alamat", align: "left" },
      { Header: "judul penelitian", accessor: "judul", align: "center" },
      { Header: "tahun penelitian", accessor: "tahun", align: "center" },
      { Header: "anggaran", accessor: "budget", align: "center" },
      { Header: "action", accessor: "action", align: "center" },
    ],

    rows: [],
  };
}
