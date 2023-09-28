import React from 'react';
import ListItem from './Styled/ListItem';
import { BorderListItem } from './Styled/ListItem';

class HeadingStyledComponent extends React.Component{

    render(){
        return(
            <div>
                <nav>
                    <ul>
                        <BorderListItem>Home</BorderListItem>
                        <ListItem active>Articles</ListItem>
                        <ListItem>About</ListItem>


                    </ul>
                </nav>
            </div>
        )
    }

}
export default HeadingStyledComponent;