import "./work.css";


function Work(props){
    return(
        <section>
            <section className='work-texts'>
                <div className="work-title">
                    <div className='work-title-text'>
                    {props.title}
                    </div>
                    </div>
                <div className='work-description'>
                    <div className="work-description-text">
                    {props.description}
                    </div>
                    </div>
            </section>
            <section className="work-slides">
                <img onClick={props.onClickFunction} src={require(`${props.imgSrc}`)} className="work-img" id={props.imgID}></img>
            </section>
        </section>
    );
}

export default Work;