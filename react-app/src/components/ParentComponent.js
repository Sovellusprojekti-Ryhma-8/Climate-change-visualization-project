ParentComponent = class ParentComponent extends React.Component {
    constructor () {
      this.addChild = this.addChild.bind(this);
    }

    addChild (event) {
      event.preventDefault();
      $("#children-pane").append(<ChildComponent/>);
    }

    render () {
      return (
        <div className="card calculator">
          <p><a href="#" onClick={this.addChild}>Add Another Child Component</a></p>
          <div id="children-pane">
            <ChildComponent/>
          </div>
        </div>
      );
    }
  };