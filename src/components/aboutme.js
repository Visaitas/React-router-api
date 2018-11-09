import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell , Card , CardTitle , CardText , CardActions , Button , Spinner , Textfield ,ProgressBar } from 'react-mdl';
import { getProfile  , search_change_text , getUser} from '../actions'
import { connect } from 'react-redux'
import _ from 'lodash'



class aboutme extends Component{

    constructor(props){
        super(props);
        this.state = { activeTab: 0  , position: 0};
    }


    
    componentWillMount(){
        {this.props.getProfile()}
    }



    onInputChange(term){
        this.props.search_change_text(term);
    }

    onPressKey(){
        this.props.getUser(this.props.term);
        this.renderData()
    }


    renderData(){
     
        if(this.props.loading === true){
            console.log("Not Data",this.props.data)
            return(
                <div className="project-grid">
                   <Spinner style= {{ width: '200px', height: '200px'}}/>
                </div>
            )
        }else if(this.props.loading === false){
            return(
                <div className="project-grid">
                    <div className= "project-grid">
                        {this.renderListRepository()}
                    </div>
                </div>
            )
        }
    }
  

    renderListRepository(time){

            return _.map((this.props.data.items), (item) => {
                return(
                    <Card shadow={5} style={{width: '350px', height: '350px', margin: 'auto' , marginBottom: '5%'}}>
                        <CardTitle expand style={{color: '#fff', background: `url(${item.owner.avatar_url}) bottom right 15% no-repeat #46B6AC`, height: '-50px'}}>{item.name}</CardTitle>
                        <CardText>
                            {item.description}
                        </CardText>
                        <CardActions border>
                            <Button colored href={item.owner.html_url}>View Repository</Button>
                        </CardActions>
                    </Card>
                )
            })
        }
    




    renderListProfile(key){
        console.log(this.props.userdata)
        return _.map((this.props.userdata), (item) => {
            if(key === 0){
                if(item.language === 'JavaScript'){
                    return(
                        <Card shadow={5} style={{width: '350px', height: '350px', margin: 'auto' , marginBottom: '5%'}}>
                            <CardTitle expand style={{color: '#fff', background: `url(${item.owner.avatar_url}) bottom right 15% no-repeat #46B6AC`, height: '10px'}}>{item.name}</CardTitle>
                            <CardText>
                                {item.description}
                            </CardText>
                            <CardActions border>
                                <Button colored href={item.owner.html_url}>View Repository</Button>
                            </CardActions>
                        </Card>
                       
                    )
                }
            }
            else if(key === 1){
                if(item.language === 'JavaScript'){
                    return(
                        <Card shadow={5} style={{width: '350px', height: '350px', margin: 'auto' , marginBottom: '5%'}}>
                            <CardTitle expand style={{color: '#fff', background: `url(${item.owner.avatar_url}) bottom right 15% no-repeat #46B6AC`, height: '10px'}}>{item.name}</CardTitle>
                            <CardText>
                                {item.description}
                            </CardText>
                            <CardActions border>
                                <Button colored href={item.owner.html_url}>View Repository</Button>
                            </CardActions>
                        </Card>
                       
                    )
                }
            }
            else if(key === 2){
                if(item.language === 'HTML'){
                    return(
                        <Card shadow={5} style={{width: '350px', height: '350px', margin: 'auto' , marginBottom: '5%'}}>
                            <CardTitle expand style={{color: '#fff', background: `url(${item.owner.avatar_url}) bottom right 15% no-repeat #46B6AC`, height: '10px'}}>{item.name}</CardTitle>
                            <CardText>
                                {item.description}
                            </CardText>
                            <CardActions border>
                                <Button colored href={item.owner.html_url}>View Repository</Button>
                            </CardActions>
                        </Card>
                    )
                }
            }
        })
    }

    toggleCategories(){
        if(this.state.activeTab === 0){
            return(
                <div className="project-grid">
                   { this.renderListProfile(this.state.activeTab)}
                </div>
            )
        }else if(this.state.activeTab === 1){
            return(
                <div className="project-grid">
                    { this.renderListProfile(this.state.activeTab)}
                </div>
            )
        }else if(this.state.activeTab === 2){
            return(
                <div className="project-grid">
                    { this.renderListProfile(this.state.activeTab)}
                </div>
            )
        }else if(this.state.activeTab === 3){
            return(
                <div className="project-grid-about">
                    { this.renderTapSeach()}
                </div>
            )
        }
    }




    renderTapSeach(){
        return(
            <div>
                <div className ="aboutme-layout">
                    <div className= "aboutme-layout-text">
                        <Textfield
                        onChange={(value)=>this.onInputChange(value.target.value)}
                        label="Search here..."
                        floatingLabel
                        style={{width: '200px'}}
                        />
                    </div>
                    <div className= "aboutme-layout-text-button">
                        <Button 
                        raised ripple   
                        onClick = {()=>this.onPressKey()}
                        >
                        Search
                        </Button>
                    </div>
                </div>
                <div className="project-grid">
                    {this.renderData()}
                </div>
           </div>
        )
    }



    render(){
        return(
            <div className="catagory-tabs"> 
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>    
                    <Tab>React</Tab>
                    <Tab>React Native</Tab>
                    <Tab>Etc.</Tab>
                    <Tab>Search Repository</Tab>
                </Tabs>

                    <Grid>
                        <Cell col={12}>
                            {this.toggleCategories()}
                        </Cell>
                    </Grid>
            </div>
        )
    }
}   

const mapStateToProps = ({ profiles }) =>{

    const { userdata , term, data , loading } = profiles;

   return { userdata , term, data , loading };
};



export default connect(mapStateToProps,{ 
    getProfile,
    search_change_text , 
    getUser
})(aboutme);


/*

        <div>    
            <div className={'App-body'}>
                <div className={'body-left'}>
                    <ProfileWidget />
                    <NameContent />
                    <Content />
                </div>
                <div className={'body-right'}>
                    <div className="search-bar">
                        <input 
                            className= "input"
                            value = {this.props.term}
                            onChange={(value)=>this.onInputChange(value.target.value)}
                        />
                        <button 
                        className= "search"         
                        onClick = {(value)=>this.onPressKey(value.target.value)}
                        value = {this.props.term}
                        >
                            Search
                        </button>
                    </div>
                    <div>
                        {this.renderData()}
                    </div>
                </div>
            </div>
        </div>

*/