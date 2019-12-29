import React, {Component} from 'react';

const UserContext = React.createContext();
//Provider, Consumer verecek
export class UserProvider extends Component {
    state = {
        users : [
            {
                id:1,
                name:"Nesli",
                salary:4000,
                department:"KKST"
            },
            {
                id:2,
                name:"Mehmet",
                salary:4000,
                department:"KKST"
            },
            {
                id:3,
                name:"Muzaffer",
                salary:4000,
                department:"KKST"
            },
            {
                id:4,
                name:"Büş",
                salary:4000,
                department:"KKST"
            }
        ],

    }

    render() {
        return (
            <UserContext.Provider value={this.state}>
                {this.props.children}
            </UserContext.Provider>
        );
    }
}

const UserConsumer = UserContext.Consumer;
export default UserConsumer;
