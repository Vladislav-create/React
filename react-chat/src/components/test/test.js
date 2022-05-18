export function Test({ props1, props2, props3, props4, props5, films }) {

    return (
        <div>
            <h1>props1: {props1}</h1>
            <h1>props2: {props2}</h1>
            <h1>props3: {JSON.stringify(props3)}</h1>
            <h1>props5: {props5}</h1>
            <button onClick={()=>props4("Привет колбек")}>props4</button>
            <div>
                <h1>Films</h1>
                <div>{films.map((film)=>(
                    <div>
                        <hr/>
                        <h3>{film.title}</h3>
                        <h3>{film.year}</h3>
                        <hr/>                  
                    </div>
                ))}
                </div>
            </div>
        </div>
    );
}