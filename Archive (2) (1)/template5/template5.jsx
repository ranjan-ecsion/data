'use client';

import { Container, Row, Col, Button } from 'react-bootstrap';
import Image from 'next/image';
import Link from 'next/link';

export default function EmailTemplate() {
  return (
    <div className="main-section" style={{ maxWidth: '768px', margin: '0 auto', fontFamily: '"Open Sans", sans-serif' }}>
      {/* From & Subject */}
      <section className="section-1" style={{ boxShadow: '0px 2px 4px 0px #00000029' }}>
        <Container className='px-3 py-4'>
          <div>
            <span>From: </span>
            <span>ecsion mukul.ecsion@gmail.com</span>
          </div>
          <div>
            <span>Subject hello</span>
          </div>
        </Container>
      </section>

      {/* Logo + Greeting */}
      <section className="py-4">
        <Container>
          <h6 className="text-center">View in browser</h6>
          <div className="text-center">
            <Image
              src="https://ecsiondevstorage.blob.core.windows.net/wedding-storage/CD71160C-02B2-4A98-B171-FE33B7BC9EEA.png"
              alt="Logo"
              width={120}
              height={50}
              className="logo mb-3"
            />
          </div>
          <p>
            Hey <strong> Mrs. Smith</strong>, it looks like we’ve found a flat that you might be interested in.
          </p>
          <hr className="mb-0" />
        </Container>
      </section>

      {/* Flat Summary + Main Image */}
      <section className="pt-0">
        <Container className="mb-3">
          <div className="d-flex justify-content-between">
            <h5 className="fw-bold">Cheap apartment in Paris center</h5>
            <Button variant="warning" className="text-white">5700€ / month</Button>
          </div>
        </Container>
        <Container>
          <Row>
            <Col md={12}>
              <Image
                src="https://ecsiondevstorage.blob.core.windows.net/wedding-storage/EFCCC371-0D20-4AEC-AF29-F5F3C12A6585.png"
                alt="Flat Main"
                width={768}
                height={400}
                className="w-100"
              />
            </Col>
            {[
              "919BAA56-79B2-4774-8803-12B68822A4E4",
              "01540762-E33D-4812-A0CA-1EB5180E27AF",
              "32B4CFCF-7E0C-41F8-842A-12F79144BDCA",
            ].map((id, index) => (
              <Col md={4} key={index} className={`${index === 0 ? 'pe-1' : index === 1 ? 'px-1' : 'ps-1'}`}>
                <div className="mt-2">
                  <Image
                    src={`https://ecsiondevstorage.blob.core.windows.net/wedding-storage/${id}.png`}
                    alt={`Flat ${index + 1}`}
                    width={300}
                    height={200}
                    className="w-100"
                  />
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Flat Details */}
      <section className="py-4">
        <Container>
          <h4 className="subtitle" style={{ fontSize: '26px', fontWeight: 600, marginBottom: '30px' }}>
            27 boulevard Haussmann, 75009, Paris
          </h4>
          <h5 className="fw-300 mt-3" style={{ fontWeight: 300 }}>
            <span>4 rooms </span>| <span>130m² </span>| <span>Furnished </span>|
            <span>Renovated </span> | <span>Available now</span>
          </h5>
          <div className="mt-5 mx-4">
            <Button className="w-100 btn-warning text-white">I WANT TO VISIT THIS FLAT</Button>
          </div>
        </Container>
      </section>

      {/* Footer */}
      <section>
        <Container className="text-center" style={{ backgroundColor: '#2F2F2F', padding: '20px 0' }}>
          <Link href="#"><i className="fa-brands fa-facebook fa-lg text-white me-2"></i></Link>
          <Link href="#"><i className="fa-brands fa-instagram fa-lg text-white me-2"></i></Link>
          <Link href="#"><i className="fa-brands fa-x-twitter fa-lg text-white"></i></Link>
        </Container>
        <Container style={{ backgroundColor: '#393939', color: 'white', padding: '40px 0' }}>
          <Row>
            <Col md={12}>
              <div className="text-center footer-section-contacts" style={{ marginTop: '20px' }}>
                <p style={{ marginBottom: '6px' }}>ecsion</p>
                <p style={{ marginBottom: '6px' }}>nagpur</p>
                <p style={{ marginBottom: '6px' }}>440024</p>
                <Link href="#" className="text-light text-decoration-none d-block">contact@company.com</Link>
                <Link href="#" className="text-light text-decoration-none d-block">No longer want to receive these emails? Unsubscribe.</Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}
