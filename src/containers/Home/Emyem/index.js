import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Grid } from '@material-ui/core';
// eslint-disable-next-line
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
}));

const Emyem = props => {
    const { setIsSwapDialog, account, className, ...rest } = props;
    const classes = useStyles();
    const theme = useTheme();
    const isMd = useMediaQuery(theme.breakpoints.up('md'), {
        defaultMatches: true,
    });
        
    return (
        <div id='Emyem' className={clsx(classes.root, className)} {...rest}>
            <Grid
                container
                justifyContent="space-between"
                spacing={0}
                direction={isMd ? 'row' : 'column-reverse'}
            >
                <Grid
                    item
                    container
                    justifyContent="flex-start"
                    //alignItems="center"
                    xs={12}
                    md={6}
                    spacing={2}
                    data-aos={'fade-up'}
                    style={{padding: theme.spacing(0,2)}}>
                    <iframe id="vp1942ah" title="Video Player" width="720" height="720" frameBorder="0" src="https://s3.amazonaws.com/" allowFullScreen></iframe>
                </Grid>
                <Grid
                    item
                    container
                    // alignItems="center"
                    xs={12}
                    md={6}
                    data-aos={'fade-up'}>
                    <SectionHeader
                        title={
                            <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                                <span style={{ color: theme.palette.text.hoverText }}>
                                 Minting Capsules
                                    <br />
                                </span>
                                <span style={{ color: theme.palette.text.primary, fontSize: 18, fontWeight: '300', textAlign: 'justify', lineHeight: 1.8 }}>
                                There is for now that the offer is infinite, these capsules are divided into four rarities (Common, Rare, Legendary, Epic). All NFTs exist as ERC-721 tokens on the blockchain with the actual image files hosted on IPFS. The purchase will come from this website at a fairly positive price (plus the gas rate).
                                    <br />
                                    <br />
                                </span>
                                <span style={{ color: theme.palette.text.primary, fontSize: 18, fontWeight: '300', textAlign: 'justify', lineHeight: 1.8 }}>
                                Upon disclosure, our esteemed investors will begin to familiarize themselves with the game. The profit and ROI ranges revolve around its rarity.
                                    <br />
                                    <br />
                                </span>
                                <span style={{ color: theme.palette.text.primary, fontSize: 18, fontWeight: '300', textAlign: 'justify', lineHeight: 1.8 }}>
                                Buying capsules is endless for now, mint what you can now as availability will be limited in the future, making this release as fair as we can hope for. We hope you'll join the conversation on Telegram and Discord as we explore the world of Emyem together.
                                    <br />
                                    <br />
                                </span>
                            </div>
                        }
                        
                        align={isMd ? "left" : 'center'}
                        disableGutter
                        titleVariant="h4"
                    />
                </Grid>
            </Grid>
        </div>
    );
};

Emyem.propTypes = {
    /**
     * External classes
     */
    className: PropTypes.string,
};

export default Emyem;
