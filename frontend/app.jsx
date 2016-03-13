var Restaurants = [
    {
        name: "Original Joes",
        location: ["1654 McKenzie Avenue, Victoria, BC V8N 0A3"],
        type: "western",
        budget: 15
    },
    {
        name: "1550s",
        location: ["1550 Cedar Hill X Rd, Victoria, BC V8P 2P4"],
        type: "western",
        budget: 15
    },
    
    {
        name: "White Spot",
        location: ["3965 Quadra St, Victoria, BC V8X 1J8"],
        type: "western",
        budget: 12
    },
    
    {
        name: "Boston Pizza",
        location: ["797 Hillside Ave #10, Victoria, BC V8T 1Z5"],
        type: "western",
        budget: 12
    },
    
    
    {
        name: "Phonomenal",
        location: ["Suite 129, 3749 Shelbourne St, Victoria, BC V8P 5N4"],
        type: "asian",
        budget: 10
    },
    
    {
        name: "East Garden Restaurant(东篱江湖菜)",
        location:"2888 Belmont Ave",
        type: "asian",
        budget: 14
        
    },
    
    {
        name: "Sun Wah Chinese Restaurant",
        location:"1515 Cook St, Victoria, BC V8T 5E5",
        type: "asian",
        budget: 14
    },
    
    {
        name: "Sun Wah Chinese Restaurant",
        location:"1515 Cook St, Victoria, BC V8T 5E5",
        type: "asian",
        budget: 14

    }
    
    
    
    
];


var Expected_food_input = ["chinese", "indian", "asian", "thai", "japanese", 
                            "western", "italian", "greek", "malaysian"]
                            
var Expected_budget_input = ['$5', '$10', '$15', '$20', '$25'];                           

var Expected_context_input = ['eat', 'play', 'sing', 'drink', 'watch'];

// global
var If = React.createClass({
	render: function() {
		if (this.props.test) {
			return this.props.children;
		} else {
			return false;
		}
	}
});


var Result = React.createClass({
   render: function() { 
       
       return ( 
       
       <div className="col-md-4">
            <div className="result-card">
                <div id= "restaurant-name">{this.props.data.name}</div>
                <div id= "restaurant-type">{this.props.data.type} Cuisine</div>
                <div>{this.props.data.location}</div>
                <div>${this.props.data.budget} Budget</div>
            </div>
        </div>
    )
   } 
});


var ResultView = React.createClass({ 
   getInitialState: function() {
     return {
         mapHeight: undefined
     }  
   },
   componentWillMount: function() {

   },
   componentDidMount: function() {
       
       this.updateMapHeight(); 
       
        this.map = new google.maps.Map(ReactDOM.findDOMNode(this.refs.map), {
            center: {lat: 48.448398, lng: -123.338847}, 
            zoom: 12
        });

        var that = this;

        window.addEventListener('resize', this.updateMapHeight);
        
        for(var i = 0; i < this.props.data.length; i++) {
            this.addGeocodedMarker(this.props.data[i].location[0]);
        }

   },
   componentWillUnmount: function() {
       
        window.removeEventListener('resize', this.updateMapHeight);
   },
   updateMapHeight: function() {
       var top = 0;
        var element = this.refs.map;
        var viewportHeight = document.documentElement.clientHeight;
       
        do {
            top += element.offsetTop  || 0;;
            element = element.offsetParent;
        } while(element);

        this.offsetTop = viewportHeight - top - 30;
        
        this.setState({mapHeight: this.offsetTop});
   },
  addGeocodedMarker: function(address) {
      
      var geocoder = new google.maps.Geocoder();
      var that = this;
      
      
        geocoder.geocode({'address': address}, function(results, status) {
            
            if (status === google.maps.GeocoderStatus.OK) {
                
                console.log(results[0].geometry.location);
                
                var marker = new google.maps.Marker({
                    map: that.map,
                    position: results[0].geometry.location
                });
            } else {
                console.log(status);
            }
          
        });
  },
   render: function() {
       
       var height = {
            height: this.state.mapHeight !== undefined ? this.offsetTop  + "px" : 0
       };
       
       return (
            <div className="result-container full-size">
                <div className="container-fluid full-size">
                    <div className="row full-size">
                        <div className="col-md-6">
                            <If test={this.props.data.length > 0}>
                                <div className="container-fluid">
                                    <div className="row card-container">
                                    
                                    { this.props.data.map(function(val, i) {
                                        return <Result key={i} data={val}/>
                                    }) }
                                    
                                    </div>
                                </div>
                            </If>
                            { this.props.data.length==0 ? <div className="no-result">No results</div> : false }
                        </div>
                        <div className="col-md-6 map-container" style={ height }>
                            <div ref="map" id="map-container" style={ height }></div>
                        </div>
                    </div>
                </div>
            </div>
        )
   }
});

//Entry
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
                <div className="full-size">
                    <div id="splash-content" className="horizontal-middle full-size">
                        <div className="splash-title">
                            <h2>Hi there </h2>
                            <h2>The time is currently {this.state.dateString} in Victoria</h2>
                        </div>
                        <div className="full-size">
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
            
            this.refs.searchinput.value = "";
        }
    },
    render: function() {
        return (
         <div className="search-box">
         { this.props.promptValue === undefined ?
            <div>
                <div className="search-title">
                {this.props.promptType}
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
            <h2>{this.props.promptType} {this.props.promptValue}</h2>
         }
        </div>
        )
    }
});

var EatContext = React.createClass({
    
    getInitialState: function() {
      
        return {
            foodType: undefined,
            budget: undefined,
            answers: [],
            results: undefined,
            errorMsg: undefined
        }  
    },
    componentWillMount: function() {
        
        this.props.updateSuggestions(Expected_food_input, this.setFoodType);
    },
    setFoodType: function(prompt, nuValue) {
       
        var found = false;
       
        for(var i=0; i<Expected_food_input.length; i++){
            
            //if the input is not equal
              if (nuValue == Expected_food_input[i]) {
                    found = true;
                    break;
              }
        }
        
        if(found) {
            
            this.state.answers.push({text:"I'm looking for", value: nuValue});
            this.setState({foodType: nuValue, errorMsg: undefined});
            this.props.updateSuggestions(Expected_budget_input, this.setBudget);
            
        } else {
            
            this.setState({errorMsg: "Failed to find " + nuValue + " cuisine in the database"});
        }
    },
    setBudget: function(prompt, nuValue) {
        
        nuValue = nuValue.replace(/^\$/, "");

        var pattern = /^\d+(.\d{1,2})?$/;
        
        if(nuValue.length === 0 || pattern.test(parseInt(nuValue)) === false) {
             this.setState({errorMsg: "Not a valid budget. Try a monetary value."});
        }
        else {
            this.state.answers.push({text:"My budget is", value: "$" + parseInt(nuValue)});
            
            this.setState({budget: nuValue, errorMsg: undefined}, function() {
                this.gatherData();
                this.props.updateSuggestions([]);
            });
        }    
    },
    gatherData: function() {
        
        var res = [];
        
        for(var i = 0; i < Restaurants.length; i++) {
            
            if(this.state.foodType.toLowerCase() === Restaurants[i].type.toLowerCase() && 
                this.state.budget <= Restaurants[i].budget) {
                    
                res.push(Restaurants[i]);
            }
        }
        
        this.setState({results: res});
        
        
    },
    render: function() {
        return (
            <div className="full-size">
      
            { this.state.answers.map(function(val, i) {
                
                   return <SearchPrompt key={i} promptType={val.text} promptValue={val.value}/>
     
                }.bind(this))
            }
            
            <If test={this.state.foodType===undefined || this.state.budget === undefined}>
                 { this.state.foodType === undefined ?
                    <SearchPrompt promptType="What kind of food?" promptFunctor={this.setFoodType}/>
                    :
                    <SearchPrompt promptType="What's your budget?" promptFunctor={this.setBudget} />
                }
            </If>
            
            <If test={this.state.results!==undefined}>
                <ResultView data={this.state.results}/>
            </If>
           
            <If test={this.state.errorMsg !== undefined}>
                <div className="sorry-Message">{this.state.errorMsg}</div>
            </If>
           
            </div>
        )
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

var Suggestion = React.createClass({
    
    doSuggestion: function() {
        this.props.owner.applySuggestion(this.props.text);
    },
    render: function() {
        return (
            <li className="col-md-2">
                <div className="suggestion-value suggestion-button btn btn-default" onClick={this.doSuggestion}>
                    {this.props.text}
                </div>
            </li>
            )
    } 
});

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
        
        this.setState({selections: [{type: "activity"}]});
        
        this.updateSuggestions(Expected_context_input, this.setContext);
        
    },
    setContext: function(prompt, context) {
      
        var lowerContext = context.toLowerCase();
      
        if(ContextMap[lowerContext] !== undefined) {
            
            //prompt.setState({value: lowerContext});
            
            this.setState({context: ContextMap[lowerContext], contextString: lowerContext});
        }
        else
        {
            this.setState({errorMsg: "Sorry I couldn't understand that. Please try again."});
        }
    },
    updateSuggestions: function(data, suggestCallback) {
        
        this.suggestCallback = suggestCallback;
        
        var suggests = [];
        
        for(var i = 0; i < Math.min(6, data.length); i++) {
            suggests.push(data[i]);
        }
        
        this.setState({suggestions: suggests});  
    },
    applySuggestion: function(suggest) {
      
      this.suggestCallback(undefined, suggest);
    },
    resetContext: function() {
        
        this.updateSuggestions(Expected_context_input, this.setContext);
        
        console.log('removing');
        this.setState({context: undefined, contextString: undefined, errorMsg: ""}, function() { console.log('remove');});
    },
    render: function() {
        
        var error = this.state.errorMsg.length !== 0 ?  <div>
                                        {this.state.errorMsg}
                                    </div> : false;
        
        return (
            <div id="search-page" className="full-size">
                <div id="search-wrapper" className="full-size">
                    <div className="btn btn-default cancel-search"><span className="glyphicon glyphicon-remove-circle" onClick={this.resetContext}></span></div>
                    <div className="inner-middle full-size">
                        <div className="horizontal-middle full-size">
                            
                            { this.state.context === undefined ?
                                <div className="search-prompt-container full-size">
                                    <SearchPrompt promptType="I want to..." promptFunctor={this.setContext}/>
                                     <div>
                                    {error}
                                    </div>
                                </div>
                                :
                                <div className="search-prompt-container full-size">
                                    <div className="search-box">
                                        <div className="search-title">
                                        I want to { this.state.contextString }
                                        </div>
                                     </div>
                                     { React.createElement(this.state.context, {updateSuggestions: this.updateSuggestions}) }
                                </div>
                            }
                            
                            <If test={ this.state.suggestions.length }>
                                <div className="search-suggestions">
                                    <div className="search-suggestions-title">
                                    Here are some suggestions
                                    </div>
                                    <div className="container-fluid">
                                        <ul className="row suggestions-list">
                                            
                                            { this.state.suggestions.map(function(text, i) {
                                               return <Suggestion text={text} owner={this} key={i}/>
                                            }.bind(this)) }
    
                                        </ul>
                                    </div>
                                </div>
                            </If>
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