import style from './Card.module.css'

export default function Card(props) {
    //console.log('card props:', props)
    const tags = props.tags ? props.tags.join(', ') : '';

    return (
        <div className={style.card}>
            <figure className={style.figure}>
                <img className={style.image} src={props.image} alt="" />
            </figure>
            <div className={style.body}>
                <h3>{props.title}</h3>
                <p>{props.content}</p>
                <a href="#">{tags}</a>
                <br />
                <button className="btn">LEGGI DI PIU'</button>
            </div>
        </div>
    )
}