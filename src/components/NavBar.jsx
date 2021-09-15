import React from 'react'
import {AppBar, Toolbar, Typography, makeStyles} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import LocalGroceryStoreIcon from '@material-ui/icons/LocalGroceryStore';
import Button from '@material-ui/core/Button'


const useStyles= makeStyles(theme =>({
    offset: theme.mixins.toolbar,
    menuButton: {
        marginRight: theme.spacing(2)
    },
    title:{
        flexGrow: 1
    }
}))


const NavBar = () => {
    const classes = useStyles()
    return (
        <div>
            <AppBar>
                <Toolbar>
                    <LocalGroceryStoreIcon 
                    color="inherit" 
                    aria-label="menu" 
                    className={classes.menuButton}>
                    <MenuIcon/> 
                    </LocalGroceryStoreIcon>
                    <Typography variant='h6' className={classes.title}>
                    Primark-Muriega 
                    </Typography>
                    <Button variant="text" color="inherit">
                        Login
                    </Button>
                    <Button variant="text" color="inherit">
                        Inicio
                    </Button>
                    <Button variant="text" color="inherit">
                        Productos
                    </Button>
                    <Button variant="text" color="inherit">
                        Compras
                    </Button>
                    <Button variant="text" color="inherit">
                        Nosotros
                    </Button>
              
                </Toolbar>
            </AppBar>
            <div className={classes.offset}></div>
        </div>
    )
}

export default NavBar
