import React, {Component}  from 'react';
import {graphql} from 'react-apollo';
import AuthForm from './AuthForm';
import SignupMutation from '../mutations/signup';
import query from '../queries/CurrentUser';
import {hashHistory} from 'react-router';

class SignupForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            errors:[]
        }
    }

    componentDidUpdate(nextProps){
        console.log(nextProps, this.props)
        if(nextProps.data.user && this.props.data.user){
            console.log("ok")
            hashHistory.push('/dashboard')
        }
    }

    onSubmit({email, password}){
        this.props.mutate({
            variables:{email, password },
            refetchQueries:[{query}]
        }).catch(res =>{
            const errors = res.graphQLErrors.map(error => error.message)
            this.setState({errors})
        })
    }
    render(){
        return (
            <div>
                <h3>Signup</h3>
                <AuthForm 
                    errors={this.state.errors}
                    onSubmit={this.onSubmit.bind(this)}></AuthForm>
            </div>
        )
    }
}
export default graphql(query)(
    graphql(SignupMutation)(SignupForm))