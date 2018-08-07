import React, {Component} from 'react'
import {Container, Name, GameListHeader, GameList, GameRecord, Column, ColumnLabels} from '../styled/Profile'

class Profile extends Component {

	static defaultProps = {
		user: {
			email: 'useremail',
			games: [
				{
					winner: true,
					createdAt: '12/12/2016',
					id: '0001'
				},
				{
					winner: true,
					createdAt: '12/15/2016',
					id: '0002'
				},
				{
					winner: false,
					createdAt: '12/18/2016',
					id: '0003'
				}
			]
		}
	}

	get records() {
		return this.props.user.games.map((game, index) => {
			return(
				<GameRecord
					key={index}
					index={index}
				>
					<Column>
						{(game.winner) ? 'Won!' : 'Lost'}
					</Column>
					<Column>
						"Robot"
					</Column>
					<Column>
						"No"
					</Column>
					<Column>
						{game.createdAt}
					</Column>
				</GameRecord>
			)
		})
	}

	render() {
		let {email} = this.props.user
		return (
			<Container>
				<Name>
					{email}
				</Name>
				<GameList>
					<GameListHeader>
						MyGames
					</GameListHeader>
					<ColumnLabels>
						<Column>
							Outcome
						</Column>
						<Column>
							Guess
						</Column>
						<Column>
							Guessed Correctly?
						</Column>
						<Column>
							Date
						</Column>
					</ColumnLabels>
					{this.records}
				</GameList>
			</Container>
		)
	}
}


export default Profile