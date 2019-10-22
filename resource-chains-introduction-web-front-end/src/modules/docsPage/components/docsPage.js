import React, { Component } from 'react';
import DocsPageMain from "./docsPageMain"
import DocsPageDetail from "./docsPageDetail"

class DocsPage extends Component {
    render() {
        return (
            <div>
                    <DocsPageMain {...this.props} />
            </div>
        );
    }
}

export default DocsPage;