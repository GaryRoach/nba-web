/**
 * Created by gy on 4/7/18.
 */
import React from 'react';
import nba from 'nba';
import { DataViewContainer } from './DataViewContainer';
import { Profile } from './Profile';

export class Main extends React.Component {
    state = {
        playerInfo: {
            playerId: nba.findPlayer('Stephen Curry').playerId,
            teamAbbreviation: 'GSW'
        }
    }

    componentDidMount() {
        nba.stats.playerInfo({ PlayerID: nba.findPlayer('Stephen Curry').playerId }).then((info) => {
            const playerInfo = Object.assign(info.commonPlayerInfo[0], info.playerHeadlineStats[0]);
            console.log(playerInfo);
            this.setState({ playerInfo: playerInfo, });
        });
    }

    render() {
        return (
            <div className="main">
                <Profile playerInfo={this.state.playerInfo} />
                <DataViewContainer playerId={this.state.playerInfo.playerId} />
            </div>
        );
    }
}