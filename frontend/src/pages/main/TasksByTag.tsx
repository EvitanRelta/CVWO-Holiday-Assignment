import React, { useEffect } from 'react';
import { RootState } from '../../store/rootReducer';
import { useDispatch, useSelector } from 'react-redux';
import { Tasks, AddItemDial } from './components';
import getAllTasks from '../../store/data/thunkActionCreators/getAllTasks';
import selectTag from '../../store/appbar/thunkActionCreators/selectTagId';
import { useParams } from 'react-router-dom';
import Lodash from 'lodash';

const TasksByTag = () => {
    const { id } = useParams();
    const tagId = Number(id);
    const data = useSelector((state: RootState) => state.data);
    const appbarState = useSelector((state: RootState) => state.appbar);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(selectTag(tagId));
        dispatch(getAllTasks());
    }, []);

    const tasksByTag = Lodash.filter(data.tasks, { categories: [{ tags: [{ id: tagId }] }] });

    return (
        <>
            <Tasks tasks={tasksByTag} />
            <AddItemDial />
        </>
    );
};

export default TasksByTag;