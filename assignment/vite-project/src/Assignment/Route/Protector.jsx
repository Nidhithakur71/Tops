import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Protector = ({ component }) => {
  const navigate = useNavigate();
  useEffect(() => {
    let jsondata = localStorage.getItem("passdata");
    let normaldata = JSON.parse(jsondata);
    if (!normaldata || normaldata?.usertype !== "super") {
      navigate("/");
      alert("--------->not allow")
    }
  });

  return <div>{component}</div>;
};
export const Adminn = ({ component }) => {
  const navigate = useNavigate();
  useEffect(() => {
    let jsondata = localStorage.getItem("passdata");
    let normaldata = JSON.parse(jsondata);
    if (
      !normaldata ||
      (normaldata?.usertype !== "admin" && normaldata?.usertype !== "super")
    ) {
      navigate("/");
      alert("--------->not allow")
    }
  });

  return <div>{component}</div>;
};
export const Employe = ({ component }) => {
  const navigate = useNavigate();
  useEffect(() => {
    let jsondata = localStorage.getItem("passdata");
    let normaldata = JSON.parse(jsondata);
    if (
      !normaldata ||
      (normaldata?.usertype !== "admin" && normaldata?.usertype !== "super" &&normaldata?.usertype !== "employe")
    ) {
      navigate("/");
      alert("--------->not allow")
    }
  });

  return <div>{component}</div>;
};

export const Users = ({ component }) => {
  const navigate = useNavigate();
  useEffect(() => {
    let jsondata = localStorage.getItem("passdata");
    let normaldata = JSON.parse(jsondata);
    if (
      !normaldata ||
      (normaldata?.usertype !== "admin" && normaldata?.usertype !== "super" &&normaldata?.usertype !== "employe" &&normaldata?.usertype !== "user")
    ) {
      navigate("/");
      alert("--------->not allow")
    }
  });

  return <div>{component}</div>;
};