import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

export default class NewChirp extends React.Component<INewChirpProps, INewChirpState> {


    constructor(props: INewChirpProps) {
        super(props);
        this.state = {
            username: "",
            message: "",
        };
    }
   

    submitChirp = (username: string, message: string) =>{
        fetch("/api/chirps", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({username, message})
        })
            .then(res=>this.props.history.push('/'))
            .catch(err => console.log(err));
    }


    render() {
        return <div>
            <input id="username-input" className="form-control my-2" onChange={(e)=>{this.setState({ username: e.target.value})}} value={this.state.username} type="text" placeholder="Username"></input>
            <textarea id="message-input" className="form-control my-1" onChange={(e)=>{this.setState({ message: e.target.value})}} value={this.state.message} placeholder="Message"></textarea>
            <button type="button" className="btn btn-dark" onClick={()=>{this.submitChirp(this.state.username, this.state.message)}} >Submit Chirp</button>
        </div>

    }
}



interface INewChirpProps extends RouteComponentProps<{ name: string }> {

}

interface INewChirpState {
    username: string;
    message: string;
}