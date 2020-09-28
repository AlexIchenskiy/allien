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
			names: [['Песочные шорты бермуды', '386грн.', '450грн.'], 
					['Укороченный однотонный топ', '499грн.', '550грн.'], 
					['Однотонный прямой пиджак', '999грн.', '1200грн.']],
			current: 0,
			isNext: true,
			complete: false,
		});

		this.handlePrev = this.handlePrev.bind(this);
		this.handleNext = this.handleNext.bind(this);
	}

	handleNext() {
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

	handlePrev() {
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
		    	<div className = "sale-catalog-item" key = {prev+'sale'}>
		        	<img src = {this.state.pics[prev]}/>
		        	<div className = "sale-catalog-item-desc">
		        		<span>{this.state.names[prev][0]}</span>
		            	<div className = "bottom-catalog-color" style = {{backgroundColor: '#ffffff'}}>
		            	</div>
		            	<div className = "sale-catalog-price">
		            		<span>{this.state.names[prev][1]+' грн.'}</span>
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
		            	<div className = "bottom-catalog-color" style = {{backgroundColor: '#ffffff'}}>
		            	</div>
		            	<div className = "sale-catalog-price">
		            		<span>{this.state.names[this.state.current][1]+' грн.'}</span>
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
		    	<div className = "sale-catalog-item" key = {next+'sale'}>
		        	<img src = {this.state.pics[next]}/>
		        	<div className = "sale-catalog-item-desc">
		        		<span>{this.state.names[next][0]}</span>
		            	<div className = "bottom-catalog-color" style = {{backgroundColor: '#ffffff'}}>
		            	</div>
		            	<div className = "sale-catalog-price">
		            		<span>{this.state.names[next][1]+' грн.'}</span>
		            		<div className = "price-arrow"></div>
		          		</div>
		        	</div>
		        </div>
		        </ReactCSSTransitionGroup>
				<div className = "sale-carousel-right" onClick = {this.handleNext}></div>
			</div>
		)
	}
}

export default SaleCarousel;