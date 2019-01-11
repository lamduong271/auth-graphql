import React, {Component}  from 'react';
import {graphql} from 'react-apollo';
import query from '../queries/CurrentUser';
import {Link} from 'react-router';

class Dashboard extends Component{

    render(){
        return (
            <div>You are logged in</div>
        )
    }
}
export default Dashboard;