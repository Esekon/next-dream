import React from 'react'
import carosel1 from '../static/images/carosel1.png'
import carosel2 from '../static/images/carosel2.png'
import carosel4 from '../static/images/carosel4.webp'



const Mycarosel = () => {
  return (
    
    <div>
    <section class="row">
    <div class="col-md-12">
        <div class="carousel slide " data-bs-ride="carousel" id="mycarousel">
            {/* <!-- carousel inner starts here --> */}
             <div class="carousel-inner">
                <div class="carousel-item active ">
                    <img src={carosel1} alt="" class="d-block" width="100%" height="400px"/>
                </div>
                <div class="carousel-item">
                    <img src={carosel2} alt="" class="d-block" width="100%" height="400px"/>
                </div>
                <div class="carousel-item">
                    <img src={carosel4} alt="" class="d-block" width="100%" height="400px"/>
                </div>
             </div> 
             {/* <!-- carousel inner ends here --> */}
              {/* <!-- carousel control start --> */}
             <a href=" #mycarousel" class="carousel-control-prev" data-bs-slide="prev">
                <span class="carousel-control-prev-icon bg-danger"></span>
             </a>
             <a href=" #mycarousel" class="carousel-control-next" data-bs-slide="next">
                <span class="carousel-control-next-icon bg-danger"></span>
             </a>
               {/* <!-- carousel control end --> */}
        </div>
    </div>
  </section>
</div>
);
};


export default Mycarosel
