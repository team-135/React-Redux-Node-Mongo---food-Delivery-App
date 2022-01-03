import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import Food from './Food';

const Foods = () => {
	const [products, setProducts] = useState([]);
	useEffect(() => {
		fetch('https://rocky-peak-98632.herokuapp.com/foods')
			.then(res => res.json())
			.then(data => setProducts(data));
	}, []);

	return (
		<>
			<section className="_ftre_fd_dlvry2_sec">
				<div className="container">
					<div className="_ftre_fd_dlvry2_top">
						<h1 className="_ftre_fd_dlvry2_tit4">
							Popular Menu
						</h1>
						<h1 className="_ftre_fd_dlvry2_titl">
							Wait a minute for delicious.
						</h1>
					</div>
					<div className="row">
						{
							products.length > 0 ? products.slice(0, 6).map(product => <Food
								key={product._id}
								product={product}
							></Food>)
								:
								<div className="text-center">
									<Spinner animation="border" variant="danger" />
								</div>
						}
					</div>
					<div className="_ftre_fd_dlvry2_btn_all">
						<button className="_ftre_fd_dlvry2_btn">
							See All Menu
							<svg xmlns="http://www.w3.org/2000/svg" width="9" height="14" fill="none" viewBox="0 0 9 14">
								<path fill="#36BA58" d="M0 12.35L5.565 7 0 1.65 1.717 0 9 7l-7.283 7L0 12.35z" />
							</svg>
						</button>
					</div>
				</div>
			</section>
		</>
	);
};

export default Foods;