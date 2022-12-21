import * as React from "react";
import DragDropFile from "./DragDrop";

interface IDragDropComponentProps {}

const DragDropComponent: React.FC<IDragDropComponentProps> = () => {
    return(
        <DragDropFile />
    );
}

export default DragDropComponent;