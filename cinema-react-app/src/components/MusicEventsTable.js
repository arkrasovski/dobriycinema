import React from 'react';
import * as Api from 'typescript-fetch-api'

const api = new Api.DefaultApi()

class MusicEventsTable extends React.Component {

    constructor(props) {
        super(props);
        this.state = { events: [] };
        this.handleReload();
        this.handleReload = this.handleReload.bind(this);
    }


    async handleReload(event) {
         const response = await api.musicevents({ date: '' });
         this.setState({ events: response });
    }


    render() {
        return <div>
            <h3>Today`s events</h3>
            <button onClick={this.handleReload}>Reload</button>
            <table>
                {this.state.events.map((event) => <div><img src={event.image}></img><br></br>
                    {event.name}<br></br>
                {event.location}</div>)}
            </table>
        </div>
    }
}

export default MusicEventsTable;