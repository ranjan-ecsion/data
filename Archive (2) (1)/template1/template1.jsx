'use client';

import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Image from 'next/image';
import Link from 'next/link';

const NewsArticles = () => {
  return (
    <Container style={{ backgroundColor: '#f8f9fa' }}>
      <div
        style={{
          maxWidth: '768px',
          padding: '0px',
          margin: '0 auto',
          backgroundColor: '#fff',
        }}
        className="py-5"
      >
        <div
          style={{
            padding: '0 40px 40px',
            boxShadow: '0px 2px 4px 0px #00000029',
          }}
        >
          <div>
            <span>From: ecsion </span> <span> mukul.ecsion@gmail.com </span>
          </div>
          <div>
            <span>Subject</span> <span>hello</span>
          </div>
        </div>

        <div style={{ padding: '0 3rem' }}>
          <div className="text-center my-4">
            <p style={{ fontSize: '18px' }}>View in browser</p>
            <h3 className="text-uppercase" style={{ fontSize: '35px' }}>
              The News
            </h3>
          </div>

          <div
            className="divider mx-auto"
            style={{
              border: '1px solid',
              maxWidth: '550px',
              margin: '0 auto',
              width: '100%',
            }}
          />

          <div>
            <h3 className="text-center text-uppercase mt-4" style={{ fontSize: '35px' }}>
              Top Articles of <span>the Week</span>
            </h3>

            <div style={{ textAlign: 'center' }}>
              <Image
                src="https://ecsiondevstorage.blob.core.windows.net/wedding-storage/870D79FF-A1FB-4B2F-B0B5-F4BBDE7ABC4D.png"
                alt="Cabbages"
                width={550}
                height={375}
                style={{
                  width: '100%',
                  borderRadius: '10px',
                  maxWidth: '550px',
                  height: '375px',
                  margin: '1rem auto',
                  objectFit: 'cover',
                }}
              />
            </div>

            <h3 className="text-center" style={{ fontSize: '35px' }}>
              Are these cabbages right <br /> side up or upside down?
            </h3>

            <div className="text-center mt-5" style={{ marginTop: '3rem' }}>
              <Button
                variant="light"
                style={{
                  border: '1px solid #3d3c3c',
                  borderRadius: 0,
                  padding: '2px 10px',
                  textTransform: 'uppercase',
                  fontWeight: 500,
                }}
              >
                Read Article
              </Button>
            </div>
          </div>

          <Row className="mt-5" style={{ marginTop: '3rem' }}>
            <Col md={5}>
              <div>
                <Image
                  src="https://ecsiondevstorage.blob.core.windows.net/wedding-storage/A14D4AE9-E867-4E89-98EE-73200AC2A0C0.png"
                  alt="Cherry"
                  width={325}
                  height={220}
                  style={{
                    borderRadius: '0.375rem',
                    width: '100%',
                    height: '220px',
                    objectFit: 'cover',
                  }}
                />
              </div>
            </Col>
            <Col md={7} style={{ paddingLeft: '3rem', paddingRight: '3rem' }}>
              <h4 style={{ fontSize: '20px', fontWeight: 500 }}>
                Worms should definitely be banned from cherries
              </h4>
              <p style={{ fontSize: '18px' }} className="text-muted">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy green tempor.
              </p>
              <div className="mt-5" style={{ marginTop: '3rem' }}>
                <Button
                  variant="light"
                  style={{
                    border: '1px solid #3d3c3c',
                    borderRadius: 0,
                    padding: '2px 10px',
                    textTransform: 'uppercase',
                    fontWeight: 500,
                  }}
                >
                  Read Article
                </Button>
              </div>
            </Col>
          </Row>

          <Row className="mt-5" style={{ marginTop: '3rem' }}>
            <Col md={5}>
              <div>
                <Image
                  src="https://ecsiondevstorage.blob.core.windows.net/wedding-storage/C003C2F2-C86F-4C34-99BB-709095FCD958.png"
                  alt="Light Bulb"
                  width={325}
                  height={220}
                  style={{
                    borderRadius: '0.375rem',
                    width: '100%',
                    height: '220px',
                    objectFit: 'cover',
                  }}
                />
              </div>
            </Col>
            <Col md={7} style={{ paddingLeft: '3rem', paddingRight: '3rem' }}>
              <h4 style={{ fontSize: '20px', fontWeight: 500 }}>
                Why is there a lollipop in this soap dish?
              </h4>
              <p style={{ fontSize: '18px' }} className="text-muted">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy green tempor.
              </p>
              <div className="mt-5" style={{ marginTop: '3rem' }}>
                <Button
                  variant="light"
                  style={{
                    border: '1px solid #3d3c3c',
                    borderRadius: 0,
                    padding: '2px 10px',
                    textTransform: 'uppercase',
                    fontWeight: 500,
                  }}
                >
                  Read Article
                </Button>
              </div>
            </Col>
          </Row>

          <hr />

          <div className="text-center mt-4">
            <Link href="#"><i className="fa-brands fa-facebook fa-lg mx-3" style={{ fontSize: 28, color: '#000' }}></i></Link>
            <Link href="#"><i className="fa-brands fa-instagram fa-lg me-3" style={{ fontSize: 28, color: '#000' }}></i></Link>
            <Link href="#"><i className="fa-brands fa-x-twitter fa-lg" style={{ fontSize: 28, color: '#000' }}></i></Link>
          </div>

          <div className="container bg-grey">
            <Row className="mt-5">
              <Col md={6}>
                <div>
                  <strong><p>ecsion</p></strong>
                  <p className="mb-0">nagpur</p>
                  <p className="mb-0">440024 Nagpur</p>
                  <Link
                    href="#"
                    className="text-dark text-decoration-none"
                    style={{ fontSize: '18px', color: '#000', textDecoration: 'none' }}
                  >
                    Mail: example@company.com
                  </Link>
                </div>
              </Col>
              <Col md={6} className="text-end">
                <p className="mb-0">Privacy</p>
                <p className="mb-0">Imprint</p>
                <p className="mb-0">Unsubscribe from newsletter</p>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default NewsArticles;
