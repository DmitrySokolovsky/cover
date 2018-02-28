import * as React from 'react';
import './userlist.style.scss';
import { connect } from 'react-redux';

import { GET_USER_NAMES, USER_NAMES_RECIEVED } from '../../../services/events';

class UserlistComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userNames: []
        };
    }

    componentDidMount() {
        const socket = this.props.socket;

        socket.emit(GET_USER_NAMES);

        socket.on(USER_NAMES_RECIEVED, (userNamesArray) => {
            this.setState({ userNames: userNamesArray });
            console.log(this.state.userNames);
        });

    }

    render() {
        return (
            <div className="userlist">
                <h1>User List</h1>
                {
                    this.state.userNames.map((item, index) => {
                        return (
                            <div className="userlist__user" key={item.name}>
                                <p className="userlist__name">{item.name}</p>
                            </div>
                        );
                    })
                }
            </div>
        );
    }
}

const mapToStateProps = (state) => {
    let socket = state.socketApp.socket;
    return{
        socket
    };
}

export const Userlist = connect(mapToStateProps)(UserlistComponent);
