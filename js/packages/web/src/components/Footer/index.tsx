import React from 'react';
import { Layout, Row, Col } from 'antd';
import { GithubOutlined, TwitterOutlined } from '@ant-design/icons';
import { Button } from 'antd';

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
          <Col span={12}>
            <ul>
              <li>
                <img src="/assets/solcodes-logo-dual-side.svg" height="20" />
              </li>
              <li>
                <a href="#">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#">
                  Blog
                </a>
              </li>
            </ul>
          </Col>
          <Col span={12}>
            <ul className="ul-right">
              <li>
                <a href="#">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Layout>
    </div>
  );
};
