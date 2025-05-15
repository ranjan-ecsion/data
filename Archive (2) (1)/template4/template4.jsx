'use client';
import Link from 'next/link';
import Image from 'next/image';
import { Container, Row, Col, Button } from 'react-bootstrap';

const EmailTemplate = () => {
  return (
    <div style={{ maxWidth: '768px', margin: '0 auto', fontFamily: '"Open Sans", sans-serif' }}>
      <section style={{ boxShadow: '0px 2px 4px 0px #00000029', padding: '20px 0' }}>
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

      <section style={{ padding: '20px 0' }}>
        <Container>
          <h6 className="text-center">View in browser</h6>

          <Row>
            <Col md={12}>
              <div style={{ padding: 20, backgroundColor: '#373535' }}>
                <Image
                  src="https://ecsiondevstorage.blob.core.windows.net/wedding-storage/0EEE2B15-E466-47B6-8E65-E5D9F1C91079.png"
                  alt=""
                  className="img-fluid"
                  width={700}
                  height={400}
                  style={{ width: '100%', height: 'auto' }}
                />
              </div>
            </Col>

            <Col md={12}>
              <div>
                <h4
                  style={{
                    fontSize: '34px',
                    marginTop: '40px',
                    textAlign: 'center',
                    fontWeight: 700,
                    padding: '0 60px',
                    marginBottom: '40px',
                  }}
                >
                  WELCOME TO THE ONWATCH EXPERIENCE!
                </h4>
              </div>
            </Col>

            {[
              'E81C3E4E-FDEC-4F43-96C7-5454DDDC7D35',
              '071C573D-D663-478B-AECC-4710699F9F87',
              'B1B29AE2-CA9D-40C5-925D-8C970ADAF40C',
              '2372FD40-FC14-4D58-B069-E1363AE857B4',
            ].map((imgId) => (
              <Col md={3} key={imgId}>
                <div>
                  <Image
                    src={`https://ecsiondevstorage.blob.core.windows.net/wedding-storage/${imgId}.png`}
                    alt=""
                    width={300}
                    height={300}
                    style={{ width: '100%', height: 'auto' }}
                  />
                </div>
              </Col>
            ))}

            <Col md={12}>
              <h4
                style={{
                  fontSize: '30px',
                  fontWeight: 600,
                  marginTop: '40px',
                  marginBottom: '20px',
                }}
              >
                Dear OnWatch Member,
              </h4>

              <p style={{ color: '#707070' }}>
                Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam nonumy eirmod
                tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
              </p>

              <p style={{ color: '#707070' }}>
                At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
                no sea takimata sanctus est.
              </p>

              <p style={{ color: '#707070' }}>
                Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
                elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                erat, sed diam voluptua.
              </p>

              <p style={{ color: '#707070' }}>
                At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
                no sea takimata sanctus est Lorem ipsum dolor sit amet.
              </p>
            </Col>

            <div className="text-center mt-3">
              <Button
                variant="secondary"
                style={{
                  color: '#fff',
                  backgroundColor: '#393939',
                  borderColor: '#393939',
                  padding: '6px 24px',
                  borderRadius: '50px',
                }}
              >
                Click here to see
              </Button>
            </div>
          </Row>
        </Container>
      </section>

      <section>
        <Container
          className="text-center"
          style={{ backgroundColor: '#2F2F2F', padding: '20px 0' }}
        >
          <Link href="#"><i className="fa-brands fa-facebook" style={{ color: '#fff', fontSize: '30px', marginRight: '10px' }} /></Link>
          <Link href="#"><i className="fa-brands fa-instagram" style={{ color: '#fff', fontSize: '30px', marginRight: '10px' }} /></Link>
          <Link href="#"><i className="fa-brands fa-x-twitter" style={{ color: '#fff', fontSize: '30px', marginRight: '10px' }} /></Link>
        </Container>

        <Container style={{ backgroundColor: '#393939', color: 'white', padding: '40px 0' }}>
          <Row>
            <Col md={12}>
              <div style={{ marginTop: '20px' }} className="text-center">
                <p style={{ marginBottom: '6px' }}>ecsion</p>
                <p style={{ marginBottom: '6px' }}>nagpur</p>
                <p style={{ marginBottom: '6px' }}>440024 Nagpur</p>
                <Link href="#" className="text-light text-decoration-none">
                  contact@company.com
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default EmailTemplate;
