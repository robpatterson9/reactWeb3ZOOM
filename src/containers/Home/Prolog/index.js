import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Grid } from '@material-ui/core';

import Image from 'components/UI/Image';
import SectionHeader from 'components/UI/SectionHeader';

const useStyles = makeStyles(theme => ({
  root: {},
  image: {
    boxShadow:
      '25px 60px 125px -25px rgba(80,102,144,.1), 16px 40px 75px -40px rgba(0,0,0,.2)',
    borderRadius: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      maxWidth: 500,
      marginBottom: 60
    },
  },
  mobileImageContainer: {
    [theme.breakpoints.down('sm')]: {
      position: 'absolute', left: 0, marginTop: 80,
    },
    position: 'absolute', right: 0, marginTop: 80,
  },
  mintMarsButton: {
    backgroundColor: theme.palette.error.light
  }
}));

const Prolog = props => {
  const { setIsSwapDialog, account, className, ...rest } = props;
  const classes = useStyles();
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div id='prologue' className={clsx(classes.root, className)} {...rest}>
      <Grid
        container
        justifyContent="space-between"
        spacing={4}
        direction={isMd ? 'row' : 'column-reverse'}
      >
        <Grid
          item
          container
          alignItems="center"
          xs={12}
          md={6}
          data-aos={'fade-up'}
        >
          <SectionHeader
            title={
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ color: theme.palette.text.hoverText }}>
                  BEGGINING
                  <br />
                </span>
                <span style={{ color: theme.palette.text.primary, fontSize: 18, fontWeight: '300', textAlign: 'justify', lineHeight: 1.8 }}>
                  In Emyem you can send your robots to get MYM said currency is based on the game. To start in the universe of Emyem you need to mint a Capsule said capsule brings with it ().
                  <br />
                  <br />
                </span>
                <span style={{ color: theme.palette.text.primary, fontSize: 18, fontWeight: '300', textAlign: 'justify', lineHeight: 1.8 }}>
                 The expedition modes are on different planets and for this you need to mint Capsules of better rarities.
                  <br />
                  <br />
                </span>
                <span style={{ color: theme.palette.text.primary, fontSize: 18, fontWeight: '300', textAlign: 'justify', lineHeight: 1.8 }}>
                 Each Capsule can give you more chances of success in your mission and get MYM this currency can be exchanged for any other cryptocurrency within the Binance Smart Chain network.
                  <br />
                  <br />
                </span>
                <span style={{ color: theme.palette.text.primary, fontSize: 18, fontWeight: '300', textAlign: 'justify', lineHeight: 1.8 }}>
                With nothing more to say, we wish you luck in your purchase and in your expeditions from the Emyem team (CEO, DEVS and MODS).
                </span>
              </div>
            }
            
            align={isMd ? "left" : 'center'}
            disableGutter
            titleVariant="h3"
          />
        </Grid>
        <Grid
          item
          container
          justifyContent="flex-start"
          alignItems="center"
          xs={12}
          md={6}
          data-aos={'fade-up'}
        >
          <Image
            src="assets/images/2.png"
            alt="Web3 Legal Engineering"
            className={classes.image}
            data-aos="fade-right"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          />
        </Grid>
      </Grid>
    </div>
  );
};

Prolog.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Prolog;
