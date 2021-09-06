import { Layout, Row, Col, Table } from 'antd';

const columns = [
  {
    title: 'Slide Title',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Background Image',
    dataIndex: 'img',
    key: 'img',
    render: img => <img src={img} width={250} />,
  },
  {
    title: 'Reference Art/ Art Form',
    dataIndex: 'reference',
    key: 'reference',
  },
  {
    title: 'Trivia',
    dataIndex: 'trivia',
    key: 'trivia',
  },
];

const data = [
  {
    key: '1',
    name: 'Opening Slide',
    img: 'assets/pitch-deck/and-god-made-adam.png',
    reference: 'And God Made Adam',
    trivia: '',
  },
  {
    key: '2',
    name: 'Problem Statement',
    img: 'assets/pitch-deck/ukiyo-e-buddha.png',
    reference: 'Ukiyo-e Buddha',
    trivia: '',
  },
  {
    key: '3',
    name: 'Current State',
    img: 'assets/pitch-deck/memento-mori.png',
    reference: 'Memento Mori',
    trivia: '',
  },
  {
    key: '4',
    name: 'Our Vision',
    img: 'assets/pitch-deck/david-michaelangelo.png',
    reference: 'David by Michaelangelo',
    trivia: '',
  },
  {
    key: '5',
    name: 'SolCodes Pitch Deck',
    img: 'assets/pitch-deck/whistlers-mother.png',
    reference: 'Whistler\'s Mother',
    trivia: '',
  },
  {
    key: '6',
    name: 'Financial Estimates & Projections',
    img: 'assets/pitch-deck/state-of-the-art.png',
    reference: 'State of the Art',
    trivia: '',
  },
  {
    key: '7',
    name: 'Quote',
    img: 'assets/pitch-deck/banksy-robbo-quantum.png',
    reference: 'Banksy, Robbo and the death of NFTs',
    trivia: '',
  },,
  {
    key: '8',
    name: 'Thank You',
    img: 'assets/pitch-deck/banksy-robbo-quantum.png',
    reference: 'And God Made Adam',
    trivia: '',
  },
];

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
          <Table columns={columns} dataSource={data} style={{
            marginTop:"50px"
          }} />
        </Col>
      </Row>
    </Layout>
  );
};
