import React from 'react';

export default class Starter extends React.Component {
    render(){
        return(
            <div class="uk-grid-small uk-flex-center uk-text-center" uk-grid="true">
                <div className="uk-flex-first uk-width-1-4">
                    <div class="uk-background-primary">Item 1</div>
                </div>
                <div class="uk-flex-last uk-width-3-4">
                    <div class="uk-background-secondary">Item 2</div>
                </div>
            </div>
        )
    }
}