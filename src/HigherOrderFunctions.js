import React from "react";
class HigherOrderFunctions extends React.Component{
    constructor(props)
    {
        super(props);
        this.state = {
            userData: [
                { id: '1', name: 'Joe', user_type: 'Developer', age:31, years:11 },
                { id: '2', name: 'Hill', user_type: 'Designer', age:26, years:4 },
                { id: '3', name: 'John', user_type: 'Teacher', age:24,years: 2},
                { id: '4', name: 'Sam', user_type: 'Entreprenuer', age:58,years:25},
                { id: '5', name: 'Jack', user_type: 'Designer', age:43, years: 18}
    
            ]
        }
        
    }
    renderItems = () =>{
        const data = this.state.userData;
        const mapRows = data.map((item)=>(
            <React.Fragment key = {item.id}>
                <li className="list-elements"></li>
                <span>Id : {item.id}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span>Name : {item.name}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span>User Type : {item.user_type}</span>
            </React.Fragment>
        ));   
        return mapRows;           
    }
    renderDesigner = () =>{
        const datas = this.state.userData;
        const designer = datas.filter(data => data.user_type === "Designer")
        .map(filterdesigner =>(
            <React.Fragment>
            <li className="list-elements"></li>
            <span>Id : {filterdesigner.id}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span>Name : {filterdesigner.name}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span>User Type : {filterdesigner.user_type}</span>
        </React.Fragment>
        ));
        return designer;
    }
    renderStartsj = () =>{
        const datas = this.state.userData;
        const name_j = datas.filter(data => data.name.includes('J'))
        .map(filterj =>(
            <React.Fragment>
            <li className="list-elements"></li>
            <span>Id : {filterj.id}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span>Name : {filterj.name}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span>User Type : {filterj.user_type}</span>
        </React.Fragment>
        ));
        return name_j;
    }
    renderage = ()=>{
        const datas = this.state.userData;
        const age = datas.filter(data => (data.age > 28 && data.age <= 50))
        .map(filterage =>(
            <React.Fragment>
            <li className="list-elements"></li>
            <span>Id : {filterage.id}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span>Name : {filterage.name}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span>User Type : {filterage.user_type}</span>
        </React.Fragment>
        )); 
        return age;
    }
    renderyear = ()=>{
        const datas = this.state.userData;
        const sumyears = datas.filter(data => data.user_type === "Designer")
        .map(item => item.years)
        .reduce((acc,init) => acc + init,0)
        // console.log(sumyears);
        return sumyears
    }
    render()
    {
        return <>
        <React.Fragment>
            <h1>Display all items</h1>
            <div className="display-box">
            <ul>{this.renderItems()} </ul>
            </div>
            <h1>Display Based on user Type</h1>
            <div className="display-box">
            <ul>{this.renderDesigner()} </ul>
            </div>
            <h1>Filter all data starting with J</h1>
            <div className="display-box">
            <ul>{this.renderStartsj()}</ul>
            </div>
            <h1>Filter all data based on age greater than 28 and age less than or equal to 50</h1>
            <div className="display-box">
            <ul>{this.renderage()} </ul>
            </div>
            <h1>Find the total years of designer</h1>
            <div className="display-box">
            <ul>{this.renderyear()} </ul>
            </div>
        </React.Fragment>
        </>
    }
}
export default HigherOrderFunctions;