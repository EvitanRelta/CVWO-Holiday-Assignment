import Lodash from 'lodash';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import selectTagId from '../../store/appbar/thunkActionCreators/selectTagId';
import getTasksAndCategories from '../../store/data/thunkActionCreators/getTasksAndCategories';
import { RootState } from '../../store/rootReducer';
import { AddItemDial, Tasks } from './components';

const TasksByTag = () => {
    const { id } = useParams();
    const tagId = Number(id);
    const data = useSelector((state: RootState) => state.data);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const category = Lodash.find(data.categories, { tags: [{ id: tagId }] });

    useEffect(() => {
        if (category || !data.hasInitData)
            dispatch(getTasksAndCategories());
    }, [category?.name, data.hasInitData]);

    useEffect(() => {
        if (!data.hasInitData) return;
        if (!category)
            return navigate('../all');
        dispatch(selectTagId(tagId));
    }, [id, data.hasInitData, category]);

    const tasksByTag = Lodash.filter(data.tasks, { categories: [{ tags: [{ id: tagId }] }] });

    return (
        <>
            <Tasks tasks={tasksByTag} />
            <AddItemDial />
        </>
    );
};

export default TasksByTag;