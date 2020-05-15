import React from 'react';
import { Layout, Row, Col } from 'antd'; //Layout, Row, Col, etc. is an object from the antd library;
import { Card } from './Blocks'

const { Header, Footer, Content } = Layout; // Destructuring

const data = [
  {
    id: 1,
    name: "шарик",
    image: "https://heroeswm-uvz.at.ua/imgs/katalog_statey/tumblr_m07iyfLy0F1qce1ag.jpg"
  },
  {
    id: 2,
    name: "футболка",
    image: "https://i.pinimg.com/originals/da/8b/d1/da8bd1d87e3e7c8d708571515fdc2725.jpg"
  },
  {
    id: 4,
    name: "шарик 2",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/1200px-Heart_coraz%C3%B3n.svg.png"
  }
]

/*style is also an object, and it has a set of nested sub-objects that are diffferent css styles; that's why
we need to use curly brackets */

/*<Card el={element}/> refers to component Card which is written in the Card.jsx file. It has to have the same
name as the argument of the Card component. in this way, we set a props for the Card function.*/
export const ProductList = () => {
  const renderCards = (element) => (
    <Col span={4}>
      <Card el={element}/>
    </Col>
  )
  return (
    <Layout style={styles.layoutStyle}>
      <Header>Header</Header>
      <Content>
        <Row justify="space-around">
          {data.map(el => renderCards(el))}
        </Row>
      </Content>
      <Footer>Footer</Footer>
    </Layout>
  );
}

/*styles can be set as inline styles in the <Layout> (style={{ minHeight: '100vh' }}).
Alternatively, they can be assigned separately within a new style-related object where all other
styles will be set. But they still need to be referenced within <Layout>'s style={} attribute.*/
const styles = {
  layoutStyle: {
    minHeight: '100vh'
  }
}