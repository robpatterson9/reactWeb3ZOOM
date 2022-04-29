
import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import Image from 'components/UI/Image';
import SectionHeader from 'components/UI/SectionHeader';

const useStyles = makeStyles(theme => ({
  root: {},
  image: {
    marginBottom: '3%'
  },
  frame: {
    border: '2px solid white',
    borderRadius: '3%',
    padding: '5%'
  },
  lastGrid: {
    [theme.breakpoints.up('sm')]: {
      marginTop: '0%',
    },
  }
}));

const Roadmap = props => {
  const { className, ...rest } = props;
  const classes = useStyles();
  const theme = useTheme();
  
  return (
    <div id='roadmap' className={clsx(classes.root, className)} {...rest}>
      <SectionHeader
            title={
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ color: theme.palette.text.hoverText }}>
                  Roadmap
                  <br />
                  <br />
                </span>
              </div>
            }
            
            align={'center'}
            disableGutter
            titleVariant="h3"
          />
        <div className={classes.frame}>
        <SectionHeader
          title={
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ color: theme.palette.text.primary, fontSize: 24, fontWeight: 'normal', textAlign: 'justify', lineHeight: 1.8 }}>
                <Image
                  src="assets/images/MARS.png"
                  alt="Web3 Legal Engineering"
                  height={16}
                  width={16}
                /> Start of: Private Presale of the MYM token.
                <br />
                <br />
              </span>
              <span style={{ color: theme.palette.text.primary, fontSize: 24, fontWeight: 'normal', textAlign: 'justify', lineHeight: 1.8 }}>
                <Image
                  src="assets/images/MARS.png"
                  alt="Web3 Legal Engineering"
                  height={16}
                  width={16}
                /> End of Private Presale.
                <br />
                <br />
              </span>
              <span style={{ color: theme.palette.text.primary, fontSize: 24, fontWeight: 'normal', textAlign: 'justify', lineHeight: 1.8 }}>
                <Image
                  src="assets/images/MARS.png"
                  alt="Web3 Legal Engineering"
                  height={16}
                  width={16}
                /> Start of: Public Presale of the MYM token.
                <br />
                <br />
              </span>
              <span style={{ color: theme.palette.text.primary, fontSize: 24, fontWeight: 'normal', textAlign: 'justify', lineHeight: 1.8 }}>
                <Image
                  src="assets/images/MARS.png"
                  alt="Web3 Legal Engineering"
                  height={16}
                  width={16}
                /> Infinite Capsules Presale: Minting by rarities  
                <br />
                <br />  
              </span>
              <span style={{ color: theme.palette.text.primary, fontSize: 24, fontWeight: 'normal', textAlign: 'justify', lineHeight: 1.8 }}>
                <Image
                  src="assets/images/MARS.png"
                  alt="Web3 Legal Engineering"
                  height={16}
                  width={16}
                /> End of Infinite Capsules.
                <br />
                <br />
              </span>
              <span style={{ color: theme.palette.text.primary, fontSize: 24, fontWeight: 'normal', textAlign: 'justify', lineHeight: 1.8 }}>
                <Image
                  src="assets/images/MARS.png"
                  alt="Web3 Legal Engineering"
                  height={16}
                  width={16}
                /> Opening of the Marketplace.
                <br />
                <br />
              </span>
              <span style={{ color: theme.palette.text.primary, fontSize: 24, fontWeight: 'normal', textAlign: 'justify', lineHeight: 1.8 }}>
                <Image
                  src="assets/images/MARS.png"
                  alt="Web3 Legal Engineering"
                  height={16}
                  width={16}
                /> Emyem Robotizate open game modes.
                <br />
                <br />
              </span>
              <span style={{ color: theme.palette.text.primary, fontSize: 24, fontWeight: 'normal', textAlign: 'justify', lineHeight: 1.8 }}>
                <Image
                  src="assets/images/MARS.png"
                  alt="Web3 Legal Engineering"
                  height={16}
                  width={16}
                /> AMA with the CEO and Developers on Twitch.
                <br />
                <br />
              </span>
            </div>
          }
        />
        </div>
    </div>
  );
};

Roadmap.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Roadmap;
