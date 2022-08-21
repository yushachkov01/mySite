import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';


class Contact extends Component {
  render() {
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Юшачков Антон</h2>
            <img
              src="https://img.hhcdn.ru/photo/697165757.jpeg?t=1660440783&h=LxPyQxCfMi86cfKvvdGM2A"
              alt="avatar"
              style={{height: '250px'}}
               />

          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr/>

            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-phone-square" aria-hidden="true"/>
                    WhatsApp : 8-(919)-347-31-38
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <img src='https://cdns.iconmonstr.com/wp-content/releases/preview/2018/240/iconmonstr-telegram-1.png' style={{width:60, height:60, marginTop:10}}/>
                    <i aria-hidden="true"/>
                    Telegram: pepsikolny01
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-envelope" aria-hidden="true"/>
                    a_yushachkov@mail.ru
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-skype" aria-hidden="true"/>
                    a_yushachkov@mail.ru
                  </ListItemContent>
                </ListItem>


              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Contact;
