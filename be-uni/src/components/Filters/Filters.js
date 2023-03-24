import * as React from 'react';
import { GroupFilters, InputGroup, FilterImage } from './styled';
import TextField from '@mui/material/TextField';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function Filter(props) {

    const CustomLabel = (props) => {
        return (<label style={{ marginBottom: 10 }}>{props.name}</label>)
    }

    return (
        <div>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <FilterImage>
                        <img src="https://beuni.com.br/wp-content/uploads/sites/17/2022/07/beuni-menor.png?x24827" alt='logo'></img>
                        <Typography align="center">Filtros</Typography>
                    </FilterImage>
                </AccordionSummary>
                <AccordionDetails>
                    <InputGroup>
                        <GroupFilters>
                            <CustomLabel name="Preço máximo" />
                            <TextField type="number"
                                placeholder='R$ Máx'
                                variant="outlined"
                                value={props.maxPrice}
                                onChange={props.onChangeMaxPrice} />
                        </GroupFilters>
                        <GroupFilters>
                            <CustomLabel name="Preço mínimo" />
                            <TextField id="outlined-basic" type="number"
                                placeholder='R$ Min'
                                variant="outlined"
                                value={props.minPrice}
                                onChange={props.onChangeMinPrice} />
                        </GroupFilters>
                        <GroupFilters>
                            <CustomLabel name="Buscar por produto" />
                            <TextField
                                value={props.busca}
                                onChange={props.onChangeSearch}
                                placeholder='Buscar'
                            />
                        </GroupFilters>
                    </InputGroup>

                </AccordionDetails>
            </Accordion>
        </div>
    )

}