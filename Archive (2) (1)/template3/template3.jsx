'use client';

import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Link from 'next/link';
import Image from 'next/image';

export default function Newsletter() {
  return (
    <div className="mainSection" style={{ maxWidth: '768px', margin: '0 auto', fontFamily: '"Open Sans", sans-serif' }}>
      <section className="section1" style={{ boxShadow: '0px 2px 4px 0px #00000029' }}>
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

      <section style={{ padding: '20px 0' }}>
        <Container>
          <h6 className="text-center mb-3">View in browser</h6>
          <h4 className="text-center fw-bold text-grey">
            YOUR <span className="text-black">COMPANY</span> LOGO
          </h4>
          <Row className="justify-content-evenly">
            <Col md={12}>
              <div className="text-center mt-5">
                <Image
                  src="https://ecsiondevstorage.blob.core.windows.net/wedding-storage/3E5FF144-636B-45DC-9198-2A6796D78E2F.jpg"
                  className="img-fluid"
                  alt="Main Banner"
                  width={600}
                  height={400}
                  style={{ maxWidth: '100%', height: 'auto' }}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="section2" style={{ padding: '20px 0' }}>
        <Container>
          <div className="text-center">
            <h5>Headline</h5>
            <p className="text-grey" style={{ textAlign: 'center', padding: '0 40px' }}>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
            </p>
          </div>

          <Row>
            {[
              '1A8CC425-0E3B-492B-B873-D7E032471C8F',
              'D408F687-E6B9-413A-A618-372059F7A588',
              'BD9EA5E9-7B96-402B-AA26-8756814B566D',
            ].map((img, idx) => (
              <Col md={4} key={idx}>
                <Card className="border-0">
                  <Image
                    src={`https://ecsiondevstorage.blob.core.windows.net/wedding-storage/${img}.jpg`}
                    className="card-img-top"
                    alt="Product"
                    width={400}
                    height={300}
                    style={{ width: '100%', height: 'auto' }}
                  />
                  <Card.Body className="text-center">
                    <Card.Title>Product Name</Card.Title>
                    <p className="card-text text-grey mb-1">Lorem ipsum dolor sit amet, consetetur sadipscing</p>
                    <p className="text-grey mb-0">€ 195,00</p>
                    <Link href="#" className="text-grey">
                      SHOP NOW
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

          <div className="text-center mt-3">
            <Button
              variant="danger"
              style={{ backgroundColor: '#A20908', padding: '4px 18px', border: 'none' }}
            >
              SAVE 20% TODAY!
            </Button>
          </div>
        </Container>
      </section>

      <section>
        <Container className="bg-dark-grey text-center" style={{ backgroundColor: '#2F2F2F', padding: '20px 0' }}>
          <Link href="#"><i className="fa-brands fa-facebook" style={{ color: '#fff', fontSize: '30px', marginRight: '10px' }}></i></Link>
          <Link href="#"><i className="fa-brands fa-instagram" style={{ color: '#fff', fontSize: '30px', marginRight: '10px' }}></i></Link>
          <Link href="#"><i className="fa-brands fa-x-twitter" style={{ color: '#fff', fontSize: '30px', marginRight: '10px' }}></i></Link>
        </Container>

        <Container className="bg-grey text-white" style={{ backgroundColor: '#393939', paddingTop: '40px', paddingBottom: '40px' }}>
          <p className="text-center">If you no longer wish to receive this newsletter,</p>
          <Row>
            <Col md={6}>
              <div className="footerSectionContacts" style={{ marginTop: '20px' }}>
                <p style={{ marginBottom: '6px' }}>Legal Notice</p>
                <p style={{ marginBottom: '6px' }}>ecsion</p>
                <p style={{ marginBottom: '6px' }}>nagpur</p>
                <p style={{ marginBottom: '6px' }}>440024 Nagpur</p>
                <Link href="#" className="text-light text-decoration-none">Mail: example@company.com</Link>
                <p className="mt-1">Tel: 0123/456789</p>
              </div>
            </Col>
            <Col md={6}>
              <div className="footerSectionContacts" style={{ marginTop: '20px' }}>
                <p style={{ marginBottom: '6px' }}>Management board: This guy and that guy</p>
                <p style={{ marginBottom: '6px' }}>VAT tax No. DE 123456789</p>
                <p style={{ marginBottom: '6px' }}>Commercial registration No. in</p>
                <p style={{ marginBottom: '6px' }}>YOUR local court: ABC 123456 D</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}
