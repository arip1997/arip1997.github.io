import React, { Component } from 'react';
import { Grid, Cell} from 'react-mdl';
import me from '../image/me.jpg';

export class LandingPage extends Component {
  render() {
    return (
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className ='LP-Grid'>
          <Cell col = {12}>
            <img
              src = {me}
              alt = 'avatar'
              className = 'avatar-img'
              style={{height:'200px', borderRadius:'20px'}}
            />
            <div className='banner-text'>
              <h1>Arif Rahmat Santoso</h1>
              <hr />
              <p>HTML/css | JavaScript | ReactJS | PHP | Laravel | Android </p>
              <div className='sosial-link'>
              <a href='https://www.facebook.com/boinder' target='blank'>
                  <i class="fab fa-facebook"></i>
                </a>
                <a href='https://www.instagram.com/_arip123/' target='blank'>
                  <i class="fab fa-instagram"></i>
                </a>
                <a href='https://twitter.com/Arif_Rahmat19' target='blank'>
                  <i class="fab fa-twitter"></i>
                </a>
                <a href='https://github.com/arip1997' target='blank'>
                  <i class="fab fa-github"></i>
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default LandingPage
