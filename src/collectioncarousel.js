import React from 'react';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import item1 from './images/catalogitem1.png';
import item2 from './images/catalogitem2.png';
import item3 from './images/catalogitem3.png';
import item4 from './images/catalogitem4.png';
import item5 from './images/catalogitem5.png';

class collectionCarousel extends React.Component {
	constructor(props) {
		super(props);
		this.state = ({
			pics: [item1, item2, item3, item4, item5],
			current: 2,
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
			<div className = "collection-carousel-outer">
				<div className = "collection-carousel">
					<ReactCSSTransitionGroup
						transitionName = {{
							enter: this.state.isNext ? 'enter-left-collection' : 'enter-right-collection',
							enterActive: 'enter-active-collection',
	            			leave: 'leave-vert-collection',
	            			leaveActive: this.state.isNext ? 'leave-active-left-collection' : 'leave-active-right-collection'
						}}
					>
			    	<div className = "collection-carousel-item" key = {prev+'collectionsale'} onClick = {this.handlePrev}>
			        	<img src = {this.state.pics[prev]}/>
			        </div>
			        </ReactCSSTransitionGroup>
			        <ReactCSSTransitionGroup
						transitionName = {{
							enter: this.state.isNext ? 'enter-left-collection' : 'enter-right-collection',
							enterActive: 'enter-active-collection',
	            			leave: 'leave-vert-collection',
	            			leaveActive: this.state.isNext ? 'leave-active-left-collection' : 'leave-active-right-collection'
						}}
					>
			    	<div className = "collection-carousel-item" 
			    		 key = {this.state.current+'collectionsale'} 
			    		 onClick = {this.handlePrev}
			    	>
			        	<img src = {this.state.pics[this.state.current]}/>
			        </div>
			        </ReactCSSTransitionGroup>
			        <ReactCSSTransitionGroup
						transitionName = {{
							enter: this.state.isNext ? 'enter-left-collection' : 'enter-right-collection',
							enterActive: 'enter-active-collection',
	            			leave: 'leave-vert-collection',
	            			leaveActive: this.state.isNext ? 'leave-active-left-collection' : 'leave-active-right-collection'
						}}
					>
			    	<div className = "collection-carousel-item" key = {next+'collectionsale'} onClick = {this.handleNext}>
			        	<img src = {this.state.pics[next]}/>
			        </div>
			        </ReactCSSTransitionGroup>
				</div>

				<div className = "collection-carousel-radio" onChange = {this.handleChange}>
					<label className = "sale-radio-check">
						<input type="radio" value="0" name="catalog-check" 
							checked = {this.state.current == 0 ? true : false}/>
						<span className = "sale-carousel-check"></span>
					</label>
					<label className = "sale-radio-check">
						<input type="radio" value="1" name="catalog-check" 
							checked = {this.state.current == 1 ? true : false}/>
						<span className = "sale-carousel-check"></span>
					</label>
					<label className = "sale-radio-check">
						<input type="radio" value="2" name="catalog-check" 
							checked = {this.state.current == 2 ? true : false}/>
						<span className = "sale-carousel-check"></span>
					</label>
					<label className = "sale-radio-check">
						<input type="radio" value="3" name="catalog-check" 
							checked = {this.state.current == 3 ? true : false}/>
						<span className = "sale-carousel-check"></span>
					</label>
					<label className = "sale-radio-check">
						<input type="radio" value="4" name="catalog-check" 
							checked = {this.state.current == 4 ? true : false}/>
						<span className = "sale-carousel-check"></span>
					</label>
				</div>
			</div>
		)
	}
}

export default collectionCarousel;