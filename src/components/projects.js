import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if(this.state.activeTab === 0){
      return(
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://cdn.cloudflare.steamstatic.com/steam/apps/976310/ss_4a9c1909083a75dcf684d79806afd9d9b46e432a.1920x1080.jpg?t=1654216426) center / cover'}} >MORTAL COMBAT</CardTitle>
            <CardText>
            Одно из первых моих приложение на чистом JavaScript
            </CardText>
            <CardActions border>
              <Button href="https://github.com/yushachkov01/mortal-combat/tree/homeWork-9" colored>GitHub</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

         </div>

      )
    } else if(this.state.activeTab === 1) {
      return (
        
        <div> 
          {/* Project 1 */}
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://yestour.ru/upload/information_system_5/1/7/3/item_173/item_173.jpg) center / cover'}} >Aviasales</CardTitle>
          <CardText>
          Приложение на React, в котором использовал доступную API для вывода всех авиаресов. 
          <div>Данный сайт также написан на React</div>
          </CardText>
          <CardActions border>
            <Button href="https://github.com/yushachkov01/aviaSaless" colored>GitHub</Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
        </div>
      )
    } else if(this.state.activeTab === 2) {
      return (
        <div>
         {/* Project 1 */}
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://incrussia.ru/wp-content/uploads/2022/02/Kollektsiya-NFT-The-Bored-Ape-Yacht-Club-BAYC-vse-chto.jpg) center / cover'}} >Маркетплейс</CardTitle>
          <CardText>
          Одностраничный сайт с карточками товаров, по нажатию на которые можно посмотреть описание товара и адрес на yandexMap с указанием метки
          (Метки создаются рандомно в пределах Москвы). Список товаров подгружается постепенно при скролле вниз.
          При нажатии на метку появляется форма, где необходимо указать номер телефона, почту и ФИО покупателя.
          Сайт поддерживает как мобильную версию, так и десктопную.
          </CardText>
          <CardActions border>
            <Button href="https://github.com/yushachkov01/angularTestFinal/tree/pull-6" colored>GitHub</Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
        </div>
      )
    } else if(this.state.activeTab === 3) {
      return (
        <div>
        {/* Project 1 */}
       <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
         <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://stylecaster.com/wp-content/uploads/2014/10/cool-notepads.jpg) center / cover'}} >Notepad</CardTitle>
         <CardText>
         Одностраничный сайт по типу блокнота, в котором реализована регистрация, авторизация.
         Подключена база данных MongoDB, в которой все данные о пользователе, а также записи внесенные на сайти зашифрованы.
          Сайт поддерживает как мобильную версию, так и десктопную.
         </CardText>
         <CardActions border>
           <Button href="https://github.com/yushachkov01/notepad-express" colored>GitHub</Button>
         </CardActions>
         <CardMenu style={{color: '#fff'}}>
           <IconButton name="share" />
         </CardMenu>
       </Card>
       </div>
      )
    }

  }



  render() {
    return(
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>JavaScript</Tab>
          <Tab>React</Tab>
          <Tab>Angular</Tab>
          <Tab>Express/MongoDB</Tab>
        </Tabs>


          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>


      </div>
    )
  }
}

export default Projects;
