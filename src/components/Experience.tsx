import { AgGridReact } from 'ag-grid-react'; // React Data Grid Component
import {
    AllCommunityModule,
    ModuleRegistry,
    colorSchemeDarkBlue,
    colorSchemeLightCold,
    themeQuartz,
    ColDef,
} from "ag-grid-community";
import { useState, useEffect } from 'react';
import { Button, useColorMode } from '@chakra-ui/react';
import { parseTimeline } from '../utils/time';

ModuleRegistry.registerModules([AllCommunityModule]);

const themeLightCold = themeQuartz.withPart(colorSchemeLightCold);
const themeDarkBlue = themeQuartz.withPart(colorSchemeDarkBlue);

const ExperienceGrid = () => {
    type ExperienceRow = {
        company: string;
        role: string;
        timeline: string;
        total_time?: string; // if you’re adding this field
    };



    // Row Data: The data to be displayed.
    const [rowData, setRowData] = useState<ExperienceRow[]>([
        { company: "UBS", role: "Frontend Developer", timeline: "Sept 24 - Present" },
        { company: "Hatless Studios", role: "Backend Developer", timeline: "Apr 23 - Aug 24" },
        { company: "UBS", role: "Frontend Developer Intern", timeline: "Jun 23 - Aug 23" },
    ]);

    // Column Definitions: Defines the columns to be displayed.
    const [colDefs] = useState<ColDef<ExperienceRow>[]>([
        { field: "company", headerName: "Company" },
        { field: "role", headerName: "Role" },
        { field: "timeline", headerName: "Timeline" },
        { field: "total_time", headerName: "Total Time" }
    ]);


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

    const { colorMode } = useColorMode();

    const color = colorMode === "light" ? themeLightCold : themeDarkBlue

    return (
        // Data Grid will fill the size of the parent container

        <div style={{ height: 500 }}>
            <div style={{ height: 50, display: "flex", justifyContent: "flex-end" }}>
                <Button
                    onClick={() => {
                        const link = document.createElement("a");
                        link.href = "/assets/JoachimTan_Resume.pdf"; // public folder path
                        link.download = "JoachimTan_Resume.pdf";
                        document.body.appendChild(link);
                        link.click();
                        document.body.removeChild(link);
                    }}
                >Export Resume</Button>
            </div>
            <AgGridReact
                theme={color}
                rowData={rowData}
                columnDefs={colDefs}
            />
        </div>
    );
}

export default ExperienceGrid