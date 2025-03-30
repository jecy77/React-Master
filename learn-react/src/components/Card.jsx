export default function Card({title, children}) {
  return (
     // style={{backgroundColor: 'black', color: 'white'}}
    <div className="card" >
      {/* <div className="card" style="background-color: black; color: white"> // 안됨  */}
        <div className="card__header">{title}</div> 
        <div className="card__body">{children}</div>
    </div>
  );
}
