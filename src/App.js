import { Grid} from '@mui/material';
import './App.css';
import Header from './components/header';
import MaiMenu from './components/menu';
import ContentHeader from './components/contentHeader';
import OrdersTable from './components/ordersTable';

function App() {
  return (
    <div>
      <title>My First React App</title>
      <Header />
      <Grid container spacing={2}>
        <Grid item={2}>
          <MaiMenu />    
        </Grid>
        <Grid item={10}>
          <ContentHeader title="Content Header" bg_color="yellow" text_color="red"/>
          <OrdersTable
            orders={[
              { id: 1, customerName: 'John Doe', totalAmount: 100, status: 'Pending' },
              { id: 2, customerName: 'Jane Smith', totalAmount: 200, status: 'Shipped' },
              { id: 3, customerName: 'Alice Johnson', totalAmount: 150, status: 'Delivered' },
            ]} />
        </Grid>
      </Grid>
        
      

      
      
    </div>
    
    
  );
}

export default App;
