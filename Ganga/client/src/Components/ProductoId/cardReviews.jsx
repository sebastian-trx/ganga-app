import React from 'react'
import s from './cardReviews.module.css'

 export default function CardReviews({ calific, opinion}) {
    return (
        <div className={s.todo}>
            <div>
                <p><strong>Valoracion:</strong> {calific}</p>
            </div>
            <div>
                <h3><strong>Opinión:</strong> {opinion}</h3>
            </div>
        </div>
    )
}


