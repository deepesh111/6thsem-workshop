import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { baseUrl } from '../../Globals/config';
import {Box, CircularProgress} from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function Home() {

  const navigate =useNavigate();

  const [blogs, setBlogs] = React.useState([])
  const [loading, setloading]= React.useState(true)
  const getBlogs = async ()=> {
    let res = await axios.get(`${baseUrl}Dipesh-Blog`)
    setBlogs(res.data);
    setloading(false)
  
  };
  React.useEffect(() => {
    getBlogs();
  }, []);

  

  return (
    <Box sx={{width: "80%", margin: "0 auto"}}>
      <Typography variant="h3" sx={{my:5 ,textAlign: "Center"}}>
        Blogs
        </Typography>
        {loading ? (
          <Box
          sx={{
            width:"100%",
            height:"60vh",
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
          }}
          > 
          <CircularProgress/>
          </Box> 
        ) :(
       <Box sx={{display: "flex", flexWrap:'wrap', flexDirection:'row', gap:4}}>
        {blogs.map((blog)=> { 
          return (
        <Card key={blog.id} sx={{ width: 305}}>

      <CardMedia
        sx={{ height: 200 }}
        image={blog.image}
        title="green "
      />
      <CardContent>
      <Typography
       gutterBottom 
       sx={{color:"#aaa", fontsize: '16px'}}
       >
         @{blog.author}
        </Typography>

        <Typography gutterBottom variant="h5" component="div">
         {blog.title}
        </Typography>
        
        
        <Typography variant="body2" color="text.secondary">
         {blog.description.slice(0,100)}
        </Typography>
      </CardContent>
      <CardActions>
        
        <Button onClick={()=>navigate(`/ blog/${blog.id}`)} size="small"
        >
          Learn More
        </Button>
      </CardActions>
         </Card>

          );
        })}
      </Box>)}
    </Box>
  );
}
