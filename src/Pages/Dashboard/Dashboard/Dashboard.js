import React, { useState } from 'react';
import 'react-bootstrap-drawer/lib/style.css';
import './Dashboard.css';
import DashboardHome from '../DashboardHome/DashboardHome';
import Test from '../Test/Test';
import {
    Button,
	Col,
	Collapse,
	Container,
	Nav,
	Row,
} from 'react-bootstrap';
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import { Drawer } from 'react-bootstrap-drawer';
import useAuth from '../../../hooks/useAuth';
import AdminRoute from '../../../AdminRoute/AdminRoute';

const Dashboard = () => {
    let { path, url } = useRouteMatch();
	const [open, setOpen] = useState(false);
    const { admin, user, logOut } = useAuth();

	const handleToggle = () => setOpen(!open);

    return (
        <>
            <Container fluid>
                <Row className="flex-xl-nowrap">
                    <Col xs={ 12 } md={ 3 } lg={ 2 } className="p-0">
                        <Drawer>
                            <Drawer.Toggle onClick={ handleToggle } />
                            <Collapse in={ open }>
                                <Drawer.Overflow>
                                    <Drawer.ToC>
                                        <Nav.Link className="dashboard" as={Link} to="/">
                                            <i className="fa fa-home" aria-hidden="true"></i> Food Delivery
                                        </Nav.Link>

                                        <Drawer.Nav>
                                            <Nav.Link className="nav-item" as={Link} to={`${url}/dashboardHome`}>
                                                <i className="fas fa-circle"></i> Dashboard
                                            </Nav.Link>
                                        </Drawer.Nav>
                                        {admin && 
                                        <Drawer.Nav>
                                            <Nav.Link className="nav-item" as={Link} to={`${url}/test`}>
                                                <i className="fas fa-circle"></i> Test
                                            </Nav.Link>
                                        </Drawer.Nav>
                                        }
                                        {user.email && 
                                            <Button onClick={logOut} className="btn-sm px-2 mt-3" variant="light">Logout</Button>
                                        }
                                    </Drawer.ToC>
                                </Drawer.Overflow>
                            </Collapse>
                        </Drawer>
                    </Col>
                    <Col xs={ 12 } md={ 9 } lg={ 10 }>
                        <Switch>
                            <Route exact path={path}>
                                <DashboardHome></DashboardHome>
                            </Route>
                            <Route path={`${path}/dashboardHome`}>
                                <DashboardHome></DashboardHome>
                            </Route>
                            <AdminRoute exact path={`${path}/test`}>
                                <Test></Test>
                            </AdminRoute>
                        </Switch>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Dashboard;