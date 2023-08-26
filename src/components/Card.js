import { useState } from 'react';
import { BiSolidQuoteAltLeft, BiSolidQuoteAltRight } from 'react-icons/bi'
import Pagination from './Pagination'
import { Users } from '../data';

export default function Card() {

    const [left, setLeft] = useState(false);
    const [right, setRight] = useState(false);
    const [page, setPage] = useState(0);
    const [user, setUser] = useState(Users[0]);

    return (
        <div className="User" key={user.id} >
            <div className="UserInfo">
                <h3 className="UserName">{user.name}</h3>
                <p className="UserRole">{user.role}</p>
            </div>

            <div className="UserThoughts">
                <BiSolidQuoteAltLeft className='quotes' />
                <p className="UserComment">{user.comment}</p>
                <BiSolidQuoteAltRight className='quotes' />
            </div>

            <div>
                <Pagination page={page} setPage={setPage} setUser={setUser} left={left} right={right} setLeft={setLeft} setRight={setRight}/>
            </div>
        </div>
    )
}
