import React from 'react';
import image from '../../../../../assets/images/1920х570-2.jpg';
import AwesomeSlider from 'react-awesome-slider';
import { Link } from 'react-router-dom';
import 'react-awesome-slider/dist/styles.css';
import { SHOP } from '../../../../../router/url';

const Slider = (props) => {
	return(
		<AwesomeSlider bullets={false}>
			<div data-src={image} >

					<div className="wrap-content-slide1 sizefull flex-col-c-m p-l-15 p-r-15 p-t-150 p-b-170">
						<span className="caption1-slide1 m-text1 t-center animated visible-false m-b-15" data-appear="rollIn">
							Women Collection 2018
						</span>
						<h2 className="caption2-slide1 xl-text1 t-center animated visible-false m-b-37" data-appear="lightSpeedIn">
							New arrivals
						</h2>
						<div className="wrap-btn-slide1 w-size1 animated visible-false" data-appear="slideInUp">
						<Link to={ SHOP } className="flex-c-m size2 bo-rad-23 s-text2 bgwhite hov1 trans-0-4" tabIndex="-1">
							Shop Now
						</Link>
					</div>
					
				</div>
			</div>
			<div data-src={image} />
			<div data-src={image} />
		</AwesomeSlider>
	)
}
export default Slider;