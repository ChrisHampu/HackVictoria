var Splash = React.createClass({
    getInitialState: function() {
        return {
            dateString: ""      
        }
    },
    componentWillMount: function() {
        var date = new Date();
        var hours = date.getHours();
        var clock = "am";
        
        if(hours > 12) {
            
            hours = hours - 12;
            clock = "pm";
            
        }            
        var minutes = date.getMinutes();

        var string = (hours < 10 ? "0" + hours : hours) + ":" + (date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()) + clock;
        
        this.setState({dateString: string});
    },
    handleButtonClick: function() {
        
        this.props.transitionFunction();  
    },
    render: function() {
        return (
            <div id="splash-page" className="full-size">
                <div className="inner-middle ">
                    <div id="splash-content" className="horizontal-middle">
                        <div className="splash-title">
                            <h2>Hi there </h2>
                            <h2>The time is currently {this.state.dateString} in Victoria</h2>
                        </div>
                        <div>
                            <button type="button" onClick={this.handleButtonClick} className="btn btn-default btn-large splash-button" aria-label="Left Align">
                                <span className="glyphicon glyphicon-search" aria-hidden="true"></span>
                                What would you like to do ?
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
});

// prompType: "an activity"
var SearchPrompt = React.createClass({
    getInitialState: function() {
       return {
           value: undefined
       }
    },
    handleOnKey: function(ev) {
            //ENTER KEY
        if(ev.keyCode === 13) {
            
            this.props.promptFunctor(this, this.refs.searchinput.value);
        }
    },
    render: function() {
        return (
         <div className="search-box">
         { this.state.value === undefined ?
            <div>
                <div className="search-title">
                I want to...{this.props.promptType}
                </div>
                <div className="form-inline">
                    <div className="form-group">
                        <div className="input-group input-group-lg">
                            <span className="glyphicon glyphicon-search input-group-addon search-input-decoration" aria-hidden="true"> </span>
                            <input ref="searchinput" onKeyDown={this.handleOnKey} type="text" className="form-control search-input" placeholder=""/>
                        </div>
                    </div>
                </div>
            </div>
            : 
            <h2>What you're doing {this.props.promptType} is {this.state.value}</h2>
         }
        </div>
        )
    }
});

var EatContext = React.createClass({
    
    render: function() {
        return (<div>text</div>)
    }
})

var PlayContext = React.createClass({
    
    render: function() {
        return (<div></div>)
    }
})

var WatchContext = React.createClass({
    
    render: function() {
        return (<div></div>)
    }
})

var DrinkContext = React.createClass({
    
    render: function() {
        return (<div></div>)
    }
})

var SingContext = React.createClass({
    
    render: function() {
        return (<div></div>)
    }
})

var ContextMap = {
    "eat": EatContext,
    "play": PlayContext,
    "watch": WatchContext,
    "drink": DrinkContext,
    "sing": SingContext
};

var SearchPage = React.createClass({
    getInitialState: function() {
       return {
           suggestions: [],
           context: undefined,
           contextString: undefined,
           errorMsg: ""
       }
    },
    componentWillMount: function() {
        
        this.setState({selections: [{type: "activity"}], suggestions: ['text', 'eat', 'play']});
        
    },
    setContext: function(prompt, context) {
      
        if(ContextMap[context] !== undefined) {
            
            prompt.setState({value: context});
            
            this.setState({context: ContextMap[context], contextString: context});
        }
        else
        {
            this.setState({errorMsg: "Sorry I couldn't understand that. Please try again."});
        }
    },
    render: function() {
        
        var error = this.state.errorMsg.length !== 0 ?  <div>
                                        {this.state.errorMsg}
                                    </div> : false;
        
        return (
            <div id="search-page" className="full-size">
                <div id="search-wrapper" className="full-size">
                    <div className="inner-middle">
                        <div className="horizontal-middle">
                            
                            { this.state.context === undefined ?
                                <div className="search-prompt-container">
                                    <SearchPrompt promptType="" promptFunctor={this.setContext}/>
                                     <div>
                                    {error}
                                    </div>
                                </div>
                                :
                                <div className="search-prompt-container">
                                    <div className="search-box">
                                        <div className="search-title">
                                        I want to { this.state.contextString }
                                        </div>
                                     </div>
                                     { React.createElement(this.state.context) }
                                </div>
                            }
                            
                            <div className="search-suggestions">
                                <div className="search-suggestions-title">
                                Here are some suggestions
                                </div>
                                <div className="container-fluid">
                                    <ul className="row suggestions-list">
                                        
                                        { this.state.suggestions.map(function(text, i) {
                                           return <li className="col-md-2 suggestion-value suggestion-button btn btn-default" key={i}>{text}</li>
                                        }) }
                                  
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
        )
    }
});

var MainPage = React.createClass({
    getInitialState: function() {
        return {
            transition: false
        }  
    },
    doTransition: function() {
        
        this.setState({transition: true}); 
    },
    render: function() {
        return (
            <div className="site-wrapper full-size">
                { this.state.transition == false ? <Splash transitionFunction={this.doTransition}/> : <SearchPage/> }
            </div>
        )
    }
})

ReactDOM.render(
	<MainPage/>,
	document.getElementById('main')
);