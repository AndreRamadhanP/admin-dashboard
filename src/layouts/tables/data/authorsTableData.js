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

// Material Dashboard 2 React components
import React, { useState, useEffect } from "react";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";

// Images
import axios from "axios";
import { Button } from "@mui/material";

export default function data() {
  const [dirRows, setDirectory] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const getDirectories = async () => {
    const response = await axios.get("http://localhost:8005/api/v1/directories");
    console.log(response.data.data.directories);
    setDirectory(response.data.data.directories);
    setLoading(false);
  };
  useEffect(() => {
    getDirectories();
  }, []);

  const Author = ({ image, name, stat }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" />
      <MDBox ml={2} lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {name}
        </MDTypography>
        <MDTypography variant="caption">{stat}</MDTypography>
      </MDBox>
    </MDBox>
  );

  const Job = ({ title, description }) => (
    <MDBox lineHeight={1} textAlign="left">
      <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
        {title}
      </MDTypography>
      <MDTypography variant="caption">{description}</MDTypography>
    </MDBox>
  );

  const Baris = () =>
    // eslint-disable-next-line no-shadow
    dirRows.map((data) => ({
      Peneliti: <Author name={data.nama} stat="Peneliti" />,
      // author: <Baris />,
      Jurnal: <Job title={data.judulJurnal} description="Organization" />,
      Tahun: <Job title={data.tahunTerbit} />,
      File: <Job title={data.file} />,
      action: (
        <>
          <Button component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit
          </Button>
          <Button component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Delete
          </Button>
        </>
      ),
    }));

  return {
    columns: [
      { Header: "Peneliti", accessor: "Peneliti", width: "45%", align: "left" },
      { Header: "Jurnal", accessor: "Jurnal", align: "left" },
      { Header: "Tahun", accessor: "Tahun", align: "center" },
      { Header: "File", accessor: "File", align: "center" },
      { Header: "action", accessor: "action", align: "center" },
    ],

    rows: isLoading ? [] : Baris(),
  };
}
