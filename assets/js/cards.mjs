function cardOne(data) {
  let card = `
        <div class="col-12 col-md-6 col-lg-4">
                    <div
                      class="single-timeline-content d-flex wow fadeInLeft"
                      data-wow-delay="0.5s"
                      style="
                        visibility: visible;
                        animation-delay: 0.5s;
                        animation-name: fadeInLeft;
                      "
                    >
                      <div class="timeline-icon popular-characters">
                       </div>
                      <div class="timeline-text">
                        <h6>${data.name}</h6>
                        <p>Estatura: ${data.height / 100} mts Peso: ${
    data.mass
  } kilos</p>
                        
                      </div>
                    </div>
                  </div>    
    
    `;
  return card;
}

function cardTwo(data) {
  let card = `
        <div class="col-12 col-md-6 col-lg-4">
                    <div
                      class="single-timeline-content d-flex wow fadeInLeft"
                      data-wow-delay="0.5s"
                      style="
                        visibility: visible;
                        animation-delay: 0.5s;
                        animation-name: fadeInLeft;
                      "
                    >
                      <div class="timeline-icon secondary-characters">
                       </div>
                      <div class="timeline-text">
                        <h6>${data.name}</h6>
                        <p>Estatura: ${data.height / 100} mts Peso: ${
    data.mass
  } kilos</p>
                        
                      </div>
                    </div>
                  </div>    
    
    `;
  return card;
}

function cardThree(data) {
  let card = `
        <div class="col-12 col-md-6 col-lg-4">
                    <div
                      class="single-timeline-content d-flex wow fadeInLeft"
                      data-wow-delay="0.5s"
                      style="
                        visibility: visible;
                        animation-delay: 0.5s;
                        animation-name: fadeInLeft;
                      "
                    >
                      <div class="timeline-icon significant-characters">
                       </div>
                      <div class="timeline-text">
                        <h6>${data.name}</h6>
                        <p>Estatura: ${data.height / 100} mts Peso: ${
    data.mass
  } kilos</p>
                        
                      </div>
                    </div>
                  </div>    
    
    `;
  return card;
}

export { cardOne, cardTwo, cardThree };
