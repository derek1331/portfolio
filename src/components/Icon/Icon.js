import React from 'react';


class Icon extends React.Component {
    render() {
        return(
            <a href={this.props.href}><i className={this.props.icon}/></a>
        )
    }
}

export default Icon;