import React from 'react';
import { InputGroup, Input } from 'reactstrap';
import { TabContent, TabPane, Nav, NavItem, NavLink, Button, Row, Col,Container } from 'reactstrap';
import classnames from 'classnames';
import { Redirect } from 'react-router-dom';



export default class Login extends React.Component {
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.user = this.user.bind(this);
        this.admin = this.admin.bind(this);
        this.state = {
          activeTab: '1',
          adminAccess: false,
          userAccess: false
        };
      }
    
      toggle(tab) {
        if (this.state.activeTab !== tab) {
          this.setState({
            activeTab: tab
          });
        }
      }
      admin(){
          this.setState({adminAccess:true})
      }
      user(){
        this.setState({userAccess:true})
    }
    render(){
        const style = {
            
            marginTop: '10%'
          };
        const styleCursor = {
            cursor: 'pointer'
        }
        if (this.state.adminAccess === true) {
            return <Redirect to='/admin' />
          }
          if (this.state.userAccess === true) {
            return <Redirect to='/user' />
          }
        return(
            <Container style={style}>
            <Row>
                <Col sm="12" md={{ size: 6, offset: 3 }}>
                <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }} style={styleCursor}
            >
              USER
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }} style={styleCursor}
            >
              ADMIN
            </NavLink>
          </NavItem>
        </Nav>
                </Col>
            </Row><br/>
               <TabContent activeTab={this.state.activeTab}>
                   <TabPane tabId="1">
                   <Row>
                <Col sm="12" md={{ size: 6, offset: 3 }}><InputGroup>
                    <Input placeholder="username" />
                    </InputGroup>
                </Col>
            </Row><br/>
            <Row>
                <Col sm="12" md={{ size: 6, offset: 3 }}><InputGroup>
                    <Input type="password" placeholder="password" />
                    </InputGroup>
                </Col>
            </Row><br/>
                
            <Button color="success" onClick={this.user}>Login</Button>
                   </TabPane>
                   <TabPane tabId="2">
                   <Row>
                <Col sm="12" md={{ size: 6, offset: 3 }}><InputGroup>
                    <Input placeholder="admin name" />
                    </InputGroup>
                </Col>
            </Row><br/>
            <Row>
                <Col sm="12" md={{ size: 6, offset: 3 }}><InputGroup>
                    <Input type="password" placeholder="password" />
                    </InputGroup>
                </Col>
            </Row><br/>
                
            <Button color="primary" onClick={this.admin}>Admin Login</Button>
                   </TabPane>
               </TabContent>
           
            </Container>
            

        )
    }
}