import { useEffect } from "react";
import {useParams} from "react-router-dom";


function Detail() {
	const id = useParams()
	useEffect(() => {
		const getDetail = async () => {
			const json = await (
				await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
			).json();
		// setDetail(json.data.movie);
		// setLoading(false);
		};
		getDetail();
		}, [id]);

	return (
		<h1>detail</h1>
	)
};


export default Detail;