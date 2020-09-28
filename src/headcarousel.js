import React from 'react';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import pic1 from './images/carousel1.png';
import pic2 from './images/carousel2.png';
import pic3 from './images/carousel3.png';
import ic1 from './images/ic1.svg';
import ic2 from './images/ic2.svg';
import ic3 from './images/ic3.svg';

class HeadCarousel extends React.Component {
	constructor(props) {
		super(props);
		this.state = ({
			items: [pic1, pic2, pic3],
			names: [['Однотонная льняная рубашка', '300грн.'], 
					['Плиссированная юбка', '560грн.'], 
					['Полупрозрачная белая блузкa', '490грн.']],
			current: 0,
			isNext: true,
			complete: false,
		});

		this.handlePrev = this.handlePrev.bind(this);
		this.handleNext = this.handleNext.bind(this);
	}

	handlePrev() {
		if (!this.state.complete) {
			this.setState({complete: true});
			if (this.state.current-1 < 0) {
				this.setState({current: this.state.items.length-1, isNext: false});
			} else {
				this.setState({current: this.state.current-1, isNext: false});
			}
			setTimeout(() => {this.setState({complete: false})}, 400);
		}
	}

	handleNext() {
		if (!this.state.complete) {
			this.setState({complete: true});
			if (this.state.current+1 > this.state.items.length-1) {
				this.setState({current: 0, isNext: true});
			} else {
				this.setState({current: this.state.current+1, isNext: true});
			}
			setTimeout(() => {this.setState({complete: false})}, 400);
		}
	}

	render() {
		return (
			<div className = "head-carousel">
				<ul className = "carousel-list">
	                <li className = "carousel-number">+ 38 (044) 395-48-69</li>
	                <li><button className = "carousel-button">Заказать звонок</button></li>
	                <li><img src = {ic1} className = "carousel-icon" /></li>
	                <li><img src = {ic2} className = "carousel-icon" /></li>
	                <li><img src = {ic3} className = "carousel-icon" /></li>
              	</ul>
				<ReactCSSTransitionGroup
					transitionName = {{
						enter: this.state.isNext ? 'enter-left' : 'enter-right',
						enterActive: 'enter-active',
            			leave: 'leave-vert',
            			leaveActive: this.state.isNext ? 'leave-active-left' : 'leave-active-right'
					}}
				>
					<div className = "head-carousel-slide" key = {this.state.current}>
					 <img src = {this.state.items[this.state.current]} className = "head-carousel-img"/>
					</div>
				</ReactCSSTransitionGroup>
				<div className = "carousel-nav">
					<div className = "carousel-item-name">
					<ReactCSSTransitionGroup
					transitionName = {{
						enter: this.state.isNext ? 'enter-text-left' : 'enter-text-right',
						enterActive: 'enter-active',
            			leave: 'leave-vert',
            			leaveActive: this.state.isNext ? 'leave-active-left' : 'leave-active-right'
						}}
					>
						<div className = "carousel-item-desc" key = {this.state.current+'desc'}>
							{this.state.names[this.state.current][0]}
						</div>
					</ReactCSSTransitionGroup>
					<ReactCSSTransitionGroup
					transitionName = {{
						enter: this.state.isNext ? 'enter-text-left' : 'enter-text-right',
						enterActive: 'enter-active',
            			leave: 'leave-vert',
            			leaveActive: this.state.isNext ? 'leave-active-left' : 'leave-active-right'
						}}
					>
						<div className = "carousel-item-price" key = {this.state.current+'price'}>
							{this.state.names[this.state.current][1]}
						</div>
					</ReactCSSTransitionGroup>
					</div>
					<div className = "carousel-buttons">
						<div className = "head-carousel-prev head-carousel-button" onClick = {this.handlePrev}>
							<div className = "head-carousel-prev-line"></div>
							<div className = "head-carousel-prev-arrow"></div>
						</div>
						<div className = "head-carousel-count">
							<span>
								<ReactCSSTransitionGroup
								transitionName = {{
									enter: this.state.isNext ? 'enter-top' : 'enter-bottom',
									enterActive: 'enter-active',
			            			leave: 'leave-hor',
			            			leaveActive: this.state.isNext ? 'leave-active-top' : 'leave-active-bottom'
									}}
								>
									<div className = "head-carousel-count-letter" key = {this.state.current+'count'}>
										<span>{this.state.current+1}</span>
									</div>
								</ReactCSSTransitionGroup>
								<div className = "head-carousel-after-count">/{this.state.items.length}</div>
							</span>
						</div>
						<div className = "head-carousel-next head-carousel-button" onClick = {this.handleNext}>
							<div className = "head-carousel-next-line"></div>
							<div className = "head-carousel-next-arrow"></div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default HeadCarousel;