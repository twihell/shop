import React, { useState } from 'react';
import { Card as CardComponent } from 'antd'; // alias - renaming component to resolve name similarity conflict
import ReactCardFlip from 'react-card-flip';
import { Link } from 'react-router-dom';
import { TextBold } from './styles';

const { Meta } = CardComponent;


export const Card = ({ el }) => {
    const [isFlipped, changeFlipped] = useState(false);
    const onChangeFlipped = () => {

        changeFlipped(!isFlipped);
    }
    return (
        <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">

            <CardComponent
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src={el.image} style={{ minHeight: "320px" }} />}
                onClick={onChangeFlipped}
            >
                <Link to="/details"><Meta title={el.name} /></Link>
                <TextBold>hello</TextBold>
            </CardComponent>

            <CardComponent
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src={el.image} style={{ minHeight: "320px" }} />}
                onClick={onChangeFlipped}
            >
                <Link to="/details"><Meta title='Back side' /></Link>
            </CardComponent>
        </ReactCardFlip>


    );

}

