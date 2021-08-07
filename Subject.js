import React, { Component } from 'react';

class Subject extends Component{
    render(){ 
      console.log('Subject render');
      return (
        <header>
          <h1><a href="/"onClick={function(e){
            e.preventDefault();
            this.props.onChangePage();
          }.bind(this)}>{this.props.title}</a></h1>
          {this.props.sub}
        </header>
      );
    }
  }
//저거 render저거가 함순데 class 안에 소속된 함수는 생략
//component는 하나의 최상위 태그만 있어야 한다 위에선 header태그가 최상위

export default Subject;