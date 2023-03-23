import * as React from 'react';
import { GroupFilters, InputGroup } from './styled';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function Filter(props) {
    return (
        <div>
            <h2 align="center">Filtrar Produtos</h2>
            <InputGroup>
                <GroupFilters>
                    <label >Preço máximo</label>
                    <TextField type="number"
                        placeholder='R$ Máx'
                        sx={{
                            width: 500,
                            maxWidth: '100%',
                        }}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="outlined"
                        value={props.maxPrice}
                        onChange={props.onChangeMaxPrice} />
                </GroupFilters>
                <GroupFilters>
                    <label>Preço minimo</label>
                    <TextField id="outlined-basic" type="number"
                        placeholder='R$ Min'
                        sx={{
                            width: 500,
                            maxWidth: '100%',
                        }}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="outlined"
                        value={props.minPrice}
                        onChange={props.onChangeMinPrice} />
                </GroupFilters>
                <GroupFilters>
                    <label>Buscar por produto</label>
                     <TextField
                     
                            onChange={props.onChangeBusca}
                            placeholder='Buscar'
                            value={props.busca}
                        />
                </GroupFilters>
            </InputGroup>

        </div>
    )

}