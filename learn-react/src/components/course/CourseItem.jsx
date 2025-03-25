function HeartIconBtn({onHeartClick, isFavorite = false}) {
	// 1. 기본
	// if(isFavorite){
	// 	return(
	// 		<button className="btn">
	// 			<img className="icon-heart" src="/img/heart-fill-icon.svg" />
	// 		</button>
	// 	)
	// }

	// return(
	// 	<button className="btn">
	// 		<img className="icon-heart" src="/img/heart-icon.svg" />
	// 	</button>
	// )
	// 아무것도 반환하고싶지 않다면 return null

	// 2. 삼항연산자
	// return(
	// 	<button className="btn">
	// 		{isFavorite ? (
	// 			<img className="icon-heart" src="/img/heart-fill-icon.svg" />
	// 		) : (
	// 			<img className="icon-heart" src="/img/heart-icon.svg" />
	// 		)}
	// 	</button>
	// )

	

	// 3. 삼항연산자 - 더 단순화
	return(
		// <button className="btn" onClick={onHeartClick}>
		<button className="btn" onClick={(e)=>onHeartClick(e)}>
			<img className="btn__img" src={isFavorite ? 'img/heart-fill-icon.svg':'/img/heart-icon.svg' } />
		</button>
	)

}



function LinkIconBtn({link}) {
	return (
		<a className="btn" href={link} target="_blank" rel="noreferrer">
			<img className="btn__img" src="/img/link-icon.svg" alt="" />
		</a>
	)
}

export default function CourseItem({title, description, thumbnail, isFavorite, link}) {


	
	const isEmpty = false;

	if (isEmpty){
		return (
			<p>강의가 없습니다.</p>
		)
	}

	function handleFavorite(e) {
		e.stopPropagation(); // 이벤트 전파 방지 
		alert(isFavorite ? '좋아요' : '모르겠어요');
	}
	function handleItemClick(){
		alert('item clicked');
		window.open(link, '_blank');
	}
	return (
		<article className="course" onClick={handleItemClick}>
						<img className="course__img" src={thumbnail} alt="강의 이미지" />
						<div className="course__body">
							<div className="course__title">{title}</div>
							<div className="course__description">{description}</div>
						</div>
						<div className="course__icons">
							<HeartIconBtn isFavorite={isFavorite} onHeartClick = {handleFavorite}></HeartIconBtn>
								{link && <LinkIconBtn link={link} />}

						</div>
					</article>
	);
}


