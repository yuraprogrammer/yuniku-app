import { Container } from "@mui/material";

function ContentHeader({ title, bg_color, text_color}) {
  return (
    <>             
        <Container className="fluid" maxWidth='xl' sx={{ backgroundColor: bg_color, padding: '2px', textAlign: 'center', color: text_color, fontSize: '20px', marginLeft: '5%' }}>
                {title}
        </Container>  
            
    </>
  );
}

export default ContentHeader;