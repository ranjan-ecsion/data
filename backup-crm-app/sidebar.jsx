import { useState } from "react";
import { Accordion, Button, Nav, OverlayTrigger } from "react-bootstrap";
import Tooltip from "react-bootstrap/Tooltip";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/img/logo.png";
import { useParams, usePathname, useSearchParams } from "next/navigation";

const Sidebar = ({ extendSidebar, handleCloseSidebar }) => {
    const searchParams = useSearchParams();

    const id = searchParams.get("id");
    const [show, setShow] = useState(false);
    const [stepsSidebarContent, setStepsSidebarContent] = useState("");
    const [open, setOpen] = useState(false);
    const pathname = usePathname();
    const params = useParams();

    const modules = [
        {
            label: "Dashboard",
            href: `/dashboard`,
        },
        {
            label: "Leads",
            href: `/leads`,
        },
        {
            label: "Contacts",
            href: `/contacts`,
        },
        {
            label: "Deals",
            href: `/deals`,
        },
        // {
        //     label: "Vendors",
        //     href: `/deals`,
        //     subItems: [
        //         {
        //             label: "Vendor Products",
        //             href: `/vendor-product-items`,
        //         },
        //         {
        //             label: "Package Creation",
        //             href: `/package-creation`,
        //         },
        //         {
        //             label: "Proposal Template",
        //             href: `/proposal-template`,
        //         },
        //     ]
        // },
        // {
        //     label: "Vendor Products",
        //     href: `/vendor-product-items`,
        // },
        // {
        //     label: "Package Creation",
        //     href: `/package-creation`,
        // },
        // {
        //     label: "Proposal Template",
        //     href: `/proposal-template`,
        // },
        {
            label: "Quotes",
            href: `/quotes`,
        },
        {
            label: "Proposals",
            href: `/proposals`,
        },
        {
            label: "Contracts",
            href: `/contracts`,
        },
        {
            label: "Invoice",
            href: `/invoice`,
        },
        // {
        //     label: "Campaign",
        //     href: `/campaign`,
        // },

        {
            label: "Templates",
            href: "/dashboard",
            schemaGuid: "7897899845894568956",
            icon: "user",
            paths: ["/dashboard"],
            subMenuItems: [
                { label: "Email", href: "/email", icon: "user" },
                { label: "SMS", href: "/sms", icon: "user" },
            ],
        },
        {
            label: "Campaign",
            href: "/campaign",
            schemaGuid: "7897499845894568956",
            icon: "user",
            paths: ["/campaign"],
        },
        {
            label: "Creating List",
            href: "/list",
            schemaGuid: "7897499845894568956",
            icon: "clipboard-list",
            paths: ["/list"],
        },
    ];

    const subModules = [
        {
            label: "Production",
            href: `/project`,
        },
        {
            label: "Staging",
            href: `/staging`,
        },
    ];

    const isMenuVisible = pathname !== "/leads" || pathname !== "/project";

    //  ||
    // pathname !== "/leads";

    return (
        <>
            <div className={`aside`}>
                <div className="aside-wrapper">
                    <div className="aside-primary  d-flex flex-column">
                        
                        <div className="aside-nav d-flex flex-column  w-100 pt-lg-0">
                            <Nav className="flex-column">
                                {/* {!isMenuVisible ? (
                  modules.map((route, index) => (
                    <div key={index} className="nav-item">
                      <Nav.Link
                        // className="btn-custom main-link-wraaper active_li active"
                        className={`${
                          pathname === `${route.href}` ? "nav-link-active" : ""
                        } btn-custom main-link-wraaper active_li active nav-link`}
                        aria-label=""
                        as={Link}
                        key={index}
                        href={route.href}
                      >
                        <div className="link-item-wrapper">
                          <div className="link-icon">
                            <i className="fa-solid fa-graduation-cap"></i>
                          </div>
                          <div className="link-name">
                            <p>{route.label}</p>
                          </div>
                        </div>
                      </Nav.Link>
                    </div>
                  ))
                ) : (
                  <>
                    <div className="nav-item">
                      <div
                        className={`d-flex align-items-center ${
                          extendSidebar
                            ? "justify-content-start"
                            : "justify-content-start"
                        } back-btn-wrapper`}
                      >
                        <Link
                          href={"/project"}
                          className="sidebar-back-icon d-flex py-2 justify-content-start"
                          style={{ width: extendSidebar ? "35px" : "" }}
                        >
                          <i className="fa-solid fa-angle-left"></i>
                        </Link>
                        <div className="sidebar-back-btn">
                          <Button
                            as={Link}
                            className="text-dark border-0"
                            variant="none"
                            href={"/project"}
                          >
                            Back
                          </Button>
                        </div>
                      </div>
                    </div>

                    <div className="nav-item mb-2">
                      <span className="sidebar-params-name text-black">
                        {params.id}
                      </span>
                      <div>
                        <span className="sidebar-params-name">Project</span>
                      </div>
                    </div>



                    {
                      subModules.map((route, index) => (
                        <div key={index} className="nav-item">
                          <Nav.Link
                            // className="btn-custom main-link-wraaper active_li active"
                            className={`${
                              pathname === `${route.href}` ? "nav-link-active" : ""
                            } btn-custom main-link-wraaper active_li active nav-link`}
                            aria-label=""
                            as={Link}
                            key={index}
                            href={route.href}
                          >
                            <div className="link-item-wrapper">
                              <div className="link-icon">
                                <i className="fa-solid fa-graduation-cap"></i>
                              </div>
                              <div className="link-name">
                                <p>{route.label}</p>
                              </div>
                            </div>
                          </Nav.Link>
                        </div>
                      ))
                    }

                    
                  </>
                )} */}

                                {modules.map((route, index) => (
                                    <div key={index} className="nav-item">
                                        <Nav.Link
                                            // className="btn-custom main-link-wraaper active_li active"
                                            className={`${pathname === `${route.href}` ||
                                                pathname.startsWith(route.href)
                                                ? "nav-link-active"
                                                : ""
                                                } btn-custom main-link-wraaper active_li active nav-link`}
                                            aria-label=""
                                            as={Link}
                                            key={index}
                                            href={route.href}
                                        >
                                            <div className="link-item-wrapper">
                                                <div className="link-icon">
                                                    <i className="fa-solid fa-graduation-cap"></i>
                                                </div>
                                                <div className="link-name">
                                                    <p>{route.label}</p>
                                                </div>
                                            </div>
                                        </Nav.Link>
                                    </div>
                                ))}

                                <Accordion className="sidebar-accordion">
                                    <Accordion.Item>
                                        <Accordion.Header>
                                            <div className="link-icon">
                                                <i className="fa-solid fa-graduation-cap"></i>
                                            </div>
                                            <div className="link-name">Package</div>
                                        </Accordion.Header>
                                        <Accordion.Body className="px-0 pt-0">
                                            <Nav>
                                                <Nav.Item>
                                                    <Nav.Link
                                                        href="/product-creation"
                                                        as={Link}
                                                        prefetch={true}
                                                        className="btn-custom main-link-wraaper active_li active nav-link"
                                                    >
                                                        <div
                                                            className={`link-item-wrapper ${pathname == "/product-creation"
                                                                ? "aside-active-link"
                                                                : ""
                                                                }`}
                                                        >
                                                            <div className="link-name link-name-accordion">
                                                                <p>Product Creation</p>
                                                            </div>
                                                        </div>
                                                    </Nav.Link>
                                                </Nav.Item>

                                                <Nav.Item>
                                                    <Nav.Link
                                                        href="/package-creation"
                                                        as={Link}
                                                        prefetch={true}
                                                        className="btn-custom main-link-wraaper active_li active nav-link"
                                                    >
                                                        <div
                                                            className={`link-item-wrapper ${pathname == true ? "aside-active-link" : ""
                                                                }`}
                                                        >
                                                            <div className="link-name link-name-accordion">
                                                                <p>Package Creation</p>
                                                            </div>
                                                        </div>
                                                    </Nav.Link>
                                                </Nav.Item>

                                                <Nav.Item>
                                                    <Nav.Link
                                                        href="/proposal-template"
                                                        as={Link}
                                                        prefetch={true}
                                                        className="btn-custom main-link-wraaper active_li active nav-link"
                                                    >
                                                        <div
                                                            className={`link-item-wrapper ${pathname == true ? "aside-active-link" : ""
                                                                }`}
                                                        >
                                                            <div className="link-name link-name-accordion">
                                                                <p>Proposal Template</p>
                                                            </div>
                                                        </div>
                                                    </Nav.Link>
                                                </Nav.Item>
                                            </Nav>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </Nav>
                        </div>

                        <div className="aside-footer position-absolute justify-content-center d-flex align-items-center ">
                            <div className="aside-footer-inside"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Sidebar;
