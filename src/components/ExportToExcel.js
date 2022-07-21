import React from 'react';
import * as Filesaver from "file-saver";
import * as XLSX from "xlsx";

export const ExportToExcel=({apiData,filename})=>{

    const fileType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
    const fileExtension=".xlsx";

    const exportToCSV=(apiData,filename)=>{
        const ws=XLSX.utils.json_to_sheet(apiData);
        const wb={Sheets:{data:ws},SheetNames:["data"]};
        const excelBuffer=XLSX.write(wb,{bookType:"xlsx",type:"array"});
        const data=new Blob([excelBuffer],{type:fileType});
        Filesaver.saveAs(data,filename + fileExtension);
    };

    return(
        <button onClick={(e)=>exportToCSV(apiData,filename)}>Export</button>
    );
};


export default ExportToExcel