import React from 'react';
import Introduction from './component/Introduction';


function Home() {
    return (
        <div class="container text-center">

            <div class="row">
                <h1>
                    This is Zijie's personal website..
                </h1>
               
            </div>

            <br/>

            <div class="row">

                <div class="col-6" style={{backgroundColor:'#ffcc99', height:'200px'}}>
                    <Introduction/>
                </div>

                <div class="col-6">
                    
                    <img height="500px" width="500px" src={process.env.PUBLIC_URL + '/ZZJ.jpg'} />
                    
                </div>

            </div>


        </div>

    );
}

export default Home;