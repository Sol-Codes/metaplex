import React from 'react';
import { Layout, Row, Col } from 'antd';
import { GithubOutlined, TwitterOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <div className={'footer'}>
      <Layout
        style={{
          padding: '30px',
          maxWidth: 1400,
        }}
      >
        <Row>
          <Col xs={{ span: 24 }} md={{ span: 12 }}>
            <ul>
              <li>
                <img src="/assets/solcodes-logo-dual-side.svg" height="25" alt="SolCodes | Elevating Digital Art" />
              </li>
              <li>
                <a href="https://github.com/XPlus1-Labs">
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://twitter.com/xplus1labs">
                  Twitter
                </a>
              </li>
              <li>
                <a href="https://xplus1labs.com">
                  Blog
                </a>
              </li>
            </ul>
          </Col>
          <Col xs={{ span: 24 }} md={{ span: 12 }}>
            <ul className="ul-right">
              <li>
                <Link to={`/terms-of-service`}>
                  <a className="app-btn">Terms of Service</a>
                </Link>
              </li>
              <li>
                <Link to={`/privacy-policy`}>
                  <a className="app-btn">Privacy Policy</a>
                </Link>
              </li>
            </ul>
          </Col>
        </Row>
      </Layout>
    </div>
  );
};
