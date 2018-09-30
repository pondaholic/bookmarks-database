import React from 'react';
import { reduxForm, Field, focus } from 'redux-form';
import Input from './input';
import { required, minNum, maxNum, url } from './validation';

//styling
import './App.css';

class Bookmarks extends React.Component {
	handleBookmarkSubmit(values) {
		console.log(values);
		//something will happen
	}

	render() {
		return (
			<div className="bookmarks">
				<header className="bookmarks-header">
					<h1 className="bookmark-welcome">What Will You Bookmark?</h1>
				</header>
				<p className="bookmark-explanation">
					<b>Do you have a page you absolutely need to save?</b>
				</p>
				<p>
					{' '}
					Copy the URL into the address, give it a Name, and, if you want,
					provide a description for an easy reminder of why you want to save
					said page.
				</p>
				<div className="bookmarks-form">
					<form
						onSubmit={this.props.handleSubmit(values =>
							this.handleBookmarkSubmit(values)
						)}
					>
						<Field
							label="URL"
							name="bookmark-url"
							id="bookmark-url"
							type="text"
							component={Input}
							validate={[required, url]}
						/>
						<Field
							label="Name"
							name="bookmark-name"
							id="bookmark-name"
							type="text"
							component={Input}
							validate={required}
						/>
						<Field
							label="Description"
							name="bookmark-description"
							id="bookmark-description"
							type="text"
							component={Input}
							validate={required}
						/>
						<Field
							label="Rating"
							name="bookmark-rating"
							id="bookmark-rating"
							type="number"
							component={Input}
							validate={[required, minNum, maxNum]}
						/>
						<button type="submit">Save this bookmark</button>
					</form>
				</div>
			</div>
		);
	}
}

export default reduxForm({
	form: 'bookmark',
	onSubmitFail: (errors, dispatch) =>
		dispatch(focus('bookmark', Object.keys(errors)[0]))
})(Bookmarks);
