import react from 'react';
import { useLocation } from 'react-router-dom';

export default function Article(){
    const query = new URLSearchParams(useLocation().search);
    const title = query.get("title");
    const time = query.get("time");


        return(
        <div>
        <p>
            Article: {title}
        </p>
        <div>
            time: {time}
        </div>
        </div>
    )
}