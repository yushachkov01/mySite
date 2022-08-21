import React, { Component } from 'react';


class About extends Component {
  render() {
    return(

      <div>
      <div className="square">
      <h1>HELLO WORLD!</h1>
      <div className="aboutMe">
      <img src='https://img.hhcdn.ru/photo/697059771.jpeg?t=1660337340&h=LGvCpJ2FzbXJUE4bUv1xoQ'  width="300" height="300" alt="lorem"/>
      </div>
      <div className="card">
      Привет, я Юшачков Антон, мне 20 лет и я web-разработчик, с опытом разработки веб-приложений
       с использованием React и Angular. Также имеется опыт разработки REST API с использованием Node JS (Express). 
       Уделяю большое внимание грамотному использованию JS и TS, а также знаком с современным синтаксисом ES6+.
        Получаю удовольствие от программирования и уделяю этому большую часть времени. 
        Не боюсь жёстких дедлайнов, многозадачности и капризных клиентов. Люблю учиться новому, развиваться и общаться с классными людьми.
        </div>
      </div>
      </div>
    )
  }
}

export default About;
