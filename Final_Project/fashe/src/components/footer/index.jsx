import React from 'react';
import SubmitButton from '../submit_button';
import { Link } from 'react-router-dom';
import SocIcons from '../social_icons/socialIcons';
import footBars from './components/footer_bars/footerBars';

const Footer = (props) => {

	const renderSocialIcons = (item, index) =>{
		return (
			<a key={index} href={item.href} className={`fs-18 color1 p-r-20 ${item.icon}`}></a>
		)
	}

	const renderFootBars = (item, index) => {
		return (
			<div key={ index } className="w-size7 p-t-30 p-l-15 p-r-15 respon4">
				<h4 className="s-text12 p-b-30">
					{ item.title }
				</h4>
				<ul>
					{
						item.links.map((elem, ind) => {
							return(
								<li key={ ind } className="p-b-9">
									<Link to={ elem.href } className="s-text7">
										{ elem.title }
									</Link>
								</li>
							)
						})
					}
				</ul>
			</div>


		);
	}

    return (
        <footer className="bg6 p-t-45 p-b-43 p-l-45 p-r-45">
		<div className="flex-w p-b-90">
			<div className="w-size6 p-t-30 p-l-15 p-r-15 respon3">
				<h4 className="s-text12 p-b-30">
					GET IN TOUCH
				</h4>

				<div>
					<p className="s-text7 w-size27">
						Any questions? Let us know in store at 8th floor, 379 Hudson St, New York, NY 10018 or call us on (+1) 96 716 6879
					</p>

					<div className="flex-m p-t-30">
						{ SocIcons.map(renderSocialIcons) }
					</div>
				</div>
			</div>

			{
				footBars.map(renderFootBars)
			}

			<div className="w-size8 p-t-30 p-l-15 p-r-15 respon3">
				<h4 className="s-text12 p-b-30">
					Newsletter
				</h4>

				<form>
					<div className="effect1 w-size9">
						<input className="s-text7 bg6 w-full p-b-5" type="text" name="email" placeholder="email@example.com"/>
						<span className="effect1-line"></span>
					</div>

					<div className="w-size2 p-t-20">

						<SubmitButton text = 'Subscribe'/>

					</div>

				</form>
			</div>
		</div>

		<div className="t-center p-l-15 p-r-15" >
			<a href="#">
				<i className="fab fa-cc-paypal h2 mr-1"></i>
			</a>

			<a href="#">
				<i className="fab fa-cc-visa h2 mr-1"></i>
			</a>

			<a href="#">
				<i className="fab fa-cc-mastercard h2 mr-1"></i>
			</a>

			<a href="#">
				<i className="fab fa-cc-amex h2 mr-1"></i>
			</a>

			<a href="#">
				<i className="fab fa-cc-discover h2 mr-1"></i>
			</a>

			<div className="t-center s-text8 p-t-20">
				Copyright © 2018 All rights reserved. | This template is made with <i className="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
			</div>
		</div>
	</footer>
    );
};

export default Footer;