import React from 'react';
class PropsClass extends React.Component{
    render()
    {
        return(
            <div>
                <h1>
                    <i>
                        I'm studying at {this.props.clg}
                    </i>
                </h1>
            </div>
        )
    }
}
export default PropsClass;
