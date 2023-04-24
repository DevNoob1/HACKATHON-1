import React, { useRef } from 'react';

import './sidebar.css';

export default function Sidebar() {



    return (
        <div className="Sidebar">
            <img
                src="https://cdn.pixabay.com/photo/2019/08/11/18/27/icon-4399630_1280.png"
                alt=""
            />
            <a href=""><h5>⾕ Home</h5></a>
            <br />
            <a to="../components/saved/saved"><h5>[_] Your Library</h5></a>
            <br />
            <a href=""><h5>[+] Create Playlist</h5></a>
            <br />
            <a href=""><h5>Liked Songs</h5></a>



            <button>english</button>
        </div>
    );
}
