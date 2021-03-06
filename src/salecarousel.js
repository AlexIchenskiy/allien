import React from 'react';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import item1 from './images/saleitem1.png';
import item2 from './images/saleitem2.png';
import item3 from './images/saleitem3.png';

class SaleCarousel extends React.Component {
	constructor(props) {
		super(props);
		this.state = ({
			pics: [item1, item2, item3],
			names: [['Песочные шорты бермуды', '386грн.', '450грн.', '#FEF4F4'], 
					['Укороченный однотонный топ', '499грн.', '550грн.', '#2D2726'], 
					['Однотонный прямой пиджак', '999грн.', '1200грн.', '#EDDCC4']],
			current: 1,
			isNext: true,
			complete: false,
		});

		this.handlePrev = this.handlePrev.bind(this);
		this.handleNext = this.handleNext.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		if (event.target.value == this.state.current) {
			event.preventDefault();
		} else if (!this.state.complete) {
			this.setState({complete: true});
			if (event.target.value > this.state.current) {
				this.setState({current: parseInt(event.target.value), isNext: true});
			} else if (event.target.value < this.state.current) {
				this.setState({current: parseInt(event.target.value), isNext: false});
			}
			setTimeout(() => {this.setState({complete: false})}, 400);
		}
	}

	handlePrev() {
		if (!this.state.complete) {
			this.setState({complete: true});
			if (this.state.current-1 < 0) {
				this.setState({current: this.state.pics.length-1, isNext: false});
			} else {
				this.setState({current: this.state.current-1, isNext: false});
			}
			setTimeout(() => {this.setState({complete: false})}, 400);
		}
	}

	handleNext() {
		if (!this.state.complete) {
			this.setState({complete: true});
			if (this.state.current+1 > this.state.pics.length-1) {
				this.setState({current: 0, isNext: true});
			} else {
				this.setState({current: this.state.current+1, isNext: true});
			}
			setTimeout(() => {this.setState({complete: false})}, 400);
		}
	}

	render() {
		let next = this.state.current + 1 > this.state.pics.length-1 ? 0 : this.state.current + 1;
		let prev = this.state.current - 1 < 0 ? this.state.pics.length-1 : this.state.current - 1;
		return (
			<div className = "sale-carousel-outer">
				<div className = "sale-carousel">
					<div className = "sale-carousel-left" onClick = {this.handlePrev}></div>
					<ReactCSSTransitionGroup
						transitionName = {{
							enter: this.state.isNext ? 'enter-left-sale' : 'enter-right-sale',
							enterActive: 'enter-active-sale',
	            			leave: 'leave-vert-sale',
	            			leaveActive: this.state.isNext ? 'leave-active-left-sale' : 'leave-active-right-sale'
						}}
					>
			    	<div className = "sale-catalog-item" key = {prev+'sale'} onClick = {this.handlePrev}>
			        	<img src = {this.state.pics[prev]}/>
			        	<div className = "sale-catalog-item-desc">
			        		<span>{this.state.names[prev][0]}</span>
			            	<div className = "sale-catalog-color" 
			            		 style = {{backgroundColor: this.state.names[prev][3]}}>
			            	</div>
			            	<div className = "sale-catalog-price">
			            		<span className = "item-price">{this.state.names[prev][1]}</span>
			            		<span className = "sale-price">{this.state.names[prev][2]}</span>
			            		<div className = "price-arrow"></div>
			          		</div>
			        	</div>
			        </div>
			        </ReactCSSTransitionGroup>
			        <ReactCSSTransitionGroup
						transitionName = {{
							enter: this.state.isNext ? 'enter-left-sale' : 'enter-right-sale',
							enterActive: 'enter-active-sale',
	            			leave: 'leave-vert-sale',
	            			leaveActive: this.state.isNext ? 'leave-active-left-sale' : 'leave-active-right-sale'
						}}
					>
			    	<div className = "sale-catalog-item sale-current" key = {this.state.current+'sale'}>
			        	<img src = {this.state.pics[this.state.current]}/>
			        	<div className = "sale-catalog-item-desc">
			        		<span>{this.state.names[this.state.current][0]}</span>
			            	<div className = "sale-catalog-color" 
			            		 style = {{backgroundColor: this.state.names[this.state.current][3]}}>
			            	</div>
			            	<div className = "sale-catalog-price">
			            		<span className = "item-price">{this.state.names[this.state.current][1]}</span>
			            		<span className = "sale-price">{this.state.names[this.state.current][2]}</span>
			            		<div className = "price-arrow"></div>
			          		</div>
			        	</div>
			        </div>
			        </ReactCSSTransitionGroup>
			        <ReactCSSTransitionGroup
						transitionName = {{
							enter: this.state.isNext ? 'enter-left-sale' : 'enter-right-sale',
							enterActive: 'enter-active-sale',
	            			leave: 'leave-vert-sale',
	            			leaveActive: this.state.isNext ? 'leave-active-left-sale' : 'leave-active-right-sale'
						}}
					>
			    	<div className = "sale-catalog-item" key = {next+'sale'} onClick = {this.handleNext}>
			        	<img src = {this.state.pics[next]}/>
			        	<div className = "sale-catalog-item-desc">
			        		<span>{this.state.names[next][0]}</span>
			            	<div className = "sale-catalog-color" 
			            		 style = {{backgroundColor: this.state.names[next][3]}}>
			            	</div>
			            	<div className = "sale-catalog-price">
			            		<span className = "item-price">{this.state.names[next][1]}</span>
			            		<span className = "sale-price">{this.state.names[next][2]}</span>
			            		<div className = "price-arrow"></div>
			          		</div>
			        	</div>
			        </div>
			        </ReactCSSTransitionGroup>
					<div className = "sale-carousel-right" onClick = {this.handleNext}></div>
				</div>
				<div className = "sale-carousel-radio" onChange = {this.handleChange}>
					<label className = "sale-radio-check">
						<input type="radio" value="0" name="sale-check" 
							checked = {this.state.current == 0 ? true : false}/>
						<span className = "sale-carousel-check"></span>
					</label>
					<label className = "sale-radio-check">
						<input type="radio" value="1" name="sale-check"
							checked = {this.state.current == 1 ? true : false}/>
						<span className = "sale-carousel-check"></span>
					</label>
					<label className = "sale-radio-check">
						<input type="radio" value="2" name="sale-check"
							checked = {this.state.current == 2 ? true : false}/>
						<span className = "sale-carousel-check"></span>
					</label>
				</div>
			</div>
		)
	}
}

export default SaleCarousel;