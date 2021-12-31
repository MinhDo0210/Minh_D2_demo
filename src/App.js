/* eslint-disable jsx-a11y/alt-text */
import { Layout, Menu } from 'antd';
import { Routes, Route, Link } from 'react-router-dom';

import HomeScreen from './components/Home';
import ShopScreen from './components/Shop';
import MagazineScreen from './components/Magazine';

import images from './assets/images';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

function App() {

    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Header className="header" style={{ backgroundColor: '#FFFFFF', height: '70px' }}> 
          <div className="logo" style={{ width: '10%', float: 'left', padding: 0 }}>
            <img src={images.LogoLeft} style={{ height: '70px' }}/>
          </div>
          <Menu mode="horizontal" defaultSelectedKeys={['2']} style={{ width: '70%' , float: 'left', height: '100%'}}>
            <Link style={{color: '#22232B', marginLeft: '50px', fontFamily: 'Abel', textTransform: 'uppercase', fontSize: '13px', lineHeight: '70px' }} to='/home'>Home</Link>
            <Link style={{color: '#22232B', marginLeft: '50px', fontFamily: 'Abel', textTransform: 'uppercase', fontSize: '13px', lineHeight: '70px' }}  to='/shop'>Shop</Link>
            <Link style={{color: '#22232B', marginLeft: '50px', fontFamily: 'Abel', textTransform: 'uppercase', fontSize: '13px', lineHeight: '70px' }}  to='/magazine'>Magazine</Link>
          </Menu>
          <div className="logo" style={{ width: '20%', float: 'left', padding: 0 }}>
            <img src={images.AddCart} style={{ height: '30px', float: 'left', marginTop: '20px' }}/>
            <div style={{float: 'left', marginLeft: '50px' }}>
              <p style={{color: '#22232B', fontFamily: 'Abel', textTransform: 'uppercase', fontSize: '13px', lineHeight: '70px' }}>Login</p>
            </div>
          </div>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <Layout>
            <Layout style={{ width: '10%', float: 'left'}}>
              <img src={images.Search} style={{ width: 27, height: 27, margin: 30 }}/>
            </Layout>
          </Layout>
          <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
            <Sider className="site-layout-background" width={200}>
              <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{ height: '100%' }}
              >
                <SubMenu key="sub1" title="subnav 1">
                  <Menu.Item key="1">option1</Menu.Item>
                  <Menu.Item key="2">option2</Menu.Item>
                  <Menu.Item key="3">option3</Menu.Item>
                  <Menu.Item key="4">option4</Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" title="subnav 2">
                  <Menu.Item key="5">option5</Menu.Item>
                  <Menu.Item key="6">option6</Menu.Item>
                  <Menu.Item key="7">option7</Menu.Item>
                  <Menu.Item key="8">option8</Menu.Item>
                </SubMenu>
                <SubMenu key="sub3" title="subnav 3">
                  <Menu.Item key="9">option9</Menu.Item>
                  <Menu.Item key="10">option10</Menu.Item>
                  <Menu.Item key="11">option11</Menu.Item>
                  <Menu.Item key="12">option12</Menu.Item>
                </SubMenu>
              </Menu>
            </Sider>
            <Content style={{ padding: '0 24px', minHeight: 280 }}>
              <Routes>
                <Route path="/home" element={HomeScreen}/>
                <Route path="/shop" element={ShopScreen}/>
                <Route path="/magazine" element={MagazineScreen}/>
              </Routes>
            </Content>
          </Layout>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    );
  }

export default App;
