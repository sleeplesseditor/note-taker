import React from "react";

//Create Notes
export const Note = React.createClass({
	getInitialState: function () {
		return {
			editing: true
		};
	},
	edit: function () {
		this.setState({
			editing: true
		});
	},
    //Delete note
	remove: function () {
		this.props.deleteFromBoard(this.props.index);
	},
    //Save note
	save: function () {
		this.props.updateNoteText(this.refs.newText.value, this.props.index);
		this.setState({
			editing: false
		});
	},
    //Structure of note
    
    //Render saved note
	renderNormal: function () {
		return (
			<div className="col s12 m6">
				<div className="noteContainer card">
					<div className="noteText card-content black-text">
						<span className="card-title">{this.props.children}</span>
					</div>
					<div className="card-action">
						<button onClick={this.edit} className="waves-effect waves-green btn">Edit</button>
						<button onClick={this.remove} className="waves-effect waves-light btn red darken-4">Delete</button>
					</div>
				</div>
			</div>
		);
	},
    //Render new note
    //Potential for changing note colour to be random value from array inserted at noteContainer card div
	renderForm: function () {
		return (
			<div className="col s12 m6">
				<div className="noteContainer card">
					<div className="noteText card-content black-text">
						<div class="input-field col s6">
							<label for="note">Note</label>
							<textarea id="note" className="materialize-textarea" ref="newText" defaultValue={this.props.children}></textarea>
						</div>
					</div>
					<div className="card-action">
						<button onClick={this.save} className="waves-effect waves-green btn">Save</button>
						<button onClick={this.remove} className="waves-effect waves-light btn red darken-4">Delete</button>
					</div>
				</div>
			</div>
		);
	},
    //Differentiates which state of note to render
	render: function () {
		if(this.state.editing) {
			return this.renderForm();
		} else {
			return this.renderNormal();
		}
	}
});