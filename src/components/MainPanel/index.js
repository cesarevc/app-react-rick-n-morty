import React from 'react';
// Material UI
import { Typography, Grid } from '@material-ui/core';
// Count
import CountUp from 'react-countup';
// Redux
import { connect } from 'react-redux';


function MainPanel(props) {
    return (<Grid container spacing={3} justify="center">
                <Grid item xs={12} md={3} className="found" >
                    <Typography variant="h2">
                        <CountUp 
                            start={0}
                            end={props.data.totalCharactersFound}
                            duration={3.5}
                            separator=","
                        />
                    </Typography>
                    <Typography color="textSecondary" gutterBottom>Personajes Encontrados</Typography>
                </Grid>
            </Grid>
    );
}

const mapStateToProps = (state) => {
    return {
        data: state.dataApi
    }
}

export default connect(mapStateToProps)(MainPanel);