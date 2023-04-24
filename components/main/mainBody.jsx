import React from 'react'
import Data from '../songs/Data'
import Saved from '../saved/saved'
import './main.css'

export default function main() {
    return (
        <div className='MainBody'>
            <div className="header">
                Recently played
                <div className="category">
                    <select>
                        <option >Genre</option>
                        <option value="pop">Pop</option>
                        <option value="rock">Rock</option>
                        <option value="hip-hop">Hip Hop</option>
                        <option value="electronic">Electronic</option>
                        <option value="jazz">Jazz</option>
                        <option value="classical">Classical</option>
                        <option value="reggae">Reggae</option>
                        <option value="country">Country</option>
                        <option value="folk">Folk</option>
                        <option value="latin">Latin</option>
                        <option value="blues">Blues</option>
                        <option value="world">World Music</option>
                        <option value="rnb">R&B</option>
                        <option value="metal">Metal</option>
                    </select>

                </div>

            </div>
            <div className='current'>
                <Data />
                <Data />
                <Data />
            </div>
        </div>
    );


}
