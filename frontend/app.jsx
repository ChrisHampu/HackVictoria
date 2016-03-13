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
        type: ["asian", "vietnamese"],
        budget: 10
    },
    {
        name: "East Garden Restaurant(东篱江湖菜)",
        location:"2888 Belmont Ave",
        type: ["asian", "chinese"],
        budget: 14
        
    },
    {
        name: "Sun Wah Chinese Restaurant",
        location:"1515 Cook St, Victoria, BC V8T 5E5",
        type: ["asian", "chinese"],
        budget: 14
    },
    {
        name: "Sun Wah Chinese Restaurant",
        location:"1515 Cook St, Victoria, BC V8T 5E5",
        type: ["asian", "chinese"],
        budget: 14

    }
];

var WatchData = [
    {
        name: "Belfry Theatre",
        location: "1291 Gladstone Ave, Victoria, BC V8T 1G5",
        type: "plays"
    },
    {
        name: "Theatre Inconnu",
        location: "1923 Fernwood Rd, Victoria, BC V8T 2Y6",
        type: "plays"
    },
    {
        name: "Cineplex Odeon Victoria Cinemas",
        location: "780 Yates St, Victoria, BC V8W 1L4",
        type: "cineplex"
    },
    {
        name: "Vic Theatre",
        location: "808 Douglas St, Victoria, BC V8W 2B6",
        type: "indie movies"
    },
    {
        name: "IMAX Victoria",
        location: "675 Belleville St, Victoria, BC V8W 1A1",
        type: "imax"
    }
];

var DrinkData = [
    {
        name: "Darcy's Pub",
        location: "1127 Wharf St, Victoria, BC V8W 1T4",
        type: "pubs"
    },
    {
        name: "Yates Street Taphouse - Pub",
        location: "759 Yates St, Victoria, BC V8W 1L6",
        type: "pubs"     
    },
        {
        name: "Swans Brewpub",
        location: "1601 Store St, Victoria, BC V8W 1N6",
        type: "pubs"     
    },
    {
        name: "Bard & Banker",
        location: "1022 Government St, Victoria, BC V8W 1X7",
        type: "pubs"     
    },
    {
        name: "Lucky Bar",
        location: "517 Yates St, Victoria, BC V8W 1K7",
        type: "bars"     
    },
    {
        name: "Tapa Bar",
        location: "620 Trounce Alley, Victoria, BC V8W 1K3",
        type: "bars"     
    },
    {
        name: "Vista 18 Westcoast Grill & Wine Bar",
        location: "740 Burdett Ave, Victoria, BC V8W 1B2",
        type: "bars"     
    },
    {
        name: "Paparazzi Nightclub",
        location: "642 Johnson St, Victoria, BC V8W 1M6",
        type: "clubs"     
    },
    {
        name: "Sugar Nightclub",
        location: "858 Yates St, Victoria, BC V8W 1L8",
        type: "clubs"     
    },
    {
        name: "DéjàVous Nightclub & Lounge",
        location: "751 View St, Victoria, BC V8W",
        type: "clubs"     
    }
];

var SingData = [
    {
        name: "Victoria Karaoke Lotteriacafe",
        location: "648 Yates St, Victoria, BC V8W 1L3",
        type: "karaoke"     
    },
    {
        name: "Primetime Sound DJ & Karaoke",
        location: "70 Pilot St, Victoria, BC V8V 2A4",
        type: "karaoke"     
    },
];

var SportData = [
    {
        name: "Beacon Hill Tennis Courts",
        location: "Nursery Road, Victoria, BC",
        type: "tennis"     
    },
    {
        name: "Stadacona Tennis Courts",
        location: "Pandora Ave, Victoria, BC V8R 3Y7",
        type: "tennis"     
    },
    {
        name: "McKinnon Gym",
        location: "Gabriola Rd, Saanich, BC V8P 3Y3",
        type: "tennis"     
    },
    {
        name: "Cedar Hill Recreation Centre",
        location: "3220 Cedar Hill Rd, Victoria, BC V8P 3Y3",
        type: "tennis"     
    },
    {
        name: "Victoria Cougars Junior Hockey Club",
        location: "1151 Esquimalt Rd, Victoria, BC V9A 3N6",
        type: "hockey"     
    },{
        name: "Save On Foods Memorial Centre",
        location: "1925 Blanshard St, Victoria, BC V8T 4J2",
        type: "hockey"     
    },
    {
        name: "Pearkes Recreation Centre",
        location: "Tillicum Community School, 3100 Tillicum Rd, Victoria, BC V9A 6T2",
        type: "skating"     
    },
];

var GameData = [
    {
        name: "Interactivity Board Game Cafe",
        location: "723 Yates St, Victoria, BC V8W 1L4",
        type: "board games"  
    },
    {
        name: "Peacock Billiards",
        location: "1175 Douglas St, Victoria, BC V8W 2E2",
        type: "table games"  
    }
];

// Games at peacocks billiards
var Expected_food_input = ["chinese", "indian", "asian", "thai", "japanese", 
                            "western", "italian", "greek", "malaysian"]
                            
var Expected_budget_input = ['$5', '$10', '$15', '$20', '$25'];                           

var Expected_context_input = ['eat', 'play', 'sing', 'drink', 'watch'];

var Expected_play_input = ['sports', 'games'];

var Expected_game_input = ['board games', 'table games'];

var Expected_sports_input= ['tennis', 'hockey', 'skating']

var Expected_watch_input = ['plays', 'cineplex', 'imax', 'indie movies'];

var Expected_drink_input = ['club', 'pubs', 'bars'];

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
                <div id="restaurant-name">{this.props.data.name}</div>
                { typeof this.props.data.type === "array" || typeof this.props.data.type === "object"? 
                    this.props.data.type.map(function(type, i) {
                
                        return <li key={i} id="restaurant-type" className="type-inline">{type}</li>
     
                    })
                    :
                    <div id="restaurant-type">{this.props.data.type}</div>
                }
                <div>{this.props.data.location}</div>
                <If test={this.props.data.budget !== undefined}>
                    <div>${this.props.data.budget} Budget</div>
                </If>
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
   componentDidMount: function() {
       
       this.infoWindow = new google.maps.InfoWindow();
       
       this.updateMapHeight(); 
       
        this.map = new google.maps.Map(ReactDOM.findDOMNode(this.refs.map), {
            center: {lat: 48.448398, lng: -123.338847}, 
            zoom: 12
        });

        var that = this;

        window.addEventListener('resize', this.updateMapHeight);
        
        for(var i = 0; i < this.props.data.length; i++) {
            
            if(typeof this.props.data.type === "array" || typeof this.props.data.type === "object") {
                
                for(var x = 0; x < this.props.data[i].location.length; x++) {
                    this.addGeocodedMarker(this.props.data[i].location[i]);
                }
            }
            else
                this.addGeocodedMarker(this.props.data[i].location, this.props.data[i].name);
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
  addGeocodedMarker: function(address, name) {
      
      var geocoder = new google.maps.Geocoder();
      var that = this;
      
        geocoder.geocode({'address': address}, function(results, status) {
            
            if (status === google.maps.GeocoderStatus.OK) {
                
                var marker = new google.maps.Marker({
                    map: that.map,
                    position: results[0].geometry.location
                });
                
                marker.addListener('click', function() {
                    that.map.setZoom(16);
                    that.map.setCenter(marker.getPosition());
                 });
                 
                 google.maps.event.addListener(marker, 'click', function() {
                    that.infoWindow.setContent("<div><h3>" + name + "</h3></div><h4>" + address + "</h4>");
                    that.infoWindow.open(that.map, marker);
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
    componentDidMount: function() {
        
        if(this.refs.searchinput !== undefined)
            this.refs.searchinput.focus();
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
            
            if(typeof Restaurants[i].type === "array" || typeof Restaurants[i].type === "object") {
                
                if(this.state.budget < Restaurants[i].budget)
                    continue;
                
                for(var x = 0; x < Restaurants[i].type.length; x++) {
                    
                   if(this.state.foodType.toLowerCase() === Restaurants[i].type[x].toLowerCase()) {
                    
                        res.push(Restaurants[i]);
                        break;   
                   }
                }
            }
            else {
                if(this.state.foodType.toLowerCase() === Restaurants[i].type.toLowerCase() && 
                    this.state.budget >= Restaurants[i].budget) {
                        
                    res.push(Restaurants[i]);
                }
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
    
    getInitialState: function() {
        
         return {
            playType: undefined,
            sportType: undefined,
            gameType: undefined,
            answers: [],
            results: undefined,
            errorMsg: undefined
        }
    },
    
    componentWillMount: function() {
        
        this.props.updateSuggestions(Expected_play_input, this.setPlayType);
    },
    setPlayType: function(prompt, nuValue) {
       
        var found = false;
       
        for(var i=0; i<Expected_play_input.length; i++){
            
            //if the input is not equal
              if (nuValue == Expected_play_input[i]) {
                    found = true;
                    break;
              }
        }
        
        if(found) {
            
            this.state.answers.push({text:"I'm looking for", value: nuValue});
            
            this.setState({playType: nuValue, errorMsg: undefined});
            
            if(nuValue === "games") {
                this.props.updateSuggestions(Expected_game_input, this.setGameType);
            } else {
                this.props.updateSuggestions(Expected_sports_input, this.setSportType);
            }
        } 
        
        else {
            this.setState({errorMsg: "Failed to find " + nuValue + " in the games database"});
        }
    },
    
    setGameType: function(prompt, nuValue) {
        
        var found = false;
       
        for(var i=0; i<Expected_game_input.length; i++){
            
            //if the input is not equal
              if (nuValue == Expected_game_input[i]) {
                    found = true;
                    break;
              }
        }
        
        if(found) {
            
            this.state.answers.push({text:"I enjoy playing", value: nuValue});
            
            this.setState({gameType: nuValue, errorMsg: undefined}, function() {
                
                this.gatherData();
                this.props.updateSuggestions([]);
            });
            
            
        } 
        
        else {
            this.setState({errorMsg: "Failed to find " + nuValue + " in the games database"});
        }
    },
    
    setSportType: function(prompt, nuValue) {
        
        var found = false;
       
        for(var i=0; i<Expected_sports_input.length; i++){
            
            //if the input is not equal
              if (nuValue == Expected_sports_input[i]) {
                    found = true;
                    break;
              }
        }
        
        if(found) {
            
            this.state.answers.push({text: nuValue==="skating" ? "I enjoy" : "I enjoy playing", value: nuValue});
            
            this.setState({sportType: nuValue, errorMsg: undefined}, function() {
                
                this.gatherData();
                this.props.updateSuggestions([]);
            });
            
            
        } 
        
        else {
            this.setState({errorMsg: "Failed to find " + nuValue + " in the games database"});
        }
    },
    
    gatherData: function() {
        
        var res = [];
         
        if(this.state.sportType !== undefined) {
            for(var i = 0; i < SportData.length; i++) {
            
                if(this.state.sportType.toLowerCase() === SportData[i].type.toLowerCase()) {
                        
                    res.push(SportData[i]);
                }
            }
        } else {
            for(var i = 0; i < GameData.length; i++) {
            
                if(this.state.gameType.toLowerCase() === GameData[i].type.toLowerCase()) {
                        
                    res.push(GameData[i]);
                }
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
            
            <If test={this.state.playType===undefined}>
                { this.state.playType === undefined ?
                    <SearchPrompt promptType="What do you want to play?" promptFunctor={this.setPlayType}/>
                    : false
                }
            </If>
            
            <If test={this.state.playType==="games" && this.state.results===undefined}>
                <SearchPrompt promptType="What games do you like?" promptFunctor={this.setGameType}/>
            </If>
            
            <If test={this.state.playType==="sports" && this.state.results===undefined}>
                <SearchPrompt promptType="What sports do you like?" promptFunctor={this.setSportType}/>
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

var WatchContext = React.createClass({
    getInitialState: function() {
      
        return {
            watchType: undefined,
            answers: [],
            results: undefined,
            errorMsg: undefined
        }  
    },
    componentWillMount: function() {
        
        this.props.updateSuggestions(Expected_watch_input, this.setWatchType);
    },
    setWatchType: function(prompt, newValue) {
        var found = false;
       
        for(var i=0; i<Expected_watch_input.length; i++){
            
            //if the input is not equal
              if (newValue == Expected_watch_input[i]) {
                    found = true;
                    break;
              }
        }
        
        if(found) {
            
            this.state.answers.push({text:"I'm watching ", value: newValue});
            this.setState({watchType: newValue, errorMsg: undefined}, function() {
                this.gatherData();
                this.props.updateSuggestions([]);
            });
            
        } else {
            
            this.setState({errorMsg: "Failed to find " + nuValue + " viewings in database"});
        }
    },
    gatherData: function() {
        
        var res = [];
        
        for(var i = 0; i < WatchData.length; i++) {
            
            if(this.state.watchType.toLowerCase() === WatchData[i].type.toLowerCase()) {
                    
                res.push(WatchData[i]);
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
            
            <If test={this.state.watchType===undefined}>
                    <SearchPrompt promptType="What's your viewing pleasure?" promptFunctor={this.setWatchType}/>
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

var DrinkContext = React.createClass({
   getInitialState: function() {
      
        return {
            drinkType: undefined,
            answers: [],
            results: undefined,
            errorMsg: undefined
        }  
    },
    componentWillMount: function() {
        
        this.props.updateSuggestions(Expected_drink_input, this.setDrinkType);
    },
    setDrinkType: function(prompt, newValue) {
        var found = false;
       
        for(var i=0; i<Expected_drink_input.length; i++){
            
            //if the input is not equal
              if (newValue == Expected_drink_input[i]) {
                    found = true;
                    break;
              }
        }
        
        if(found) {
            
            this.state.answers.push({text:"I'm drinking at ", value: newValue});
            this.setState({drinkType: newValue, errorMsg: undefined}, function() {
                this.gatherData();
                this.props.updateSuggestions([]);
            });
            
        } else {
            
            this.setState({errorMsg: "Failed to find " + nuValue + " in drinks database"});
        }
    },
    gatherData: function() {
        
        var res = [];
        
        for(var i = 0; i < DrinkData.length; i++) {
            
            if(this.state.drinkType.toLowerCase() === DrinkData[i].type.toLowerCase()) {
                    
                res.push(DrinkData[i]);
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
            
            <If test={this.state.drinkType===undefined}>
                    <SearchPrompt promptType="What's your preferred atmosphere?" promptFunctor={this.setDrinkType}/>
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

var SingContext = React.createClass({
  getInitialState: function() {
      
        return {
            answers: [],
            results: undefined,
            errorMsg: undefined
        }  
    },
    componentWillMount: function() {
        
        this.props.updateSuggestions([]);
        
        this.state.answers.push({text:"I'm singing at ", value: ""});
        
        this.gatherData();
    },
    gatherData: function() {
        
        this.setState({results: SingData});
    },
    render: function() {
        return (
            <div className="full-size">
      
            { this.state.answers.map(function(val, i) {
                
                   return <SearchPrompt key={i} promptType={val.text} promptValue={val.value}/>
     
                }.bind(this))
            }
            
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
        
        this.setState({context: undefined, contextString: undefined, errorMsg: ""});
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