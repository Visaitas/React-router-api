import React, { Component } from 'react';
import './App.css';
import { Layout , Header , Navigation , Drawer, Content , Footer , FooterSection , FooterLinkList} from 'react-mdl';
import Main from './components/Main';
import { Link } from 'react-router-dom';



class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
        <Layout>
            <Header title="PORTFOLIO" scroll className="header-color">
                <Navigation>
                    <a href="https://drive.google.com/open?id=1wHMfzAsIc1ldTDaNf-NO6QZlQH6JIQpz">RESUME</a>
                    <Link to="/Profile">PROFILE</Link>
                    <Link to="/contact">CONTACT</Link>
                    <Link to="/aboutme">PROJECT</Link>
                </Navigation>
            </Header>
            <Drawer title="Title">
                <Navigation>
                    <Link to="/">HOME</Link>
                    <Link to="/Profile">PROFILE</Link>
                    <Link to="/contact">CONTACT</Link>
                    <Link to="/aboutme">PROJECT</Link>
                </Navigation>
            </Drawer>
            <Content>
                <div className="page-content" />
                <Main />
            </Content>
        </Layout>
      </div>
    );
  }
}




export default App;



// <Provider store={store}>
// <div className="App">
//   <Bodytap />
//   <Header />
//   <Switch>
//     <Route exact path="/" component={Home} />
//     <Route path="/Profile" component={Profile} />
//   </Switch>
// </div>
// </Provider>