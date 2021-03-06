 var Nav = React.createClass({
     render:function() {
         return (
             <nav className="navbar navbar-inverse">
                <div className="container">
                    <div className="navbar-header">
                        <a href={this.props.linkUrl} className="navbar-brand">
                            {this.props.title}
                        </a>
                    </div>
                </div>
            </nav>
         );
     }
 });

 var Title = React.createClass({
     render:function(){
         return(
             <div className="container">
                <div className="row">
                    <h1>{this.props.title}</h1>
                </div>
             </div>
         );
     }
 });
 
  ReactDOM.render(
        <Nav title="GitHub" linkUrl="https://github.com/Alberto19"/>,
        document.getElementById('nav')
    );

      ReactDOM.render(
        <Title title="My component title!" />,
        document.getElementById('title')
    );