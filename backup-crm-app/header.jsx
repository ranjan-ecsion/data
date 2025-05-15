"use client";
import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Link from "next/link";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Col, Form, InputGroup, Nav, Row } from "react-bootstrap";
import ViewProfileOffcanvas from "./_viewProfileOffCanvas";
import ViewProfile from "./_viewProfile";
import { APP_NAME } from "../../../constant";
import Image from "next/image";
import logo from "../../../public/img/logo.png";

const Header = (props) => {
    const { data: session, status } = useSession();
    const [themeActive, setThemeActive] = useState("#00529b");
    const [themeName, setThemeName] = useState("steelblue");
    const [themeHover, setThemeHover] = useState("#0D3960");
    const [searchBar, setSearchBar] = useState(false)
    //added useeffect to check session data for themecolor
    useEffect(() => {
        const savedThemeColor = sessionStorage.getItem("themeColor");
        const savedThemeName = sessionStorage.getItem("themeName");
        const savedThemeHover = sessionStorage.getItem("themeHover");

        if (savedThemeColor && savedThemeName && savedThemeHover) {
            setThemeActive(savedThemeColor);
            setThemeName(savedThemeName);
            setThemeHover(savedThemeHover);

            // Apply theme to the document
            const root = document.querySelector(":root");
            if (root) {
                root.style.setProperty("--primary", savedThemeColor);
                root.style.setProperty("--primaryhover", savedThemeHover);
            }
        }
    }, []);

    const handleThemeChange = (color, hoverColor, value) => {
        setThemeName(value);
        setThemeHover(hoverColor);

        sessionStorage.setItem("themeColor", color);
        sessionStorage.setItem("themeName", value);
        sessionStorage.setItem("themeHover", hoverColor);

        if (typeof document !== "undefined") {
            const root = document.querySelector(":root");
            if (root) {
                root.style.setProperty("--primary", color);
                root.style.setProperty("--primaryhover", hoverColor);
            }
        }
    };

    const [show, setShow] = useState(false);
    const [reload, setReload] = useState(false);
    const callBack = (action) => {
        switch (action) {
            case "viewProfile":
                setShow(true);
                setData((prevData) => ({
                    ...prevData,
                    content: <ViewProfile setReload={setReload} setShow={setShow} data={session} />,
                    type: "view",
                    title: "View Profile",
                }));
                setCanvasWidth("30%");
                break;
        }
    };
    const [data, setData] = useState({
        title: "",
        type: "",
        content: "",
        dataObject: "",
        singleObject: "",
    });
    const [canvasWidth, setCanvasWidth] = useState(false);
    return (
        <>
            <div id="kt_header" className="header">
                <div className="row">
                    <div className="order-1 order-lg-2 col-lg-12  col-12 position-relative">
                        <Navbar className="head-options">
                            <div className="aside-logo-section">
                                                        <div className="aside-logo d-lg-flex flex-column align-items-center flex-column-auto ">
                                                            <Link href="" aria-label="">
                                                                <Image
                                                                    alt="Logo"
                                                                    src={logo}
                                                                    height={100}
                                                                    width={100}
                                                                    className="h-50px logo-seagrant"
                                                                />
                                                                <Image
                                                                    height={50}
                                                                    width={50}
                                                                    alt="Logo"
                                                                    src="/img/logo-small.png"
                                                                    className="h-50px logo-responsive"
                                                                />
                                                            </Link>
                                                        </div>
                                                    </div>
                            <Navbar.Collapse id="responsive-navbar-nav" className="gap-3">
                                <Nav className="mb-lg-0">
                                    <span
                                        className="svg-icon svg-icon-2x d-flex align-items-center"
                                        onClick={props.handleSidebar}
                                    >
                                        <span className="material-symbols-outlined q"> menu </span>
                                    </span>
                                </Nav>
                                <Nav className="me-auto mb-lg-0">
                                    <h1 tabIndex="0" className="text-dark mt-2 fs-4 brand-title ps-4">
                                        {APP_NAME}
                                    </h1>
                                </Nav>
                            </Navbar.Collapse>

                            <Nav className="d-block ">
                                <Nav.Link className="">
                                    <div
                                        className="search-icon d-flex"
                                        onClick={() => setSearchBar(!searchBar)}
                                    >
                                        <span className="material-symbols-outlined">search</span>
                                    </div>
                                </Nav.Link>
                            </Nav>
                            <Nav className="col-auto align-items-center ">
                                <NavDropdown
                                    data-boundary="viewport"
                                    title={
                                        <span className="material-symbols-outlined">palette</span>
                                    }
                                    id="navbarScrollingDropdown"
                                    className="remove-arrow"
                                >
                                    <div className=" dropdown-menu-end border-0 rounded-0 rounded-bottom m-0">
                                        <Link
                                            href="#"
                                            className="dropdown-item d-flex justify-content-between"
                                            onClick={() =>
                                                handleThemeChange("#00bcd5", "#1B727E", "skyblue")
                                            }
                                        >
                                            <span>Sky Blue</span>
                                            <span>
                                                <i
                                                    className={`fa-solid  fa-check ${themeName === "skyblue"
                                                        ? "d-inline-block"
                                                        : "d-none"
                                                        }`}
                                                ></i>
                                                <i className="fa-solid fa-square ms-2 theme-blue"></i>
                                            </span>
                                        </Link>
                                        <Link
                                            href="#"
                                            className="dropdown-item d-flex justify-content-between"
                                            onClick={() =>
                                                handleThemeChange("#4156b3", "#101D53", "webblue")
                                            }
                                        >
                                            UF Web Blue
                                            <span>
                                                <i
                                                    className={`fa-solid fa-check ${themeName === "webblue"
                                                        ? "d-inline-block"
                                                        : "d-none"
                                                        }`}
                                                ></i>
                                                <i className="fa-solid fa-square ms-2 theme-webblue"></i>
                                            </span>
                                        </Link>
                                        <Link
                                            href="#"
                                            className="dropdown-item d-flex justify-content-between"
                                            onClick={() =>
                                                handleThemeChange("#a51c30", "#91192a", "brown")
                                            }
                                        >
                                            <span>Brown</span>
                                            <span>
                                                <i
                                                    className={`fa-solid fa-check ${themeName === "brown" ? "d-inline-block" : "d-none"
                                                        }`}
                                                ></i>
                                                <i className="fa-solid fa-square ms-2 theme-brown"></i>
                                            </span>
                                        </Link>
                                        <Link
                                            href="#"
                                            className="dropdown-item d-flex justify-content-between"
                                            onClick={() =>
                                                handleThemeChange("#00529b", "#0D3960", "steelblue")
                                            }
                                        >
                                            <span>Steel Blue</span>
                                            <span>
                                                <i
                                                    className={`fa-solid fa-check ${themeName === "steelblue"
                                                        ? "d-inline-block"
                                                        : "d-none"
                                                        }`}
                                                ></i>
                                                <i className="fa-solid fa-square ms-2 theme-steelblue"></i>
                                            </span>
                                        </Link>
                                    </div>
                                </NavDropdown>
                                <Link className="nav-link d-flex" href="">
                                    <span className="material-symbols-outlined">settings</span>
                                </Link>

                                <Nav className="col-auto"></Nav>
                                <span
                                    className="p-2 profile-text"
                                    onClick={() => callBack("viewProfile")}
                                >
                                    {session != undefined ? session.user.full_name : ""}
                                </span>
                                {/* <ProfileDropdown profile={profile} /> */}
                                <Link
                                    href="#"
                                    className="material-symbols-outlined svg-icon svg-icon-2x nav-link"
                                    onClick={() => signOut({ callbackUrl: '/auth/sign' })}
                                >
                                    power_settings_new
                                </Link>
                            </Nav>
                        </Navbar>
                    </div>
                </div>
            </div>
            <ViewProfileOffcanvas
                show={show}
                setShow={setShow}
                data={data}
                callBack={callBack}
                canvasWidth={canvasWidth}
            />
        </>
    );
};

export default Header;
