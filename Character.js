/** @format */

// Write your Character component here
import React from 'react';
import {
	Card,
	CardImg,
	CardText,
	CardBody,
	CardTitle,
	CardSubtitle,
	Container,
	Row,
	Col,
} from 'reactstrap';

function Character(props) {
	console.log(props.characterArray, 'These are props');
	return (
		<Container>
			<Row>
				{props.characterArray.map((character) => {
					return (
						<Col xs="4">
							<Card key={character.created}>
								<CardBody>
									<br />
									<CardImg src={character.image} />
									<CardTitle>Name: {character.name}</CardTitle>
									<CardSubtitle>Status: {character.status}</CardSubtitle>

									<CardText>Gender: {character.gender}</CardText>

									<CardText>Species: {character.species}</CardText>
								</CardBody>
							</Card>
						</Col>
					);
				})}
			</Row>
		</Container>
	);
}

export default Character;
