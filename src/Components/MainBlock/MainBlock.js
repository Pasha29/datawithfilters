import React from 'react';
import s from './MainBlock.module.scss';

let MainBlock = (props) => {
    return (
        <div className={s.wrapper}>
            {props.arrayRecievedUsers.map(item =>
            <div className={s.userBlock} key={item.name+item.lastname}>
                <div className={s.nameBlock}>
                    <p>Имя: {item.name} {item.lastname}</p>
                </div>
                <div className={s.ageBlock}>
                    <p>Возраст: {item.age}</p>
                </div>
                <div className={s.sexBlock}>
                    <p>Пол: {item.sex === 'm' ? 'Мужской' : 'Женский'}</p>
                </div>
            </div>)}
        </div>
    )
}

export default MainBlock;