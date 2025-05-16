import { NavLink } from 'react-router-dom';
import { Sidebar,  Menu,  MenuItem,  SubMenu } from 'react-pro-sidebar';
import {  FaUser,  FaAngleDoubleLeft,  FaAngleDoubleRight,  FaLaptopHouse,  FaList, FaArchive, FaProductHunt, FaOilCan, FaTruck, FaTruckLoading, FaTruckMoving, FaCpanel, FaFirstOrder, FaJediOrder, FaCircle} from 'react-icons/fa';
import { Nav } from 'react-bootstrap';

function MainMenu({
  image,
  collapsed,
  toggled,
  handleToggleSidebar,
  handleCollapsedChange
}) {
  return (
    <>
    <div style={{
      borderWidth: '1px', 
      borderColor: 'gray', 
      borderStyle: 'solid',       
      textTransform: 'uppercase', 
      fontWeight: 'bold', 
      fontSize: 15, 
      letterSpacing: '1px'}}>
      <Nav>
        <h1 style={{
                            textAlign: "center",
                            marginLeft: "200px",
                            color: "green",
                        }}>
          App
        </h1>
      </Nav>
      <Sidebar
      image={image}
      collapsed={collapsed}
      toggled={toggled}
      onToggle={handleToggleSidebar}>
        {/*Header*/}
        
          <Menu icon={<FaCircle />}>
          {collapsed ? (            
              <MenuItem
              icon={<FaAngleDoubleRight />}
              onClick={handleCollapsedChange}
            ></MenuItem>                        
          ) : (
            <MenuItem
              suffix={<FaAngleDoubleLeft />}
              onClick={handleCollapsedChange}
            >
              <div
                style={{
                  padding: '9px',
                  textTransform: 'uppercase',
                  fontWeight: 'bold',
                  fontSize: 15,
                  letterSpacing: '1px'
                }}
              >
                Menu
              </div>
            </MenuItem>
          )}
        </Menu>
        
        {/* Content */}
        <div style={{borderWidth: '1px', 
          borderColor: 'gray', 
          borderStyle: 'solid', 
          borderRadius: '5px',
          
          textTransform: 'uppercase', 
          fontWeight: 'bold', 
          fontSize: 13, 
          letterSpacing: '1px'}}>
            
        <Menu>
          
          <MenuItem
            icon={<FaLaptopHouse />}
            
          >
            
            <NavLink to="home" >Main</NavLink>
          </MenuItem>
          
          <div style={{borderWidth: '1px', 
            borderColor: 'gray', 
            borderStyle: 'solid', 
            borderRadius: '5px',
            textTransform: 'uppercase', 
            width: '100%',
            fontWeight: 'bold', 
            fontSize: 13, 
            letterSpacing: '1px'}}>
          <SubMenu
            /*suffix={<span className="badge yellow">3</span>}*/
            label={'Production'}
            icon={<FaProductHunt />}
          >
            <div style={{borderWidth: '1px', 
            borderColor: 'gray', 
            borderStyle: 'solid', 
            borderRadius: '5px',
            textTransform: 'uppercase', 
            fontWeight: 'bold', 
            fontSize: 13, 
            letterSpacing: '1px'}}>
            <SubMenu
              label='Trucks weighting'
              icon={<FaTruck />}
            >
              <MenuItem component={<NavLink to="tara" />} icon={<FaTruckLoading />}>Empty trucks</MenuItem>
              <MenuItem icon={<FaTruckMoving />}><NavLink to="brutto">Full trucks</NavLink></MenuItem>
            </SubMenu>
            </div>
            <div style={{borderWidth: '1px', 
            borderColor: 'gray', 
            borderStyle: 'solid', 
            borderRadius: '5px',
            width: '100%',
            textTransform: 'uppercase', 
            fontWeight: 'bold', 
            fontSize: 13, 
            letterSpacing: '1px'}}>
            <SubMenu
              label='Discharging posts'
              icon={<FaCpanel />}
            >
              <MenuItem icon={<FaList />}><NavLink to="addedOrders" >Added orders</NavLink></MenuItem>
              <MenuItem icon={<FaFirstOrder />}><NavLink to="currentOrders" >Current orders</NavLink></MenuItem>
              <MenuItem icon={<FaJediOrder />}><NavLink to="completedOrders" >Complete orders</NavLink></MenuItem>
            </SubMenu>            
            </div>
          </SubMenu>                                        
          </div>
          <div style={{borderWidth: '1px', 
            borderColor: 'gray', 
            borderStyle: 'solid', 
            borderRadius: '5px',
            width: '100%',
            textTransform: 'uppercase', 
            fontWeight: 'bold', 
            fontSize: 13, 
            letterSpacing: '1px'}}>
              <SubMenu            
            label={'Row recieve'}
            icon={<FaOilCan />}
          >
            <MenuItem><NavLink to="trucksWithRow" >Trucks with row</NavLink></MenuItem>
            <MenuItem><NavLink to="rowCounter" >Row counter</NavLink></MenuItem>
            <MenuItem><NavLink to="completedRowRecieve" >Archive</NavLink></MenuItem>
          </SubMenu>
          </div>
          <MenuItem icon={<FaArchive />} label="Archive"><NavLink to="archive" >Archive</NavLink></MenuItem>
          
        </Menu>
        {/*</Sidebar>*/}
        
        </div>
      {/* Footer */}
      
        {/*<div className="sidebar-btn-wrapper" style={{ padding: '16px' }}>
          <Link
            className="sidebar-btn"
            style={{ cursor: 'pointer' }}
            to="/profile"
          >
            <FaUser />
            <span>My Account</span>
          </Link>
        </div>*/}
      
      </Sidebar>
    </div>
    </>
  ); 
}

export default MainMenu;