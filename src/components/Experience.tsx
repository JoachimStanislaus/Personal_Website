import { AgGridReact } from 'ag-grid-react'; // React Data Grid Component
import {
    AllCommunityModule, 
    ModuleRegistry, 
    colorSchemeDarkBlue,
    colorSchemeLightCold,
    themeQuartz, 
} from "ag-grid-community";
import { useState, useEffect } from 'react';
import { useColorMode } from '@chakra-ui/react';
import { parseTimeline } from '../utils/time';

ModuleRegistry.registerModules([AllCommunityModule]);

const themeLightCold = themeQuartz.withPart(colorSchemeLightCold);
const themeDarkBlue = themeQuartz.withPart(colorSchemeDarkBlue);

const ExperienceGrid = () => {

    

    // Row Data: The data to be displayed.
    const [rowData, setRowData] = useState([
        { company: "UBS", role: "Frontend Developer", timeline: "Sept 24 - Present"},
        { company: "Hatless Studios", role: "Backend Developer", timeline: "Apr 23 - Aug 24"},
        { company: "UBS", role: "Frontend Developer Intern", timeline: "Jun 23 - Aug 23"},
    ]);

    // Column Definitions: Defines the columns to be displayed.
    const [colDefs, setColDefs] = useState([
        { field: "company", headerName:"Company"},
        { field: "role", headerName:"Role" },
        { field: "timeline" , headerName:"Timeline"},
        { field: "total_time", headerName: "Total Time" }
    ]);

    const defaultColDef = {
        flex: 1,
    };

    useEffect(() => {
        const updateTime = () => {
            const updated = rowData.map((row) => ({
            ...row,
            total_time: parseTimeline(row.timeline),
            }));
            setRowData(updated);
        };
        
        updateTime(); // initial run
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
        }, []);

    const { colorMode, toggleColorMode } = useColorMode();
    
    const color = colorMode === "light" ? themeLightCold : themeDarkBlue

    return (
        // Data Grid will fill the size of the parent container
        <div style={{ height: 500 }}>
            <AgGridReact
                theme={color}
                rowData={rowData}
                columnDefs={colDefs}
            />
        </div>
    );
}

export default ExperienceGrid