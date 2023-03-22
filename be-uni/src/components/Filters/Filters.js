import * as React from 'react';
import { GroupFilters, InputGroup } from './styled';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function Filter() {
    return (
        <div>
            <h2 align="center">Filtrar Produtos</h2>
            <InputGroup>
                <GroupFilters>
                    <label >Preço máximo</label>
                    <TextField id="outlined-basic" type="number"
                        placeholder='R$ Máx'
                        sx={{
                            width: 500,
                            maxWidth: '100%',
                        }}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="outlined" />
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
                        variant="outlined" />
                </GroupFilters>
                <GroupFilters>
                    <label>Buscar por produto</label>
                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        sx={{
                            width: 500,
                            maxWidth: '100%',
                        }}
                        renderInput={(params) => <TextField {...params}  placeholder='Buscar' />}
                    />
                    {/* options={top100Films} */}
                </GroupFilters>
            </InputGroup>
        </div>
    )

}