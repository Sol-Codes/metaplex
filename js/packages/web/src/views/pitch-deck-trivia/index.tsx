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
    trivia: 'As the first slide, we wanted to explore the Creationism theme through representation of Art. What better than God breathing life into Adam himself?',
  },
  {
    key: '2',
    name: 'Problem Statement',
    img: 'assets/pitch-deck/ukiyo-e-buddha.png',
    reference: 'Ukiyo-e Buddha',
    trivia: 'Art hasn\'t always been paintings - it was statues and wall art long before that. We wanted to show the transition and volatility of Art over the ages. This painting of a Buddha temple is drawn out in a Japanese Ukiyo-e style and perfectly encompasses the transitional nature of Art.',
  },
  {
    key: '3',
    name: 'Current State',
    img: 'assets/pitch-deck/memento-mori.png',
    reference: 'Memento Mori',
    trivia: 'The Memento Mori art form signifies the fact that death triumphs all. We wanted to encompass this idea of death of the existing state of NFTs with this evoking, macabre painting.',
  },
  {
    key: '4',
    name: 'Our Vision',
    img: 'assets/pitch-deck/david-michaelangelo.png',
    reference: 'David by Michelangelo',
    trivia: 'The modern Renaissance-era benchmark sketching face is that of David\'s statue. A great reference point for anyone moving away from stones to paper. We wanted to instill this feeling of transition, or growth from one Art form to other, with our vision - Elevating Digital Art.',
  },
  {
    key: '5',
    name: 'Market Analysis',
    img: 'assets/pitch-deck/whistlers-mother.png',
    reference: 'Whistler\'s Mother',
    trivia: 'This convincingly serious slide had a good empty space on the side - we wanted to use this to do something weird, aloof - just so that you\'d end up checking out this Trivia page! What you see here, is Whistler\'s Mother, a painting that was famously sabotaged by Mr. Bean in the movie, Bean. Catchy, isn\'t it?',
  },
  {
    key: '6',
    name: 'Financial Estimates & Projections',
    img: 'assets/pitch-deck/state-of-the-art.png',
    reference: 'State of the Art',
    trivia: 'This one\'s pretty close to our heart - our avant-garde UI/UX Designer, Siddharth wanted to use 1 slide to make a digital painting. In State of the Art, Siddharth has tried to shed light on the human intent behind loving art - from pondering over beauty, to falling in love with, to treating it as a currency.',
  },
  {
    key: '7',
    name: 'Quote',
    img: 'assets/pitch-deck/banksy-robbo-quantum.png',
    reference: 'Banksy, Robbo and the death of static NFTs',
    trivia: 'There once was a graffiti war between two of the best - Banksy and King Robbo. While the war ended on a tragic note, with Robbbo\'s death, one of the famous places where they re-painted each other\'s artwork is this tunnel in Camden. One of Banksy\'s early works was a witty reply - a painter peeling off Robbo\' graffiti. We used this same image, but replaced Robbo\'s graffiti with that of the first NFT ever sold - Quantum. In a way, we\'re peeling off the old, existing state of NFTs!',
  },,
  {
    key: '8',
    name: 'Not a Matrix Glitch',
    img: 'assets/pitch-deck/thank-you.png',
    reference: 'The Matrix (somewhat.)',
    trivia: 'Since we\'re moving away from static images/videos, to code for NFTs, we wanted to encompass the idea with something native to computer code - a glitch! Unfortunately, the entire team agreed that the Matrix glitch effect was far too overused, so we instead ended up creating our own Glitch effect!',
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
