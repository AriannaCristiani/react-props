import style from './Card.module.css'

export default function Card() {
    return (
        <div className={style.card}>
            <figure className={style.figure}>
                <img className={style.image} src="../../600x400.png" alt="" />
            </figure>
            <div className={style.title}>
                <h3>Titolo del Post</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero adipisci consectetur dolor suscipit expedita non delectus laudantium sint aliquid excepturi?</p>
                <button className="btn">LEGGI DI PIU'</button>
            </div>
        </div>
    )
}