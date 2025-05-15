"use client";
import { useEffect, useState } from "react";

import "../../../public/styles/theme.css";
import "../../../public/styles/style.css";
import "../../../public/styles/responsive.css";
import "react-datepicker/dist/react-datepicker.css";
import Sidebar from "../sidebar/sidebar"
import Header from "../header/header";
import { usePathname } from "next/navigation";
import CustomBreadcrumb from "@/components/custom-breadcrumb/custom-breadcrumb";


import { Card } from "react-bootstrap";

const DefaultLayout = ({ children }) => {
  const [activeByArrow, setActiveByArrow] = useState(false);
  const [stepsSidebar, setStepsSidebar] = useState(false);
  const [active, setActive] = useState(false);
  const [extendSidebar, setSidebarExtend] = useState(true);
  const pathname = usePathname();


  const handleActiveState = () => {
    setActive(!active);
  };
  const handleSidebar = () => {
    handleActiveState();
    setSidebarExtend(!extendSidebar);
  };
  const handleCloseSidebar = () => {
    handleActiveState();
    setSidebarExtend(!extendSidebar);
    if (extendSidebar) {
      setStepsSidebar(false);
    }
  };
  const handleStepsSidebar = () => {
    setStepsSidebar(!stepsSidebar);
  };

  useEffect(() => {
    const handleResize = () => {
      // if (window.innerWidth < 993) {
      //   setSidebarExtend(false);
      // } else {
      //   setSidebarExtend(true);
      // }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  

  return (
    <>
      {/* <div
        className={`header-fixed header-tablet-and-mobile-fixed aside-fixed aside-secondary-enabled ${
          active ? "show-sidebar" : ""
        } ${extendSidebar ? "extend-sidebar" : ""} ${
          stepsSidebar ? "steps-sidebar" : ""
        }`}
      >
        <div className="d-flex flex-column flex-root">
          <div
            className={`page d-flex flex-row flex-column-fluid ${
              activeByArrow ? "side-arrow" : ""
            }`}
            data-kt-drawer-aside="on"
            data-kt-drawer="on"
          >
            <Sidebar handleCloseSidebar={handleCloseSidebar} active={active} />
            <div
              className="wrapper d-flex flex-column flex-row-fluid"
              id="kt_wrapper"
            >
              <Header
                handleSidebar={handleSidebar}
                handleStepsSidebar={handleStepsSidebar}
              />
              <div className="content-wraper">
                <div className="drawer-overlay "></div>
                <div className="content">
                <CustomBreadcrumb pathname={pathname} />

                  <Card className="border-0">
                    <Card.Body className=" ">{children}</Card.Body>
                  </Card>
                </div>
              </div>
           
            </div>
          </div>
        </div>
      </div> */}


<div className="container-fluid">
        <div
          className={`header-fixed ${active ? "show-sidebar" : ""
            } ${extendSidebar ? "extend-sidebar" : ""} ${stepsSidebar ? "steps-sidebar" : ""
            }`}
        >
            <Header
                  handleSidebar={handleSidebar}
                  handleStepsSidebar={handleStepsSidebar}
                />
            <div
              className={`page ${activeByArrow ? "side-arrow" : ""
                }`}
              data-kt-drawer-aside="on"
              data-kt-drawer="on"
            >
 
              <div className="wrapper"  >
              
                <div className="d-flex">
                  <Sidebar handleCloseSidebar={handleCloseSidebar} active={active} />


                  <div className="content-wraper">
                    <div className="drawer-overlay "></div>
                    <div className="content pe-0">
                      <Card className="border-0">
                        <Card.Body className=" ">{children}</Card.Body>
                      </Card>
                    </div>
                  </div>
                </div>


              </div>

            </div>
           
        </div>
      </div>
    </>
  );
};

export default DefaultLayout;
