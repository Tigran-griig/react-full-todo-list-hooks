import React from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


export default class SimpleAccordion extends React.Component{
   render() {


    return (
        <div >
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography >What hour</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        {this.props.list}
                    </Typography>
                </AccordionDetails>
            </Accordion>


        </div>
    );
}
}