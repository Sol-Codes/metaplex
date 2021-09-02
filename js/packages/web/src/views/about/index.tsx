import { Layout } from 'antd';
import React from 'react';
import { useStore } from '@oyster/common';
import { useMeta } from '../../contexts';
import { Row, Col } from 'antd';

export const AboutView = () => {
  const { isLoading, store } = useMeta();
  const { isConfigured } = useStore();

  return (
    <Layout style={{ margin: 0, marginTop: 30 }}>
      <h1 className="art-title" style={{ margin: '40px 0 20px 0' }}>
        About SolCodes
      </h1>
      <h2>
        &lt; Elevating Digital Art / &gt;
      </h2>
      <h3>
        SolCodes is a humble attempt at Elevating the current state of Digital Art - built by a group of Developers and nightly Gamers.
      </h3>
      <h1 className="art-title" style={{ margin: '40px 0 20px 0' }}>
        How it works
      </h1>
      <Row>
        <Col span={16}>
          <h2>
            For Creators
          </h2>
          <ul>
            <li>
              Creators are signed-up based on invitations from existing Creators
            </li>
            <li>
              Creators can upload an HTML (with inline CSS, JS) file as part of their NFT
            </li>
            <li>
              All NFTs created and auctioned on SolCodes are inherently HTML-based
              <br></br>
              i.e. they are programmable by nature
            </li>
            <li>
              All you need is an active account on the platform & a SOL-compatible wallet, in order to upload your Artwork (mint your HTML NFT) and to list an auction
            </li>
          </ul>
        </Col>

        <Col span={8}>
          <h2>
            For Collectors
          </h2>
          <ul>
            <li>
              Collectors can buy or resell any auctioned Dynamic Artworks (NFTs) - which contain HTML
            </li>
            <li>
              All you need is a SOL-compatible Wallet, in order to make an account and place a bid for purchase
            </li>
          </ul>
        </Col>
      </Row>
      <h1 className="art-title" style={{ margin: '40px 0 20px 0' }}>
        Our Team
      </h1>
      <Row style={{ margin: 0, textAlign: 'center' }}>
        <Col span={8}>
          <div style={{
            background: '#282828',
            padding: '20px 0px 10px 0px',
            margin: '10px',
            borderRadius: '10px',
          }}>
            <img src="assets/person/aditya-mulgundkar.jpg" style={{
              width: '100px',
              height: '100px',
              borderRadius: '100%',
            }} />
            <h2>
              Aditya Mulgundkar
            </h2>
            <h3>
              Tech Lead @ WedEasy.in;
              <br></br>
              Guardian 5 in DoTA
            </h3>
          </div>
        </Col>

        <Col span={8}>
          <div style={{
            background: '#282828',
            padding: '20px 0px 10px 0px',
            margin: '10px',
            borderRadius: '10px',
          }}>
            <img src="assets/person/divij-bharadwaj.jpg" style={{
              width: '100px',
              height: '100px',
              borderRadius: '100%',
            }} />
            <h2>
              Divij Bharadwaj
            </h2>
            <h3>
              Software Dev @ DripCapital.com;
              <br></br>
              Crusader 4 in DoTA
            </h3>
          </div>
        </Col>

        <Col span={8}>
          <div style={{
            background: '#282828',
            padding: '20px 0px 10px 0px',
            margin: '10px',
            borderRadius: '10px',
          }}>
            <img src="assets/person/marmik-thakkar.jpg" style={{
              width: '100px',
              height: '100px',
              borderRadius: '100%',
            }} />
            <h2>
              Marmik Thakkar
            </h2>
            <h3>
              Product Dev @ GetKarma.co.uk;
              <br></br>
              Crusader 3 in DoTA
            </h3>
          </div>
        </Col>

        <Col span={8}>
          <div style={{
            background: '#282828',
            padding: '20px 0px 10px 0px',
            margin: '10px',
            borderRadius: '10px',
          }}>
            <img src="assets/person/pulkit-mahajan.jpg" style={{
              width: '100px',
              height: '100px',
              borderRadius: '100%',
            }} />
            <h2>
              Pulkit Mahajan
            </h2>
            <h3>
              Survey Scripting @ Kantar.com;
              <br></br>
              Legend 4 in DoTA
            </h3>
          </div>
        </Col>

        <Col span={8}>
          <div style={{
            background: '#282828',
            padding: '20px 0px 10px 0px',
            margin: '10px',
            borderRadius: '10px',
          }}>
            <img src="assets/person/sandesh-gupta.jpg" style={{
              width: '100px',
              height: '100px',
              borderRadius: '100%',
            }} />
            <h2>
              Sandesh Gupta
            </h2>
            <h3>
              Software Dev @ OlaCabs.com;
              <br></br>
              Boosted in DoTA
            </h3>
          </div>
        </Col>

        <Col span={8}>
          <div style={{
            background: '#282828',
            padding: '20px 0px 10px 0px',
            margin: '10px',
            borderRadius: '10px',
          }}>
            <img src="assets/person/siddharth-gaba.jpg" style={{
              width: '100px',
              height: '100px',
              borderRadius: '100%',
            }} />
            <h2>
              Siddharth Gaba
            </h2>
            <h3>
              Graphic Designer
              <br></br>
              Archon 5 in DoTA
            </h3>
          </div>
        </Col>
      </Row>
    </Layout>
  );
};
