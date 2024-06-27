import { createRoot } from 'react-dom/client';
import './index.css';
import * as React from 'react';
import { useEffect } from 'react';
import { GanttComponent, EditDialogFieldsDirective, DayMarkers, EditDialogFieldDirective, Inject, Edit, Selection, Toolbar, ColumnsDirective, ColumnDirective, EventMarkersDirective, EventMarkerDirective } from '@syncfusion/ej2-react-gantt';
import { editingResources } from './data';

const Editing = () => {
    const taskFields = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        endDate: 'EndDate',
        duration: 'Duration',
        progress: 'Progress',
        dependency: 'Predecessor',
        child: 'subtasks',
        notes: 'info',
        resourceInfo: 'resources'
    };
    const resourceFields = {
        id: 'resourceId',
        name: 'resourceName'
    };
    const editSettings = {
        allowAdding: true,
        allowEditing: true,
        allowDeleting: true,
        allowTaskbarEditing: true,
        showDeleteConfirmDialog: true
    };
    const splitterSettings = {
        position: "35%"
    };
    const projectStartDate = new Date('03/25/2024');
    const projectEndDate = new Date('12/31/2024');
    const gridLines = 'Both';
    const toolbar = ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll', 'Indent', 'Outdent'];
    const timelineSettings = {
        topTier: {
            unit: 'Month',
            format: 'MMM, yyyy',
        },
        bottomTier: {
            unit: 'Week',
            format: 'dd',
        },
    };
    const labelSettings = {
        leftLabel: 'TaskName',
        rightLabel: 'resources'
    };
    const eventMarkerDay1 = new Date('03/25/2024');
    const eventMarkerDay2 = new Date('05/01/2024');
    const eventMarkerDay3 = new Date('07/15/2024');
    const eventMarkerDay4 = new Date('10/01/2024');
    const eventMarkerDay5 = new Date('12/15/2024');
    const eventMarkerDay6 = new Date('12/31/2024');

    const data = [
        {
            TaskID: 1,
            TaskName: 'Golden Plains Wind Turbine Project',
            StartDate: new Date('03/25/2024'),
            EndDate: new Date('12/31/2024'),
            subtasks: [
                {
                    TaskID: 2,
                    TaskName: 'Pre-Installations',
                    StartDate: new Date('03/25/2024'),
                    EndDate: new Date('05/31/2024'),
                    subtasks: [
                        { TaskID: 3, TaskName: 'Site Preparation', StartDate: new Date('03/25/2024'), Duration: 45, Progress: 30, resources: [1], info: 'Clearing and leveling the site.' },
                        { TaskID: 4, TaskName: 'Foundation Construction', StartDate: new Date('04/15/2024'), Duration: 30, Progress: 45, Predecessor: '3FS', resources: [2], info: 'Laying down the foundation.' },
                        { TaskID: 5, TaskName: 'Foundation Inspection', StartDate: new Date('05/16/2024'), Duration: 5, Progress: 20, Predecessor: '4FS', resources: [3], info: 'Inspecting the foundation.' },
                    ]
                },
                {
                    TaskID: 6,
                    TaskName: 'Installations',
                    StartDate: new Date('06/01/2024'),
                    EndDate: new Date('09/30/2024'),
                    subtasks: [
                        { TaskID: 7, TaskName: 'Tower Installation', StartDate: new Date('06/01/2024'), Duration: 30, Progress: 60, Predecessor: '5FS', resources: [4], info: 'Installing the tower.' },
                        { TaskID: 8, TaskName: 'Nacelle Installation', StartDate: new Date('07/01/2024'), Duration: 30, Progress: 20, Predecessor: '7FS', resources: [5], info: 'Installing the nacelle.' },
                        { TaskID: 9, TaskName: 'Blade Installation', StartDate: new Date('08/01/2024'), Duration: 30, Progress: 10, Predecessor: '8FS', resources: [6], info: 'Installing the blades.' },
                        { TaskID: 10, TaskName: 'Electrical Connection', StartDate: new Date('09/01/2024'), Duration: 30, Progress: 5, Predecessor: '9FS', resources: [7], info: 'Connecting the electrical systems.' },
                    ]
                },
                {
                    TaskID: 11,
                    TaskName: 'Commissioning',
                    StartDate: new Date('10/01/2024'),
                    EndDate: new Date('12/14/2024'),
                    subtasks: [
                        { TaskID: 12, TaskName: 'Mechanical Completion Check (MCC)', StartDate: new Date('10/01/2024'), Duration: 30, Progress: 0, Predecessor: '10FS', resources: [8], info: 'Checking mechanical components.' },
                        { TaskID: 13, TaskName: 'Electrical Completion Check (ECC)', StartDate: new Date('11/01/2024'), Duration: 30, Progress: 0, Predecessor: '12FS', resources: [9], info: 'Checking electrical systems.' },
                        { TaskID: 14, TaskName: 'System Integration', StartDate: new Date('12/01/2024'), Duration: 14, Progress: 0, Predecessor: '13FS', resources: [10], info: 'Integrating all systems.' },
                    ]
                },
                {
                    TaskID: 15,
                    TaskName: 'Completion and Handover',
                    StartDate: new Date('12/15/2024'),
                    EndDate: new Date('12/31/2024'),
                    subtasks: [
                        { TaskID: 16, TaskName: 'Final Inspection', StartDate: new Date('12/15/2024'), Duration: 10, Progress: 0, Predecessor: '14FS', resources: [11], info: 'Final project inspection.' },
                        { TaskID: 17, TaskName: 'Project Handover', StartDate: new Date('12/25/2024'), Duration: 5, Progress: 0, Predecessor: '16FS', resources: [12], info: 'Handover to the client.' },
                    ]
                }
            ]
        }
    ];

    return (
        <div className='control-pane'>
            <div className='control-section'>
                <GanttComponent id='Editing' dataSource={data} dateFormat={'MMM dd, yyyy'} treeColumnIndex={1} allowSelection={true} showColumnMenu={false} highlightWeekends={true} allowUnscheduledTasks={true} projectStartDate={projectStartDate} projectEndDate={projectEndDate} taskFields={taskFields} timelineSettings={timelineSettings} labelSettings={labelSettings} splitterSettings={splitterSettings} height='410px' editSettings={editSettings} gridLines={gridLines} toolbar={toolbar} resourceFields={resourceFields} resources={editingResources}>
                    <ColumnsDirective>
                        <ColumnDirective field='TaskID' width='80'></ColumnDirective>
                        <ColumnDirective field='TaskName' headerText='Task Name' width='250' clipMode='EllipsisWithTooltip'></ColumnDirective>
                        <ColumnDirective field='StartDate'></ColumnDirective>
                        <ColumnDirective field='Duration'></ColumnDirective>
                        <ColumnDirective field='Progress'></ColumnDirective>
                        <ColumnDirective field='Predecessor'></ColumnDirective>
                    </ColumnsDirective>
                    <EditDialogFieldsDirective>
                        <EditDialogFieldDirective type='General' headerText='General'></EditDialogFieldDirective>
                        <EditDialogFieldDirective type='Dependency'></EditDialogFieldDirective>
                        <EditDialogFieldDirective type='Resources'></EditDialogFieldDirective>
                        <EditDialogFieldDirective type='Notes'></EditDialogFieldDirective>
                    </EditDialogFieldsDirective>
                    <EventMarkersDirective>
                        <EventMarkerDirective day={eventMarkerDay1} label='Project approval and kick-off'></EventMarkerDirective>
                        <EventMarkerDirective day={eventMarkerDay2} label='Foundation inspection'></EventMarkerDirective>
                        <EventMarkerDirective day={eventMarkerDay3} label='Site manager inspection'></EventMarkerDirective>
                        <EventMarkerDirective day={eventMarkerDay4} label='Electrical completion check'></EventMarkerDirective>
                        <EventMarkerDirective day={eventMarkerDay5} label='Mechanical completion check'></EventMarkerDirective>
                        <EventMarkerDirective day={eventMarkerDay6} label='Final inspection and handover'></EventMarkerDirective>
                    </EventMarkersDirective>
                    <Inject services={[Edit, Selection, Toolbar, DayMarkers]} />
                </GanttComponent>
                <div style={{ float: 'right', margin: '10px' }}>Source:
                    <a href="https://en.wikipedia.org/wiki/Construction" target='_blank'>https://en.wikipedia.org/</a>
                </div>
            </div>
        </div>
    );
};
export default Editing;

const root = createRoot(document.getElementById('sample'));
root.render(<Editing />);
