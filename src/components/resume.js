import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src="https://img.hhcdn.ru/photo/691574217.jpeg?t=1660336209&h=dklJYIUWitsuGinFm3yiWw"
                 width="400"
                 height="400"
                alt="avatar"
                 />
            </div>
            
            <h2 style={{paddingTop: '2em'}}>Юшачков Антон</h2>
            <h4 style={{color: 'grey'}}>Frontend Developer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                <div>Начинающий Frontend-разработчик из России,город Москва. </div>
                  <div>Придерживаюсь чистого и аккуратного кода.</div>
                  <div>Ищу работу, на которой смогу проявить себя как разработчик и освоить новые технологии. </div>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Телефон</h5>
            <p>8-(919)-347-31-38</p>
            <h5>Email</h5>
            <p>a_yushachkov@mail.ru</p>

            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h6 style={{color: 'grey'}}>Сайт написан на React</h6>



          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Образование</h2>


            <Education
              startYear={2019}
              endYear={2023}
              schoolName="МИРЭА — Российский технологический университет"
              schoolDescription="На данный момент обучаюсь на 4 курсе по специальности: 'Программная инженерия' "
               />

                <hr style={{borderTop: '3px solid #e22947'}} />

              <h2>Опыт</h2>

              {/* <Experience
                startYear={"Декабрь 2020"}
                endYear={"Март 2021"}
                jobName="Elbrus BootCamp"
                jobDescription="Прошел курсы web-разработки от компании: 'Elbrus Bootcamp', в которых осваивал язык JavaScript с использованием фреймворка: 'React'"
                /> */}

             <Experience
                startYear={"Июль 2021"}
                endYear={"Октябрь 2021"}
                jobName="LearnUp"
                jobDescription="Прошел курсы web-разработки от компании: 'LearnUp', в которых осваивал язык JavaScript с использованием фреймворка: 'React  '"
                />

             <Experience
              startYear={"Декабрь 2021"}
              endYear={"Июнь 2022"}
              jobName="Ингосстрах"
              jobDescription="Работал, в компании 'Ингосстрах', за время работы хорошо освоил язык: 'JavaScript' с использованием фреймворка: 'React', а также 'TypeScript', с использованием фреймворка: 'Angular' . "
              />
                 <Experience
              startYear={"Июнь 2021"}
              endYear={"По настоящее время"}
              jobName="GeekBrains"
              jobDescription="На данный момент работаю преподавателем на онлайн платформе GeekBrains, обучаю студентов и проверяю домашнее задание на языке JavaScript"
              />
              <hr style={{borderTop: '3px solid #e22947'}} />
              
              <h2>Skills</h2>
              <Skills
                skill="Javascript"
                progress={100}
                />
                <Skills
                  skill="HTML/CSS"
                  progress={80}
                  />
                  <Skills
                    skill="NodeJS"
                    progress={75}
                    />
                    <Skills
                      skill="React"
                      progress={60}
                      />
                    <Skills
                      skill="Angular"
                      progress={50}
                      />
                     <Skills
                      skill="TypeScript"
                      progress={50}
                      />


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
