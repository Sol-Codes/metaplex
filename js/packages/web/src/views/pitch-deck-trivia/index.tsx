import { Layout, Row, Col } from 'antd';

export const PitchDeckTriviaView = () => {
  return (
    <Layout style={{ margin: 0, marginTop: 30 }}>
      <h1 className="art-title" style={{ margin: '40px 0 20px 0' }}>
        Pitch Deck Trivia
      </h1>
      <Row>
        <Col span={24}>
          <h3>
            If you just went through our Pitch Deck, this is the place to be! However, if you haven't seen it yet, we highly recommend that you:  <a href="https://app.pitch.com/app/presentation/6d882cc6-610a-4c69-8b0a-bec5ee177232/7347dde4-9e1d-4937-b3fe-0ee399557045" target="_blank">
              view our Pitch Deck
            </a>.
          </h3>
          <p>
            Table showing each image and the idea behind goes here.
          </p>
        </Col>
      </Row>
    </Layout>
  );
};
