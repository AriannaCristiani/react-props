import style from './Card.module.css'

export default function Card(props) {
    console.log('card props:', props)

    return (
        <div className={style.card}>
            <figure className={style.figure}>
                <img className={style.image} src="../../600x400.png" alt="" />
            </figure>
            <div className={style.body}>
                <h3>{props.title}</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero adipisci consectetur dolor suscipit expedita non delectus laudantium sint aliquid excepturi?</p>
                <button className="btn">LEGGI DI PIU'</button>
            </div>
        </div>
    )
}