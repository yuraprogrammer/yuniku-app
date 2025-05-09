import { Container } from '@mui/material';

function Header(){
    return(
        <>             
            <Container maxWidth sx={{ backgroundColor: 'blue', padding: '2px', textAlign: 'left', color: 'white', width: '100%' }}>
                This is the header
            </Container>  
            
        </>
        
    );
}

export default Header;