
      /** @jsx React.DOM */

//Create a simple single page application that allows users to design beer recipes . At a bare minimum, the UI should display a search box for //ingredients (eg. hops, grain, extract) and allow for the addition of multiple different ingredients.  While saving is not a necessary mechanic to //implement, assume that the ultimate output of this application is a saved recipe. UX and UI count!


var Header = React.createClass({
    render: function(){
        return <div className="jumbotron">
    <div class="container">
        <h1>Crafty</h1>
        <p>The web-based beer designer.</p>
    </div>
</div>
    }
});

var Footer = React.createClass({
  
    render: function(){
  
        return <footer></footer>  
  
    }
})

var NextButton = React.createClass({
    render: function(){
        return <div>
        <h6>Click here to proceed</h6>
        <button id="nextButton" className="btn btn-success btn-md">Next</button>
        </div>
    }
})

var SearchExample = React.createClass({

    getInitialState: function(){
        return { searchString: '' };
    },

    handleChange: function(e){

        // If you comment out this line, the text box will not change its value.
        // This is because in React, an input cannot change independently of the value
        // that was assigned to it. In our case this is this.state.searchString.

        this.setState({searchString:e.target.value});
    },

    render: function() {

        var extracts = this.props.items,
            searchString = this.state.searchString.trim().toLowerCase();{}


        if(searchString.length > 0){

            // We are searching. Filter the results.

            extracts = extracts.filter(function(l){
                return l.ExtractName.toLowerCase().match( searchString );
            });

        }

        return  <div className="container">
                        <div className="row">
                            <div className="col-lg-4">
                            <h6>Choose Extracts</h6>                                     
                                <select id="extractPicker" className="selectpicker show-tick show-menu-arrow" data-width="300px" data-style="btn-primary" data-live-search="true" multiple title="Choose One or More Extracts"> 

                                    { extracts.map(function(l){
                                        return <option>{l.ExtractName}</option>
                                    }) }

                                </select>
                                <br/>
                            </div>

                        </div>
                  </div>;
    }
});

var uri = "http://127.0.0.1:81/api/Extracts";
var extracts = new Array();

$.ajax({
    type: "GET",
    crossOrigin: true,
    url: uri,
    async: false,
    dataType: "json",
    success: function (data) {
        $.each(data.value, function (key, value) {
            extracts.push(value);
        });
        
    }
});
                                                                                                                                                             


// Render the SearchExample component on the page


React.renderComponent(
    <Header />,
    document.getElementById('jumboHeader')
);


React.renderComponent(
    <SearchExample items={ extracts } />,
    document.getElementById('filteredDropDown')
);

React.renderComponent(
    <NextButton />,
    document.getElementById('nextButton')
);

$(document).ready(function() {
    $('.selectpicker').selectpicker({
        style: 'btn-primary',
        size: 8
    });
});

$(document).ready(function() {
    $('#nextButton').click(function(){
        var selectedExtractIndex = ($('#extractPicker').val());
        alert(selectedExtractIndex);
    }); 
});
