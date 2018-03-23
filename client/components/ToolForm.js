import React, { Component } from "react";
import axios from "axios"

class ToolForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tool: "",
      description: "",
      features: "",
      recentlyAdded: {}
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e, type) {
    if (type === "tool") this.setState({ tool: e.target.value });
    if (type === "description") this.setState({ description: e.target.value });
    if (type === "features") this.setState({ features: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    let data = {
      name: this.state.tool,
      description: this.state.description,
      features: this.state.features
    };
    this.setState({ tool: "", description: "", features: "" });
    axios.post("/api/tool", data)
    .then(res => this.setState({recentlyAdded: res.data}))
  }

  render() {
    return (
      <div>
        <h2>Add New Tool for Lending</h2>
        <form id="tool-form" onSubmit={e => this.handleSubmit(e)}>
          Tool:
          <input
            type="text"
            value={this.state.tool}
            onChange={e => this.handleChange(e, "tool")}
          />
          Description:
          <input
            value={this.state.description}
            type="text"
            onChange={e => this.handleChange(e, "description")}
          />
          Features:
          <input
            value={this.state.features}
            type="text"
            onChange={e => this.handleChange(e, "features")}
          />
          <input id="tool-form-submit" type="submit" />
        </form>
        <div>
          {this.state.recentlyAdded.name ? (
            <div id="item-added">
               
              {`Just added your ${this.state.recentlyAdded.name}`}
            </div>
          ) : (null)}
        </div>
      </div>
    );
  }
}

export default ToolForm;
