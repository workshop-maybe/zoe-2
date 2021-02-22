import React from 'react';
import zoeblue from '../images/zoeblue.png';

function Partners() {
    return (
        <div class="container-fluid">
            <div class="row">
                <div class="col-4">
                    <img src={zoeblue} class="img-fluid float-left" />
                </div>
                <div class="col-8">
                    <h1 className="mt-5">ZOEPOOL Partners</h1>
                    <p1 class="dive-text">A list of partners with links. We can change the layout of this page, and link to deeper content.</p1>
                    <ul class="dive-text">
                        <li><a href="https://afrofinlab.com" target="blank">AfroFinLab</a></li>
                        <li><a href="">ABCD</a></li>
                        <li><a href="https://gimbalabs.com" target="blank">Gimbalabs</a></li>
                    </ul>                  
                </div>
            </div>
        </div>
    )
}

export default Partners
