import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container, Row, Col, Button } from "react-bootstrap";

const EmailUI = () => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", maxWidth: 768, margin: "0 auto" }}>
      <section style={{ boxShadow: "0px 2px 4px 0px #00000029", padding: "20px 0" }}>
        <Container>
          <div>
            <span>From: </span>
            <span>ecsion mukul.ecsion@gmail.com</span>
          </div>
          <div>
            <span>Subject hello</span>
          </div>
        </Container>
      </section>

      <section style={{ padding: "20px 0" }}>
        <Container>
          <h6 style={{ textAlign: "center", marginBottom: "1rem" }}>View in browser</h6>
          <div
            style={{
              textAlign: "center",
              padding: "1rem 0",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center"
            }}
          >
            <h1>IQONIC</h1>
            <div>
              <Link href="#" className="me-3 text-black">
                SHOP WOMEN
              </Link>
              |
              <Link href="#" className="ms-3 text-black">
                SHOP MEN
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <div
        style={{ backgroundColor: "#A20909", padding: "40px 0", color: "white" }}
      >
        <Container>
          <div
            style={{
              height: 500,
              backgroundImage:
                "url(https://ecsiondevstorage.blob.core.windows.net/wedding-storage/9A6AB37E-4458-4196-91A1-600FDBD9E339.png)",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center"
            }}
          >
            <Row className="justify-content-evenly">
              <Col md={6}></Col>
              <Col md={6}>
                <div
                  style={{ textAlign: "end", paddingRight: 100, marginTop: 80, paddingTop: 80 }}
                >
                  <h2>
                    YOU <br /> DESERVE <br /> <strong>THE BEST.</strong>
                  </h2>
                  <Button variant="outline-light">SHOP WHAT'S NEW</Button>
                </div>
              </Col>
            </Row>
          </div>
          <Row className="justify-content-evenly">
            <Col md={6}>
              <div style={{ textAlign: "end", marginLeft: "0.5rem" }}>
                <Image
                  src="https://ecsiondevstorage.blob.core.windows.net/wedding-storage/855E0260-CA71-46F5-B9EA-7CE06B331B02.png"
                  alt=""
                  className="img-fluid"
                  width={400}
                  height={400}
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
            </Col>
            <Col md={6}>
              <div style={{ marginRight: "0.5rem" }}>
                <Image
                  src="https://ecsiondevstorage.blob.core.windows.net/wedding-storage/DCF75CD0-0878-4E6F-85F5-F5A3F0C2713D.png"
                  alt=""
                  className="img-fluid"
                  width={400}
                  height={400}
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
            </Col>
          </Row>
          <div style={{ textAlign: "center" }}>
            <Button variant="outline-light" className="mt-3">
              SHOP THIS OUTFIT
            </Button>
          </div>
        </Container>
      </div>

      <div style={{ backgroundColor: "#7E664B", padding: 40, color: "white" }}>
        <Container>
          <h2 style={{ paddingLeft: 40 }}>
            SO TAKE <br /> <strong>THE BEST.</strong>
          </h2>
          <Row className="mt-4">
            <Col md={6}>
              <div style={{ textAlign: "end" }}>
                <Image
                  src="https://ecsiondevstorage.blob.core.windows.net/wedding-storage/8E0BF34A-5D61-4508-97EA-AE483CA1026E.png"
                  alt="Fashion Model"
                  className="img-fluid"
                  width={400}
                  height={400}
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
            </Col>
            <Col md={6}>
              <div>
                <Image
                  src="https://ecsiondevstorage.blob.core.windows.net/wedding-storage/428B0165-AC95-465B-88FA-CC86B7F0B2DA.png"
                  alt="Fashion Model"
                  className="img-fluid"
                  width={400}
                  height={400}
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
              <div className="mt-2">
                <Image
                  src="https://ecsiondevstorage.blob.core.windows.net/wedding-storage/4D98DD55-F0D3-4F66-B605-E53365A1FB10.png"
                  alt=""
                  className="img-fluid"
                  width={400}
                  height={400}
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
            </Col>
          </Row>
          <div style={{ textAlign: "center" }}>
            <Button variant="outline-light" className="mt-3">
              SHOP THIS OUTFIT
            </Button>
          </div>
        </Container>
      </div>

      <Container className="py-4">
        <Row>
          <Col md={6}>
            <div>
              <span>ecsion</span>
              <br />
              <span>nagpur</span>
              <br />
              <span>440024 Nagpur</span>
              <br />
              <Link href="#" className="text-black text-decoration-none">
                contact@company.com
              </Link>
              <br />
              <span>+33 (0)1 12 34 56 78</span>
              <br />
              <Link href="#" className="text-black text-decoration-none">
                yourwebsite.com
              </Link>
            </div>
          </Col>
          <Col md={6}>
            <div style={{ textAlign: "end" }}>
              <Link href="#" className="me-2">
                <i className="fa-brands fa-facebook fa-lg" style={{ color: "#1877F2" }}></i>
              </Link>
              <Link href="#" className="me-2">
                <i className="fa-brands fa-instagram fa-lg" style={{ color: "#E4405F" }}></i>
              </Link>
              <Link href="#" className="me-2">
                <i className="fa-brands fa-x-twitter fa-lg" style={{ color: "#000000" }}></i>
              </Link>
              <div className="mt-5">
                <Link href="#" className="text-black mt-5">
                  Unsubscribe
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default EmailUI;
