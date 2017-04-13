/** @jsx React.DOM */

//Create a simple single page application that allows users to design beer recipes . At a bare minimum, the UI should display a search box for //ingredients (eg. hops, grain, extract) and allow for the addition of multiple different ingredients.  While saving is not a necessary mechanic to //implement, assume that the ultimate output of this application is a saved recipe. UX and UI count!


var Header = React.createClass({
    displayName: 'Header',
    render: function () {
        return React.DOM.div({ className: "jumbotron" },
    React.DOM.div({ class: "container" },
        React.DOM.h1(null, "Crafty"),
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
        React.DOM.h6(null, "Click here to proceed"),
        React.DOM.button({ id: "nextButton", className: "btn btn-success btn-md" }, "Next")
        )
    }
})

var SearchExample = React.createClass({
    displayName: 'SearchExample',

    getInitialState: function () {
        return { searchString: '' };
    },

    handleChange: function (e) {

        // If you comment out this line, the text box will not change its value.
        // This is because in React, an input cannot change independently of the value
        // that was assigned to it. In our case this is this.state.searchString.

        this.setState({ searchString: e.target.value });
    },

    render: function () {

        var extracts = this.props.items,
            searchString = this.state.searchString.trim().toLowerCase(); { }


        if (searchString.length > 0) {

            // We are searching. Filter the results.

            extracts = extracts.filter(function (l) {
                return l.name.toLowerCase().match(searchString);
            });

        }

        return React.DOM.div({ className: "container" },
                        React.DOM.div({ className: "row" },
                            React.DOM.div({ className: "col-lg-4" },
                            React.DOM.h6(null, "Choose Extracts"),
                                React.DOM.select({ id: "extractPicker", className: "selectpicker show-tick show-menu-arrow", 'data-width': "300px", 'data-style': "btn-primary", 'data-live-search': "true", multiple: true, title: "Choose One or More Extracts" },

                                     extracts.map(function (l) {
                                         return React.DOM.option(null, l.name)
                                     })

                                ),
                                React.DOM.br(null)
                            )

                        )
                  );
    }
});


var extracts = [
{ name: 'Acid Malt' },
{ name: 'Amber Dry Extract' },
{ name: 'Amber Liquid Extract' },
{ name: 'Amber Malt' },
{ name: 'Aromatic Malt' },
{ name: 'Barley Hulls' },
{ name: 'Barley' },
{ name: 'Biscuit Malt' },
{ name: 'Black (Patent) Malt' },
{ name: 'Black Barley (Stout)' },
{ name: 'Brown Malt' },
{ name: 'Brown Sugar' },
{ name: 'Brumalt' },
{ name: 'Candi Sugar' },
{ name: 'Cane (Beet) Sugar' },
{ name: 'Cara-Pils/Dextrine' },
{ name: 'Caraamber' },
{ name: 'Carafoam' },
{ name: 'Caramel/Crystal Malt  10L' },
{ name: 'Caramel/Crystal Malt  20L' },
{ name: 'Caramel/Crystal Malt  30L' },
{ name: 'Caramel/Crystal Malt  40L' },
{ name: 'Caramel/Crystal Malt  60L' },
{ name: 'Caramel/Crystal Malt  80L' },
{ name: 'Caramel/Crystal Malt  120L' },
{ name: 'Caramunich Malt' },
{ name: 'Carared' },
{ name: 'Caravienne Malt' },
{ name: 'Chocolate Malt' },
{ name: 'Corn Sugar (Dextrose)' },
{ name: 'Corn Syrup' },
{ name: 'Corn' },
{ name: 'Dark Dry Extract' },
{ name: 'Dark Liquid Extract' },
{ name: 'Dememera Sugar' },
{ name: 'Extra Light Dry Extract' },
{ name: 'Grits' },
{ name: 'Honey' },
{ name: 'Invert Sugar' },
{ name: 'Light Dry Extract' },
{ name: 'Maple Syrup' },
{ name: 'Melanoiden Malt' },
{ name: 'Mild Malt' },
{ name: 'Milk Sugar (Lactose)' },
{ name: 'Molasses' },
{ name: 'Munich Malt' },
{ name: 'Munich Malt – 10L' },
{ name: 'Munich Malt – 20L' },
{ name: 'Oats' },
{ name: 'Oats' },
{ name: 'Pale Liquid Extract' },
{ name: 'Pale Malt (2 Row) Bel' },
{ name: 'Pale Malt (2 Row) UK' },
{ name: 'Pale Malt (2 Row) US' },
{ name: 'Pale Malt (6 Row) US' },
{ name: 'Peat Smoked Malt' },
{ name: 'Pilsner (2 Row) Bel' },
{ name: 'Pilsner (2 Row) Ger' },
{ name: 'Pilsner (2 Row) UK' },
{ name: 'Pilsner Liquid Extract' },
{ name: 'Rice Extract Syrup' },
{ name: 'Rice Hulls' },
{ name: 'Rice' },
{ name: 'Roasted Barley' },
{ name: 'Rye Malt' },
{ name: 'Rye' },
{ name: 'Smoked Malt' },
{ name: 'Special B Malt' },
{ name: 'Special Roast' },
{ name: 'Sugar' },
{ name: 'Toasted Malt' },
{ name: 'Turbinado' },
{ name: 'Victory Malt' },
{ name: 'Vienna Malt' },
{ name: 'Wheat Dry Extract' },
{ name: 'Wheat Liquid Extract' },
{ name: 'Wheat Malt' },
{ name: 'Wheat' },
{ name: 'White Wheat Malt' },

];

// Render the SearchExample component on the page


React.renderComponent(
    Header(null),
    document.getElementById('jumboHeader')
);


React.renderComponent(
    SearchExample({ items: extracts }),
    document.getElementById('filteredDropDown')
);

React.renderComponent(
    NextButton(null),
    document.getElementById('nextButton')
);

$(document).ready(function () {
    $('.selectpicker').selectpicker({
        style: 'btn-primary',
        size: 8
    });
});

$(document).ready(function () {
    $('#nextButton').click(function () {
        var selectedExtractIndex = ($('#extractPicker').val());
        alert(selectedExtractIndex);
    });
});
