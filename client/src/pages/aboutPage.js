import React from 'react'
import "./styles/aboutPage.css" 

const aboutPage = () => {
  return (
    <div className='aboutUs'>
    <div class="card">
            <div class="photo photo1">
              <div class="info-cont">
                <h2 class="name">David Papazyan</h2>
                <h3 class="role">Scrum Trainer</h3>
                <p class="info text">
                 Made part of the admin page modals and organized tasks for the team
                </p>
                <h2 class="plhn">David Papazyan</h2>
              </div>
            </div>
          </div>
      
          <div class="card">
            <div class="photo photo4">
              <div class="info-cont">
                <h2 class="name">Ivelin Metodiev</h2>
                <h3 class="role">Front-end Developer</h3>
                <p class="info text">
               Made the whole backend and made REST API for frontend
                </p>
                <h2 class="plhn">Ivelin Metodiev</h2>
              </div>
            </div>
          </div>

<div class="card">
            <div class="photo photo3">
              <div class="info-cont">
                <h2 class="name">Ekaterina Zelinskaya</h2>
                <h3 class="role">Designer</h3>
                <p class="info text">
                Made sure the website's design looked attractive and nice. Created the logo and chose the color palette.
                </p>
                <h2 class="plhn"> Ekaterina Zalinskaya</h2>
              </div>
            </div>
          </div>

<div class="card">
            <div class="photo photo2">
              <div class="info-cont">
                <h2 class="name">Ivayla Keserdzhieva</h2>
                <h3 class="role">Back-end Developer</h3>
                <p class="info text">
                Developed significant part of the frontend and helped with the design
                </p>
                <h2 class="plhn">Ivayla Keserdzhieva</h2>
              </div>
            </div>
          </div>
      

    </div>
  );
}

export default aboutPage