import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';



class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
          <h1 className="landing-name"><i>Yushachkov Anton </i></h1>

            <div className="banner-text">
              <h1><i>Frontend Developer</i></h1>
      

            <hr/>

          <p>HTML/CSS | Bootstrap | JavaScript | React | TypeScript | Angular | NodeJS | Express | MongoDB</p>

        <div className="social-links">

          {/* hh*/}
          <a href="https://naro-fominsk.hh.ru/applicant/resumes/view?resume=3ee7830eff093f7fa40039ed1f454559414667" rel="noopener noreferrer" target="_blank">
            <img className="hh" src="https://static.tildacdn.com/tild3463-3135-4335-a266-316361343437/Untitled-1-01.png" style={{width:60, height:60, marginTop:13}}/>
          </a>

          {/* Github */}
          <a href="https://github.com/yushachkov01" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square" aria-hidden="true" />
          </a>

          {/* Telegramm*/}
          <a href="https://t.me/pepsikolny01" rel="noopener noreferrer" target="_blank">
          <img src='https://cdn.icon-icons.com/icons2/2108/PNG/512/telegram_icon_130816.png' style={{width:60, height:60, marginTop:13}}/>
          </a>
        

        </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
