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
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllTasks());
    }, []);
    
    useEffect(() => {
        if (data.hasInitData)
            dispatch(selectTag(tagId));
    }, [id, data.tasks])

    const tasksByTag = Lodash.filter(data.tasks, { categories: [{ tags: [{ id: tagId }] }] });

    return (
        <>
            <Tasks tasks={tasksByTag} />
            <AddItemDial />
        </>
    );
};

export default TasksByTag;