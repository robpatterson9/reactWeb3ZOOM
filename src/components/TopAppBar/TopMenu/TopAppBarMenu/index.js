
import { memo } from 'react';
import ListItem from '@material-ui/core/ListItem';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { ScrollTo } from 'react-scroll-to';

import OutlinedButton from 'components/UI/Buttons/OutlinedButton';

const useStyles = makeStyles(theme => ({
  menuItem: {
    flexDirection: 'row',
    width: 'fit-content',
    minHeight: '100%',
    padding: 0
  }
}));

const TopAppBarMenu = () => {
  const classes = useStyles();
    
  return (
    <>
      <ListItem className={classes.menuItem}>
        <ScrollTo>
          {({ scroll }) => (
            <OutlinedButton onClick={() => scroll({ x: 0, y: 870, smooth: true })} style={{ border: 'none' }}>
              <Typography variant='body2' style={{ fontFamily: 'LULO' }}>BEGGINING</Typography>
            </OutlinedButton>)
          }
        </ScrollTo>
        <ScrollTo>
          {({ scroll }) => (
            <OutlinedButton onClick={() => scroll({ x: 0, y: 1700, smooth: true })} style={{ border: 'none' }}>
              <Typography variant='body2' style={{ fontFamily: 'LULO' }}>MINTING CAPSULES</Typography>
            </OutlinedButton>)
          }
        </ScrollTo>
        <ScrollTo>
          {({ scroll }) => (
            <OutlinedButton onClick={() => scroll({ x: 0, y: 4150, smooth: true })} style={{ border: 'none' }}>
              <Typography variant='body2' style={{ fontFamily: 'LULO' }}>ROADMAP</Typography>
            </OutlinedButton>)
          }
        </ScrollTo>
        <OutlinedButton onClick={() => { window.open('https://Emyem_Chain.medium.com/', '_blank')}} style={{ border: 'none' }}>
          <Typography variant='body2' style={{ fontFamily: 'LULO' }}>BLOG</Typography>
        </OutlinedButton>
      </ListItem>
    </>
  );
};

export default memo(TopAppBarMenu);
