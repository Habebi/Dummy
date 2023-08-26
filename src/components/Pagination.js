import { BsArrowRightCircle, BsArrowLeftCircle, BsArrowRightCircleFill, BsArrowLeftCircleFill } from 'react-icons/bs'
import { Users } from '../data';
import { useEffect, useState } from 'react';

export default function Pagination(props) {
    function decreasePage() {
        props.setPage((props.page + 7) % 8);
        props.setLeft(true);
        props.setRight(false)
    }
    
    function increasePage(){
        props.setPage((props.page + 1) % 8);
        props.setRight(true);
        props.setLeft(false);
    }
    
    function chooseRandom(){
        props.setPage(Math.floor(Math.random() * 8));
        props.setLeft(false);
        props.setRight(false)
    }

    useEffect(()=>{
        props.setUser(Users[props.page]);
    })


    return (
        <div className='Page'>
            <div className="movement">
                {props.left ? <BsArrowLeftCircleFill className='Arrow' onClick={decreasePage}/> : <BsArrowLeftCircle className='Arrow' onClick={decreasePage} />}
                <div>{props.page + 1}</div>
                {props.right ? <BsArrowRightCircleFill className='Arrow' onClick={increasePage} /> : <BsArrowRightCircle className='Arrow' onClick={increasePage} />}
            </div>
            <button className="goRandom" onClick={chooseRandom}>
                Go Random
            </button>
        </div>
    )
}
