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
                <div className="row">
                    <h1>{this.props.title}</h1>
                </div>
         );
     }
 });

  var Button = React.createClass({
    getInitialState: function(){
        return {
            click:false
        };
    },

     toggleClick: function(){
         this.setState({
             click:!this.state.click
         });
     },

     render:function(){
         var btnclass = this.state.click ? 'btn btn-warning' : 'btn btn-success';
         var title = this.state.click ? this.props.textActive : this.props.title;
         return(
                <button onClick={this.toggleClick} className={btnclass}>{title}</button>
         );
     }
 });


 var Page = React.createClass({
     render:function(){
         return(
             <myElement>
                <Nav Nav title="GitHub" linkUrl="https://github.com/Alberto19"/>
                    <div className="container">
                        <Title title="My component title!" />
                         <div className="row">
                        <Button title="My button" textActive="Loading..."/>
                        </div>
                    </div>
             </myElement>
         );
     }
 });
 

ReactDOM.render(
<Page/>,
document.getElementById('page')
);