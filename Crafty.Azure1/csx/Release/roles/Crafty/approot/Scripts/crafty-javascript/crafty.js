




/** @jsx React.DOM */

//Create a simple single page application that allows users to design beer recipes . At a bare minimum, the UI should display a search box for //ingredients (eg. hops, grain, extract) and allow for the addition of multiple different ingredients.  While saving is not a necessary mechanic to //implement, assume that the ultimate output of this application is a saved recipe. UX and UI count!
var ingredientsList = [];
var onHopsPage = false;

var Header = React.createClass({
    displayName: 'Header',
    render: function () {
        return React.DOM.div({ className: "jumbotron" },
    React.DOM.div({ class: "container0" },
        React.DOM.h1(null, "Crafty"),
        React.DOM.img({ src: "https://cdn3.iconfinder.com/data/icons/line/36/growler-128.png" }),
        React.DOM.p(null, "The web-based beer designer.")
    )
)
    }
});

var Footer = React.createClass({
    displayName: 'Footer',

    render: function () {

        return React.DOM.footer(null)

    }
})

var NextButton = React.createClass({
    displayName: 'NextButton',
    render: function () {
        return React.DOM.div(null,
        //React.DOM.h6(null, "Click here to proceed"),
        React.DOM.button({ id: "nextButton", className: "btn btn-primary btn-md" }, "Next")
        )
    }
})

var FinishButton = React.createClass({
    displayName: 'FinishButton',
    render: function () {
        return React.DOM.div(null,
        //React.DOM.h6(null, "Click to Finish"),
        React.DOM.button({ id: "finishButton", className: "btn btn-success btn-md" }, "Finish")
        )
    }
})

var BackButton = React.createClass({
    displayName: 'BackButton',
    render: function () {
        return React.DOM.div(null,
        //React.DOM.h6(null, "Back"),
        React.DOM.button({ id: "backButton", className: "btn btn-primary btn-md" }, "Back")
        )
    }
})


var ExtractSearch = React.createClass({
    displayName: 'ExtractSearch',

    getInitialState: function () {
        return { searchString: '' };
    },

    handleChange: function (e) {

        this.setState({ searchString: e.target.value });
    },

    render: function () {

        var extracts = this.props.items,
            searchString = this.state.searchString.trim().toLowerCase(); { }


        if (searchString.length > 0) {

            //Searching. Filter the results.

            extracts = extracts.filter(function (l) {
                return l.ExtractName.toLowerCase().match(searchString);
            });

        }

        return React.DOM.div({ className: "container1" },
                        React.DOM.div({ className: "row" },
                            React.DOM.div({ className: "col-lg-4" },
                            React.DOM.h6(null, "Choose Extracts"),
                                React.DOM.select({ id: "extractPicker", className: "selectpicker show-tick show-menu-arrow", 'data-width': "300px", 'data-style': "btn-primary", 'data-live-search': "true", multiple: true, title: "Choose One or More Extracts" },

                                     extracts.map(function (l) {
                                         return React.DOM.option(null, l.ExtractName)
                                     })

                                ),
                                React.DOM.br(null)
                            )

                        )
                  );
    }
});

var HopsSearch = React.createClass({
    displayName: 'HopsSearch',

    getInitialState: function () {
        return { searchString: '' };
    },

    handleChange: function (e) {

        this.setState({ searchString: e.target.value });
    },

    render: function () {

        var hops = this.props.items,
            searchString = this.state.searchString.trim().toLowerCase(); { }


        if (searchString.length > 0) {

            hops = hops.filter(function (l) {
                return l.HopsName.toLowerCase().match(searchString);
            });

        }

        return React.DOM.div({ className: "container2" },
                        React.DOM.div({ className: "row" },
                            React.DOM.div({ className: "col-lg-4" },
                            React.DOM.h6(null, "Choose Hops"),
                                React.DOM.select({ id: "hopsPicker", className: "selectpicker show-tick show-menu-arrow", 'data-width': "300px", 'data-style': "btn-primary", 'data-live-search': "true", multiple: true, title: "Choose One or More Hops" },

                                     hops.map(function (l) {
                                         return React.DOM.option(null, l.HopsName)
                                     })

                                ),
                                React.DOM.br(null)
                            )

                        )
                  );
    }
});

var extractsUri = "http://craftycodechallenge.cloudapp.net/api/Extracts";
var extracts = new Array();

$.ajax({
    type: "GET",
    crossOrigin: true,
    url: extractsUri,
    async: false,
    dataType: "json",
    success: function (data) {
        $.each(data.value, function (key, value) {
            extracts.push(value);
        });

    }
});

var hopsUri = "http://craftycodechallenge.cloudapp.net/api/Hops";
var hops = new Array();

$.ajax({
    type: "GET",
    crossOrigin: true,
    url: hopsUri,
    async: false,
    dataType: "json",
    success: function (data) {
        $.each(data.value, function (key, value) {
            hops.push(value);
        });

    }
});

var Router = Backbone.Router.extend({
    routes: {
        "": "index",
        "extracts": "extracts",
        "hops": "hops"
    },
    index: function () {
        $('#finishButton').hide();
        $('#backButton').hide();
        $('#nextButton').show();
        $('#successAlert').hide();
        $('#progress-text').text('Let\'s get started!');
        React.renderComponent(
        ExtractSearch({ items: extracts }),
        document.getElementById('extractsDropDown')
        );
        $('.selectpicker').selectpicker({
            style: 'btn-primary',
            size: 8
        });
        React.renderComponent(
        NextButton(null),
        document.getElementById('nextButton')
        );
    },
    extracts: function () {
        $('#finishButton').hide();
        $('div[name=hopsDropDown]').hide();
        $('div[name=extractsDropDown]').show();
        $('#backButton').hide();
        $('#nextButton').show();
        $('#successAlert').hide();
        $('.selectpicker').selectpicker({
            style: 'btn-primary',
            size: 8
        });
        React.renderComponent(
        NextButton(null),
        document.getElementById('nextButton')
        );


    },
    hops: function () {
        $('#nextButton').hide();
        $('div[name=extractsDropDown]').hide();
        $('div[name=hopsDropDown]').show();
        $('#finishButton').show();
        $('#backButton').show();
        $('#successAlert').hide();
        React.renderComponent(
        HopsSearch({ items: hops }),
        document.getElementById('hopsDropDown')
        );
        $('.selectpicker').selectpicker({
            style: 'btn-success',
            size: 8
        });
        React.renderComponent(
        FinishButton(null),
        document.getElementById('finishButton')
        );
        React.renderComponent(
        BackButton(null),
        document.getElementById('backButton')
        );
    }
});

new Router();

Backbone.history.start();

React.renderComponent(
    Header(null),
    document.getElementById('jumboHeader')
);

var ingredientsList = [];
var extractsSelected = false;
var hopsSelected = false;


$('selectPicker').ready(function () {
    $('#nextButton').click(function (e) {
        $('#progress-text').text('Half-way there...');
        $(".progress-bar").css('width', '50%');
        var stateArray = [];
        var selectedExtracts = ($('#extractPicker').val());
        var selectedHops = ($('#hopsPicker').val());
        window.location.href = '#hops';

        if (selectedExtracts != null || selectedExtracts == '') {
            stateArray.push(selectedExtracts);
            ingredientsList.push(selectedExtracts);
            document.getElementById('recipe').appendChild(makeExtractSubheader());
            document.getElementById('recipe').appendChild(makeUL(selectedExtracts, "extracts"));
            extractsSelected = true;
        }
        else {
            document.getElementById('recipe').appendChild(makeUL(selectedExtracts, "extracts"));
            if (extractsSelected == false) {
                e.preventDefault();
                $("#dialog").dialog("open");
                window.location.href = "#extracts";
            }
        }
    });
});

$('selectPicker').ready(function () {
    $('#finishButton').click(function (e) {
        $('#progress-text').text('Tight work...');
        $(".progress-bar").css('width', '100%');
        $('#successAlert').show();
        var stateArray = [];
        var selectedExtracts = ($('#extractPicker').val());
        var selectedHops = ($('#hopsPicker').val());
        window.location.href = '#hops';

        if (selectedHops != null) {
            ingredientsList.push(selectedHops);
            document.getElementById('recipe').appendChild(makeHopsSubheader());
            document.getElementById('recipe').appendChild(makeUL(selectedHops, "hops"));
            e.preventDefault();
            $("#successDialog").dialog("open");
            $('#finishButton').fadeOut();
            $('#wizardPane').fadeOut();
            hopsSelected = true;
            onHopsPage = true;
        }
        else {
            if (hopsSelected == false && extractsSelected == true && !onHopsPage) {
                e.preventDefault();
                $("#hopsDialog").dialog("open");

            }
        }
    });
});

function makeUL(array, type) {

    if (type == "extracts") {
        $('#extract-ul').remove();
        $('#extract-li').remove();
    }
    else {
        $('#hops-ul').remove();
        $('#hops-li').remove();
    }

    var list = document.createElement('ul');

    if (type == "extracts") {
        
        list.id = 'extract-ul';
    }
    else {
        list.id = 'hops-ul'
    }


    for (var i = 0; i < array.length; i++) {
        // Create the list item:
        
        var item = document.createElement('li');
        if (type == "extracts") {
            item.id = 'extract-li';
        }
        else {
            item.id = 'hops-li';
        }

        // Set its contents:
        item.appendChild(document.createTextNode(array[i]));

        // Add it to the list:
        list.appendChild(item);
    }

    // Finally, return the constructed list:
    return list;
}

function makeExtractSubheader() {
    $('H4').remove();
    $('#extract-ul').remove();
    var subheader = document.createElement('H4');
    subheader.appendChild(document.createTextNode("Your extracts are: "));
    return subheader;
};

function makeHopsSubheader() {
    $('#hops-ul').remove();
    var subheader = document.createElement('H4');
    subheader.appendChild(document.createTextNode("Your hops are: "));
    return subheader;
};

$("#dialog").dialog({
    autoOpen: false,
    modal: true,
    buttons: {
        "Okay, I got it!": function () {
            $(this).dialog("close");
        }
    }
});

$("#hopsDialog").dialog({
    autoOpen: false,
    modal: true,
    buttons: {
        "Okay, I got it!": function () {
            $(this).dialog("close");
        }
    }
});

//$("#successDialog").dialog({
//    autoOpen: false,
//    modal: true,
//    buttons: {
//        "Hope it tastes good!! Now, let's brew this thing...": function () {
//            $(this).dialog("close");
//        }
//    }
//});

$('#backButton').click(function (e) {
    window.location.href = '#extracts';
    $('#progress-text').text('Let\'s get started!');
    $(".progress-bar").css('width', '10%');
});


$(document).ready(function () {
    $("li > a").css("color", "#2a9fd6")
});

$('#restartLink').click(function () {
    window.location.href = '../';
});