import React from 'react';
import s from './Filters.module.scss';
import { Field, Form, Formik } from 'formik';

let Filters = (props) => {
    return (
        <div className={s.wrapper}>
            <Formik
            initialValues={{name: '', lastname: '', age: '', sex: ''}}
            onSubmit={(values) => {
                props.getFilterDataTC(values);
            }}>
            {() => (
                <Form className={s.filterForm}>

                <p className={s.textHead}>Имя</p>
                <Field type="text" name="name" placeholder="Имя" />
                
                <p className={s.textHead}>Фамилия</p>
                <Field type="text" name="lastname" placeholder="Фамилия" />
                
                <p className={s.textHead}>Возраст</p>
                <Field type="text" name="age" placeholder="Возраст" />

                <div className={s.sexWrapper}>
                    <p className={s.textHead}>Пол</p>
                    <div className={s.chkboxWrapper}>
                        <div>
                            <p>Мужской</p>
                            <Field type="checkbox" name="sex" value="m"/>
                        </div>
                        
                        <div>
                            <p>Женский</p>
                            <Field type="checkbox" name="sex" value="f"/>
                        </div>
                    </div>
                </div>
                
                <button className={s.btnFilter} type="submit">Поиск</button>
            </Form>)}
            </Formik>
        </div>
    )
}

export default Filters;