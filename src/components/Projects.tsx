import { AgGridReact } from 'ag-grid-react'; // React Data Grid Component
import {
    AllCommunityModule, 
    ModuleRegistry, 
    colorSchemeDarkBlue,
    colorSchemeLightCold,
    themeQuartz, 
} from "ag-grid-community";
import { useState } from 'react';
import { useColorMode } from '@chakra-ui/react';

ModuleRegistry.registerModules([AllCommunityModule]);

const themeLightCold = themeQuartz.withPart(colorSchemeLightCold);
const themeDarkBlue = themeQuartz.withPart(colorSchemeDarkBlue);




const ProjectsGrid = () => {
    // Row Data: The data to be displayed.
    const [rowData, setRowData] = useState([
        { make: "Tesla", model: "Model Y", price: 64950, electric: true },
        { make: "Ford", model: "F-Series", price: 33850, electric: false },
        { make: "Toyota", model: "Corolla", price: 29600, electric: false },
    ]);

    // Column Definitions: Defines the columns to be displayed.
    const [colDefs, setColDefs] = useState([
        { field: "make" },
        { field: "model" },
        { field: "price" },
        { field: "electric" }
    ]);

    const defaultColDef = {
        flex: 1,
    };
    const { colorMode, toggleColorMode } = useColorMode();
    
    const color = colorMode === "light" ? themeLightCold : themeDarkBlue

    return (
        // Data Grid will fill the size of the parent container
        <div style={{ height: 500 }}>
            <AgGridReact
                theme={color}
                rowData={rowData}
                columnDefs={colDefs}
                defaultColDef={defaultColDef}
            />
        </div>
    );
}

export default ProjectsGrid